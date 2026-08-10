import Header from "./dashboard/Header";
import SideContainer from "./dashboard/SideContainer";
import "./globals.css";
import StoreProvider from "./lib/redux-store/StoreProvider";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div>
                    <StoreProvider>

                        <Header />

                        <div className="flex">
                            <SideContainer />
                            {children}

                        </div>
                    </StoreProvider>
                </div>
            </body>
        </html>
    );
}