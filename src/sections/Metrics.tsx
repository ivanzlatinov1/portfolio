import Metric from '../components/Metric'
import SectionHeader from '../components/SectionHeader'
import {
    faStopwatch,
    faCopy,
    faLayerGroup,
} from '@fortawesome/free-solid-svg-icons'

const Metrics = () => {
    return (
        <section
            className="w-full h-full flex flex-col justify-center py-12 mt-5 scroll-mt-20"
            id="metrics"
        >
            <SectionHeader
                title="Impact Metrics"
                description="A snapshot of key outcomes delivered across my projects"
            />
            <div className="w-full h-full grid grid-cols-1 sm:grid-cols-3 px-6 sm:px-[10%] lg:px-[20%] py-10 gap-4 sm:gap-6 lg:gap-8">
                <Metric
                    icon={{ icon: faStopwatch }}
                    stat="50%"
                    description="Manual calculation time reduction"
                    project="HVACrate"
                />
                <Metric
                    icon={{ icon: faCopy }}
                    stat="40%+"
                    description="Code duplication reduction"
                    project="All projects"
                />
                <Metric
                    icon={{ icon: faLayerGroup }}
                    stat="30+"
                    description="Pages restructured & deployed"
                    project="CustomCADsDemoDesign"
                />
            </div>
        </section>
    )
}

export default Metrics
