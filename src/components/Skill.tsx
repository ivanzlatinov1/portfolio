import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

interface SkillProps {
    icon: FontAwesomeIconProps['icon']
    name: string
    tags: string[]
    color?: string
}

const Skill = ({ icon, name, tags, color = '#22d3ee' }: SkillProps) => {
    return (
        <div
            className="group relative flex flex-col gap-3 overflow-hidden rounded-xl
            border border-white/10 bg-white/5 p-5 backdrop-blur-sm
            transition-all duration-200
            hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
            style={
                {
                    '--glow-color': color,
                } as React.CSSProperties
            }
            onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = `${color}44`
                el.style.boxShadow = `0 8px 32px rgba(0,0,0,0.25), 0 0 0 1px ${color}22`
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = ''
                el.style.boxShadow = ''
            }}
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 rounded-xl"
                style={{
                    background: `radial-gradient(ellipse at top left, ${color}0d 0%, transparent 60%)`,
                }}
            />

            <div className="flex items-center gap-3">
                <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110"
                    style={{ background: `${color}18` }}
                >
                    <FontAwesomeIcon
                        icon={icon}
                        className="text-lg"
                        style={{ color }}
                    />
                </div>
                <span className="font-mono text-sm font-medium tracking-wide text-slate-200">
                    {name}
                </span>
            </div>

            <div
                className="h-px w-6 rounded transition-all duration-200 group-hover:w-full"
                style={{
                    background: `linear-gradient(90deg, ${color}55, transparent)`,
                }}
            />

            <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-md px-2 py-0.5 font-mono text-[10px] uppercase tracking-[1px]"
                        style={{
                            background: `${color}12`,
                            border: `0.5px solid ${color}30`,
                            color: `${color}cc`,
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Skill
