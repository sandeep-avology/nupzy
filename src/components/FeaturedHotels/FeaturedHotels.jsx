import React from "react";
import Cosmopolitan from '../../assets/images/TheCosmopolitan.jpg';
import Venetian from '../../assets/images/TheVenetian.jpeg';
import Caesars from '../../assets/images/CaesarsPalace.jpg';
import MGM from '../../assets/images/MGMGrand.jpg';

const hotels = [
    {
        name: "The Cosmopolitan of Las Vegas",
        price: "$349",
        image: Cosmopolitan,
        features: [
            "Iconic rooftop pool with city views",
            "World-class dining and nightlife options",
            "High-end casino with exclusive gaming areas",
        ],
    },
    {
        name: "The Venetian Resort",
        price: "$289",
        image: Venetian,
        features: [
            "Spacious luxury suites with modern amenities",
            "Stunning canals and gondola rides inside the resort",
            "Full-service spa and relaxation treatments",
        ],
    },
    {
        name: "Caesars Palace",
        price: "$279",
        image: Caesars,
        features: [
            "Legendary casino with a high-energy atmosphere",
            "Lavish Roman-inspired spa and pools",
            "Home to top-tier entertainment and celebrity restaurants",
        ],
    },
    {
        name: "MGM Grand",
        price: "$199",
        image: MGM,
        features: [
            "One of the largest casino hotels on the Strip",
            "Multiple entertainment venues and live shows",
            "Expansive pool complex with private cabanas",
        ],
    },
];

const FeaturedHotels = () => {
    return (
        <section className="">
            <div className="container mx-auto">
                <h2 className="relative text-4xl pb-2.5 font-bold mb-12 text-center font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">
                    Featured Las Vegas Hotels
                </h2>

                {/* Responsive Grid Layout */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                    {hotels.map((hotel, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            {/* Image Wrapper for Zoom Effect */}
                            <div className="overflow-hidden">
                                <img
                                    src={hotel.image}
                                    alt={hotel.name}
                                    className="w-full h-80 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 font-Josefin">{hotel.name}</h3>
                                <p className="text-xl font-bold text-[#000] font-Josefin" >
                                    💰 Price Per Night: {hotel.price}
                                </p>
                                <ul className="mt-3 space-y-2">
                                    {hotel.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-gray-700 font-Josefin">
                                            <span>✅</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedHotels;
