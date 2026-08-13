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

                        <div className="flex bg-gray-50">
                            <SideContainer />
                            <main className="flex-1 p-6">
                                <div className="max-w-[1200px] mx-auto">
                                    {children}
                                </div>
                            </main>
                        </div>
                    </StoreProvider>
                </div>
            </body>
        </html>
    );
}