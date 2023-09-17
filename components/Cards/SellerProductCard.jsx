import { Star } from "lucide-react";
import React from "react";

const SellerProductCard = ({
    id,
    productName,
    price,
    quantity,
    image,
    license,
    sellCount,
}) => {
    return (
        <div class="product-card flex box-border w-full bg-white rounded-lg border-[1px] border-gray-100 my-4 h-full cursor-pointer">
            <div className="flex items-center justify-center h-[12rem] basis-[20%]">
                <img
                    className="p-4 rounded-t-lg cover h-[12rem]"
                    src={image}
                    alt="product image"
                />
            </div>
            <div class="p-5 flex flex-col h-full basis-full">
                <h5 class="text-lg font-semibold font-poppins text-format">
                    {productName}
                </h5>
                <div>License No. - {license}</div>
                {/* <div class="flex items-center">
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
                </div> */}
                <div>Quantity - {quantity}</div>
                <div>Sell Count - {sellCount}</div>
                <div class="flex items-center justify-between">
                    <span class="text-2xl font-bold text-gray-900 mb-4">
                        ₹{price}
                    </span>
                </div>
                <div className="flex justify-evenly">
                    <a
                        href="#"
                        class="w-[250px] flex text-white bg-green-900 hover:bg-green-950 font-medium font-poppins rounded-md px-5 py-2 items-center justify-center mt-auto"
                    >
                        Edit
                    </a>
                    <a
                        href="#"
                        class="w-[250px] flex text-white bg-red-600 hover:bg-green-950 font-medium font-poppins rounded-md px-5 py-2 items-center justify-center mt-auto"
                    >
                        Delete
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SellerProductCard;
