"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

// icons
import { ShoppingBag, Globe, UserCircle2 } from "lucide-react";
import SearchBar from "./UI/SearchBar";

const Header = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        // Check if we're on the client side before accessing the window object
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 60) {
                    handleShow(true);
                } else {
                    handleShow(false);
                }
            });
        }
        // Clean up the event listener when the component unmounts
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", () => {
                    // Remove the scroll event listener
                });
            }
        };
    }, []);

    return (
        <nav
            className={`sticky top-0 ${
                show && "bg-emerald-950"
            } ease-in duration-150 transition-colors`}
        >
            <div className="flex items-center justify-between p-4 md:max-w-[85vw] mx-auto">
                <div className="flex items-center">
                    <Link
                        href="/"
                        className={`font-bold font-raleway text-2xl mr-8 ${
                            show && "text-white"
                        }`}
                    >
                        AgriConnect
                    </Link>
                    <div className=" w-full md:block md:w-auto">
                        <ul className="flex flex-col p-4 font-poppins md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:gap-8 md:mt-0 md:border-0 md:bg-transparent md:text-base ">
                            <li
                                className={`block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:text-zinc-700 md:hover:bg-transparent bg-blue-700 rounded md:bg-transparent md:p-0 cursor-pointer ${
                                    show && "text-white"
                                }`}
                            >
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li
                                className={`block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:text-zinc-700 md:hover:bg-transparent bg-blue-700 rounded md:bg-transparent md:p-0 cursor-pointer ${
                                    show && "text-white"
                                }`}
                            >
                                Products
                            </li>
                            <li
                                className={`block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:text-zinc-700 md:hover:bg-transparent bg-blue-700 rounded md:bg-transparent md:p-0 cursor-pointer ${
                                    show && "text-white"
                                }`}
                            >
                                <Link href={"/aboutus"}>About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex w-full md:flex md:w-auto md:gap-6">
                    <SearchBar />
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:gap-6 md:items-center md:mt-0 md:border-0 md:bg-transparent">
                        <li className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:text-white md:hover:bg-transparent text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 cursor-pointer">
                            <UserCircle2
                                className={`text-lg ${show && "text-white"}`}
                            />
                        </li>
                        <li className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:text-white md:hover:bg-transparent text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 cursor-pointer">
                            <Globe
                                className={`text-lg ${show && "text-white"}`}
                            />
                        </li>
                        <li className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:text-white md:hover:bg-transparent text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 cursor-pointer">
                            <ShoppingBag
                                className={`text-lg ${show && "text-white"}`}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
