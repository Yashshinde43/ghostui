'use server';
import path from 'path';
import { cache } from 'react';
import { promises as fs } from 'fs';

const readFileCache = cache(async (filePath: string) => {
    const content = await fs.readFile(filePath, 'utf8');
    return content;
})

export const getComponentContent = async (filename: string | null, folder: string) => {
    const baseDir = path.join(process.cwd(), 'components/ghostui');
    if (!filename || filename === 'undefined') {
        const fullPath = path.join(baseDir, `${folder}.tsx`);
        return await readFileCache(fullPath); 
    }
    const content = await fs.readFile(`${folder}/${filename}.tsx`, 'utf8');
    return content;
}

export type copyComponentState = {
    error: string;
    content: string;
    success: boolean;
}

export const copyComponent = async (prevState: copyComponentState | undefined, formData: FormData): Promise<copyComponentState> => {
    try {
        const folder = formData.get('folder') as string;
        const filename = formData.get('filename') as string;


        if (!folder || !filename) {
            return {
                error: 'Folder and filename are required',
                content: '',
                success: false
            }
        }
        const content = await getComponentContent(filename as string, folder as string);
        if (!content) {
            return {
                error: 'Component not found',
                content: '',
                success: false
            }
        }
        return {
            error: '',
            content,
            success: true
        }
    } catch (error) {
        console.log(error);
        return {
            error: 'An error occurred',
            content: '',
            success: false
        }
    }

}