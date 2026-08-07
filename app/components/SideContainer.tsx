"use client";

import React, { Fragment } from "react";
import { useSelector } from "react-redux";

export default function SideContainer() {

    const isMenuOpen = useSelector((state: any) => state.app.isSideNavBarOpen);
    console.log("SideBar State:", isMenuOpen);
    const sideNavItems = [
        { name: "Home", icon: "🏠", list: [] },
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
    ];

    return (isMenuOpen && (
        <div className="w-60 h-full bg-white p-2">
            <ul>
                {sideNavItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <li className="flex items-center gap-2 p-2 hover:bg-gray-200">
                            <span>{item.icon}</span>
                            <span className="font-medium bold">{item.name}</span>
                        </li>

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