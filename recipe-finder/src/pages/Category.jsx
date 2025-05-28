import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [Category, setCategory] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const HandleDetails = (id) => {
      console.log("Clicked Meal ID:", id);
      navigate(`/meal-detail/${id}`)
  }

  const handleFilter = (value) => {
    setSelectedCategory(value);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`)
      .then((res) => res.json())
      .then((data) => setFilteredData(data.meals));
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategory(data.categories));
  }, []);
  return (
    <div className="bg-gray-100">
      <div className=" p-6 flex flex-wrap gap-3 justify-start rounded-lg">
        {Category.map((value, index) => {
          return (
            <button
              key={index}
              onClick={() => handleFilter(value.strCategory)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === value.strCategory
                  ? "bg-slate-800 text-white"
                  : "bg-slate-100"
              } hover:bg-slate-800 hover:text-white transition text-sm font-medium text-slate-700 border border-slate-200`}
            >
              {value.strCategory}
            </button>
          );
        })}
      </div>

      <div className="px-6 py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData &&
          filteredData.map((data, index) => (
            <div
              key={index}
              className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer"
            >
              <div className="relative">
                <img
                  src={data.strMealThumb}
                  alt="Spaghetti Carbonara"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1 shadow flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                    {selectedCategory}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 pl-2">
                  {data.strMeal}
                </h3>

                <div className={`${data.strMeal.length > 30 ? ' mt-6 ' : 'mt-15'} flex justify-between text-gray-700`}>
                  <button  onClick={() => HandleDetails(data.idMeal)}
                    type="button"
                    className="w-40  py-3 text-sm hover:cursor-pointer text-white rounded-full bg-slate-700 hover:bg-slate-800 hover:shadow-lg transform transition duration-200 ease-in-out hover:scale-105 active:scale-95"
                  >
                    <p className="mb-0.5">View Details</p>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
