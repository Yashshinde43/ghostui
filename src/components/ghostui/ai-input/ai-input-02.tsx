"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { Zap } from "lucide-react"
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea"

export default function AIInput_02() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 50, maxHeight: 200 })
  const [inputValue, setInputValue] = useState("")

  const handleReset = () => {
    setInputValue("")
    adjustHeight(true)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative group">
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur"></div>

        <div className="relative bg-black rounded-xl border border-orange-500/20 group-focus-within:border-orange-500/100 transition-colors duration-300">
          <Textarea
            placeholder="Build something amazing..."
            className={cn(
              "w-full bg-black rounded-xl pl-5 pr-16",
              "placeholder:text-slate-600",
              "border-none",
              "text-white text-wrap",
              "overflow-y-auto resize-none",
              "focus-visible:ring-0 focus-visible:outline-none",
              "transition-all duration-200",
              "leading-[1.2] py-4",
              "min-h-[50px] max-h-[200px]",
            )}
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
              adjustHeight()
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleReset()
              }
            }}
          />

          <button
            onClick={handleReset}
            className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg",
              "transition-all duration-300 flex items-center gap-2",
              inputValue ? "bg-orange-500 text-white hover:bg-orange-600" : "text-slate-600",
            )}
          >
            {inputValue ? (
              <>
                <Zap className="w-4 h-4" />
              </>
            ) : (
              <Zap className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
