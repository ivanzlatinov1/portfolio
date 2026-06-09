import Header from './components/Header'
import Landing from './sections/Landing'
import ChatBot from './sections/ChatBot'
import Career from './sections/Career'
import Metrics from './sections/Metrics'
import EngineeringWorkflow from './sections/EngineeringWorkflow'
import Skills from './sections/Skills'
import Footer from './components/Footer'

const App = () => {
    return (
        <>
            <Header />
            <Landing />
            <ChatBot />
            <Career />
            <Metrics />
            <EngineeringWorkflow />
            <Skills />
            <Footer />
        </>
    )
}

export default App
