import { ReactNode, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface Tilt3DProps {
  children: ReactNode
  className?: string
  /** Max tilt angle in degrees. Keep small for a subtle, professional effect. */
  maxTilt?: number
}

/**
 * Wraps its children in a 3D perspective that tilts toward the cursor and
 * lifts on hover — pure CSS 3D transforms via Framer Motion, no WebGL, no
 * new dependencies. Falls back to a static card for touch devices, where
 * there's no cursor to tilt toward.
 */
const Tilt3D = ({ children, className = "", maxTilt = 10 }: Tilt3DProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig)
  const scale = useSpring(1, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseEnter = () => scale.set(1.03)
  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    scale.set(1)
  }

  return (
    <div style={{ perspective: 1200 }} className={className}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Tilt3D
