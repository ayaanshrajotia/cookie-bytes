"use client";

import { slots } from "@/database/slot";
import React, { useContext, useEffect, useState } from "react";
import SellerProductCard from "@/components/Cards/SellerProductCard";
import SlotProductCard from "@/components/Cards/SlotProductCard";
import SellerSlotCard from "@/components/Cards/SellerSlotCard";

const Page = () => {
    const [user, setUser] = useState("");
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user);
    }, []);

    const sellerSlots = slots.filter((slot) => {
        return slot.sellerId === user.sellerId;
    });

    return (
        <div className="bg-[#F6F6F9] basis-full p-6 px-10">
            <h1 className="text-4xl font-poppins font-bold mb-8">My Orders</h1>
            <div className="bg-white p-6 px-8 rounded-md shadow-md">
                <div className="flex justify-between px-4 pb-4 mb-5 border-b-[1px] border-gray-400">
                    <h1 className="font-poppins text-lg font-medium text-gray-400 self-start">
                        Slot ID
                    </h1>
                    <h1 className="font-poppins text-lg font-medium text-gray-400">
                        Status
                    </h1>
                    <h1 className="font-poppins text-lg font-medium text-gray-400">
                        Date
                    </h1>
                    <h1 className="font-poppins text-lg font-medium text-gray-400">
                        Price
                    </h1>
                </div>
                {sellerSlots.map((slot) => (
                    <SellerSlotCard
                        key={slot.slotId}
                        slotid={slot.slotId}
                        status={slot.slotStatus}
                        date={slot.date}
                        price={slot.slotPrice}
                    />
                ))}
                {/* <SlotCard
                    slotid={12345678}
                    status={"Completed"}
                    date={"11/09/2023"}
                    price={2000}
                />
                <SlotCard
                    slotid={12341512}
                    status={"Completed"}
                    date={"11/09/2023"}
                    price={1000}
                />
                <SlotCard
                    slotid={42464575}
                    status={"Pending"}
                    date={"11/09/2023"}
                    price={3400}
                />
                <SlotCard
                    slotid={85746253}
                    status={"Completed"}
                    date={"11/09/2023"}
                    price={5600}
                />
                <SlotCard
                    slotid={41254657}
                    status={"Complted"}
                    date={"11/09/2023"}
                    price={6500}
                /> */}
            </div>
        </div>
    );
};

export default Page;
