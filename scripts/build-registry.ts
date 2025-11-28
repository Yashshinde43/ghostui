import { registry } from "../registry";
import { promises as fs } from "fs";
import type { z } from "zod";
import type { registryItemFileSchema } from "../registry/schema";
import path from "path";

const REGISTRY_BASE_PATH = process.cwd();
const PUBLIC_FOLDER_BASE_PATH = "public/r";

/**bun run ./scripts/build-registry.ts
 * 
 *
 */
type File = z.infer<typeof registryItemFileSchema>;

async function writeFileRecursive(filePath: string, data: string) {
    const dir = path.dirname(filePath);

    try {
        await fs.mkdir(dir, { recursive: true });

        await fs.writeFile(filePath, data, "utf-8");
        console.log(`File written to ${filePath}`);
    } catch (error) {
        console.error(`Error writing file ${filePath}`);
        console.error(error);
    }
}

/**
 * Converts @/ imports to relative paths based on file location
 * @param content - The file content with @/ imports
 * @param filePath - The normalized file path (e.g., "/src/components/ghostui/ai-input/ai-input-02.tsx")
 * @returns Content with @/ imports replaced with relative paths
 */
function convertImportsToRelative(content: string, filePath: string): string {
    // Normalize path: remove leading/trailing slashes and split
    const pathParts = filePath.split('/').filter(Boolean);
    const srcIndex = pathParts.indexOf('src');
    
    // If no 'src' found, return content as-is
    if (srcIndex === -1) return content;
    
    // Calculate depth: number of directories from file to 'src' directory
    // Example: /src/components/ghostui/ai-input/ai-input-02.tsx
    // pathParts: ['src', 'components', 'ghostui', 'ai-input', 'ai-input-02.tsx']
    // srcIndex: 0, depth = pathParts.length - srcIndex - 2 = 5 - 0 - 2 = 3
    // So we need 3 levels up: ../../../ to get to src root
    const depth = pathParts.length - srcIndex - 2; // -2 for 'src' itself and the filename
    
    if (depth < 0) return content;
    
    const relativePrefix = '../'.repeat(depth);
    
    // Replace @/ imports in various formats
    // Match patterns like:
    // - import ... from "@/path/to/file"
    // - import "@/path/to/file"
    // - from "@/path/to/file"
    // - require("@/path/to/file")
    return content.replace(
        /(["'])@\/([^"']+)(["'])/g,
        (match, quote1, importPath, quote2) => {
            // Don't replace if it's already a relative path or external package
            if (importPath.startsWith('.') || importPath.startsWith('/')) {
                return match;
            }
            // Convert @/path to relative path
            return `${quote1}${relativePrefix}${importPath}${quote2}`;
        }
    );
}

const getComponentFiles = async (files: File[], registryType: string) => {
    const filesArrayPromises = (files ?? []).map(async (file) => {
        if (typeof file === "string") {
            const normalizedPath = file.startsWith("/") ? file : `/${file}`;
            const filePath = path.join(REGISTRY_BASE_PATH, normalizedPath);
            let fileContent = await fs.readFile(filePath, "utf-8");
            
            // Convert @/ imports to relative paths
            fileContent = convertImportsToRelative(fileContent, normalizedPath);
            
            const fileName = normalizedPath.split('/').pop() || '';
            
            return {
                type: registryType,
                content: fileContent,
                path: normalizedPath,
                target: `/components/ghostui/${fileName}`,
            };
        }
        const normalizedPath = file.path.startsWith("/")
            ? file.path
            : `/${file.path}`;
        const filePath = path.join(REGISTRY_BASE_PATH, normalizedPath);
        let fileContent = await fs.readFile(filePath, "utf-8");
        
        // Convert @/ imports to relative paths
        fileContent = convertImportsToRelative(fileContent, normalizedPath);
        
        const fileName = normalizedPath.split('/').pop() || '';
        
        const getTargetPath = (type: string) => {
            switch (type) {
                case "registry:hook":
                    return `/hooks/${fileName}`;
                case "registry:lib":
                    return `/lib/${fileName}`;
                case "registry:block":
                    return `/blocks/${fileName}`;
                default:
                    return `/components/ghostui/${fileName}`;
            }
        };
        
        const fileType = typeof file === 'string' ? registryType : (file.type || registryType);
        
        return {
            type: fileType,
            content: fileContent,
            path: normalizedPath,
            target: typeof file === 'string' ? getTargetPath(registryType) : (file.target || getTargetPath(fileType)),
        };
    });

    const filesArray = await Promise.all(filesArrayPromises);
    return filesArray;
};

const main = async () => {
    for (let i = 0; i < registry.length; i++) {
        const component = registry[i];
        const files = component.files;
        if (!files) throw new Error("No files found for component");

        const filesArray = await getComponentFiles(files, component.type);

        const json = JSON.stringify(
            {
                ...component,
                files: filesArray,
            },
            null,
            2
        );
        const jsonPath = `${PUBLIC_FOLDER_BASE_PATH}/${component.name}.json`;
        await writeFileRecursive(jsonPath, json);
        console.log(json);
    }
};

main()
    .then(() => {
        console.log("done");
    })
    .catch((err) => {
        console.error(err);
    });