"use client";


import { useSelector } from "react-redux"
import PlaylistVideosList from "../shared_Components/playListVideos";


export default function History() {

  const historyVideos = useSelector((state: any) => state.videos.historyVideos);
  return (


    <div>
      <div className="flex">
        <div className="p-4 w-[70%]">
          <PlaylistVideosList playList={historyVideos} />

        </div>
      </div>
    </div >
  );
}
