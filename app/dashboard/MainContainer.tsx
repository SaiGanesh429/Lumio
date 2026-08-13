"use client";


import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer/VideoContainer";

export default function MainContainer() {




    return (
        <div className="w-full">
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
                <ButtonList />
            </div>
            <div>
                <VideoContainer />
            </div>
        </div>
    )
}