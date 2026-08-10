"use client";

import { YOUTUBE_API_URL, YOUTUBE_COMMENTS_API_URL } from "@/app/lib/constants/API_constants";
import { setPlayListVideos } from "@/app/lib/redux-store/videoSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function PlayListVideos() {


    const playList: [] = useSelector((state: any) => state.videos.playListVideos);
    const dispatch = useDispatch();
    useEffect(() => {
        getVideoData();
    }, [])

    9
    const playVideo = (videoId: string) => {
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        window.open(videoUrl, '_blank');
    }

    const getVideoData = async () => {
        try {
            const response = await fetch(YOUTUBE_API_URL);

            const data = await response.json();
            dispatch(setPlayListVideos(data['items']));

        } catch (error) {
            console.error("Error fetching video data:", error);
        }
    };
    return (
        <div className="flex flex-wrap">
            <div>
                <h2 className="text-xl font-bold mb-4">Playlist Videos</h2>
                {
                    playList?.length > 0 && (
                        playList.map((video: any) => (
                            <Link href={`/Videos/${video.id}`}
                                key={video.id.videoId} className="mb-4 flex flex flex-row items-center">
                                <img src={video.snippet.thumbnails.medium.url}
                                    alt={video.snippet.title} className="mb-2 w-28 h-16 rounded-lg" />
                                <h3 className="text-md p-2 font-semibold">{video.snippet.title}</h3>
                            </Link>
                        ))
                    )
                }

            </div>
        </div>
    );
}