import { useState } from "react";
import Card from "../ui/Card";
import { RiRobot2Fill } from "react-icons/ri";

const AiAssistant = () => {

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const sendMessage = () => {

        if (!input.trim() || isLoading) return;

        const userMessage = {
            role: "user",
            content: input,
        };

        setMessages((prev) => [...prev, userMessage]);

        setInput("");
        setIsLoading(true);

        setTimeout(() => {

            const aiMessage = {
                role: "assistant",
                content:
                    "I'm currently unable to assist with your questions. Full AI-powered responses will be available once the backend is integrated.",
            };

            setMessages((prev) => [...prev, aiMessage]);

            setIsLoading(false);

        }, 300);
    };



    return (
        <Card className="p-0 overflow-hidden">

            {/* Chatbot Header */}

            <div className="flex items-center gap-4 p-5 border-b border-slate-800">

                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <RiRobot2Fill className="text-blue-400 text-2xl" />
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-white">
                        JobTrack AI
                    </h2>

                    <p className="text-sm text-slate-500">
                        Your personal job search assistant
                    </p>
                </div>

            </div>


            {/* Chat Content */}

            {messages.length === 0 ? (

                <div className="text-center px-5 py-12">

                    <div className="text-4xl text-center">
                        🤖
                    </div>

                    <h2 className="text-2xl font-semibold text-white mt-4">
                        Hi Naman, I'm JobTrack AI
                    </h2>

                    <p className="text-slate-400 mt-3">
                        How can I help with your job search today?
                    </p>

                </div>

            ) : (

                <div className="p-5 space-y-4">

                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.role === "user"
                                ? "justify-end"
                                : "justify-start"
                                }`}
                        >

                            <div
                                className={
                                    message.role === "user"
                                        ? "bg-blue-600 text-white p-4 rounded-xl"
                                        : "bg-slate-800 text-slate-200 p-4 rounded-xl"
                                }
                            >
                                {message.content}
                            </div>

                        </div>
                    ))}

                </div>

            )}

            {/* Input */}

            <form onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
            }}
                className="p-5 border-t border-slate-800" >

                <div className="flex gap-2 bg-slate-800 p-2 rounded-xl">

                    <input
                        type="text"
                        placeholder="Ask JobTrack Assistant anything..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 bg-transparent px-3 text-white outline-none"
                    />

                    <button
                        type="submit"
                        className="px-5 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
                    >
                        Send
                    </button>

                </div>

            </form>

             {/* Suggested Prompts */}

            <div className="flex flex-wrap justify-center gap-3 px-5 pb-6">

                <button
                    type="button"
                    className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-500"
                >
                    Improve my resume
                </button>

                <button
                    type="button"
                    className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-500"
                >
                    Prepare for interview
                </button>

                <button
                    type="button"
                    className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-500"
                >
                    Write a cover letter
                </button>

                <button
                    type="button"
                    className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-500"
                >
                    Give me career advice
                </button>

            </div>


        </Card>
    );
};

export default AiAssistant;
// 🤖

