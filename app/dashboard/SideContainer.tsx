"use client";

import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

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
        { name: "History", icon: "🕒", list: [] },
        { name: "Your Videos", icon: "🎥", list: [] },
        { name: "Watch Later", icon: "⏰", list: [] },
        { name: "Liked Videos", icon: "👍", list: [] },
        { name: "Show More", icon: "⬇️", list: [] },
    ];

    return (isMenuOpen && (
        <div className="w-60 h-full bg-white p-2">
            <ul>
                {sideNavItems.map((item, index) => (
                    <React.Fragment key={index}>
                        {item?.link
                            ? (
                                <Link href={item.link} className="flex items-center gap-2 p-2 hover:bg-gray-200">
                                    <span>{item.icon}</span>
                                    <span className="font-medium bold">{item.name}</span>
                                </Link>
                            ) :
                            (
                                <li className="flex items-center gap-2 p-2 hover:bg-gray-200">
                                    <span>{item.icon}</span>
                                    <span className="font-medium bold">{item.name}</span>
                                </li>
                            )
                        }

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