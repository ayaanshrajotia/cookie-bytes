"use client";

import CustomerSlotCard from "@/components/Cards/CustomerSlotCard";
import { slots } from "@/database/slot";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [user, setUser] = useState("");
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user);
    }, []);

    const customerSlots = slots.filter((slot) => {
        return slot.customerId === user.customerId;
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
                {customerSlots.map((slot) => (
                    <CustomerSlotCard
                        key={slot.slotId}
                        slotid={slot.slotId}
                        status={slot.slotStatus}
                        date={slot.date}
                        price={slot.slotPrice}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page;
