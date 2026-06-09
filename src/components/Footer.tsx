import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faShieldHalved } from '@fortawesome/free-solid-svg-icons'

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Chat', href: '#chat' },
    { label: 'Career', href: '#career' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'Approach', href: '#approach' },
    { label: 'Skills', href: '#skills' },
]

const SOCIAL_LINKS = [
    {
        icon: faGithub,
        href: 'https://github.com/ivanzlatinov1',
        label: 'GitHub',
    },
    {
        icon: faLinkedinIn,
        href: 'https://www.linkedin.com/in/ivanzlatinov1',
        label: 'LinkedIn',
    },
    {
        icon: faEnvelope,
        href: 'mailto:ivanzlatinov006@gmail.com',
        label: 'Email',
    },
    {
        icon: faShieldHalved,
        href: 'https://github.com/ivanzlatinov1/cybersecurity-portfolio',
        label: 'Cybersecurity Portfolio',
    },
]

const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

const Footer = () => {
    return (
        <footer
            className="w-full mt-12"
            style={{ borderTop: '0.5px solid rgba(99,120,180,0.12)' }}
        >
            <div
                className="w-full px-6 sm:px-12 lg:px-[20%] pt-12 pb-8"
                style={{
                    background:
                        'linear-gradient(to bottom, rgba(8,18,36,0.95), rgba(5,12,24,1))',
                }}
            >
                <div className="flex flex-col sm:flex-row justify-between gap-12 sm:gap-6">
                    <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-left max-w-xs mx-auto sm:mx-0">
                        <div className="flex flex-col gap-1">
                            <span
                                className="font-mono text-base font-bold tracking-[3px] uppercase"
                                style={{
                                    color: '#60a5fa',
                                    textShadow: '0 0 20px rgba(96,165,250,0.4)',
                                }}
                            >
                                Ivan Zlatinov
                            </span>
                            <span
                                className="font-mono text-[10px] uppercase tracking-[2px]"
                                style={{ color: 'rgba(148,163,184,0.4)' }}
                            >
                                AppSec · Full-Stack · Sofia, BG
                            </span>
                        </div>

                        <div
                            className="w-10 h-px"
                            style={{
                                background:
                                    'linear-gradient(90deg, #3b82f6, transparent)',
                            }}
                        />

                        <p
                            className="text-xs leading-relaxed"
                            style={{ color: 'rgba(148,163,184,0.5)' }}
                        >
                            Building secure, maintainable software with a focus
                            on application security, clean architecture, and
                            reliable deployment.
                        </p>

                        <div className="flex gap-3 mt-1">
                            {SOCIAL_LINKS.map(({ icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={
                                        href.startsWith('http')
                                            ? '_blank'
                                            : undefined
                                    }
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200"
                                    style={{
                                        background: 'rgba(59,130,246,0.06)',
                                        border: '0.5px solid rgba(99,120,180,0.2)',
                                        color: 'rgba(148,163,184,0.5)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = '#60a5fa'
                                        e.currentTarget.style.borderColor =
                                            'rgba(96,165,250,0.4)'
                                        e.currentTarget.style.background =
                                            'rgba(59,130,246,0.12)'
                                        e.currentTarget.style.boxShadow =
                                            '0 0 10px rgba(59,130,246,0.2)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color =
                                            'rgba(148,163,184,0.5)'
                                        e.currentTarget.style.borderColor =
                                            'rgba(99,120,180,0.2)'
                                        e.currentTarget.style.background =
                                            'rgba(59,130,246,0.06)'
                                        e.currentTarget.style.boxShadow = 'none'
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={icon}
                                        className="text-sm"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-start gap-4">
                        <span
                            className="font-mono text-[10px] uppercase tracking-[2.5px]"
                            style={{ color: 'rgba(96,165,250,0.5)' }}
                        >
                            Navigation
                        </span>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-2.5">
                            {NAV_LINKS.map(({ label, href }) => (
                                <button
                                    key={href}
                                    onClick={() => scrollTo(href)}
                                    className="text-left font-mono text-[11px] uppercase tracking-[1.5px] cursor-pointer transition-all duration-150 flex items-center gap-1.5 group"
                                    style={{ color: 'rgba(148,163,184,0.45)' }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.color =
                                            '#60a5fa')
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.color =
                                            'rgba(148,163,184,0.45)')
                                    }
                                >
                                    <span
                                        className="inline-block w-1 h-1 rounded-full shrink-0 transition-colors duration-150"
                                        style={{
                                            background: 'rgba(99,120,180,0.4)',
                                        }}
                                    />
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
                    style={{ borderTop: '0.5px solid rgba(99,120,180,0.08)' }}
                >
                    <span
                        className="font-mono text-[10px] uppercase tracking-[1.5px]"
                        style={{ color: 'rgba(148,163,184,0.25)' }}
                    >
                        © {new Date().getFullYear()} Ivan Zlatinov
                    </span>
                    <span
                        className="font-mono text-[10px] uppercase tracking-[1.5px]"
                        style={{ color: 'rgba(148,163,184,0.25)' }}
                    >
                        React · TypeScript · Tailwind
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
