import { Registry } from "./schema";

export const component: Registry = [
    // AI Input Components
    {
        name: "ai-input-01",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "src/components/ghostui/ai-input/ai-input-01.tsx",
                type: "registry:component",
            },
            {
                path: "src/hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "ai-input-02",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "src/components/ghostui/ai-input/ai-input-02.tsx",
                type: "registry:component",
            },
            {
                path: "src/hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "ai-input-03",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "src/components/ghostui/ai-input/ai-input-03.tsx",
                type: "registry:component",
            },
            {
                path: "src/hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    // Button Components
    {
        name: "btn-01",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["button"],
        files: [
            {
                path: "src/components/ghostui/buttons/btn-01.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "btn-02",
        type: "registry:component",
        registryDependencies: ["button"],
        files: [
            {
                path: "src/components/ghostui/buttons/btn-02.tsx",
                type: "registry:component",
            },
        ],
    },
    // Alert Components
    {
        name: "alert-01",
        type: "registry:component",
        dependencies: ["lucide-react"],
        files: [
            {
                path: "src/components/ghostui/alert/alert-01.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "alert-02",
        type: "registry:component",
        dependencies: ["lucide-react"],
        files: [
            {
                path: "src/components/ghostui/alert/alert-02.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "alert-03",
        type: "registry:component",
        dependencies: ["lucide-react"],
        files: [
            {
                path: "src/components/ghostui/alert/alert-03.tsx",
                type: "registry:component",
            },
        ],
    },
];
