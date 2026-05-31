import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {
    faCommentDots,
    faDownload,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import Logo from '../components/Logo'
import info from '../assets/information'

const Landing = () => {
    return (
        <section
            className="w-full h-full flex flex-col px-[20%] py-16 gap-8"
            id="about"
        >
            <div className="flex flex-row items-end gap-6">
                <Logo />
                <div className="flex flex-col">
                    <h1
                        className="text-5xl font-black text-white tracking-tight"
                        style={{
                            textShadow:
                                '0 0 30px rgba(59,130,246,0.6), 0 0 60px rgba(59,130,246,0.3)',
                        }}
                    >
                        Ivan Zlatinov
                    </h1>
                    <div className="flex flex-row items-center gap-3 text-md text-cyan-300">
                        <span>Security-First Development</span>
                        <span className="text-gray-500">•</span>
                        <span>Infrastructure as Code</span>
                        <span className="text-gray-500">•</span>
                        <span>Cloud Resilience</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-12 items-center">
                <div className="flex flex-col gap-5 flex-1">
                    <p className="text-base text-start leading-relaxed text-gray-300">
                        {info.landing_1}
                    </p>
                    <p className="text-base text-start leading-relaxed text-gray-300">
                        {info.landing_2}
                    </p>
                </div>

                <div className="flex flex-col h-full gap-3 w-56 shrink-0">
                    <button
                        className="flex items-center cursor-pointer justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                        onClick={() =>
                            document
                                .getElementById('chat')
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }
                    >
                        <FontAwesomeIcon icon={faCommentDots} /> Talk to my AI
                    </button>
                    <button className="flex items-center cursor-pointer justify-center gap-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white py-3 px-4 rounded-lg transition-colors">
                        <FontAwesomeIcon icon={faEnvelope} /> Email
                    </button>
                    <button className="flex items-center cursor-pointer justify-center gap-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white py-3 px-4 rounded-lg transition-colors">
                        <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
                    </button>
                    <button className="flex items-center cursor-pointer justify-center gap-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white py-3 px-4 rounded-lg transition-colors">
                        <FontAwesomeIcon icon={faDownload} /> Download my CV
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Landing
