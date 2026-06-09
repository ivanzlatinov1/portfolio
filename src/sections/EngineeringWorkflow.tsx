import { useRef } from 'react'
import useLayout from '../hooks/useLayout'
import SectionHeader from '../components/SectionHeader'
import Circle from '../components/Circle'
import SnakeArrows from '../components/SnakeArrows'

const steps = [
    {
        title: 'System Architecture & Database Design',
        shortDescription: 'Designing the system and data model',
        description:
            'Before writing any code, I design the overall architecture of the application and plan the data model',
    },
    {
        title: 'Security Planning',
        shortDescription: 'Planning security and access control',
        description:
            'Security is considered from the start, with measures such as authentication, authorization, input validation, and secure data handling',
    },
    {
        title: 'Technology Stack Selection',
        shortDescription: 'Choosing the right technologies',
        description: `I carefully choose the technologies, frameworks, and tools that best align with the project's requirements, scalability goals, performance needs, and long-term maintainability`,
    },
    {
        title: 'Development & Implementation',
        shortDescription: 'Building clean and reliable software',
        description:
            'I build the application using clean, maintainable code, following best practices and focusing on modularity, performance, and reliability throughout development',
    },
    {
        title: 'Deployment & Production Readiness',
        shortDescription:
            'Integrating CI/CD and preparing for production deployment',
        description:
            'Before launch, I prepare the application for production by optimizing performance, setting up deployment pipelines, and ensuring the system is stable and reliable',
    },
    {
        title: 'Maintenance & Continuous Improvement',
        shortDescription: 'Monitoring and improving the product',
        description:
            'After deployment, I monitor performance, address issues, apply security updates, and continuously improve the product to ensure it remains efficient and secure',
    },
]

const EngineeringWorkflow = () => {
    const refs = Array.from({ length: 6 }, () =>
        useRef<HTMLDivElement | null>(null)
    )

    const { circleSize, isMobile } = useLayout()

    const row1 = [0, 1, 2]
    const row2 = [5, 4, 3]

    const circleStyle = {
        width: circleSize,
        height: circleSize,
        flexShrink: 0 as const,
    }

    return (
        <section
            className="w-full h-full flex flex-col justify-center py-12 scroll-mt-20"
            id="approach"
        >
            <SectionHeader
                title="How I Approach Projects"
                description="Every project I build follows a proven workflow focused on thoughtful design, secure implementation, reliable deployment, and continuous improvement"
            />
            <div className="w-full flex flex-col items-center px-6 md:px-[10%] lg:px-[20%] py-10">
                <div className="relative flex flex-col items-center gap-10 md:gap-14">
                    {isMobile ? (
                        [0, 1, 2, 3, 4, 5].map((i) => (
                            <div
                                className="flex flex-col items-center justify-center"
                                key={i}
                                ref={refs[i]}
                            >
                                <Circle
                                    title={steps[i].title}
                                    description={steps[i].description}
                                    shortDescription={steps[i].shortDescription}
                                    isMobile={isMobile}
                                    size={circleSize}
                                />
                            </div>
                        ))
                    ) : (
                        <>
                            <div className="flex gap-10 lg:gap-18">
                                {row1.map((i) => (
                                    <div
                                        key={i}
                                        ref={refs[i]}
                                        style={circleStyle}
                                    >
                                        <Circle
                                            title={steps[i].title}
                                            description={steps[i].description}
                                            shortDescription={
                                                steps[i].shortDescription
                                            }
                                            isMobile={isMobile}
                                            size={circleSize}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-10 lg:gap-18">
                                {row2.map((i) => (
                                    <div
                                        key={i}
                                        ref={refs[i]}
                                        style={circleStyle}
                                    >
                                        <Circle
                                            title={steps[i].title}
                                            description={steps[i].description}
                                            shortDescription={
                                                steps[i].shortDescription
                                            }
                                            isMobile={isMobile}
                                            size={circleSize}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    <SnakeArrows
                        refs={refs}
                        circleSize={circleSize}
                        isMobile={isMobile}
                    />
                </div>
            </div>
        </section>
    )
}

export default EngineeringWorkflow
