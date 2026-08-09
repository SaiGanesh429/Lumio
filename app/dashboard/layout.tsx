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
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <StoreProvider>
          <Header />
          <div className="flex">
            <SideContainer />
            {children}
          </div>

        </StoreProvider>
      </body>
    </html>
  );
}
