"use client";

import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import PlayListVideos from "./playlistVideos";
import CommentsContainer from "../../shared_Components/Comments/CommentsContainer";
import LiveCommentSection from "@/app/shared_Components/LiveComments/LiveCommentSection";
import { setLiveChat } from "@/app/lib/redux-store/liveChatSlice";
import { useEffect } from "react";
import generateRandomName, { generateRandomMessage } from "@/app/lib/helper";
import { YOU_TUBE_API_KEY, YOUTUBE_VIDEO_BY_ID } from "@/app/lib/constants/API_constants";
import { setHistoryVideos, setSelectedVideo } from "@/app/lib/redux-store/videoSlice";


export default function VideoPage() {

    const { videoId } = useParams<{ videoId: string }>();
    const selectedVideo = useSelector((state: any) => state.videos.selectedVideo);

    const dispatch = useDispatch();


    useEffect(() => {
        getVideoById();
        const timer = setInterval(() => {
            dispatch(setLiveChat({
                name: generateRandomName(),
                message: generateRandomMessage()
            } as any));
        }, 2000);

        return () => clearInterval(timer);
    }, [dispatch, videoId]);



    const getVideoById = async () => {
        if (!selectedVideo) {
            const response = await fetch(YOUTUBE_VIDEO_BY_ID + `${videoId}&key=${YOU_TUBE_API_KEY}`);
            const data = await response.json();
            dispatch(setSelectedVideo(data['items'][0]));
            dispatch(setHistoryVideos(data['items'][0]))
        }
    }

    return (
        <div>
            <div className="flex  min-h-screen py-2">
                <div className="p-4">
                    <div>
                        <iframe width="670"
                            height="420"
                            src={`https://www.youtube.com/embed/${videoId}?si=mQizzeLqhFeojYlm`}
                            title="YouTube video player"
                            frameBorder="0" allow="accelerometer;
                  autoplay; clipboard-write; encrypted-media; gyroscope; 
                  picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>

                    <p className="p-2 text-[1.2rem] wrap-break-word [text-wrap:auto] font-semibold">{selectedVideo?.snippet?.title}</p>

                    <div>
                        <CommentsContainer />
                    </div>

                </div>
                <div className="flex flex-col">
                    {selectedVideo?.snippet?.liveBroadcastContent == 'live' && (
                        <div className="an">
                            <LiveCommentSection />
                        </div>
                    )}
                    <div className="ml-16 mt-8">
                        <PlayListVideos />
                    </div>
                </div>
            </div>


        </div>

    );
}
