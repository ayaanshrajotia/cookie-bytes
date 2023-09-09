"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import imageByIndex from "./imageByIndex";
import Image from "next/image";
import "../styles/embla.css";
import "../styles/sandbox.css";

const EmblaCarousel = (props) => {
    const { slides, options } = props;
    const autoplayOptions = {
        delay: 5000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
    };
    const [emblaRef] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                <span>{index + 1}</span>
                            </div>
                            <Image
                                className="embla__slide__img"
                                src={imageByIndex(index)}
                                alt="Your alt text"
                                priority
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;
