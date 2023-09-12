"use client";

import { PopupContext } from "@/context/popupContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

// icons
import { X } from "lucide-react";
import { LoginContext } from "@/context/loginContext";
import { users } from "@/database/users";
import { toast } from "react-hot-toast";

const LoginPopup = () => {
    const { setIsLoginOpen } = useContext(PopupContext);
    const { user, setUser } = useContext(LoginContext);
    // const [user, setUser] = useState(null);
    const [userData, setUserData] = useState({
        phone_number: "",
        password: "",
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user);
        console.log(user);
    }, [setUser]);

    const handleLogin = (e) => {
        e.preventDefault();
        const existUser = users.find(
            (user) => user.phone_no === parseInt(userData.phone_number)
        );

        if (!existUser) {
            console.log("User not found");
            toast.error("User not found");
        }

        if (existUser && existUser.password !== userData.password) {
            console.log("Invalid credentails");
            toast.error("Invalid Credentials");
        }

        if (existUser && existUser.password === userData.password) {
            // setUser(existUser);
            setIsLoginOpen((prev) => !prev);
            localStorage.setItem("user", JSON.stringify(existUser));
            setUser(existUser);
            toast.success("Login Succesfully");
        }

        console.log(user);
    };

    return (
        <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex w-[700px] shadow-lg rounded-md">
            <X
                className="absolute z-[10] right-2 top-2 cursor-pointer"
                onClick={() => setIsLoginOpen((prev) => !prev)}
            />
            <div className="bg-[#f4f4f4] p-4 basis-[400px] rounded-l-xl flex items-center relative">
                <Image
                    src="/images/login.svg"
                    alt=""
                    fill
                    className="w-full absolute p-4"
                />
            </div>
            <div className="login p-6 bg-white basis-full rounded-r-lg">
                <h1 className="text-4xl font-poppins font-bold mb-4 text-center">
                    Login
                </h1>
                <form className="flex flex-col items-center mt-6">
                    <div className="relative z-0 w-full mb-7 group">
                        <input
                            data-lpignore
                            type="text"
                            name="floating_number"
                            id="floating_number"
                            className="block py-2.5 px-0  w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                            placeholder=" "
                            required
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    phone_number: e.target.value,
                                })
                            }
                        />
                        <label
                            htmlFor="floating_number"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-300 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Phone Number
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            data-lpignore
                            type="password"
                            name="floating_password"
                            id="floating_password"
                            className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" "
                            required
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    password: e.target.value,
                                })
                            }
                        />
                        <label
                            htmlFor="floating_password"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Password
                        </label>
                    </div>
                    <span className="text-sm">
                        Doesnt have an account?{" "}
                        <Link href="/customer/register" className="font-bold">
                            Register
                        </Link>
                    </span>
                    <button
                        type="submit"
                        className="text-white bg-gray-700 mt-4 font-medium rounded-md text-base w-full px-5 py-2 text-center"
                        onClick={(e) => {
                            handleLogin(e);
                        }}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPopup;
