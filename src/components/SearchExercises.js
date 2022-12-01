import { useEffect, useState } from "react";

const SearchExercises = () => {
  return (
    <div className="text-center mt-37 p-20">
        <h1 className="mt-20 p-20 text-6xl font-semibold">Workout Programs</h1>
        <div className="underline-title"></div>     

        <div className="max-w-xl px-3 mx-auto mt-20">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-gray-600"
                />
            </div>
        </div>
    </div>
  )
}

export default SearchExercises;