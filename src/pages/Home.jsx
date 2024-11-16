import React, { useState } from 'react';
import { ChevronRight, Car, Edit, Search, Tag, Plus } from 'lucide-react';

const Home = () => {
    const [isHovered, setIsHovered] = useState(null);
    
    const features = [
        {
            icon: <Plus className="w-6 h-6" />,
            title: "Create Listings",
            description: "Add new car listings with details and images"
        },
        {
            icon: <Car className="w-6 h-6" />,
            title: "View Collection",
            description: "Browse through your entire car inventory"
        },
        {
            icon: <Edit className="w-6 h-6" />,
            title: "Manage Cars",
            description: "Edit or remove existing car listings"
        },
        {
            icon: <Search className="w-6 h-6" />,
            title: "Smart Search",
            description: "Find cars by title, description, or tags"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="container mx-auto px-4 pt-20 pb-12">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-blue-900 mb-6">
                        Car Management
                        <span className="text-blue-500"> Simplified</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Your all-in-one solution for managing your automotive collection with ease and style
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className="flex justify-center gap-4">
                        <button 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg 
                                     transition-all duration-300 transform hover:scale-105 flex items-center"
                        >
                            Get Started
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </button>
                        <button 
                            className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-lg 
                                     border-2 border-blue-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
                                     transform hover:-translate-y-2"
                            onMouseEnter={() => setIsHovered(index)}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            <div className={`
                                w-12 h-12 rounded-full flex items-center justify-center mb-4
                                ${isHovered === index ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500'}
                                transition-all duration-300
                            `}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-blue-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-4">
                            <div className="text-4xl font-bold mb-2">10K+</div>
                            <div className="text-blue-200">Active Users</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold mb-2">50K+</div>
                            <div className="text-blue-200">Cars Listed</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold mb-2">99%</div>
                            <div className="text-blue-200">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;