import React, { RefObject, useEffect, useId, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface AnimatedBeamProps {
  className?: string
  containerRef: RefObject<HTMLElement | null>
  fromRef: RefObject<HTMLElement | null>
  toRef: RefObject<HTMLElement | null>
  curvature?: number
  reverse?: boolean
  pathColor?: string
  pathWidth?: number
  pathOpacity?: number
  gradientStartColor?: string
  gradientStopColor?: string
  delay?: number
  duration?: number
  startXOffset?: number
  startYOffset?: number
  endXOffset?: number
  endYOffset?: number
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  delay = 0,
  duration = Math.random() * 3 + 4,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = useId()
  const [pathD, setPathD] = useState("")
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 })
  const [coords, setCoords] = useState({ startX: 0, startY: 0, endX: 0, endY: 0 })

  useEffect(() => {
    function updatePath() {
      if (fromRef.current && toRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const fromRect = fromRef.current.getBoundingClientRect()
        const toRect = toRef.current.getBoundingClientRect()

        const startX =
          fromRect.left - containerRect.left + fromRect.width / 2 + startXOffset
        const startY =
          fromRect.top - containerRect.top + fromRect.height / 2 + startYOffset
        const endX =
          toRect.left - containerRect.left + toRect.width / 2 + endXOffset
        const endY =
          toRect.top - containerRect.top + toRect.height / 2 + endYOffset
        const controlY = startY - curvature

        setPathD(
          `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`
        )
        setCoords({ startX, startY, endX, endY })
        setSvgDimensions({ width: containerRect.width, height: containerRect.height })
      }
    }

    const resizeObserver = new ResizeObserver(updatePath)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }
    updatePath()

    return () => resizeObserver.disconnect()
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ])

  const gradientCoordinates = reverse
    ? { x1: coords.endX, y1: coords.endY, x2: coords.startX, y2: coords.startY }
    : { x1: coords.startX, y1: coords.startY, x2: coords.endX, y2: coords.endY }

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
        className
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: gradientCoordinates.x1,
            y1: gradientCoordinates.y1,
            x2: gradientCoordinates.x2,
            y2: gradientCoordinates.y2,
          }}
          animate={{
            x1: gradientCoordinates.x2,
            y1: gradientCoordinates.y2,
            x2: gradientCoordinates.x1,
            y2: gradientCoordinates.y1,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  )
}
