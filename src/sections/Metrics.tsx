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
            className="w-full h-full flex flex-col justify-center py-12 mt-5"
            id="metrics"
        >
            <SectionHeader
                title="Impact Metrics"
                description="A snapshot of key outcomes delivered across my projects"
            />
            <div className="w-full h-full flex justify-center px-[20%] py-10 [10%] gap-8">
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
