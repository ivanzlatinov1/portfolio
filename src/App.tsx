import Header from './components/Header'
import Landing from './sections/Landing'
import ChatBot from './sections/ChatBot'

const App = () => {
    return (
        <>
            <Header />
            <Landing />
            <ChatBot />
            <hr className="border-none w-1/2 h-px bg-linear-to-r from-blue-500 via-blue-300 to-transparent" />
        </>
    )
}

export default App
