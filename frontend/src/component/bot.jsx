import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { FaUserCircle } from 'react-icons/fa'

function Bot() {
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const messagesEndRef = useRef(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages])

    const handleSendMessage = async () => {
        if(!input.trim()) return;
        setLoading(true);
        try {
           const res = await axios.post("http://localhost:4002/bot/v1/message", {
                text: input
            })
            if(res.status === 200) {
                setMessages([...messages, 
                    { text: res.data.userMessage, sender: 'user' }, 
                    { text: res.data.botMessage, sender: 'bot' }
                ]);
            }
        } catch (error) {
            console.error("Error sending message:", error);
        }
        setInput("");
        setLoading(false);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSendMessage()
    }

    return (
        <div className='flex flex-col min-h-screen bg-black text-green-400 font-mono'>
            {/* Navbar */}
            <header className="fixed top-0 left-0 w-full border-b border-green-800 bg-black z-10 shadow-lg">
                <div className="container mx-auto flex justify-between items-center px-6 py-4">
                    <h1 className="text-xl font-bold text-green-500 tracking-wide">DevBot</h1>
                    <FaUserCircle size={30} className="cursor-pointer text-green-400 hover:text-green-500 transition-colors" />
                </div>
            </header>

            {/* Chat area */}
            <main className="flex-1 overflow-y-auto pt-24 pb-24 px-4 flex items-center justify-center">
                <div className="w-full max-w-4xl flex flex-col space-y-3">
                    {messages.length === 0 ? (
                        <div className="text-center text-green-600 text-lg animate-pulse">
                            💻 Welcome to <span className="text-green-400 font-bold">DevBot</span>. Ask me anything...
                        </div>
                    ) : (
                        <>
                            {messages.map((msg, idx) => (
<div
  key={idx}
  className={`px-4 py-2 rounded-xl max-w-[70%] break-words ${
    msg.sender === "user"
      ? "bg-green-900 text-green-200 self-end shadow-md"
      : "bg-gray-900 text-green-400 self-start shadow-inner"
  }`}
  dangerouslySetInnerHTML={{ __html: msg.text ? String(msg.text) : '' }}
></div>

                            ))}
                            {loading && (
                                <div className="bg-gray-900 text-green-500 px-4 py-2 rounded-xl max-w-[60%] self-start animate-pulse">
                                    Bot is typing...
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </>
                    )}
                </div>
            </main>

            {/* Input */}
            <footer className="fixed bottom-0 left-0 w-full border-t border-green-800 bg-black z-10 shadow-inner">
                <div className="max-w-4xl mx-auto flex justify-center px-4 py-3">
                    <div className="w-full flex bg-gray-900 rounded-full px-4 py-2 shadow-lg">
                        <input
                            type="text"
                            className="flex-1 bg-transparent outline-none text-green-300 placeholder-green-600 px-2"
                            placeholder="Type your command..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <button
                            onClick={handleSendMessage}
                            className="bg-green-600 hover:bg-green-500 px-4 py-1 rounded-full text-black font-bold tracking-wide transition-all"
                        >
                            SEND
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Bot
