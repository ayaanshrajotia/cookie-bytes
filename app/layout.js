import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { ContextProvider } from "@/context/loginContext";

export const metadata = {
    title: "AgriConnect",
    description:
        'Introducing "AgriConnect India" - Your Virtual Farming Link Hub!',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-gray-100">
                <ContextProvider>
                    <Header />
                    {children}
                    <Footer />
                </ContextProvider>
            </body>
        </html>
    );
}
