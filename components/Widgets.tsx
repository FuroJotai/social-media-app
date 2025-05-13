import { EllipsisHorizontalIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

export default function Widgets() {
    return (
        <div className="p-3 
        hidden lg:flex flex-col space-y-4 w-[400px] ps-10
        ">
            <div className="
            bg-[#EFF3F4] text-[#89959D]
            flex h-[44px] items-center space-x-3 rounded-full pl-5">
                <MagnifyingGlassIcon
                className="w-[20px] h-[20px]"
                />
                <input type="text"
                placeholder="Search Busy Bee"
                className="bg-transparent outline-none"
                />
            </div>

            <div className="bg-[#EFF3F4]
            rounded-xl p-3
            ">
                <h1
                className="text-xl font-bold mb-2">
                    Whats happening?
                </h1> 

                <div className="flex flex-col  py-3 space-y-0.5">
                    <div className="flex justify-between text-[#536471] text-[13px]">
                    <span>Trending in Australia</span>
                    <EllipsisHorizontalIcon
                    className="w-[22px]"
                    />
                    </div>
                
                <span className="font-bold text-sm">#ReactJS</span>

                <span className="text-[#536471] text-xs">240K Bumbles</span>
                </div>
                <div className="flex flex-col  py-3 space-y-0.5">
                    <div className="flex justify-between text-[#536471] text-[13px]">
                    <span>Trending in Australia</span>
                    <EllipsisHorizontalIcon
                    className="w-[22px]"
                    />
                    </div>
                
                <span className="font-bold text-sm">#ReactJS</span>

                <span className="text-[#536471] text-xs">240K Bumbles</span>
                </div>

                <div className="flex flex-col  py-3 space-y-0.5">
                    <div className="flex justify-between text-[#536471] text-[13px]">
                    <span>Trending in Australia</span>
                    <EllipsisHorizontalIcon
                    className="w-[22px]"
                    />
                    </div>
                
                <span className="font-bold text-sm">#ReactJS</span>

                <span className="text-[#536471] text-xs">240K Bumbles</span>
                </div>
                
                <div className="flex flex-col  py-3 space-y-0.5">
                    <div className="flex justify-between text-[#536471] text-[13px]">
                    <span>Trending in Australia</span>
                    <EllipsisHorizontalIcon
                    className="w-[22px]"
                    />
                    </div>
                
                <span className="font-bold text-sm">#ReactJS</span>

                <span className="text-[#536471] text-xs">240K Bumbles</span>

                </div>
            </div>

            <div className="bg-[#EFF3F4] rounded-xl p-3">
                <h1 className="text-xl font-bold mb-2">Who to Follow?</h1>

                <div className="flex justify-between items-center py-3">

                    <div className="flex items-center space-x-3">
                    <Image
                    src={'/assets/follow_1.png'}
                    width={56}
                    height={56}
                    alt="Profile picture of Ikra"
                    className="w-14 h-14 rounded-full"
                    />

                    <div className="flex flex-col text-sm">
                        <span className="font-bold">Koba Ikra</span>
                        <span>@ikracoding</span>
                    </div>
                    </div>                    

                    <button className="bg-[#0F1049] text-white w-[72px] h-[40px] rounded-full text-sm">
                        Follow
                    </button>
                </div>

                <div className="flex justify-between items-center py-3">

                    <div className="flex items-center space-x-3">
                    <Image
                    src={'/assets/follow_2.png'}
                    width={56}
                    height={56}
                    alt="Profile picture of Katya"
                    className="w-14 h-14 rounded-full"
                    />

                    <div className="flex flex-col text-sm">
                        <span className="font-bold">Katya Moiva</span>
                        <span>@moivametel</span>
                    </div>
                    </div>                    

                    <button className="bg-[#0F1049] text-white w-[72px] h-[40px] rounded-full text-sm">
                        Follow
                    </button>
                </div>

                <div className="flex justify-between items-center py-3">

                    <div className="flex items-center space-x-3">
                    <Image
                    src={'/assets/follow_3.png'}
                    width={56}
                    height={56}
                    alt="Profile picture of Mnenie"
                    className="w-14 h-14 rounded-full"
                    />

                    <div className="flex flex-col text-sm">
                        <span className="font-bold">Odra Mnenie</span>
                        <span>@odraodra</span>
                    </div>
                    </div>                    

                    <button className="bg-[#0F1049] text-white w-[72px] h-[40px] rounded-full text-sm">
                        Follow
                    </button>
                </div>
            </div>
        </div>
    )
}