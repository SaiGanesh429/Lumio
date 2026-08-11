"use client";

import { YOUTUBE_API_URL } from "@/app/lib/constants/API_constants";
import { setPlayListVideos } from "@/app/lib/redux-store/videoSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlaylistVideosList from "../../shared_Components/playListVideos";



export default function PlaylistVideosPage() {
    const playList = useSelector((state: any) => state.videos.playListVideos) as any[];
    const dispatch = useDispatch();
    useEffect(() => {
        getVideoData();
    }, [dispatch])

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
            <PlaylistVideosList playList={playList} />
        </div>
    );
}