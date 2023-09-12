"use client";

import ProductCard from "@/components/Cards/ProductCard";
import FilterPopup from "@/components/UI/FilterPopup";
import LoginPopup from "@/components/UI/LoginPopup";
import ProductSlider2 from "@/components/UI/ProductSlider2";
import { LoginContext, PopupContext } from "@/context/popupContext";
import { products } from "@/database/productsList";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const ProductsPage = () => {
    const router = useRouter();
    const { isLoginOpen, isFilterOpen, setIsFilterOpen } =
        useContext(PopupContext);

    // const fertilizers = products.filter((product) => product.type === "fer");
    // const insecticides = products.filter((product) => product.type === "ins");
    // const fungicides = products.filter((product) => product.type === "fung");
    // const herbicides = products.filter((product) => product.type === "herb");
    // const hybridSeeds = products.filter((product) => product.type === "hyb");
    // const pgr = products.filter((product) => product.type === "pgr");

    const shop1 = products.filter((product) => product.sellerId === 1);
    const shop2 = products.filter((product) => product.sellerId === 2);
    const shop3 = products.filter((product) => product.sellerId === 3);
    const shop4 = products.filter((product) => product.sellerId === 4);
    const shop5 = products.filter((product) => product.sellerId === 5);

    return (
        <div className="relative w-full h-full flex">
            <div
                className={`${
                    isLoginOpen ? "block" : "hidden"
                } fixed w-full h-full z-[100] backdrop-blur-xl backdrop-brightness-75`}
            >
                <LoginPopup />
            </div>
            {/* Filter Section */}
            <div
                className={`${
                    isFilterOpen ? "" : "-translate-x-full"
                } fixed w-full h-full z-[100] backdrop-brightness-75 transition-transform duration-500  ease-in-out`}
            >
                <FilterPopup />
            </div>

            <div className="p-4 max-w-[1200px] mx-auto pt-[120px]">
                <div className="flex items-center justify-between mb-10">
                    <button
                        className="  bg-green-900 text-white px-5 py-2 rounded-md font-poppins text-lg font-medium"
                        onClick={() => setIsFilterOpen((prev) => !prev)}
                    >
                        Filter
                    </button>
                    <button
                        className=" bg-green-900 text-white px-5 py-2 rounded-md font-poppins text-lg font-medium"
                        onClick={() => setIsFilterOpen((prev) => !prev)}
                    >
                        Sort By
                    </button>
                </div>
                <ProductSlider2
                    title={"Krishi Upkaran Dukan"}
                    shop={shop1}
                    shopId={"1"}
                />
                <ProductSlider2
                    title={"Khad Aur Khaad Dukaan"}
                    shop={shop2}
                    shopId={"2"}
                />
                <ProductSlider2
                    title={"Keet-Nashak Dukaan"}
                    shop={shop3}
                    shopId={"3"}
                />
                <ProductSlider2
                    title={"Krishi Yantra Dukaan"}
                    shop={shop4}
                    shopId={"4"}
                />
                <ProductSlider2
                    title={"Krishi Rasayan Dukaan"}
                    shop={shop5}
                    shopId={"5"}
                />
            </div>
        </div>
    );
};

export default ProductsPage;
