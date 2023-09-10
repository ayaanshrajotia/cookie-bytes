import { Star } from "lucide-react";
import React from "react";

const ProductCard = () => {
    return (
        <div class="product-card  w-[16rem] bg-white rounded-lg border-[1px] border-gray-100 m-4">
            <div className="flex items-center justify-center">
                <img
                    className="p-4 rounded-t-lg cover h-[12rem]"
                    src="https://cdn11.bigcommerce.com/s-o7ajfrug9g/images/stencil/1280x1280/products/301/444/greenup__81850.1654621566.png?c=1"
                    alt="product image"
                />
            </div>
            <div class="px-5 pb-5">
                <a href="#">
                    <h5 class="text-lg font-semibold font-poppins">
                        Organic DAP Fertilizer
                    </h5>
                </a>
                <div class="flex items-center">
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
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-2xl font-bold text-gray-900 ">₹599</span>
                </div>
                <a
                    href="#"
                    class="w-full flex text-white bg-green-900 hover:bg-green-950 font-medium font-poppins rounded-md mt-2 px-5 py-2 items-center justify-center"
                >
                    Add to cart
                </a>
            </div>
        </div>
    );
};

export default ProductCard;
