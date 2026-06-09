import { useRef, useEffect, useState, useCallback } from 'react'

interface SnakeArrowsProps {
    refs: React.RefObject<HTMLDivElement | null>[]
    circleSize: number
    isMobile: boolean
}

interface Position {
    x: number
    y: number
}

const SnakeArrows = ({ refs, circleSize, isMobile }: SnakeArrowsProps) => {
    const containerRef = useRef<SVGSVGElement>(null)
    const [paths, setPaths] = useState<{ d: string; key: string }[]>([])

    const recalc = useCallback(() => {
        const svg = containerRef.current
        if (!svg) return
        const svgRect = svg.getBoundingClientRect()

        const centers: Position[] = refs.map((r) => {
            if (!r.current) return { x: 0, y: 0 }
            const rect = r.current.getBoundingClientRect()
            return {
                x: rect.left + rect.width / 2 - svgRect.left,
                y: rect.top + rect.height / 2 - svgRect.top,
            }
        })

        const order = [0, 1, 2, 3, 4, 5]
        const newPaths: { d: string; key: string }[] = []
        const r = circleSize / 2
        const gap = 8

        for (let i = 0; i < order.length - 1; i++) {
            const a = centers[order[i]]
            const b = centers[order[i + 1]]

            const dx = b.x - a.x
            const dy = b.y - a.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist === 0) continue

            const nx = dx / dist
            const ny = dy / dist

            const x1 = a.x + nx * (r + gap)
            const y1 = a.y + ny * (r + gap)
            const x2 = b.x - nx * (r + gap)
            const y2 = b.y - ny * (r + gap)

            newPaths.push({ d: `M ${x1} ${y1} L ${x2} ${y2}`, key: `${i}` })
        }

        setPaths(newPaths)
    }, [refs, circleSize])

    useEffect(() => {
        recalc()
        window.addEventListener('resize', recalc)
        return () => window.removeEventListener('resize', recalc)
    }, [recalc])

    useEffect(() => {
        recalc()
    }, [isMobile, recalc])

    return (
        <svg
            ref={containerRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ overflow: 'visible' }}
        >
            <defs>
                <marker
                    id="arrow"
                    markerWidth="8"
                    markerHeight="8"
                    refX="6"
                    refY="3"
                    orient="auto"
                >
                    <path d="M0,0 L0,6 L7,3 z" fill="#6366f1" opacity="0.7" />
                </marker>
            </defs>
            {paths.map(({ d, key }) => (
                <path
                    key={key}
                    d={d}
                    stroke="#6366f1"
                    strokeWidth="1.5"
                    strokeDasharray="5 4"
                    strokeOpacity="0.6"
                    fill="none"
                    markerEnd="url(#arrow)"
                />
            ))}
        </svg>
    )
}

export default SnakeArrows
