import { LoginContext } from "@/context/loginContext";
import { Filter, SortAsc, X } from "lucide-react";
import React, { useContext } from "react";

const FilterPopup = () => {
    const { isFilterOpen, setIsFilterOpen } = useContext(LoginContext);

    return (
        <div
            class={`filter-popup fixed left-0 top-0 z-[97] w-80 h-screen  bg-green-900 text-white overflow-y-auto scrollbar-hide`}
        >
            <div className="p-8 border-b-[1px] border-gray-400 flex justify-between items-center">
                <h5 class="text-3xl font-semibold font-poppins flex items-center gap-2">
                    <Filter className="fill-white" /> Filter
                </h5>
                <X
                    className="cursor-pointer"
                    onClick={() => setIsFilterOpen((prev) => !prev)}
                />
            </div>
            <div class="p-8 overflow-y-auto font-poppins ">
                <h2 className="font-medium text-xl">Categories</h2>
                <ul className="my-4 flex flex-col gap-2 text-lg font-light">
                    <li>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-5 h-5" />
                            <label htmlFor="">Seeds</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-5 h-5" />
                            <label htmlFor="">Herbicides</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-5 h-5" />
                            <label htmlFor="">Insecticides</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-5 h-5" />
                            <label htmlFor="">Pesticides</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-5 h-5" />
                            <label htmlFor="">Manures</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-5 h-5" />
                            <label htmlFor="">Tools</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-5 h-5" />
                            <label htmlFor="">Nutrients</label>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="p-8 border-b-[1px] border-gray-400 flex justify-between items-center">
                <h5 class="text-3xl font-semibold font-poppins flex items-center gap-2">
                    <SortAsc className="fill-white" /> Sort by
                </h5>
            </div>
            <div class="p-8 overflow-y-auto font-poppins ">
                <h2 className="font-medium text-xl">Categories</h2>
                <ul className="my-4 flex flex-col gap-2 text-lg font-light">
                    <li>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-5 h-5" />
                            <label htmlFor="">Seeds</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-5 h-5" />
                            <label htmlFor="">Herbicides</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-5 h-5" />
                            <label htmlFor="">Insecticides</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-5 h-5" />
                            <label htmlFor="">Pesticides</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-5 h-5" />
                            <label htmlFor="">Manures</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-5 h-5" />
                            <label htmlFor="">Tools</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-5 h-5" />
                            <label htmlFor="">Nutrients</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FilterPopup;
