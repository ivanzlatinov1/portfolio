const ChatBotHeader = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-center items-center gap-2">
                <span className="text-gray-500 text-3xl mb-2">//</span>
                <h2 className="text-xl font-semibold text-slate-100 tracking-wide">
                    Chat Bot Interface
                </h2>
                <span
                    className="text-xs px-2 py-0.5 rounded-full text-cyan-300"
                    style={{
                        background: 'rgba(6,182,212,0.1)',
                        border: '1px solid rgba(6,182,212,0.3)',
                        boxShadow: '0 0 8px rgba(6,182,212,0.15)',
                    }}
                >
                    AI-powered
                </span>
            </div>
            <p className="text-sm text-slate-500 tracking-wide">
                Trained on Ivan Zlatinov's career data, decision models, and
                communication style
            </p>
        </div>
    )
}

export default ChatBotHeader
