import { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../../lib/constants/API_constants";
import VideoCard from "./VideoCard";

export default function VideoContainer() {

    const [videoData, setVideoData] = useState<any[]>([]);

    useEffect(() => {
        getVideoData();
    }, [])

    const getVideoData = async () => {
        try {
            const response = await fetch(YOUTUBE_API_URL);
            const data = await response.json();
            setVideoData(data['items']);
        } catch (error) {
            console.error("Error fetching video data:", error);
        }
    };



    return (
        <div className="w-full h-full  p-4 mt-2">
            <h2 className="text-xl font-bold mb-4">Video Container</h2>
            {/* Add your video content here */}
            {
                videoData && videoData.length > 0 ? (
                    <div className="flex flex-wrap">
                        {videoData.map((video: any, index: number) => (
                            <VideoCard key={index} video={video} />
                        ))}
                    </div>
                ) : (
                    <p>No videos available.</p>
                )}
        </div>
    );
}