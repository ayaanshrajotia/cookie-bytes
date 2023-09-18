"use client";

import { slots } from "@/database/slot";
import React from "react";

const SellerDashboard = () => {
    const sum = slots.reduce(
        (accumulator, currentValue) => accumulator + currentValue.slotPrice,
        0
    );

    const user = JSON.parse(localStorage.getItem("user"));

    const sellerSlots = slots.filter((slot) => {
        return slot.sellerId === user.sellerId;
    });

    return (
        <div className="flex w-full">
            <div className="bg-[#F6F6F9] basis-full p-6">
                <h1 className="text-4xl font-poppins font-bold mb-6">
                    Dashboard
                </h1>
                <div className="bg-[#F6F6F9] basis-full p-6">
                    <p className="text-2xl">
                        Welcome, <span className="">{user.name}</span>
                    </p>
                </div>
                <div className="flex gap-6">
                    <div className="p-6 bg-green-200 w-fit rounded-xl shadow-lg">
                        <h1 className="text-3xl font-semibold font-poppins mb-4">
                            Total Sales
                        </h1>
                        <span className="text-4xl font-semibold">₹{sum}</span>
                    </div>
                    <div className="p-6 bg-green-200 w-fit rounded-xl shadow-lg">
                        <h1 className="text-3xl font-semibold font-poppins mb-4">
                            Total Products
                        </h1>
                        <span className="text-4xl font-semibold">
                            {sellerSlots[0].products.length}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerDashboard;
