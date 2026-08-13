"use client";

import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

export default function SideContainer() {

    const isMenuOpen = useSelector((state: any) => state.app.isSideNavBarOpen);
    const sideNavItems = [
        { name: "Home", icon: "🏠", list: [], link: "/dashboard" },
        { name: "Trending", icon: "🔥", list: [] },
        {
            name: "Subscriptions",
            icon: "📺",
            list: [
                { name: "Music", icon: "🎵" },
                { name: "Sports", icon: "🏀" },
                { name: "Gaming", icon: "🎮" },
            ],
        },
        { name: "Library", icon: "📚", list: [] },
        { name: "History", icon: "🕒", list: [], link: "/history" },
        { name: "Your Videos", icon: "🎥", list: [] },
        { name: "Watch Later", icon: "⏰", list: [] },
        { name: "Liked Videos", icon: "👍", list: [] },
        { name: "Show More", icon: "⬇️", list: [] },
    ];

    const pathname = usePathname();

    return (isMenuOpen && (
        <div className="w-60 h-full bg-white p-2">
            <ul>
                {sideNavItems.map((item, index) => (
                    <React.Fragment key={index}>
                        {item?.link ? (
                            (() => {
                                const isActive = pathname === item.link || pathname?.startsWith(item.link + "/");
                                return (
                                    <Link href={item.link} className={`flex items-center gap-2 p-2 rounded ${isActive ? 'bg-red-50 text-red-600 font-semibold' : 'hover:bg-gray-200 text-gray-800'}`}>
                                        <span>{item.icon}</span>
                                        <span className="font-medium">{item.name}</span>
                                    </Link>
                                )
                            })()
                        ) : (
                            <li className="flex items-center gap-2 p-2 hover:bg-gray-200 text-gray-800">
                                <span>{item.icon}</span>
                                <span className="font-medium">{item.name}</span>
                            </li>
                        )}

                        {item.list.length > 0 && (
                            <ul className="ml-6">
                                {item.list.map((subItem, subIndex) => (
                                    <li
                                        key={subIndex}
                                        className="flex items-center gap-2 p-2 hover:bg-gray-200"
                                    >
                                        <span>{subItem.icon}</span>
                                        <span>{subItem.name}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    ))
}