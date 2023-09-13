import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
        <div className=" pb-24 pt-10 bg-white font-poppins">
            <div
                id="heading"
                className=" h-10 text-4xl text-center font-bold pt-6 uppercase"
            >
                <h1>Core Aspects Of This Digital System</h1>
            </div>
            <div id="container_1" className=" flex mt-10 ">
                <div id="container_1_Content" className="ml-[100px] mt-10 ">
                    <ul className="flex flex-col gap-3">
                        <li className="flex tracking-wide mb-3 gap-1 items-center">
                            <img
                                src="images/HeroSection/hs1.png "
                                className="w-14 h-14"
                                alt="BLANK"
                            />
                            &emsp;
                            <div>
                                <h1 className=" text-2xl font-bold font-raleway uppercase mb-1">
                                    Integrated
                                </h1>
                                <p className=" text-raleway text-gray-500 w-[40vw]">
                                    {" "}
                                    End-to-end slot booking management, from
                                    farmer to the buyer&apos;s end.
                                </p>
                            </div>
                        </li>
                        <li className="flex tracking-wide mb-3 gap-1 items-center">
                            <img
                                src="images/HeroSection/hs2.png "
                                className="w-14 h-14"
                                alt="no"
                            />
                            &emsp;
                            <div>
                                <h1 className=" text-2xl font-bold font-raleway  uppercase mb-1">
                                    Transparent
                                </h1>
                                <p className=" text-raleway text-gray-500 w-[40vw]">
                                    Our Promise Is To Build Up The Trust ,Your
                                    Confidence And Give You The Safety Assurance
                                </p>
                            </div>
                        </li>
                        <li className="flex tracking-wide mb-3 gap-1 items-center">
                            <img
                                src="images/HeroSection/hs3.png "
                                className="w-14 h-14"
                                alt="BLANK"
                            />
                            &emsp;
                            <div>
                                <h1 className=" text-2xl font-bold font-raleway  uppercase mb-1">
                                    Consistent Availability
                                </h1>
                                <p className=" text-raleway text-gray-500 w-[40vw]">
                                    365 days a year with value added services
                                    such as quality assessment, sampling etc.{" "}
                                </p>
                            </div>
                        </li>
                        <li className="flex tracking-wide gap-1 items-center">
                            <img
                                src="images/HeroSection/hs4.png "
                                className="w-14 h-14"
                                alt="BLANK"
                            />
                            &emsp;
                            <div>
                                <h1 className=" text-2xl font-bold font-raleway  uppercase mb-1">
                                    Technology Driven
                                </h1>
                                <p className=" text-raleway text-gray-500 w-[40vw]">
                                    0% use of paper with each step digitally
                                    captured.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div
                    id="container_1_img"
                    className="flex justify-center w-full"
                >
                    <img
                        src="images/HeroSection/hs5.png"
                        className="w-[400px] mt-4"
                        alt="BLANK"
                    />
                </div>
            </div>
            <div
                id="heading_2"
                className=" h-10 text-4xl text-center font-bold pt-6 mt-24 mb-16 uppercase"
            >
                <h1> We Expertly Navigate You Through Every Step</h1>
            </div>
            <div
                id="container_2"
                className="h-auto flex justify-center items-center"
            >
                <div
                    id="step1"
                    className="lg:p-4 transition ease-in hover:-translate-y-1 hover:scale-110 hover:font-semibold duration-100  flex flex-col justify-center items-center"
                >
                    <div className=" bg-gray-200 rounded-full flex justify-center items-center w-[100px] p-2">
                        <img
                            src="images/HeroSection/hs6.png"
                            alt="BLANK"
                            className="rounded-full"
                        />
                    </div>
                    <div className="h-[25%]  flex  justify-center items-center leading-[1] mt-2 ">
                        <h1 className=" h-auto w-auto text-center  lg:text-[20px]">
                            Search Products
                        </h1>
                    </div>
                </div>
                <div>
                    <img
                        src="images/HeroSection/arrow.png"
                        alt="BLANK"
                        className="w-[3vw] relative bottom-[17px] transition ease-in hover:-translate-y-1 hover:scale-110 hover:font-semibold duration-100 "
                    />
                </div>
                <div
                    id="step1"
                    className="lg:p-4 transition ease-in hover:-translate-y-1 hover:scale-110 hover:font-semibold duration-100  flex flex-col justify-center items-center"
                >
                    <div className=" bg-gray-200 rounded-full flex justify-center items-center w-[100px] p-2">
                        <img
                            src="images/HeroSection/hs7.png"
                            alt="BLANK"
                            className="rounded-full"
                        />
                    </div>
                    <div className="h-[25%]  flex  justify-center items-center leading-[1] mt-2 ">
                        <h1 className=" h-auto w-auto text-center  lg:text-[20px]">
                            Search Products
                        </h1>
                    </div>
                </div>
                <div>
                    <img
                        src="images/HeroSection/arrow.png"
                        alt="BLANK"
                        className="w-[3vw] relative bottom-[17px] transition ease-in hover:-translate-y-1 hover:scale-110 hover:font-semibold duration-100 "
                    />
                </div>
                <div
                    id="step1"
                    className="lg:p-4 transition ease-in hover:-translate-y-1 hover:scale-110 hover:font-semibold duration-100  flex flex-col justify-center items-center"
                >
                    <div className=" bg-gray-200 rounded-full flex justify-center items-center w-[100px] p-2">
                        <img
                            src="images/HeroSection/hs8.png"
                            alt="BLANK"
                            className="rounded-full"
                        />
                    </div>
                    <div className="h-[25%]  flex  justify-center items-center leading-[1] mt-2 ">
                        <h1 className=" h-auto w-auto text-center  lg:text-[20px]">
                            Search Products
                        </h1>
                    </div>
                </div>
                <div>
                    <img
                        src="images/HeroSection/arrow.png"
                        alt="BLANK"
                        className="w-[3vw] relative bottom-[17px] transition ease-in hover:-translate-y-1 hover:scale-110 hover:font-semibold duration-100 "
                    />
                </div>
                <div
                    id="step1"
                    className="lg:p-4 transition ease-in hover:-translate-y-1 hover:scale-110 hover:font-semibold duration-100  flex flex-col justify-center items-center"
                >
                    <div className=" bg-gray-200 rounded-full flex justify-center items-center w-[100px] p-2">
                        <img
                            src="images/HeroSection/hs9.png"
                            alt="BLANK"
                            className="rounded-full"
                        />
                    </div>
                    <div className="h-[25%]  flex  justify-center items-center leading-[1] mt-2 ">
                        <h1 className=" h-auto w-auto text-center  lg:text-[20px]">
                            Search Products
                        </h1>
                    </div>
                </div>
                <div>
                    <img
                        src="images/HeroSection/arrow.png"
                        alt="BLANK"
                        className="w-[3vw] relative bottom-[17px] transition ease-in hover:-translate-y-1 hover:scale-110 hover:font-semibold duration-100 "
                    />
                </div>
                <div
                    id="step1"
                    className="lg:p-4 transition ease-in hover:-translate-y-1 hover:scale-110 hover:font-semibold duration-100  flex flex-col justify-center items-center"
                >
                    <div className=" bg-gray-200 rounded-full flex justify-center items-center w-[100px] p-2">
                        <img
                            src="images/HeroSection/hs10.png"
                            alt="BLANK"
                            className="rounded-full"
                        />
                    </div>
                    <div className="h-[25%]  flex  justify-center items-center leading-[1] mt-2 ">
                        <h1 className=" h-auto w-auto text-center  lg:text-[20px]">
                            Search Products
                        </h1>
                    </div>
                </div>
                <div>
                    <img
                        src="images/HeroSection/arrow.png"
                        alt="BLANK"
                        className="w-[3vw] relative bottom-[17px] transition ease-in hover:-translate-y-1 hover:scale-110 hover:font-semibold duration-100 "
                    />
                </div>
                <div
                    id="step1"
                    className="lg:p-4 transition ease-in hover:-translate-y-1 hover:scale-110 hover:font-semibold duration-100  flex flex-col justify-center items-center"
                >
                    <div className=" bg-gray-200 rounded-full flex justify-center items-center w-[100px] p-2">
                        <img
                            src="images/HeroSection/hs11.png"
                            alt="BLANK"
                            className="rounded-full"
                        />
                    </div>
                    <div className="h-[25%]  flex  justify-center items-center leading-[1] mt-2 ">
                        <h1 className=" h-auto w-auto text-center  lg:text-[20px]">
                            Search Products
                        </h1>
                    </div>
                </div>
                <div>
                    <img
                        src="images/HeroSection/arrow.png"
                        alt="BLANK"
                        className="w-[3vw] relative bottom-[17px] transition ease-in hover:-translate-y-1 hover:scale-110 hover:font-semibold duration-100 "
                    />
                </div>
                <div
                    id="step1"
                    className="lg:p-4 transition ease-in hover:-translate-y-1 hover:scale-110 hover:font-semibold duration-100  flex flex-col justify-center items-center"
                >
                    <div className=" bg-gray-200 rounded-full flex justify-center items-center w-[100px] p-2">
                        <img
                            src="images/HeroSection/hs12.png"
                            alt="BLANK"
                            className="rounded-full"
                        />
                    </div>
                    <div className="h-[25%]  flex  justify-center items-center leading-[1] mt-2 ">
                        <h1 className=" h-auto w-auto text-center  lg:text-[20px]">
                            Search Products
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
