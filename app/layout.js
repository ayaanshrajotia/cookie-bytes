import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { ContextProvider } from "@/context/popupContext";
import { LoginContextProvider } from "@/context/loginContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
    title: "AgriConnect",
    type:
        'Introducing "AgriConnect India" - Your Virtual Farming Link Hub!',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-[#F6F6F9]">
                <LoginContextProvider>
                    <ContextProvider>
                        <Header />
                        {children}
                        <Footer />
                        <Toaster />
                    </ContextProvider>
                </LoginContextProvider>
            </body>
        </html>
    );
}
