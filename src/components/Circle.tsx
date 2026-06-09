import { useState } from 'react'

interface CircleProps {
    title: string
    description: string
}

const Circle = ({ title, description }: CircleProps) => {
    const [flipped, setFlipped] = useState(false)

    return (
        <div
            className="w-72 h-72 cursor-pointer select-none"
            style={{ perspective: '900px' }}
            onClick={() => setFlipped((f) => !f)}
        >
            <div
                className="relative w-full h-full rounded-full transition-transform duration-700"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0.2, 0.2, 1)',
                }}
            >
                <div
                    className="absolute inset-0 rounded-full flex flex-col items-center justify-center px-6 text-center"
                    style={{
                        backfaceVisibility: 'hidden',
                        background: `
                            radial-gradient(circle at 35% 30%, #a89cff 0%, transparent 55%),
                            radial-gradient(circle at 70% 70%, #312a8a 0%, transparent 60%),
                            #4338ca
                        `,
                        boxShadow: `
                            inset -6px -8px 18px rgba(0,0,0,0.45),
                            inset 6px 6px 16px rgba(255,255,255,0.18),
                            0 12px 40px rgba(67,56,202,0.55),
                            0 2px 6px rgba(0,0,0,0.3)
                        `,
                        border: '1.5px solid rgba(168,156,255,0.35)',
                    }}
                >
                    <div
                        className="absolute pointer-events-none rounded-full"
                        style={{
                            top: '14%',
                            left: '22%',
                            width: '38%',
                            height: '22%',
                            background:
                                'radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, transparent 100%)',
                            transform: 'rotate(-20deg)',
                        }}
                    />
                    <span className="font-mono text-sm font-medium tracking-widest uppercase text-indigo-200">
                        {title}
                    </span>
                    <span
                        className="font-mono text-[10px] tracking-wider mt-2"
                        style={{ color: 'rgba(200,195,255,0.85)' }}
                    >
                        [ click to flip ]
                    </span>
                </div>

                <div
                    className="absolute inset-0 rounded-full flex items-center justify-center px-6 text-center"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        background: `
                            radial-gradient(circle at 35% 30%, #4c1d95 0%, transparent 50%),
                            radial-gradient(circle at 75% 72%, #1e0a4a 0%, transparent 55%),
                            #2d1060`,
                        boxShadow: `
                            inset -6px -8px 18px rgba(0,0,0,0.5),
                            inset 6px 6px 16px rgba(255,255,255,0.11),
                            0 12px 40px rgba(109,40,217,0.55),
                            0 2px 6px rgba(0,0,0,0.4)`,
                        border: '1.5px solid rgba(167,139,250,0.22)',
                    }}
                >
                    <div
                        className="absolute pointer-events-none rounded-full"
                        style={{
                            top: '14%',
                            left: '22%',
                            width: '38%',
                            height: '22%',
                            background:
                                'radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 100%)',
                            transform: 'rotate(-20deg)',
                        }}
                    />
                    <p
                        className="font-mono text-xs leading-relaxed"
                        style={{ color: '#cff8ff' }}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Circle
