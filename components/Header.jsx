"use client";

import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "@/context/loginContext";

// icons
import { ShoppingBag, Globe, UserCircle2 } from "lucide-react";
import SearchBar from "./UI/SearchBar";
import Image from "next/image";

const Header = () => {
    const [show, handleShow] = useState(false);
    const { isLoginOpen, setIsLoginOpen } = useContext(LoginContext);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 40) {
                    handleShow(true);
                } else {
                    handleShow(false);
                }
            });
        }
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", () => {});
            }
        };
    }, []);

    return (
        <nav
            className={`header fixed top-0 left-0 right-0  ${
                show ? "header__scrolled" : "bg-gray-100"
            }  z-[99]`}
        >
            <div className="flex items-center justify-between p-4 md:max-w-[85vw] mx-auto h-[80px]">
                <div className="flex items-center">
                    {/* <div className="relative w-20 h-20">
                        <Image
                            src="/images/logo.png"
                            fill
                            alt=""
                            className="absolute w-full h-full"
                        />
                    </div> */}
                    <div className="flex items-center">
                        <img src="/images/logo.png" alt="" className="w-14" />
                        <Link
                            href="/"
                            className={`font-bold font-raleway text-2xl -ml-2 mr-8 ${
                                show && "text-white"
                            }`}
                        >
                            AgriConnect
                        </Link>
                    </div>
                    <div className=" w-full md:block md:w-auto">
                        <ul className="flex flex-col p-4 font-poppins md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:gap-6 md:mt-0 md:border-0 md:bg-transparent md:text-base ">
                            <li
                                className={`link block py-2 pl-3 pr-4 hover:bg-gray-100  md:hover:bg-transparent bg-blue-700 rounded md:bg-transparent md:p-0 cursor-pointer ${
                                    show && "text-white before:bg-white"
                                }`}
                            >
                                <Link href={"/"} className="cursor-pointer">
                                    Home
                                </Link>
                            </li>
                            <li
                                className={` link py-2 pl-3 pr-4 hover:bg-gray-100  md:hover:bg-transparent bg-blue-700 rounded md:bg-transparent md:p-0 cursor-pointer ${
                                    show && "text-white before:bg-white"
                                }`}
                            >
                                <Link href={"/products"}>Products</Link>
                            </li>
                            <li
                                className={`link block py-2 pl-3 pr-4 hover:bg-gray-100  md:hover:bg-transparent bg-blue-700 rounded md:bg-transparent md:p-0 cursor-pointer ${
                                    show && "text-white before:bg-white"
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
                        <li className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 cursor-pointer">
                            <UserCircle2
                                className={`text-lg ${show && "text-white"}`}
                                onClick={() => setIsLoginOpen((prev) => !prev)}
                            />
                        </li>
                        <li className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 cursor-pointer">
                            <Globe
                                className={`text-lg ${show && "text-white"}`}
                            />
                        </li>
                        <li className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 cursor-pointer">
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
