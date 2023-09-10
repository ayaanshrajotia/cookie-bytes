import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="bg-green-950 text-white font-poppins py-8">
                <div className="container flex flex-col md:flex-row justify-between md:max-w-[85vw] mx-auto mb-4 py-6">
                    {/* About Us */}
                    <div className="basis-[40%] pr-8">
                        <h1 className="text-2xl font-raleway font-bold mb-3">
                            About Us
                        </h1>
                        <div className="flex items-center mb-2 -ml-4">
                            <img
                                src="/images/logo.png"
                                alt=""
                                className="w-20"
                            />
                            <Link
                                href="/"
                                className={`font-bold font-raleway text-2xl -ml-2 mr-8`}
                            >
                                AgriConnect
                            </Link>
                        </div>
                        <p className="font-poppins font-light mb-4 text-justify pr-10">
                            Bridging Farmers & Suppliers. Our platform
                            simplifies agricultural shopping in India,
                            connecting farmers with a vast range of fertilizers,
                            manures, and farming essentials. Real-time stock
                            updates, user-friendly cart management, and flexible
                            scheduling save farmers valuable time. Registration
                            is easy and secure, requiring only an ID card.
                            Sellers benefit from automated transaction tracking.
                            Join AgriLink India to streamline your agricultural
                            supply needs today!
                        </p>
                        <div className="flex gap-4 mb-4">
                            <Mail />
                            <span>agriconnect@gmail.com</span>
                        </div>
                        <div className="flex gap-4">
                            <Phone />
                            <span>+91 9876789878</span>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div className=" basis-[20%] pr-8">
                        <h1 className="text-2xl font-raleway font-bold mb-3">
                            Quick Links
                        </h1>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/about"
                                    className="hover:text-gray-400"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="hover:text-gray-400"
                                >
                                    Products
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="hover:text-gray-400"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/terms"
                                    className="hover:text-gray-400"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="basis-[40%] pr-8">
                        <h1 className="text-2xl font-raleway font-bold mb-3">
                            Subscribe to our newsletter
                        </h1>
                        <p className="font-poppins font-light mb-4">
                            Join our subscriber list to get the latest news,
                            updates, and special offers delivered directly to
                            your inbox.
                        </p>
                        <div className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="py-2 px-3 bg-gray-900 text-white rounded-lg focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Your email"
                                className="py-2 px-3 bg-gray-900 text-white rounded-lg focus:outline-none"
                            />
                            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="flex items-center justify-center p-8 border-t-[1px] border-gray-600 bg-green-950 text-white font-poppins">
                <span className="text-sm text-gray-300">
                    Copyright © 2023 AgriConnect
                </span>
            </div>
        </div>
    );
};

export default Footer;
