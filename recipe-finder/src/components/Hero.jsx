import React, { useEffect, useState } from "react";

const Hero = () => {
  const [categories, setCategories] = useState([]);
  const [meal, setMeal] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [showMeal, setShowMeal] = useState(false); 

  const fetchMeals = async () => {
    if (value.trim() === "") {
      setMeal([]);
      setShowMeal(true);
      setLoading(false);
      setTimeout(() => setShowMeal(false),2000)
      return;
    }

    setLoading(true);
    setShowMeal(false); 

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
      );
      const data = await res.json();

      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (data.meals && data.meals.length > 0) {
        setMeal(data.meals);
        setShowMeal(false); 
      } else {
        setMeal([]);
        setShowMeal(true); 
        setTimeout(() => setShowMeal(false), 2000);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setMeal([]);
      setShowMeal(true);
      setTimeout(() => setShowMeal(false), 2000);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <>
 <div
  className="w-full relative h-[400px] md:h-[500px] bg-no-repeat bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')",
  }}
>
  <div className="absolute inset-0 flex md:left-120 items-center justify-center px-4 md:px-16">
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug md:leading-normal text-left max-w-4xl">
      Discover Delicious Recipes <br />
      <span>Tailored Just for You</span>
    </h1>
  </div>
</div>



      <div className="text-center py-12 px-4">
       <div className="flex items-center justify-center gap-3">
         <h2 className="text-3xl font-bold  text-green-600">
          Find Your Perfect Meal  
        </h2>
        <img src="search.png" alt="" className="w-15" />
       </div>
        <p className="text-gray-500 mt-2">Search by category, or mood!</p>
        <input
          list="browsers"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="e.g. Chicken, Beef, Lamb..."
          className="mt-4 focus:outline-gray-400 w-full max-w-md p-3 border border-gray-800 rounded shadow"
        />
        <datalist id="browsers">
          {categories.map((data, index) => (
            <option key={index} value={data.strCategory} />
          ))}
        </datalist>
        <button
          className="bg-gray-800 text-white px-8 py-[13px] rounded-sm hover:cursor-pointer mt-4"
          onClick={fetchMeals}
        >
          Find the Meal
        </button>
      </div>

      {loading && (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-slate-300 border-t-slate-700 rounded-full animate-spin"></div>
        </div>
      )}

      {!loading && !showMeal && meal.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-10 mb-10">
          {meal.map((data) => (
            <div key={data.idMeal} className="bg-white rounded shadow p-4">
              <img
                src={data.strMealThumb}
                alt={data.strMeal}
                className="rounded w-full"
              />
              <h3 className="mt-2 font-semibold pb-3">{data.strMeal}</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
  {data.strCategory}
</span>
            </div>
          ))}
        </div>
      )}

      {/* Show "No Meals Found" ONLY if showMeal is true and not loading */}
      {!loading && showMeal && (
        <p className="bg-pink-700 text-center mx-10 mb-10 font-bold text-xl text-white border border-red-600 py-4 rounded">
          No Meals Found 😃
        </p>
      )}
    </>
  );
};

export default Hero;
