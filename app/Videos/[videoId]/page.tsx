"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import PlayListVideos from "./playlistVideos";
import CommentsContainer from "./CommentsContainer";


export default function VideoPage() {
    const { videoId } = useParams<{ videoId: string }>();

    const selectedVideo = useSelector((state: any) => state.videos.selectedVideo);

    return (
        <div>
            <div className="flex  min-h-screen py-2">
                <div className="p-4">
                    <div>
                        <iframe width="760"
                            height="420"
                            src={`https://www.youtube.com/embed/${videoId}?si=mQizzeLqhFeojYlm`}
                            title="YouTube video player"
                            frameBorder="0" allow="accelerometer;
                  autoplay; clipboard-write; encrypted-media; gyroscope; 
                  picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>

                    <p className="p-2 text-[1.2rem] break-words [text-wrap:auto] font-semibold">{selectedVideo?.snippet?.title}</p>

                    <div>
                        <CommentsContainer />
                    </div>

                </div>
                <div>
                    <PlayListVideos />
                </div>
            </div>


        </div>

    );
}
