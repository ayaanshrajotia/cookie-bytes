"use client";

import { products } from "@/database/productsList";
import { Minus, Plus, Star } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

const Page = () => {
    const { productId } = useParams();
    const [quantity, setQuantity] = useState(1);

    console.log(productId);

    const product = products.find((product) => {
        return product.id === parseInt(productId);
    });

    console.log(product);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        // Counter state is decremented
        if (quantity !== 0) setQuantity(quantity - 1);
    };

    return (
        <div className="mt-[80px] bg-white">
            <div className="flex w-[1200px] mx-auto py-10">
                <div className="basis-[40%] ">
                    <img
                        src={product?.image}
                        alt=""
                        className="w-full h-full p-10"
                    />
                </div>
                <div className="basis-[60%] 0 p-10 font-poppins flex flex-col ">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-semibold">
                            {product?.productName}
                        </h1>
                        <div class="flex items-center">
                            <Star
                                className="text-yellow-500 mr-1 fill-yellow-500"
                                width={20}
                            />
                            <Star
                                className="text-yellow-500 mr-1 fill-yellow-500"
                                width={20}
                            />{" "}
                            <Star
                                className="text-yellow-500 mr-1 fill-yellow-500"
                                width={20}
                            />{" "}
                            <Star
                                className="text-yellow-500 mr-1 fill-yellow-500"
                                width={20}
                            />{" "}
                            <Star
                                className="text-yellow-500 mr-1 fill-yellow-500"
                                width={20}
                            />
                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                5.0
                            </span>
                        </div>
                        <p>{product?.description}</p>
                        <p className="text-lg">
                            Weight : {"  "}
                            <span className="font-semibold text-lg">
                                {product?.quantity} kg
                            </span>
                        </p>
                        <div className="flex items-center gap-2 mb-2">
                            <p className="text-lg">Quantity : {"  "} </p>
                            <div className="flex items-center border-2 border-black px-2 w-min rounded-md bg-gray-100">
                                <Minus
                                    onClick={() => handleDecrement()}
                                    className="cursor-pointer"
                                    width={16}
                                />
                                <input
                                    type="text"
                                    value={quantity}
                                    className="text-center bg-transparent w-fit outline-none text-lg"
                                    onChange={(e) =>
                                        setQuantity(e.target.value)
                                    }
                                />
                                <Plus
                                    onClick={() => handleIncrement()}
                                    width={16}
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                        <span className="text-3xl font-semibold">
                            ₹ {product?.price}.00
                        </span>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <button className="bg-orange-400 py-2 px-14 rounded-md font-medium">
                            Buy Now
                        </button>
                        <button className="bg-yellow-400 py-2 px-14 rounded-md font-medium">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
