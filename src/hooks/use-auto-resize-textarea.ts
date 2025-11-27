import { useCallback, useEffect, useRef, useState } from "react"


interface useAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

export function useAutoResizeTextarea({ minHeight, maxHeight }: useAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const adjustHeight = useCallback(
        (reset?: boolean) => {
            const textarea = textareaRef.current;
            if (!textarea) return;
            if (reset) {
                textarea.style.height = `${minHeight}px`
                return;
            }

            textarea.style.height = `${minHeight}px`;

            const newHeight = Math.max(
                minHeight,
                Math.min(
                    textarea.scrollHeight,
                    maxHeight ?? Number.POSITIVE_INFINITY
                )
            );

            textarea.style.height = `${newHeight}px`;

        }, [maxHeight, minHeight]


    );

    useEffect(() => {
        // set initial height
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
        }
    }, [minHeight])
    return {textareaRef, adjustHeight};

}
