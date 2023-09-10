"use client";

import ProductCard from "@/components/Cards/ProductCard";
import EmblaCarousel from "@/components/EmblaCarousel";
import LoginPopup from "@/components/UI/LoginPopup";
import { LoginContext } from "@/context/loginContext";
import { useContext } from "react";
import ProductSlider from "./UI/ProductSlider";
import HeroSection from "./UI/HeroSection";

export default function Home() {
    const OPTIONS = {};
    const SLIDE_COUNT = 5;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
    const { isLoginOpen } = useContext(LoginContext);

    return (
        <main className="relative">
            <div
                className={`${
                    isLoginOpen ? "block" : "hidden"
                } fixed w-full h-full z-[99] backdrop-blur-xl backdrop-brightness-75`}
            >
                <LoginPopup />
            </div>
            <section className="sandbox__carousel pt-[80px]">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </section>
            <HeroSection />
            <div className="py-2">
                <ProductSlider title="New Arrivals" />
            </div>
            <div className="py-2">
                <ProductSlider title="Best Sellers" />
            </div>
            <div className="py-2">
                <ProductSlider title="New Season" />
            </div>
        </main>
    );
}
