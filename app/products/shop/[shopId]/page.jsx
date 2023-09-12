"use client";

import ProductCard from "@/components/Cards/ProductCard";
import FilterPopup from "@/components/UI/FilterPopup";
import LoginPopup from "@/components/UI/LoginPopup";
import { PopupContext } from "@/context/popupContext";
import { products } from "@/database/productsList";
import { users } from "@/database/users";
import { useParams, useRouter } from "next/navigation";
import React, { useContext } from "react";

const Page = () => {
    const router = useRouter();
    const { isLoginOpen, isFilterOpen, setIsFilterOpen } =
        useContext(PopupContext);

    const { shopId } = useParams();

    const shop = users.filter((user) => {
        return user.sellerId === parseInt(shopId);
    });

    console.log(shop[0]);

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
                <h1 className="text-4xl font-poppins text-center font-bold mb-10">
                    {shop[0].shop_name}
                </h1>
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

                <div className="my-8 flex flex-wrap">
                    {products
                        .filter((product) => {
                            return product.sellerId === parseInt(shopId);
                        })
                        .map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                productName={product.productName}
                                price={product.price}
                                quantity={product.quantity}
                                image={product.image}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
