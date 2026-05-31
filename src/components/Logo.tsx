import info from '../assets/information'
import profileImg from '@/assets/profile.png'

const Logo = () => {
    return (
        <div className="relative w-30 h-30 group hidden md:block">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-400 to-cyan-600 opacity-20 blur-md scale-110" />
            <img
                src={profileImg}
                className="relative w-full h-full rounded-full object-cover border-2 border-blue-500/40 shadow-lg"
            />
            <div
                className="
                absolute font-mono bottom-0 left-1/2 -translate-x-1/2
                bg-blue-600 text-white
                text-[10px] font-bold tracking-widest uppercase
                px-3 py-1 rounded-full
                shadow-md shadow-blue-900/30
                whitespace-nowrap
            "
            >
                {info.status}
            </div>
        </div>
    )
}

export default Logo
