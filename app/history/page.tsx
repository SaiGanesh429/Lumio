"use client";


import { useSelector } from "react-redux"
import PlaylistVideosList from "../shared_Components/playListVideos";


export default function History() {

  const historyVideos = useSelector((state: any) => state.videos.historyVideos);
  return (


    <div>
      <div className="flex">
        <div className="p-4 w-full">
          {historyVideos?.length > 0 ? (
            <PlaylistVideosList playList={historyVideos} />
          ) : (
            <div className="flex flex-col items-center justify-center p-10 border border-dashed border-gray-200 rounded-md bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M16 3v4M8 3v4m-4 6h16" />
              </svg>
              <h2 className="mt-4 text-lg font-semibold">No videos watched yet</h2>
              <p className="mt-2 text-sm text-gray-500">Your watched videos will appear here when you view them.</p>
            </div>
          )}

        </div>
      </div>
    </div >
  );
}
