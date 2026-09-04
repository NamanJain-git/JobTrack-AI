import { useState } from "react";
import Card from "../ui/Card";
import { RiRobot2Fill } from "react-icons/ri";

const AiAssistant = ({ onChatStart }) => {

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const sendMessage = () => {

        if (!input.trim() || isLoading) return;
        onChatStart();
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
        <Card
            className={`p-0 overflow-hidden flex flex-col 
                ${messages.length > 0 ? "h-[calc(100vh-220px)]" : ""}`}>

            <div className="flex items-center gap-4 px-4 py-3 border-b border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <RiRobot2Fill className="text-blue-400 text-2xl" />
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-white"> JobTrack AI </h2>
                    <p className="text-sm text-slate-500"> Your personal job search assistant </p>
                </div>
            </div>

            {messages.length === 0 ? (
                <div className="text-center px-4 py-8">
                    <div className="text-4xl text-center"> 🤖 </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-white mt-4"> Hi Naman, I'm JobTrack AI </h2>
                    <p className="text-slate-400 text-sm sm:text-base mt-3"> How can I help with your job search today? </p>
                </div>
            ) : (
                <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                    {messages.map((message, index) => (
                        <div key={index} className={`flex ${message.role === "user"
                            ? "justify-end" : "justify-start"
                            }`}>

                            <div className={`max-w-[85%] break-words
                            ${message.role === "user"
                                    ? "bg-blue-600 text-white p-3 sm:p-4 rounded-xl"
                                    : "bg-slate-800 text-slate-200 p-3 sm:p-4 rounded-xl"
                                }`} >
                                {message.content}
                            </div>
                        </div>
                    ))}
                </div>
            )
            }

            <form onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
            }}
                className="px-4 py-3 border-t border-slate-800">

                <div className="flex gap-2 bg-slate-800 p-2 rounded-xl min-w-0">
                    <input
                        type="text" placeholder="Ask JobTrack Assistant anything..." value={input}
                        onChange={(e) => setInput(e.target.value)} className="min-w-0 flex-1 bg-transparent px-2 sm:px-3 text-white outline-none"
                    />

                    <button type="submit" className="px-3 sm:px-5 h-12 shrink-0 bg-blue-600 hover:bg-blue-700 rounded-lg text-white" >
                        Send
                    </button>
                </div>
            </form>

        </Card >
    );
};

export default AiAssistant;