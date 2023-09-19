"use client";

import SlotCard from "@/components/Cards/SellerSlotCard";
import { LoginContext } from "@/context/loginContext";
import { slots } from "@/database/slot";
import React, { useContext, useEffect, useState } from "react";

const Page = () => {
    const [user, setUser] = useState("");
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user);
    }, []);

    const sellerSlots = slots.filter((slot) => {
        return slot.customerId === user.customerId;
    });

    console.log(sellerSlots);

    return (
        <div className="bg-[#F6F6F9] basis-full p-6 px-10">
            <h1 className="text-4xl font-poppins font-bold mb-8">My Orders</h1>
   
        </div>
    );
};

export default Page;
