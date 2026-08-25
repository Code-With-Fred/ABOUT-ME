import { ReactNode } from "react"
import { Lock } from "lucide-react"

interface BrowserFrameProps {
  /** Text shown in the fake address bar — a real domain if verified, otherwise a neutral label. */
  label: string
  children: ReactNode
  className?: string
}

/**
 * Wraps a project screenshot in a minimal browser-chrome frame so it reads as
 * "a real site, shown intentionally" rather than a raw image dropped in a card —
 * and gives every real project a consistent, professional presentation regardless
 * of that project's own design language.
 */
const BrowserFrame = ({ label, children, className = "" }: BrowserFrameProps) => {
  return (
    <div className={`rounded-xl overflow-hidden border border-border/50 bg-[#1a1a1a] ${className}`}>
      <div className="flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#242424] border-b border-border/30">
        <div className="flex gap-1.5 flex-shrink-0" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex items-center justify-center gap-1.5 min-w-0 px-2 sm:px-3 py-1 rounded-md bg-black/30 text-[10px] sm:text-xs text-muted-foreground/80 truncate">
          <Lock className="h-2.5 w-2.5 flex-shrink-0" aria-hidden="true" />
          <span className="truncate">{label}</span>
        </div>
      </div>
      <div className="relative overflow-hidden">{children}</div>
    </div>
  )
}

export default BrowserFrame
