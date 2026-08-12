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
        <div className="p-2 flex justify-between text-center items-center w-full">
            <Link href="/dashboard" className="flex gap-2 items-center" >
                <img src="/menu.png" alt="Menu" className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
                <img src="/Lumio_Logo_Monochrome.png" alt="Logo" className="w-40 h-18" />
            </Link>
            <div className="flex flex-column items-center w-[37rem]">
                <div className="flex w-full flex-row">
                    <div className="w-full">
                        <input type="text" placeholder="Search here..."
                            value={autoSuggestQuery}
                            onChange={(e) => {
                                setAutoSuggestQuery(e.target.value);
                                setSearchQuery(e.target.value);
                                setShowSuggestion(true);
                            }}
                            onFocus={() => setShowSuggestion(true)}
                            onBlur={() => setTimeout(() => setShowSuggestion(false), 200)}
                            className=" p-2 w-full p-2 text-black placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-l-full" />
                    </div>
                    <button className="border border-gray-500 border-l-0 rounded-r-full p-2 w-10" onClick={() => getSearchResuts()}>🔍</button>
                </div>
                <div className="absolute bg-white text-black w-[35rem] rounded-lg mt-112 z-10">
                    {showSuggestion &&
                        <ul className="list-none p-2">
                            {
                                autoSuggestResults && autoSuggestResults?.length > 0 && autoSuggestResults.map((result: any, index: number) => (
                                    <li key={index} onClick={() => handleAutoSuggestSearch(result)}
                                        className="flex p-1 p-2 hover:bg-gray-200 cursor-pointer">🔍 {result}</li>
                                ))
                            }
                        </ul>}

                </div>
            </div>

            <div>
                <div>
                    <img src="https://yt3.ggpht.com/yti/ANjgQV9jxvdwyeKTogLZwtc1rKNwUzth0dl7S837oIkrl55bIgf4=s88-c-k-c0x00ffffff-no-rj" alt="Logo" className="w-8 h-8 rounded-full" />
                </div>
            </div>
        </div>
    );
}