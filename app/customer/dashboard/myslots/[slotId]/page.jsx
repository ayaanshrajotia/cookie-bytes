"use client";

import SlotProductCard from "@/components/Cards/SlotProductCard";
import { products } from "@/database/productsList";
import { slots } from "@/database/slot";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";

const Page = () => {
    const { slotId } = useParams();

    const slot = slots.filter((slot) => {
        return slot.slotId === parseInt(slotId);
    });

    const slotProducts = slot[0].products;

    const newProducts = products.filter((elem) => {
        return slotProducts.some((ele) => {
            return ele.id === elem.id;
        });
    });

    return (
        <div className="p-6 px-10 font-poppins flex flex-col gap-6 w-full">
            <div className="flex justify-between items-baseline">
                <h1 className="font-poppins font-semibold text-3xl">
                    #<span>{slot[0].slotId}</span>
                </h1>
                <div className="bg-red-200 p-1 px-4 text-red-600 font-medium rounded-md w-fit">
                    {slot[0].slotStatus}
                </div>
            </div>
            <div className="flex gap-4 items-center text-xl">
                <span>Time Remaining to collect Order - </span>
                <Countdown
                    date={Date.now() + 10000000}
                    className="font-semibold"
                />
            </div>
           
            <div className="flex justify-between">
                <h2 className="text-2xl">
                    Total Price:{" "}
                    <span className="font-semibold">
                        ₹{slot[0].slotPrice}.00
                    </span>
                </h2>
                <h2 className="text-2xl">{slot[0].date}</h2>
            </div>
            <div>
                <h1 className="text-3xl font-semibold">Products</h1>
                <div className="flex flex-wrap">
                    {newProducts.map((product, idx) => (
                        <SlotProductCard
                            key={idx}
                            id={idx}
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
