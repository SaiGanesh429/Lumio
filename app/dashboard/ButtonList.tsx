import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_API_URL, YOUTUBE_LIVE_API_URL } from "../lib/constants/API_constants";
import { setVideoList } from "../lib/redux-store/videoSlice";
import { setSelectedCategory } from "../lib/redux-store/appSlice";

export default function ButtonList() {
    const dispatch = useDispatch();

    const list = ["All", "Game", "Music", "Movies", "Sports", "News", "Live", "Fashion & Beauty", "Learning", "Comedy"];


    const selectedCategory = useSelector((state: any) => state.app.selectedCategory);

    const handleVideoClick = async (item: any) => {
        // set global selected category so buttons stay highlighted across the page
        dispatch(setSelectedCategory(item));
        const API = item == "Live" ? YOUTUBE_LIVE_API_URL : YOUTUBE_API_URL

        const apiCall = await fetch(API);
        const result = await apiCall.json();
        dispatch(setVideoList(result.items))
    }

    return (
        list.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto py-2 px-2">
                {list.map((item, index) => {
                    const isActive = selectedCategory === item;
                    return (
                        <button
                            key={index}
                            onClick={() => handleVideoClick(item)}
                            className={`flex-shrink-0 h-9 font-semibold mr-2 px-4 rounded-full transition-colors text-sm ${isActive ? 'bg-gray-600 text-white shadow-md' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                        >
                            {item}
                        </button>
                    )
                })}
            </div>
        )
    );
}