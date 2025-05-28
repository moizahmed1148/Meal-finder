const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-96 overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <h1 className="text-5xl font-bold text-white mb-4">Our Culinary Story</h1>
                    <p className="text-xl text-amber-100 max-w-2xl">
                        Passionate about bringing authentic flavors and innovative recipes to your table
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <img 
                            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                            alt="Our kitchen team"
                            className="rounded-xl shadow-xl w-full h-auto"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                        <p className="text-gray-600 mb-6 text-lg">
                            At Epicurean Delights, we're dedicated to preserving culinary traditions while innovating 
                            with modern techniques. Our recipes are carefully curated from around the world, tested 
                            in our kitchens, and presented with clear instructions for home cooks of all levels.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="bg-amber-100 p-2 rounded-full mr-4">
                                    <span className="text-amber-600 text-xl">🍳</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">Authentic Recipes</h3>
                                    <p className="text-gray-600">Sourced directly from regional experts and family traditions</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-amber-100 p-2 rounded-full mr-4">
                                    <span className="text-amber-600 text-xl">🌱</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">Quality Ingredients</h3>
                                    <p className="text-gray-600">Emphasizing seasonal, sustainable, and fresh components</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-amber-100 p-2 rounded-full mr-4">
                                    <span className="text-amber-600 text-xl">👨‍🍳</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">Chef-Tested</h3>
                                    <p className="text-gray-600">Every recipe perfected by our professional culinary team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Culinary Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: "Chef Elena Rodriguez",
                                role: "Executive Chef",
                                bio: "Specializing in Mediterranean and Latin American cuisine",
                                img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            },
                            {
                                name: "Chef James Chen",
                                role: "Asian Cuisine Specialist",
                                bio: "Master of traditional Chinese and fusion cooking techniques",
                                img: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                            },
                            {
                                name: "Sophie Martin",
                                role: "Pastry Chef",
                                bio: "French-trained expert in desserts and baked goods",
                                img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                            },
                            {
                                name: "David Okafor",
                                role: "Nutrition Specialist",
                                bio: "Focuses on healthy adaptations of classic recipes",
                                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                            }
                        ].map((member, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <img 
                                    src={member.img} 
                                    alt={member.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                                    <p className="text-amber-600 font-medium mb-2">{member.role}</p>
                                    <p className="text-gray-600">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Community Says</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "The beef and mustard pie recipe changed my Sunday dinners forever!",
                                author: "Sarah K., Home Cook",
                                rating: 5
                            },
                            {
                                quote: "Finally found a recipe site that explains techniques clearly with perfect results every time.",
                                author: "Michael T., Food Blogger",
                                rating: 5
                            },
                            {
                                quote: "My family can't believe I made these restaurant-quality dishes at home.",
                                author: "Priya M., Busy Parent",
                                rating: 4
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-xl">
                                <div className="flex text-amber-400 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i}>{i < testimonial.rating ? '★' : '☆'}</span>
                                    ))}
                                </div>  
                                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                                <p className="font-medium text-gray-800">— {testimonial.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-amber-600 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Cooking?</h2>
                    <p className="text-amber-100 text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of home cooks who are creating amazing meals every day
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                            Browse Recipes
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-amber-600 transition-colors">
                            Cooking Tips
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;