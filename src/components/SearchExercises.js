import { useEffect, useState } from "react";

import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = () => {
    const [search, setSearch] = useState('');
    const [exercises, setExercises] = useState([]);
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
          const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
    
          setBodyParts(['all', ...bodyPartsData]);
        };
    
        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

        const searchedExercises = exercisesData.filter(
            (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search),
            );

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

            setSearch('');
            setExercises(searchedExercises);
        }
    }

    return (
        <div className="text-center mt-37 p-20">
            <h1 className="mt-20 p-20 text-6xl font-semibold">Workout Programs</h1>
            <div className="underline-title"></div>     

            <form className="mt-20">   
            <label 
                htmlFor="default-search" 
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg 
                        aria-hidden="true" 
                        className="w-5 h-5 text-gray-500 dark:text-gray-400" 
                        fill="none" stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg">
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                    </path>
                    </svg>
                </div>
                <input 
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    id="default-search" 
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Search Exercises..." 
                    required 
                />
                <button 
                    onClick={handleSearch} 
                    type="submit" 
                    className="text-white absolute right-2.5 bottom-2.5 bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                    Search
                </button>
            </div>
            </form>

        </div>
    )
}

export default SearchExercises;
