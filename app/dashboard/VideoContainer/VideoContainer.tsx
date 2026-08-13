import { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../../lib/constants/API_constants";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { setVideoList } from "@/app/lib/redux-store/videoSlice";
import CommentsContainer from "../../shared_Components/Comments/CommentsContainer";

export default function VideoContainer() {


    const dispatch = useDispatch();
    const videoList = useSelector((state: any) => state.videos.videoList);
    useEffect(() => {
        getVideoData();
    }, [])

    const getVideoData = async () => {
        try {
            const response = await fetch(YOUTUBE_API_URL);
            const data = await response.json();
            dispatch(setVideoList(data['items']));

        } catch (error) {
            console.error("Error fetching video data:", error);
        }
    };



    return (
        <div className="w-full h-full p-4 mt-2">
            <h2 className="text-2xl font-bold mb-4">Recommended</h2>
            {videoList && videoList.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {videoList.map((video: any, index: number) => (
                        <VideoCard key={index} video={video} />
                    ))}
                </div>
            ) : (
                <div className="p-6 text-center text-gray-500 bg-white rounded-md shadow-sm">No videos available.</div>
            )}
        </div>
    );
}