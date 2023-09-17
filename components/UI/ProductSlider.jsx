import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation } from "swiper/modules";

import ProductCard from "../Cards/ProductCard";
import HomeProductCard from "../Cards/HomeProduct";
import { products } from "@/database/productsList";

const ProductSlider = ({ title }) => {
    const insecticides = products.filter((product) => product.type === "ins");
    return (
        <section className="max-w-[1200px] mx-auto ">
            <h1 className="text-4xl font-poppins font-bold mt-6">{title}</h1>
            <div className="p-4 pt-2 gap-8">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    cssMode={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {insecticides.map((insecticide, idx) => (
                        <SwiperSlide key={idx}>
                            <ProductCard
                                key={insecticide.id}
                                id={insecticide.id}
                                productName={insecticide.productName}
                                price={insecticide.price}
                                quantity={insecticide.quantity}
                                image={insecticide.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProductSlider;

//  flex flex-col my-4 mb-6
