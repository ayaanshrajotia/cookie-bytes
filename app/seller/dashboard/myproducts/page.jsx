"use client";

import React, { useContext } from "react";
import SellerProductCard from "@/components/Cards/SellerProductCard";
import { fertilizers, products } from "@/database/productsList";
import { Plus } from "lucide-react";
import { LoginContext } from "@/context/loginContext";

const Page = () => {
    const { user } = useContext(LoginContext);
    console.log(user);
    return (
        <div className="bg-[#F6F6F9]0 basis-full p-6 px-10">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-poppins font-bold">My Products</h1>
                <button className="flex gap-2 items-center bg-green-900 text-white p-2 px-4 rounded-md">
                    <Plus />
                    <span className="text-xl font-poppins">Add</span>
                </button>
            </div>
            <div>{user && products
                    .filter((product) => {
                        return product.sellerId === user?.sellerId;
                    })
                    .map((product, idx) => (
                        <SellerProductCard
                            key={product.id}
                            id={product.id}
                            productName={product.productName}
                            price={product.price}
                            quantity={product.quantity}
                            image={product.image}
                            license={product.licence}
                            sellCount={product.sellCount}
                        />
                    ))}
                
            </div>
        </div>
    );
};

export default Page;
