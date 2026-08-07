"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import ReduxStore from "./reduxStore";

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const storeRef = useRef(null);



    return <Provider store={ReduxStore}>{children}</Provider>;
}