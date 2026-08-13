import Link from "next/link";
import { useDispatch } from "react-redux";
import { setHistoryVideos } from "../lib/redux-store/videoSlice";

type PlaylistVideo = {
    id?: { videoId?: string };
    snippet?: {
        title?: string;
        thumbnails?: {
            medium?: { url?: string };
            high?: { url?: string };

        };
    };
};

export default function PlaylistVideosList({ playList }: any) {
    const dispatch = useDispatch();
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Playlist Videos</h2>
            {playList?.length > 0 ? (
                playList.map((video: any) => {
                    const videoId: string = typeof (video.id) == "string" ? video.id : video.id?.channelId ?? video.id?.videoId ?? Math.random().toString();
                    const title = video.snippet?.title ?? "Untitled video";
                    const thumbnailUrl = video.snippet?.thumbnails?.high?.url ?? "";
                    return (
                        <Link
                            onClick={() => {
                                dispatch(setHistoryVideos(video));
                            }}
                            href={`/Videos/${videoId}`}
                            key={videoId}
                            className="mb-4 flex flex-row items-center gap-4 p-3 rounded-lg hover:bg-white shadow-sm bg-white border border-transparent hover:border-gray-100 transition"
                        >
                            <img
                                src={thumbnailUrl}
                                alt={title}
                                className="w-36 h-20 rounded-md object-cover"
                            />
                            <div className="flex-1">
                                <h3 className="text-md font-semibold text-gray-900">{title}</h3>
                                <p className="text-sm text-gray-500 mt-1">{video.snippet?.channelTitle ?? ''}</p>
                            </div>
                        </Link>
                    );
                })
            ) : (
                <div className="p-6 text-center text-gray-500">No videos in this playlist.</div>
            )}
        </div>
    );
}