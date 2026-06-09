import SectionHeader from '../components/SectionHeader'
import Skill from '../components/Skill'
import {
    faShieldHalved,
    faCode,
    faServer,
    faDatabase,
    faCloud,
    faNetworkWired,
    faTerminal,
    faLock,
} from '@fortawesome/free-solid-svg-icons'

const skills = [
    {
        icon: faShieldHalved,
        name: 'Application Security',
        tags: [
            'OWASP',
            'Log Analysis',
            'Incident Response',
            'Threat Detection',
        ],
        color: '#f472b6',
    },
    {
        icon: faCode,
        name: 'Full-Stack Development',
        tags: [
            '.NET',
            'Python',
            'React',
            'TypeScript',
            'HTML & CSS',
            'Tailwind',
            'Bootstrap',
        ],
        color: '#60a5fa',
    },
    {
        icon: faServer,
        name: 'Backend Engineering',
        tags: [
            'C#',
            'ASP.NET',
            'EF Core',
            'Clean Architecture',
            'Domain-Driven Design',
        ],
        color: '#818cf8',
    },
    {
        icon: faDatabase,
        name: 'Databases',
        tags: [
            'MSSQL',
            'MySQL',
            'PostgreSQL',
            'Object-Relational Mappers',
            'SQLite',
            'Query Optimization',
        ],
        color: '#34d399',
    },
    {
        icon: faCloud,
        name: 'Cloud & DevOps',
        tags: [
            'CI/CD',
            'Docker',
            'GitHub Actions',
            'Jenkins',
            'Terraform',
            'Azure',
        ],
        color: '#38bdf8',
    },
    {
        icon: faNetworkWired,
        name: 'Networking',
        tags: [
            'TCP/IP',
            'OSI Model',
            'DNS',
            'Wireshark',
            'tcpdump',
            'SIEM tools',
            'Subnetting',
        ],
        color: '#fb923c',
    },
    {
        icon: faTerminal,
        name: 'Linux & Scripting',
        tags: ['Bash', 'Ubuntu', 'CLI Tools', 'System Administration'],
        color: '#a3e635',
    },
    {
        icon: faLock,
        name: 'Secure Architecture',
        tags: ['Auth/AuthZ', 'Input Validation', 'Encryption', 'Hardening'],
        color: '#e879f9',
    },
]

const Skills = () => {
    return (
        <section
            className="w-full h-full flex flex-col justify-center py-12"
            id="skills"
        >
            <SectionHeader
                title="Skills"
                description="The technical skills and expertise I've acquired through continuous learning and hands-on experience across various projects"
            />
            <div className="w-full px-6 sm:px-[10%] lg:px-[20%] py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {skills.map((skill) => (
                        <Skill key={skill.name} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
