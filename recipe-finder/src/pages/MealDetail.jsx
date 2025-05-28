import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const {id}  = useParams();
    const [MealDetails, setMealDetails] = useState([])
    const [Ingredients , setIngredients]  = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => setMealDetails(data.meals[0]))
    },[])

   useEffect(() => {
    const Ingredents = [];
        for(let i = 1; i <= 20; i++ ){
          let key1 = `strIngredient${i}`;
          let key2 = `strMeasure${i}`;
          let value1 = MealDetails[key1];
          let value2 = MealDetails[key2];
          if(value1 != "" && value2 != ""){
            Ingredents.push({
              a : value1,
              b : value2,
            });
          }
        }
        setIngredients(Ingredents);
   },[MealDetails])


    const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const urlParts = url.split("v=");
    return urlParts[1]?.split("&")[0]; // Remove any extra query params
    };

  const videoId = getYouTubeVideoId(MealDetails.strYoutube);

    


    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative h-96 overflow-hidden">
                <img 
                    src={MealDetails.strMealThumb} 
                    alt={MealDetails.strMeal} 
                    className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                        <span className="px-3 py-1 bg-amber-600 rounded-full text-xs font-semibold">{MealDetails.strCategory}</span>
                        <span className="px-3 py-1 bg-green-600 rounded-full text-xs font-semibold">{MealDetails.strArea}</span>
                       {MealDetails.strTags?.split(",").map((data , index) => (
                         <span key={index} className="px-3 py-1 bg-red-600 rounded-full text-xs font-semibold">
                          {data}
                          </span>
                        ))}
                    </div>
                    <h1 className="text-4xl font-bold mb-2">{MealDetails.strMeal}</h1>
                </div>
            </div>


            {/* Main Content */}
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column */}
                    <div className="lg:w-2/3">
                        {/* Description */}
                        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Dish</h2>
                            <p className="text-gray-700 mb-6">
                                A classic British beef pie with a rich mustard flavor, encased in golden puff pastry. 
                                This hearty dish combines tender beef with aromatic thyme and vegetables, slow-cooked 
                                to perfection and finished with a crisp, buttery pastry crust.
                            </p>
                            
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                    🍖 High Protein
                                </span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                                    🕒 Slow Cooked
                                </span>
                                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                                    🏆 Classic Recipe
                                </span>
                            </div>
                        </div>

                        {/* Ingredients */}
                      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Ingredients.map((item, index) => (
                              <div
                                key={index}
                                className="flex items-start p-2 hover:bg-gray-50 rounded transition-colors"
                              >
                                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-3 mt-1">
                                  {index + 1}
                                </span>
                                <div>
                                  <p className="font-medium text-gray-800">
                                    {item.a} — <span className="text-gray-600">{item.b}</span>
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>


                        {/* Instructions */}
                        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cooking Instructions</h2>
                            <div className="space-y-4">
                                    <div className="flex">
                                        <span className="text-amber-600 font-bold mr-3"></span>
                                        <p className="text-gray-700">{MealDetails.strInstructions}</p>
                                    </div>
                             
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-1/3">
                        {/* Video Tutorial */}
                        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Video Tutorial</h2>
                           {videoId && (
                        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                          <iframe
                            className="w-full h-64"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
)}
                            <a 
                                href={MealDetails.strSource} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="mt-4 inline-block text-amber-600 hover:text-amber-700 font-medium"
                            >
                                View Original Recipe →
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealDetail;