"use client";

import ProductCard from "@/components/Cards/ProductCard";
import FilterPopup from "@/components/UI/FilterPopup";
import LoginPopup from "@/components/UI/LoginPopup";
import { LoginContext } from "@/context/loginContext";
import React, { useContext } from "react";

const ProductsPage = () => {
    const { isLoginOpen, isFilterOpen, setIsFilterOpen } =
        useContext(LoginContext);

    return (
        <div className="relative w-full h-full flex ">
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

            <div className="p-4 max-w-[1200px] mx-auto pt-[80px]">
                <h1 className="text-5xl font-poppins font-bold my-4 text-center">
                    Fertilizers
                </h1>
                <div className="flex items-center justify-between">
                    <button
                        className="  bg-green-900 text-white px-5 py-2 rounded-md font-poppins text-xl font-medium"
                        onClick={() => setIsFilterOpen((prev) => !prev)}
                    >
                        Filter
                    </button>
                    <button
                        className=" bg-green-900 text-white px-5 py-2 rounded-md font-poppins text-xl font-medium"
                        onClick={() => setIsFilterOpen((prev) => !prev)}
                    >
                        Sort By
                    </button>
                </div>
                <div className="my-8 flex flex-wrap items-center justify-center">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
