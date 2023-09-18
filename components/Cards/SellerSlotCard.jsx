"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SellerSlotCard = ({ slotid, status, date, price }) => {
    const router = useRouter();
    return (
        <div
            className=" w-full rounded-md p-2 my-4 cursor-pointer hover:scale-[1.01] transition-all"
            onClick={() => router.push(`/seller/dashboard/myorders/` + slotid)}
        >
            <div className="flex items-center justify-between font-poppins text-lg">
                <div className="">#{slotid}</div>
                <div className="">
                    <div className="bg-red-200 p-1 px-4 text-red-600 font-medium rounded-md w-fit">
                        {status}
                    </div>
                </div>
                <div>{date}</div>
                <div className="">₹{price}</div>
            </div>
        </div>
    );
};

export default SellerSlotCard;
