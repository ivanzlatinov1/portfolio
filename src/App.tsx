import Header from './components/Header'
import Landing from './sections/Landing'
import ChatBot from './sections/ChatBot'
import Career from './sections/Career'
import Metrics from './sections/Metrics'
import EngineeringWorkflow from './sections/EngineeringWorkflow'

const App = () => {
    return (
        <>
            <Header />
            <Landing />
            <ChatBot />
            <Career />
            <Metrics />
            <EngineeringWorkflow />
            <div className="h-screen w-full" />
        </>
    )
}

export default App
