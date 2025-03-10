import React from "react";
import { Link } from "react-router-dom";
import HotelCategoriesBG from "../../assets/images/HotelCategoriebg.jpg"
import Party from "../../assets/images/PartyHotels.jpg";
import Spa from "../../assets/images/SpaHotels.jpg";
import Casino from "../../assets/images/CasinoHotels.jpg";
import Budget from "../../assets/images/BudgetHotels.jpg";

const categories = [
  {
    name: "Party Hotels",
    description:
      "For travelers looking to experience Las Vegas nightlife, pool parties, and exclusive clubs, these hotels deliver non-stop energy and entertainment.",
    img: Party,
    link: "/party",
  },
  {
    name: "Spa Hotels",
    description:
      "Unwind in luxury with world-class spas, rejuvenating treatments, and serene wellness experiences designed for ultimate relaxation.",
    img: Spa,
    link: "/spa",
  },
  {
    name: "Casino Hotels",
    description:
      "Stay in the heart of the action with top casino resorts featuring gaming, nightlife, and premium dining—all under one roof.",
    img: Casino,
    link: "/casino",
  },
  {
    name: "Budget Hotels",
    description:
      "Affordable stays without sacrificing comfort—these hotels offer value and convenience for travelers looking to save.",
    img: Budget,
    link: "/budget",
  },
];

const HotelCategories = () => {
  return (
    <section className="py-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${HotelCategoriesBG})` }}>
      <div className="container mx-auto px-4">
        <h2 className="relative text-4xl pb-2.5 font-bold mb-12 text-center font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">
          Find Hotels by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              to={category.link}
              key={index}
              className="block rounded-lg overflow-hidden shadow-lg bg-white transition-transform duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 font-Josefin" >
                  {category.name}
                </h3>
                <p className="text-gray-600 mt-2 font-Josefin">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelCategories;
