import "../globals.css";
import Header from "./Header";
import StoreProvider from "../lib/redux-store/StoreProvider";
import SideContainer from "./SideContainer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <div>
      {children}
    </div>

  );
}
