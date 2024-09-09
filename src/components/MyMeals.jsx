"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MyMeals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  // Function to fetch meals based on search
  const fetchData = async (searchTerm = "a") => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    const data = await response.json();
    setMeals(data.meals || []); // If no meals are found, set empty array
  };

  useEffect(() => {
    // Fetch default meal on page load
    if (search.trim() === "") {
      fetchData(); // Fetch default meal like "chicken"
    } else {
      fetchData(search); // Fetch meals based on search input
    }
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData(search); // Trigger search on form submission
  };

  return (
    <div className="flex flex-col items-center py-8">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="w-full max-w-2xl px-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <input
            className="py-2 px-4 w-full sm:w-3/4 text-black border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)} // Update search state on input change
            placeholder="Search for meals..."
          />
          <button
            type="submit"
            className="mt-4 sm:mt-0 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Search
          </button>
        </div>
      </form>

      {/* Meals Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl px-4">
        {meals && meals.length > 0 ? (
          meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105"
            >
              {/* Next.js Image with dynamic src */}
              <div className="relative w-full h-48">
                <Image
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  layout="fill" // Fill the container
                  objectFit="cover" // Ensures the image covers the container
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{meal.strMeal}</h3>
                <p className="text-gray-500">Category: {meal.strCategory}</p>
                <p className="text-gray-500">Area: {meal.strArea}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No meals found.</p>
        )}
      </div>
    </div>
  );
};

export default MyMeals;
