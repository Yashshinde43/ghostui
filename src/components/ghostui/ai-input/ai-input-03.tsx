"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { Flame } from "lucide-react"
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea"

export default function AIInput_03() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 50, maxHeight: 200 })
  const [inputValue, setInputValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleReset = () => {
    setInputValue("")
    adjustHeight(true)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <style>{`
        @keyframes flame-flicker {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .flame-animate {
          animation: flame-flicker 2s ease-in-out infinite;
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05); }
          50% { box-shadow: 0 0 40px rgba(255, 255, 255, 0.2), inset 0 0 30px rgba(255, 255, 255, 0.1); }
        }
        .ghost-glow {
          animation: glow-pulse 3s ease-in-out infinite;
        }
      `}</style>

      <div className={cn("relative rounded-2xl transition-all duration-500", isFocused ? "ghost-glow" : "")}>
        {/* Ghost border effect */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl border-2 border-white/20 transition-all duration-300",
            isFocused && "border-white/40",
          )}
        />

        {/* Animated flames - top left */}
        {isFocused && (
          <>
            <div className="absolute -top-2 -left-2 flame-animate opacity-60">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-3 flame-animate opacity-40" style={{ animationDelay: "0.3s" }}>
              <Flame className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -bottom-3 -left-1 flame-animate opacity-50" style={{ animationDelay: "0.6s" }}>
              <Flame className="w-4 h-4 text-white" />
            </div>
          </>
        )}

        <Textarea
          placeholder="Write something extraordinary..."
          className={cn(
            "w-full bg-black/40 backdrop-blur rounded-2xl pl-5 pr-14",
            "placeholder:text-white/40",
            "border-none",
            "text-white/90 text-wrap",
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
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
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
            "transition-all duration-300",
            inputValue ? "text-white hover:text-white/80 flame-animate" : "text-white/30",
          )}
        >
          <Flame className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-3 text-xs text-white/40">
        {inputValue ? "🔥 Ready to ignite" : "✨ Type to ignite your ideas"}
      </div>
    </div>
  )
}
