

import Link from "next/link";

export default function VideoCard({ video }: { video: any }) {
    const videoId = typeof video.id === "string" ? video.id : video.id?.videoId ?? "";

    return (
        <Link href={`/Videos/${encodeURIComponent(videoId)}`} className="block w-80 h-64 m-2">
            <div className="w-full h-40">
                <img
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-2">
                <h3 className="text-md font-semibold">{video.snippet.title}</h3>
                <p className="text-sm text-gray-600">{video.snippet.channelTitle}</p>
            </div>
        </Link>
    );
}