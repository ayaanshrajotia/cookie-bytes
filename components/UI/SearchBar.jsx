import React from "react";

// icons
import { Search } from "lucide-react";

const SearchBar = () => {
    return (
        <div className="search-bar flex items-center p-2 w-[250px] rounded-lg bg-gray-100">
            <button className="w-[45px] flex justify-start items-center outline-none ">
                <Search width={22} />
            </button>
            <input
                type="text"
                placeholder="Search Products"
                className="rounded-r-md outline-none bg-transparent w-full -ml-2 text-base font-poppins "
            />
        </div>
    );
};

export default SearchBar;
