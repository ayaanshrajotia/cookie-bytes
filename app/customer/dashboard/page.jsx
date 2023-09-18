"use client";

import { slots } from "@/database/slot";
import React from "react";

const CustomerDashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div className="flex w-full">
            <div className="bg-[#F6F6F9] basis-full p-6">
                <h1 className="text-4xl font-poppins font-bold mb-6">
                    Dashboard
                </h1>
                <p className="text-2xl">
                    Welcome, <span className="">{user.name}</span>
                </p>
            </div>
        </div>
    );
};

export default CustomerDashboard;
