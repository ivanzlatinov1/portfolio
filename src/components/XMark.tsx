import { useState } from 'react'

interface Position {
    id: number
    left: string
    top: string
    color: string
    borderColor: string
    year: string
    title: string
    subtitle: string
    stack: string
}

interface XMarkProps {
    p: Position
}

const XMark = ({ p }: XMarkProps) => {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            className="absolute flex flex-col items-center gap-2 -translate-x-1/2 -translate-y-1/2"
            style={{ left: p.left, top: p.top }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                className="absolute bottom-23 left-1/2 w-64 rounded-xl p-3 pointer-events-none z-10 transition-all duration-200"
                style={{
                    background: '#0a1628',
                    border: `1px solid ${p.borderColor}44`,
                    transform: `translateX(-50%) translateY(${hovered ? '0px' : '6px'})`,
                    opacity: hovered ? 1 : 0,
                }}
            >
                <p
                    className="text-sm font-medium m-0"
                    style={{ color: p.color }}
                >
                    {p.title}
                </p>
                <p className="text-xs m-0 mt-0.5" style={{ color: '#8ab4d4' }}>
                    {p.subtitle}
                </p>
                <p className="text-xs m-0 mt-1.5" style={{ color: '#5a7a9a' }}>
                    {p.stack}
                </p>
            </div>

            <div
                className="relative w-13 h-13 bg-[#0f1d38] rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200"
                style={{
                    border: `1.5px solid ${p.borderColor}`,
                    transform: hovered ? 'scale(1.18)' : 'scale(1)',
                    transition: 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1)',
                }}
            >
                <div
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        inset: -8,
                        border: `1px dashed ${p.borderColor}`,
                        opacity: 0.4,
                    }}
                />
                <div
                    className="absolute rounded-sm"
                    style={{
                        width: 18,
                        height: 2.5,
                        background: p.color,
                        transform: 'rotate(45deg)',
                    }}
                />
                <div
                    className="absolute rounded-sm"
                    style={{
                        width: 18,
                        height: 2.5,
                        background: p.color,
                        transform: 'rotate(-45deg)',
                    }}
                />
            </div>

            <span className="text-xs" style={{ color: p.color, opacity: 0.7 }}>
                {p.year}
            </span>
        </div>
    )
}

export default XMark
