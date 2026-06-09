interface SectionHeaderProps {
    title: string
    description?: string | null
}

const SectionHeader = ({ title, description = null }: SectionHeaderProps) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center w-full">
                <div
                    className="flex-1 h-px"
                    style={{
                        background:
                            'linear-gradient(to right, transparent, rgba(99,120,180,0.25))',
                    }}
                />
                <div className="flex items-center gap-2.5 px-5">
                    <span
                        className="font-mono text-lg leading-none"
                        style={{
                            color: 'rgba(99,120,180,0.5)',
                            letterSpacing: '-1px',
                        }}
                    >
                        //
                    </span>
                    <h2 className="font-mono font-extrabold text-blue-400 uppercase tracking-[3px] text-sm">
                        {title}
                    </h2>
                </div>
                <div
                    className="flex-1 h-px"
                    style={{
                        background:
                            'linear-gradient(to left, transparent, rgba(99,120,180,0.25))',
                    }}
                />
            </div>

            <p
                className="font-mono uppercase tracking-[1.5px] text-[10px] sm:text-xs md:text-sm px-4 sm:px-6"
                style={{ color: 'rgba(148,163,184,0.75)' }}
            >
                {description}
            </p>
        </div>
    )
}

export default SectionHeader
