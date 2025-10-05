// app/page.tsx
import React from "react";




export const Monitor = () => {
    return (
        <div className="relative w-64 h-40 bg-gray-200 rounded-xl flex flex-col justify-center items-center shadow-inner border border-gray-300">
            <div className="w-3/4 h-2/3 bg-gray-300 rounded-md flex justify-center items-center">
                <span className="text-gray-500 text-sm">[ Web Preview ]</span>
            </div>
            <div className="w-1/2 h-2 bg-gray-400 rounded-full mt-3" />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-2 bg-gray-300 rounded-b-md" />
        </div>
    );
};


export const Tablet = () => {
    return (
        <div className="relative w-48 h-64 bg-gray-100 rounded-2xl border border-gray-300 flex flex-col items-center justify-center shadow">
            <div className="w-10/12 h-5/6 bg-gray-200 rounded-xl flex justify-center items-center">
                <span className="text-gray-500 text-xs">[ App View ]</span>
            </div>
            <div className="absolute bottom-2 w-4 h-4 bg-gray-400 rounded-full" />
        </div>
    );
};



export default function Page() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white w-[1280px] rounded-2xl shadow-md overflow-hidden">
                {/* Navbar */}
                <nav className="bg-[#0F1629] flex justify-between items-center px-8 py-4 rounded-t-2xl">
                    <div className="flex items-center space-x-2">
                        <div className="bg-white text-[#0F1629] font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm">
                            JW
                        </div>
                    </div>
                    <ul className="flex space-x-10 text-white/90 text-sm font-medium">
                        <li className="hover:text-blue-400 cursor-pointer">Home</li>
                        <li className="hover:text-blue-400 cursor-pointer">About</li>
                        <li className="hover:text-blue-400 cursor-pointer">Services</li>
                        <li className="hover:text-blue-400 cursor-pointer">Contact</li>
                    </ul>
                </nav>

                {/* Content */}
                <div className="flex justify-center items-center px-16 py-16">
                    {/* Left Section */}
                    <div className="max-w-lg">
                        <h1 className="text-4xl font-extrabold text-[#0F1629] mb-4">
                            Modern Web Development
                        </h1>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Building sleek, fast, mobile-first websites that attract real
                            users, clients, and prospects.
                        </p>
                        <button className="bg-[#2563EB] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
                            Get started
                        </button>
                    </div>
                    <MockTablet />
                    {/* Right Section */}
                    <div className="relative flex items-center">
                        {/* Monitor */}
                        {/* <div className="bg-gray-100 rounded-xl border border-gray-200 w-96 h-64 flex flex-col justify-center items-center shadow-sm relative">
                            <div className="bg-gray-200 w-80 h-40 rounded-md flex items-center justify-center text-gray-500 text-sm mb-4">
                                [ Web Preview ]
                            </div>
                            <div className="w-32 h-2 bg-gray-300 rounded-md"></div>
                        </div> */}

                        {/* Tablet (overlay front) */}
                        {/* <div className="absolute right-[-80px] top-[40px] bg-gray-100 rounded-xl border border-gray-200 w-60 h-44 flex flex-col justify-center items-center shadow-sm">
                            <div className="bg-gray-200 w-44 h-28 rounded-md flex items-center justify-center text-gray-500 text-xs mb-3">
                                [ Tablet View ]
                            </div>
                            <div className="w-20 h-2 bg-gray-300 rounded-md"></div>
                        </div> */}
                        {/* <MockTablet /> */}

                        {/* Calculator */}
                        <div className="absolute right-[-220px] top-[10px] bg-white shadow-md rounded-2xl p-4 w-52 border border-gray-100">
                            <h3 className="text-gray-300 font-semibold mb-3">Calculator</h3>
                            <div className="grid grid-cols-4 gap-2">
                                {["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "-", "C", "0", ".", "+"].map(btn => (
                                    <button
                                        key={btn}
                                        className="bg-gray-100 rounded-lg py-2 font-medium text-gray-700 text-sm"
                                    >
                                        {btn}
                                    </button>
                                ))}
                                <button className="col-span-4 bg-blue-500 text-white py-2 rounded-lg font-semibold text-sm">
                                    =
                                </button>
                            </div>
                        </div>

                        {/* Profile bubble */}
                        {/* <div className="absolute top-[-25px] left-[-25px] bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                            <div className="bg-gray-300 w-8 h-8 rounded-full"></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </main>
    );
}


function MockTablet({ className = "", width = 420, height = 280 }) {
    const wrapperStyle = {
        width: `${width}px`,
        height: `${height}px`,
    };


    return (
        <div
            className={`relative rounded-3xl bg-white shadow-2xl overflow-hidden p-4 ${className}`}
            style={wrapperStyle}
            aria-label="Tablet mockup"
        >
            {/* Top bezel / camera */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-gray-100 rounded-full opacity-80"></div>


            {/* Screen area */}
            <div className="absolute inset-4 rounded-2xl bg-gradient-to-b from-gray-50 to-white p-5">
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md bg-gray-200" />
                        <div className="w-40 h-4 rounded-full bg-gray-200" />
                    </div>


                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200" />
                        <div className="w-8 h-8 rounded-full bg-gray-200" />
                    </div>
                </div>


                {/* Large hero block */}
                <div className="mb-4">
                    <div className="w-full h-24 rounded-lg bg-gray-100 shadow-inner" />
                </div>


                {/* Two-column content */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 space-y-3">
                        <div className="w-full h-4 rounded-full bg-gray-200" />
                        <div className="w-3/4 h-4 rounded-full bg-gray-200" />
                        <div className="w-full h-10 rounded-md bg-gray-100" />
                        <div className="w-1/2 h-4 rounded-full bg-gray-200" />
                    </div>


                    <div className="col-span-1 space-y-3">
                        <div className="w-full h-4 rounded-full bg-gray-200" />
                        <div className="w-full h-4 rounded-full bg-gray-200" />
                        <div className="w-full h-10 rounded-md bg-gray-100" />
                    </div>
                </div>


                {/* Footer small bars */}
                <div className="flex gap-3 mt-5">
                    <div className="w-20 h-3 rounded-full bg-gray-200" />
                    <div className="w-28 h-3 rounded-full bg-gray-200" />
                    <div className="flex-1 h-3 rounded-full bg-gray-100" />
                </div>
            </div>


            {/* Outer bezel highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-gray-100"></div>
        </div>
    );
}
