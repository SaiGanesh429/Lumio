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
            {playList?.length > 0 &&
                playList.map((video: any) => {
                    const videoId: string = typeof(video.id) == "string" ? video.id : video.id.channelId;
                    const title = video.snippet?.title ?? "Untitled video";
                    const thumbnailUrl = video.snippet?.thumbnails?.high?.url ?? "";
                    return (
                        <Link
                            onClick={() => {
                                dispatch(setHistoryVideos(video));
                            }}
                            href={`/Videos/${videoId}`}
                            key={videoId}
                            className="mb-4 flex flex-row items-center">
                            <img
                                src={thumbnailUrl}
                                alt={title}
                                className="mb-2 w-28 h-16 rounded-lg"
                            />
                            <h3 className="text-md p-2 font-semibold">{title}</h3>
                        </Link>
                    );
                })}
        </div>
    );
}