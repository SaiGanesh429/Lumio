
"use Client";

import generateRandomName from "@/app/lib/helper";
import { setLiveChat } from "@/app/lib/redux-store/liveChatSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function LiveChat({ name, message }: any) {
    return (
        <div className="flex items-start gap-3">
            <img
                src="https://yt4.ggpht.com/cufSpAi6Fw45efWR5y5_OH1WxINIIS5cKO6GWy9mL7a5TTiLejflIF0umYx4gBV14VIwjD46omk=s32-c-k-c0x00ffffff-no-rj"
                alt="avatar"
                className="w-8 h-8 rounded-full shrink-0"
            />
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900">{name}</span>
                    <span className="text-[11px] text-gray-400">now</span>
                </div>
                <div className="mt-1 text-sm text-gray-800 bg-gray-100 rounded-lg px-3 py-1 inline-block max-w-[95%] break-words">
                    {message}
                </div>
            </div>
        </div>
    );
}

export default function LiveCommentSection(chatData: any) {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();

    const sendChatMessage = (message: string) => {
        if (!message || !message.trim()) return;
        dispatch(
            setLiveChat({
                name: generateRandomName(),
                message: message.trim(),
            } as any)
        );
    };

    const liveChatFromStore = useSelector((store: any) => store.liveChat) || { liveChat: [] };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        sendChatMessage(liveMessage);
        setLiveMessage("");
    };

    return (
        <div className="flex flex-col bg-white border border-gray-200 rounded-md shadow-sm w-full h-[520px] max-h-[70vh]">
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <h3 className="text-sm font-semibold">Live Chat</h3>
                    <span className="ml-2 text-xs text-gray-500">• Live</span>
                </div>
                <div className="text-xs text-gray-500">1.2K watching</div>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 flex flex-col-reverse">
                {liveChatFromStore.liveChat?.length ? (
                    liveChatFromStore.liveChat.map((liveChat: any, index: any) => (
                        <LiveChat key={index} name={liveChat.name} message={liveChat.message} />
                    ))
                ) : (
                    <div className="text-center text-sm text-gray-400">No messages yet — be the first!</div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="px-3 py-2 border-t border-gray-100 flex items-center gap-2">
                <input
                    value={liveMessage}
                    onChange={(e) => setLiveMessage(e.target.value)}
                    placeholder="Say something..."
                    className="flex-1 bg-gray-50 text-sm rounded-full border border-gray-200 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-red-300"
                />
                <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold disabled:opacity-50"
                    disabled={!liveMessage.trim()}
                >
                    Send
                </button>
            </form>
        </div>
    );
}