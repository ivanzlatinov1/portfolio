'use client'

import { useEffect, useState } from 'react'

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Chat', href: '#chat' },
    { label: 'Career', href: '#career' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'Approach', href: '#approach' },
    { label: 'Skills', href: '#skills' },
]

const Header = () => {
    const [progress, setProgress] = useState(0)
    const [active, setActive] = useState('About')
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.body.scrollHeight - window.innerHeight
            setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
            setScrolled(scrollTop > 10)

            for (const { href } of [...NAV_LINKS].reverse()) {
                const el = document.querySelector(href)
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActive(href.slice(1))
                    break
                }
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollTo = (href: string) => {
        setActive(href.slice(1))
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }

    return (
        <header
            className="fixed top-0 left-0 right-0 transition-all duration-300 z-1000"
            style={{
                background: scrolled
                    ? 'rgba(10,22,40,0.92)'
                    : 'rgba(10,22,40,0.75)',
                backdropFilter: 'blur(12px)',
                borderBottom: scrolled
                    ? '0.5px solid rgba(99,120,180,0.15)'
                    : '0.5px solid transparent',
            }}
        >
            <div className="flex items-center justify-between md:justify-center px-6 h-13 max-w-6xl mx-auto">
                {' '}
                <nav className="hidden md:flex items-center gap-7">
                    {NAV_LINKS.map(({ label, href }) => (
                        <button
                            key={href}
                            onClick={() => scrollTo(href)}
                            className="text-[15px] cursor-pointer uppercase tracking-[2px] font-bold transition-colors duration-150"
                            style={{
                                color:
                                    active === href.slice(1)
                                        ? '#3b82f6'
                                        : 'rgba(148,163,184,0.55)',
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </nav>
                <button
                    className="md:hidden flex flex-col gap-1.25 p-1"
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label="Toggle menu"
                >
                    <span
                        className="block w-5 h-px transition-all duration-200"
                        style={{
                            background: 'rgba(148,163,184,0.6)',
                            transform: menuOpen
                                ? 'rotate(45deg) translate(4px,4px)'
                                : 'none',
                        }}
                    />
                    <span
                        className="block w-5 h-px transition-all duration-200"
                        style={{
                            background: 'rgba(148,163,184,0.6)',
                            opacity: menuOpen ? 0 : 1,
                        }}
                    />
                    <span
                        className="block w-5 h-px transition-all duration-200"
                        style={{
                            background: 'rgba(148,163,184,0.6)',
                            transform: menuOpen
                                ? 'rotate(-45deg) translate(4px,-4px)'
                                : 'none',
                        }}
                    />
                </button>
            </div>

            <div
                className="md:hidden overflow-hidden transition-all duration-300"
                style={{ maxHeight: menuOpen ? '300px' : '0' }}
            >
                <div
                    className="flex flex-col px-6 pb-4 pt-2 gap-1"
                    style={{ borderTop: '0.5px solid rgba(99,120,180,0.15)' }}
                >
                    {NAV_LINKS.map(({ label, href }) => (
                        <button
                            key={href}
                            onClick={() => scrollTo(href)}
                            className="text-left text-[11px] uppercase tracking-[2px] py-2.5 transition-colors duration-200"
                            style={{
                                color:
                                    active === href.slice(1)
                                        ? '#3b82f6'
                                        : 'rgba(148,163,184,0.55)',
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
            <div
                className="h-0.5 transition-all duration-100"
                style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                }}
            />
        </header>
    )
}

export default Header
