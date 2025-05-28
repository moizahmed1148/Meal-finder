import React, { useEffect, useState } from "react";

const Meal = () => {
  const [mealDay, setMealDay] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setMealDay(data.meals));
  }, []);

  const meal = mealDay[0]; // Simplify access

  return (
    <>
      {meal && (
        <div className="bg-slate-50 py-10 px-4 md:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
            🍽️ Meal of the Day
          </h2>
    <p className="max-w-3xl mx-auto px-6 md:px-10 text-center text-gray-700 text-base md:text-lg leading-relaxed pb-8">
      <span className="block text-xl md:text-2xl font-semibold text-gray-900 mb-3">
        Discover a Surprise Dish Every Day!
      </span>
      Our <strong>"Meal of the Day"</strong> brings you a delicious, randomly selected recipe from around the world. Whether you're looking to try something new or just need inspiration for dinner, this daily feature is sure to excite your taste buds and expand your culinary skills. <br className="hidden md:inline" />
      <span className="inline-block mt-2">Dive in and enjoy a new flavor adventure each day!</span>
    </p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-white shadow-xl rounded-2xl overflow-hidden">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-85 object-cover"
            />

            <div className="p-6 space-y-4">
              <h3 className="text-3xl font-semibold text-slate-700">
                {meal.strMeal}
              </h3>
              <p className="text-sm text-slate-500">
             <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">
  Category: {meal.strCategory}
</span>

<span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
  Area: {meal.strArea}
</span>
              </p>

              <p className="text-slate-800 text-sm leading-relaxed line-clamp-4">
                {meal.strInstructions}
              </p>

              <a
  href={meal.strYoutube}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-white text-gray-800 text-sm font-medium border border-gray-300 rounded-full hover:bg-gray-100 hover:text-black hover:border-gray-500 transition"
>
  <img src="icon.png" alt="YouTube Icon" className="w-5 h-5" />
  Watch on YouTube
</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Meal;
