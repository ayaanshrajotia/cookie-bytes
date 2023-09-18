"use client";

import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const SlotProductCard = ({ id, productName, price, quantity, image }) => {
    const router = useRouter();
    return (
        <div
            class="product-card box-border w-[16rem] bg-white rounded-lg border-[1px] border-gray-100 m-4 cursor-pointer"
            onClick={() => router.push("/products/" + id)}
        >
            <div className="flex items-center justify-center h-[12rem]">
                <img
                    className="p-4 rounded-t-lg cover h-[12rem]"
                    src={image}
                    alt="product image"
                />
            </div>
            <div class="p-5 flex flex-col ">
                <h5 class="text-lg font-semibold font-poppins text-format">
                    {productName}
                </h5>
                <div class="flex items-center">
                    <Star
                        className="text-yellow-300 mr-1 fill-yellow-300"
                        width={14}
                    />
                    <Star
                        className="text-yellow-300 mr-1 fill-yellow-300"
                        width={14}
                    />{" "}
                    <Star
                        className="text-yellow-300 mr-1 fill-yellow-300"
                        width={14}
                    />{" "}
                    <Star
                        className="text-yellow-300 mr-1 fill-yellow-300"
                        width={14}
                    />
                    <Star
                        className="text-blue-200 mr-1 fill-blue-200"
                        width={14}
                    />
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                        5.0
                    </span>
                </div>
                <div>
                    <span>{Math.floor(Math.random() * 200)}</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-2xl font-bold text-gray-900 mb-4">
                        ₹{price}
                    </span>
                </div>
                <a
                    href="#"
                    class="w-full flex text-white bg-green-900 hover:bg-green-950 font-medium font-poppins rounded-md px-5 py-2 items-center justify-center mt-auto"
                >
                    Add to cart
                </a>
            </div>
        </div>
    );
};

export default SlotProductCard;
