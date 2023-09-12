import { BarChart4, FileText, Settings, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
    return (
        <div className="mt-[80px] flex min-h-screen">
            <div className="bg-white basis-[20%] p-8  border-r-[1px] border-gray-300">
                <ul className="font-poppins flex flex-col gap-6">
                    <li className=" cursor-pointer">
                        <Link
                            href={"/seller/dashboard/myorders"}
                            className="flex gap-4"
                        >
                            <FileText />
                            My Orders
                        </Link>
                    </li>
                    <li className="flex gap-4 cursor-pointer">
                        <Link
                            href={"/seller/dashboard/myproducts"}
                            className="flex gap-4"
                        >
                            <ShoppingCart />
                            My Products
                        </Link>
                    </li>
                    <li className="flex gap-4 cursor-pointer">
                        <Link
                            href={"/seller/dashboard/mysales"}
                            className="flex gap-4"
                        >
                            <BarChart4 />
                            My Sales
                        </Link>
                    </li>
                    <li className="flex gap-4 cursor-pointer">
                        <Link
                            href={"/seller/dashboard/settings"}
                            className="flex gap-4"
                        >
                            <Settings />
                            Settings
                        </Link>
                    </li>
                </ul>
            </div>
            {children}
        </div>
    );
};

export default layout;
