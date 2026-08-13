"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleSideNavBar } from "../lib/redux-store/appSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { YOU_TUBE_API_KEY, YOUTUBE_SEARCH_API_URL, YOUTUBE_SEARCH_SUGGESTIONS_API_URL } from "../lib/constants/API_constants";
import { setVideoList } from "../lib/redux-store/videoSlice";
import { cacheAutoSuggestResults } from "../lib/redux-store/SearchSlice";


export default function Header() {

    const [autoSuggestQuery, setAutoSuggestQuery] = useState("");
    const [autoSuggestResults, setAutoSuggestResults] = useState<any>([]);
    const [showSuggestion, setShowSuggestion] = useState(false);

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<any>([]);

    const cacheSearchResults = useSelector((state: any) => state.Search);

    const dispatch = useDispatch();
    const toggleMenu = () => { dispatch(toggleSideNavBar()); }

    const getAutoSuggestResults = async () => {
        const autoSuggestURL = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API_URL + autoSuggestQuery);
        const autoSuggestResults = await autoSuggestURL.json();
        dispatch(cacheAutoSuggestResults({ [autoSuggestQuery]: autoSuggestResults[1] }));
        setAutoSuggestResults(autoSuggestResults[1]);
        setShowSuggestion(true);
    };


    const handleAutoSuggestSearch = (result: string) => {
        setSearchQuery(result)
        setAutoSuggestQuery(result);
        setAutoSuggestResults([]);
        setShowSuggestion(false);
    }

    const getSearchResuts = async () => {
        const searchURL = await fetch(YOUTUBE_SEARCH_API_URL + searchQuery + '&key=' + YOU_TUBE_API_KEY);
        const searchResults = await searchURL.json();
        setSearchResults(searchResults['items']);
        dispatch(setVideoList(searchResults['items']))
    }

    useEffect(() => {
        if (showSuggestion && autoSuggestQuery.length > 0) {
            const timer = setTimeout(() => {
                if (autoSuggestQuery.length > 0) {
                    if (cacheSearchResults[autoSuggestQuery]) {
                        setAutoSuggestResults(cacheSearchResults[autoSuggestQuery]);
                    } else {
                        getAutoSuggestResults();
                    }
                }
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [autoSuggestQuery]);



    return (
        <div className="bg-white shadow-sm sticky top-0 z-40">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center p-3">
                <div className="flex items-center gap-3">
                    <button onClick={toggleMenu} className="p-1 rounded hover:bg-gray-100">
                        <img src="/menu.png" alt="Menu" className="w-6 h-6" />
                    </button>
                    <Link href="/dashboard" className="flex items-center">
                        <img src="/Lumio_Logo_Monochrome.png" alt="Logo" className="w-36 h-10 object-contain" />
                    </Link>
                </div>

                <div className="flex-1 max-w-[640px] mx-6">
                    <div className="relative">
                        <div className="flex">
                            <input type="text" placeholder="Search here..."
                                value={autoSuggestQuery}
                                onChange={(e) => {
                                    setAutoSuggestQuery(e.target.value);
                                    setSearchQuery(e.target.value);
                                    setShowSuggestion(true);
                                }}
                                onFocus={() => setShowSuggestion(true)}
                                onBlur={() => setTimeout(() => setShowSuggestion(false), 200)}
                                className="w-full p-2 text-black placeholder:text-gray-400 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 rounded-l-full" />
                            <button className="bg-white border-gray-200 hover:bg-gray-400 text-white rounded-r-full px-4" onClick={() => getSearchResuts()}>🔍</button>
                        </div>

                        {showSuggestion && (
                            <div className="absolute left-0 right-0 mt-1 bg-white text-black rounded-lg shadow z-50">
                                <ul className="list-none p-2">
                                    {autoSuggestResults && autoSuggestResults?.length > 0 && autoSuggestResults.map((result: any, index: number) => (
                                        <li key={index} onClick={() => handleAutoSuggestSearch(result)} className="flex p-2 hover:bg-gray-100 cursor-pointer">🔍 {result}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <img src="https://yt3.ggpht.com/yti/ANjgQV9jxvdwyeKTogLZwtc1rKNwUzth0dl7S837oIkrl55bIgf4=s88-c-k-c0x00ffffff-no-rj" alt="Logo" className="w-9 h-9 rounded-full" />
                </div>
            </div>
        </div>
    );
}