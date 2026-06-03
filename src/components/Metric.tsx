import {
    FontAwesomeIcon,
    type FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'

interface MetricProps {
    icon: FontAwesomeIconProps
    stat: string
    description: string
    project?: string
}

const Metric = ({ icon, stat, description, project }: MetricProps) => {
    return (
        <div
            className="group relative flex flex-col items-center gap-2.5 overflow-hidden rounded-xl
            border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm
            transition-all duration-200
            hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25),0_0_0_1px_rgba(56,189,248,0.12)]"
        >
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-cyan-400/5 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 transition-transform duration-200 group-hover:scale-110">
                <FontAwesomeIcon {...icon} className="text-xl text-cyan-400" />
            </div>

            <p className="text-2xl font-medium text-white transition-colors duration-200 group-hover:text-cyan-400">
                {stat}
            </p>

            <div className="h-px w-8 rounded bg-white/20 transition-all duration-200 group-hover:w-14 group-hover:bg-cyan-500/50" />

            <p className="text-sm text-slate-300 leading-snug">{description}</p>

            <p
                className="translate-y-1 rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs text-cyan-400
    opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
            >
                {project}
            </p>
        </div>
    )
}

export default Metric
