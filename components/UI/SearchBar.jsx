import React from "react";

// icons
import { Search } from "lucide-react";

const SearchBar = () => {
    return (
        <div className="search-bar flex items-center p-2 rounded-lg bg-white  border-black border-[1px]">
            <input
                type="text"
                placeholder="Search Products"
                className="rounded-r-md outline-none bg-transparent w-full text-base font-poppins "
            />
            <div className="h-full w-[2px] bg-black mx-2"></div>
            <div className="font-poppins text-sm">
                <select
                    name="category"
                    id=""
                    className="outline-none cursor-pointer bg-transparent"
                >
                    <option value="">Select Categories</option>
                    <option value="Seeds-8rxre">Seeds</option>
                    <option value="Herbicide-LeOqS">Herbicide</option>
                    <option value="Tools-WmGn8">Tools</option>
                    <option value="Plant-Nutrients-GQdUj">Nutrients</option>
                    <option value="GARDENING-NNVzF">Gardening</option>
                    <option value="order-plants-online">Plant</option>
                    <option value="Nursery-R8lQk">Nursery</option>
                    <option value="Insecticide-Ntuw9">Insecticide</option>
                    <option value="Pesticide-8EylN">Pesticide</option>
                </select>
            </div>
            <button className="w-[45px] flex justify-start items-center outline-none ml-2">
                <Search width={22} />
            </button>
        </div>
    );
};

export default SearchBar;
