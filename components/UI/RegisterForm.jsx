"use client";

import { getCountries, getStates } from "country-state-picker";
import React, { useState } from "react";

const RegisterForm = () => {
    const [countrycode, setCountrycode] = useState("country");

    const countries = getCountries();
    const states = getStates(countrycode);

    return (
        <div className="register bg-white max-w-[75vw] mx-auto rounded-md p-6 py-8 w-full font-poppins">
            <h1 className="text-4xl font-poppins font-bold mb-4 text-center">
                Create an account
            </h1>
            <h2 className="text-3xl font-poppins font-semibold mb-6">
                User info
            </h2>
            <form className="w-full flex flex-col">
                {/* Full name */}
                <div className="mb-4">
                    <label
                        htmlFor="fullname"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullname"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder=""
                        required
                    />
                </div>
                {/* Phone number */}
                <div className="mb-4">
                    <label
                        htmlFor="phone-number"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Phone Number
                    </label>
                    <input
                        type="text"
                        id="phone-number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder=""
                        required
                    />
                </div>
                {/* Adhaar Number */}
                <div className="mb-4">
                    <label
                        htmlFor="adhaar-number"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Adhaar Number
                    </label>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            id="adhaar-number"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder=""
                            required
                        />
                        <button className="w-fit flex items-center justify-center font-medium font-poppins bg-orange-500 text-white p-2.5 px-4 rounded-md">
                            Verify
                        </button>
                    </div>
                </div>
                {/* Password */}
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder=""
                        required
                    />
                </div>
                {/* Confirm Password */}
                <div className="mb-4">
                    <label
                        htmlFor="confirm-password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirm-password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder=""
                        required
                    />
                </div>
                {/* Address */}
                <div className="mb-4">
                    <label
                        htmlFor="address"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder=""
                        required
                    />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {/* Country */}
                    <div className="mb-4">
                        <label
                            htmlFor="country"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Country
                        </label>
                        <select
                            name="category"
                            id=""
                            onChange={(e) => setCountrycode(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 px-2"
                        >
                            <option>Select Country</option>
                            {countries.map((country, idx) => (
                                <option value={country.code} key={idx}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* State */}
                    <div className="mb-4">
                        <label
                            htmlFor="state"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            State
                        </label>
                        <select
                            name="category"
                            id=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 px-2"
                        >
                            <option>Select State</option>
                            {states?.map((state, idx) => (
                                <option value={state.toLowerCase()} key={idx}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* City */}
                    <div className="mb-4">
                        <label
                            htmlFor="city"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder=""
                            required
                        />
                    </div>
                    {/* Pincode */}
                    <div className="mb-4">
                        <label
                            htmlFor="pincode"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Pin Code
                        </label>
                        <input
                            type="text"
                            id="pincode"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder=""
                            required
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-white bg-gray-700 mt-4 font-medium rounded-md text-base w-[500px] mx-auto px-5 py-2 text-center"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
