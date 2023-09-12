import React from "react";
import ProductCard from "../Cards/ProductCard";
import Link from "next/link";

const ProductSlider2 = ({ title, shop, shopId }) => {
    return (
        <>
            <div className="flex items-baseline gap-4 my-4">
                <h1 className="text-4xl font-poppins font-bold">{title}</h1>
                <Link
                    href={`/products/shop/${shopId}`}
                    className="text-2xl font-poppins ml-6"
                >
                    See all
                </Link>
            </div>
            <div className="my-8 flex flex-wrap">
                {shop
                    .map((fertilizer) => (
                        <ProductCard
                            key={fertilizer.id}
                            id={fertilizer.id}
                            productName={fertilizer.productName}
                            price={fertilizer.price}
                            quantity={fertilizer.quantity}
                            image={fertilizer.image}
                        />
                    ))
                    .slice(0, 8)}
            </div>
        </>
    );
};

export default ProductSlider2;
