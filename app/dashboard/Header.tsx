
"use client";

import { useDispatch } from "react-redux";
import { toggleSideNavBar } from "../lib/redux-store/appSlice";
import Link from "next/link";


export default function Header() {
    const dispatch = useDispatch();

    const toggleMenu = () => {
        dispatch(toggleSideNavBar());
    }

    return (
        <div className="p-2 flex justify-between text-center items-center w-full">
            <Link  href="/dashboard" className="flex gap-2 items-center" >
                <img src="/menu.png" alt="Menu" className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
                <img src="/Lumio_Logo_Monochrome.png" alt="Logo" className="w-40 h-18" />
            </Link>
            <div className="flex items-center w-[37rem]">
                <div className="w-full">
                    <input type="text" placeholder="Search here..."
                        className=" p-2 w-full p-2 text-black placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-l-full" /></div>
                <div className="border border-gray-500 border-l-0 rounded-r-full p-2 w-10" >🔍</div>
            </div>
            <div>
                <div>
                    <img src="https://yt3.ggpht.com/yti/ANjgQV9jxvdwyeKTogLZwtc1rKNwUzth0dl7S837oIkrl55bIgf4=s88-c-k-c0x00ffffff-no-rj" alt="Logo" className="w-8 h-8 rounded-full" />
                </div>
            </div>
        </div>
    );
}