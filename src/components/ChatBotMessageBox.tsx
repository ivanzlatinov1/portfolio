import profileImg from '@/assets/profile.png'
import { useEffect, useRef } from 'react'
import Waves from './Waves'

interface Message {
    role: 'user' | 'assistant'
    content: string
}

interface ChatBotMessageBoxProps {
    messages: Message[]
    loading: boolean
}

const ChatBotMessageBox = ({ messages, loading }: ChatBotMessageBoxProps) => {
    const bottomRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, loading])

    return (
        <div className="relative flex-1 overflow-y-auto overflow-x-hidden px-3 sm:px-4 py-3 flex flex-col gap-3 h-full">
            <Waves />
            {messages.map((m, i) => (
                <div
                    key={i}
                    className={`flex items-end gap-2 ${
                        m.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                    }`}
                >
                    {m.role === 'assistant' &&
                    (i === 0 || messages[i - 1].role === 'user') ? (
                        <img
                            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border border-cyan-500/50 shrink-0 mb-1"
                            src={profileImg}
                            style={{
                                boxShadow: '0 0 8px rgba(6,182,212,0.3)',
                            }}
                        />
                    ) : (
                        m.role === 'assistant' && (
                            <div className="w-6 sm:w-7 shrink-0" />
                        )
                    )}

                    <div
                        className={`max-w-[80%] sm:max-w-[72%] font-mono rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-left leading-5 sm:leading-6 ${
                            m.role === 'user'
                                ? 'rounded-br-sm text-white'
                                : 'rounded-bl-sm text-slate-100'
                        }`}
                        style={
                            m.role === 'user'
                                ? {
                                      background:
                                          'linear-gradient(135deg, #6366f1, #4f46e5)',
                                      boxShadow:
                                          '0 4px 15px rgba(99,102,241,0.35)',
                                  }
                                : {
                                      background:
                                          'linear-gradient(135deg, #0f2744, #0a1e38)',
                                      border: '1px solid rgba(6,182,212,0.2)',
                                      boxShadow:
                                          '0 4px 15px rgba(6,182,212,0.08)',
                                  }
                        }
                    >
                        {m.content}
                    </div>
                </div>
            ))}

            {loading && (
                <div className="flex items-end gap-2">
                    <img
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border border-cyan-500/50 shrink-0"
                        src={profileImg}
                    />
                    <div
                        className="rounded-2xl rounded-bl-sm px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-slate-400 border border-cyan-500/20"
                        style={{
                            background:
                                'linear-gradient(135deg, #0f2744, #0a1e38)',
                        }}
                    >
                        <span className="inline-flex gap-1">
                            <span className="animate-bounce [animation-delay:0ms]">
                                ●
                            </span>
                            <span className="animate-bounce [animation-delay:150ms]">
                                ●
                            </span>
                            <span className="animate-bounce [animation-delay:300ms]">
                                ●
                            </span>
                        </span>
                    </div>
                </div>
            )}

            <div ref={bottomRef} />
        </div>
    )
}

export default ChatBotMessageBox
