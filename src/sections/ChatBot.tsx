'use client'

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import profileImg from '@/assets/profile.png'
import SectionHeader from '../components/SectionHeader'
import ChatBotMessageBox from '../components/ChatBotMessageBox'

interface Message {
    role: 'user' | 'assistant'
    content: string
}

const ChatBot = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content:
                'Hello! Ask me anything about Ivan - his work, skills, or experience.',
        },
    ])
    const [input, setInput] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    async function sendMessage(): Promise<void> {
        if (!input.trim() || loading) return

        const userMsg: Message = { role: 'user', content: input }
        const updatedMessages = [...messages, userMsg]
        setMessages(updatedMessages)
        setInput('')
        setLoading(true)

        try {
            const res = await fetch(import.meta.env.VITE_WORKER_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: updatedMessages }),
            })

            if (!res.ok) throw new Error('API error')

            const data: { reply: string } = await res.json()

            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: data.reply },
            ])
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content: 'Sorry, something went wrong. Please try again!',
                },
            ])
        } finally {
            setLoading(false)
        }
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
        if (e.key === 'Enter') sendMessage()
    }

    return (
        <section
            className="w-full h-full flex flex-col px-[20%] py-16 gap-8 scroll-mt-10"
            id="chat"
        >
            <SectionHeader
                title="Chat Bot Interface"
                description="Trained on Ivan Zlatinov's career data"
            />
            <div
                className="w-full h-175 flex flex-col mb-5 bg-black/30 rounded-3xl overflow-hidden"
                style={{
                    boxShadow:
                        '0 0 30px rgba(6,182,212,0.15), 0 0 80px rgba(6,182,212,0.08), inset 0 0 30px rgba(6,182,212,0.03)',
                }}
            >
                <div
                    className="w-full flex gap-3 px-4 py-3 border-b border-blue-900/60"
                    style={{
                        background:
                            'linear-gradient(135deg, #0f1f3d 0%, #0a1628 100%)',
                    }}
                >
                    <div className="relative w-10 h-10 shrink-0">
                        <img
                            className="w-full h-full rounded-full object-cover border-2 border-cyan-500/60 shadow-lg"
                            src={profileImg}
                            style={{
                                boxShadow: '0 0 12px rgba(6,182,212,0.4)',
                            }}
                        />
                        <div
                            className="absolute w-2.5 h-2.5 bottom-0 right-0 z-50 rounded-full border-2 border-[#050d1a] bg-emerald-400"
                            style={{
                                boxShadow: '0 0 6px rgba(52,211,153,0.8)',
                            }}
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-sm text-left font-semibold text-cyan-300 tracking-wide">
                            Ivan's AI Assistant
                        </p>
                        <p className="text-xs text-slate-400">
                            Ask about experience, skills, or projects
                        </p>
                    </div>
                </div>

                <ChatBotMessageBox messages={messages} loading={loading} />

                {messages.length === 1 && (
                    <div className="flex flex-wrap justify-center gap-2 px-4 pb-3">
                        {[
                            "What's his tech stack?",
                            'Is he open to work?',
                            'Show me his projects',
                        ].map((question) => (
                            <button
                                key={question}
                                onClick={() => setInput(question)}
                                className="cursor-pointer rounded-full px-3 py-1.5 font-bold text-xs text-cyan-300 transition-all hover:scale-105"
                                style={{
                                    background: 'rgba(6,182,212,0.08)',
                                    border: '1px solid rgba(6,182,212,0.3)',
                                    boxShadow: '0 0 10px rgba(6,182,212,0.1)',
                                }}
                            >
                                {question}
                            </button>
                        ))}
                    </div>
                )}

                <div
                    className="flex gap-2 px-3 sm:px-4 py-2 sm:py-3 border-t border-blue-900/60"
                    style={{ background: 'rgba(5,13,26,0.8)' }}
                >
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask a question..."
                        className="flex-1 rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-200 placeholder-slate-500 outline-none transition-all"
                        style={{
                            background: 'rgba(15,31,61,0.8)',
                            border: '1px solid rgba(6,182,212,0.2)',
                            boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.3)',
                        }}
                        onFocus={(e) =>
                            (e.target.style.border =
                                '1px solid rgba(6,182,212,0.6)')
                        }
                        onBlur={(e) =>
                            (e.target.style.border =
                                '1px solid rgba(6,182,212,0.2)')
                        }
                    />
                    <button
                        onClick={sendMessage}
                        disabled={loading}
                        className={`rounded-xl px-3 sm:px-4 py-2 text-white text-xs sm:text-sm transition-all duration-200 ${
                            loading || !input
                                ? 'cursor-not-allowed'
                                : 'cursor-pointer hover:scale-105'
                        }`}
                        style={{
                            background:
                                'linear-gradient(135deg, #6366f1, #4f46e5)',
                            boxShadow: '0 4px 15px rgba(99,102,241,0.4)',
                            opacity: loading || !input ? 0.45 : 1,
                            transition:
                                'opacity 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
                        }}
                    >
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ChatBot
