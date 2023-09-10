import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
        <div>
            HeroSection
            <div className="relative w-20 h-auto">
                <Image
                    src={"/images/farmer-vector.png"}
                    fill
                    alt="absolute farmer" className="w-full h-full"
                />
            </div>
        </div>
    );
};

export default HeroSection;
