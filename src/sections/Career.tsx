import SectionHeader from '../components/SectionHeader'
import XMark from '../components/XMark'
import worldImage from '@/assets/world.jpg'

const positions = [
    {
        id: 1,
        left: '26%',
        top: '63%',
        color: '#e8c55a',
        borderColor: '#c8a84b',
        year: '2024-2025',
        title: 'Frontend UI/UX Developer',
        subtitle: 'CustomCADs',
        stack: 'React · TypeScript · Tailwind',
    },
    {
        id: 2,
        left: '72%',
        top: '53%',
        color: '#5dcaa5',
        borderColor: '#5dcaa5',
        year: '2025',
        title: '.NET Developer & Engineer',
        subtitle: 'Alkosclima Engineering',
        stack: 'C# · ASP.NET · Docker · CI/CD',
    },
]

const Career = () => (
    <section
        className="w-full h-full flex flex-col px-[20%] gap-8 scroll-mt-20"
        id="career"
    >
        <SectionHeader
            title="Career"
            description="A look at my professional experience and the roles that have shaped my skills"
        />

        <div
            className="relative w-full h-70 rounded-xl overflow-hidden"
            style={{
                backgroundImage: `url(${worldImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-[#0f1d38]/80 z-0 border-2 border-black/10" />
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <path
                    className="laser-glow"
                    d="M 26 61 Q 45 38 72 50"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="0.7"
                    strokeLinecap="round"
                    opacity="0.5"
                    strokeDasharray="3 2"
                />
            </svg>

            {positions.map((p) => (
                <XMark key={p.id} p={p} />
            ))}
        </div>
    </section>
)

export default Career
