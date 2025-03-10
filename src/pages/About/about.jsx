import React from "react";
import AboutBg from "../../assets/images/About.avif";
import weare from "../../assets/images/weare.jpg";
import Atraveler from "../../assets/images/Atraveler.jpg";
import Verified from "../../assets/images/Verified.jpg";
import Guest from "../../assets/images/Guest.avif";
import InDepth from "../../assets/images/In-Depth.jpg"
import NewsletterForm from "../../components/NewsletterForm/NewsletterForm";
import Disclaimer from "../../components/Disclaimer/Disclaimer";

const commitmentData = [
  {
    id: 1,
    title: "Verified Hotel Details",
    image: `${Verified}`,
    alt: "Verified Hotel Details",
  },
  {
    id: 2,
    title: "Guest Reviews & Ratings",
    image: `${Guest}`,
    alt: "Guest Reviews",
  },
  {
    id: 3,
    title: " In-depth research on amenities, pricing, and location",
    image: `${InDepth}`,
    alt: "In-depth Research",
  },

];

const About = () => {
  return (
    <div>
      {/* About Banner */}
      <div
        className="relative py-28 bg-cover bg-center bg-no-repeat h-[350px] md:h-[550px] flex items-center"
        style={{ backgroundImage: `url(${AboutBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="w-full max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-2.5 font-Josefin">  About
            </h2>
          </div>
        </div>
      </div>
      {/* About Banner */}

      {/* Who We Are */}
      <div className="py-14">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-[1200px] mx-auto">

            {/* Responsive Flex for Text Section */}
            <div className="flex flex-col md:flex-row mb-9 gap-6">
              <div className="w-full md:w-[30%]">
                <h2 className="relative text-3xl md:text-4xl pb-2.5 font-bold mb-6 md:mb-12 font-Josefin 
            after:content-[''] after:absolute after:left-[50px] after:-translate-x-1/2 after:bottom-0 
            after:w-16 md:after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">
                  Who We Are
                </h2>
              </div>
              <div className="w-full md:w-[65%]">
                <p className="text-black text-sm md:text-[18px] font-Josefin mb-3 md:mb-5">
                  Nupsy is your go-to resource for finding the <strong>best hotels in Las Vegas.</strong> Whether you're searching for
                  <strong> luxury accommodations, party hotels, relaxing spa retreats, top casino resorts, or budget-friendly stays</strong>,
                  we make it easy to discover the perfect hotel for your trip.
                </p>
                <p className="text-black text-sm md:text-[18px] font-Josefin">
                  We understand that choosing a hotel isn’t just about a place to sleep—it’s about the <strong>experience.</strong> That’s why
                  we carefully curate our listings, ensuring that every hotel we feature meets <strong>high-quality standards</strong> for comfort,
                  amenities, and overall guest experience.
                </p>
              </div>
            </div>

            {/* Responsive Image Section */}
            <div className="group w-full overflow-hidden rounded-2xl">
              <img
                src={weare}
                alt=""
                className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover rounded-2xl transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>

          </div>
        </div>
      </div>
      {/* Who We Are */}

      {/* Our Mission */}
      <div className="Mission py-16 bg-[#fcfcfc]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* Left Side - Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="relative text-3xl md:text-4xl pb-2.5 font-bold mb-6 md:mb-5 font-Josefin 
            after:content-[''] after:absolute md:after:left-[50px] after:left-[50%] after:-translate-x-1/2 after:bottom-0 
            after:w-16 md:after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">
                Our Mission
              </h2>
              <p className="text-lg text-black  md:text-[18px] font-Josefin  mb-6 font-Josefin">
                At <strong>Nupsy</strong>, our mission is simple: <strong>to help travelers find the best hotels in Las Vegas with ease and confidence.</strong> We believe in providing:
              </p>
              <ul className="space-y-4 text-black md:text-[18px] font-Josefin  text-lg">
                <li className="text-black text-sm md:text-[18px] font-Josefin mb-3 relative pl-[30px] md:mb-5 after:content-['✅'] after:absolute after:left-0  after:top-[8px]  "> <strong>  Curated Hotel Selections</strong> – Every hotel listed is a real property, carefully chosen based on guest reviews, amenities, and value.</li>
                <li className="text-black text-sm md:text-[18px] font-Josefin mb-3 relative pl-[30px] md:mb-5 after:content-['✅'] after:absolute after:left-0  after:top-[8px]  "><strong>  Straightforward Comparisons</strong> – We categorize hotels into Party Hotels, Spa Hotels, Casino Hotels, and Budget Hotels, so you can quickly find what suits your needs.</li>
                <li className="text-black text-sm md:text-[18px] font-Josefin mb-3 relative pl-[30px] md:mb-5 after:content-['✅'] after:absolute after:left-0  after:top-[8px]  "> <strong>  Up-to-Date Pricing & Insights</strong> – We keep our listings current and informative, so you know what to expect before booking.</li>
                <li className="text-black text-sm md:text-[18px] font-Josefin mb-3 relative pl-[30px] md:mb-5 after:content-['✅'] after:absolute after:left-0  after:top-[8px]  "> <strong>  A Hassle-Free Experience</strong> – No endless scrolling through generic hotel listings—just clear, well-researched options that help you book the right stay.</li>
              </ul>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/2 overflow-hidden rounded-xl">
              <img
                src={Atraveler}
                alt="Traveler Booking Hotel"
                className="w-full h-[300px] md:h-[500px] object-cover rounded-xl transition-transform duration-700 ease-in-out hover:scale-105"
              />
            </div>

          </div>
        </div>
      </div>
      {/* Our Mission */}

      {/* Why Choose Nupsy? */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="relative text-4xl pb-2.5 font-bold mb-5 text-center font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">
              Why Choose Nupsy?
            </h2>
            <p className="text-lg text-black md:text-[16px] font-Josefin mb-8">
              There are countless hotel listing sites out there, but Nupsy stands out by offering:
            </p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <span className="text-4xl mb-2 block">💡</span>
              <h3 className="text-[24px] font-bold text-center font-Josefin mb-2">Expert Curation</h3>
              <p className="text-black text-sm md:text-[16px] font-Josefin">
                We focus on quality over quantity, only featuring hotels that provide an exceptional stay.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <span className="text-4xl mb-2 block">🔍</span>
              <h3 className="text-[24px] font-bold text-center font-Josefin mb-2">Easy-to-Use Categories</h3>
              <p className="text-black text-sm md:text-[16px] font-Josefin">
                Instead of overwhelming you with hundreds of listings, we organize hotels into clear categories tailored to different types of travelers.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <span className="text-4xl mb-2 block">📍</span>
              <h3 className="text-[24px] font-bold text-center font-Josefin mb-2">Las Vegas Expertise</h3>
              <p className="text-black text-sm md:text-[16px] font-Josefin">
                Our site is specifically dedicated to Las Vegas hotels, meaning we provide insights and selections that general travel websites might miss.
              </p>
            </div>

          </div>
        </div>
      </div>
      {/* Why Choose Nupsy? */}

      {/* What You’ll Find on Nupsy */}

      <div className="py-16 bg-[#fcfcfc]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="relative text-4xl pb-2.5 font-bold mb-5 text-center font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">
              What You’ll Find on Nupsy
            </h2>
            <p className="text-lg text-black md:text-[16px] font-Josefin mb-8">
              Discover the perfect Las Vegas hotel for your needs, categorized for easy browsing.
            </p>
          </div>

          {/* Hotel Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto mt-5">
            {/* Category Card */}
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <span className="text-3xl">🔹</span>
              <div>
                <h3 className="relative text-[24px]   font-bold  font-Josefin">Party Hotels</h3>
                <p className="text-gray-500  text-[16px] bg-transparent  transition-all duration-300 font-Josefin ">
                  For those looking to experience Las Vegas nightlife, pool parties, and exclusive clubs.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <span className="text-3xl">🔹</span>
              <div>
                <h3 className="relative text-[24px]   font-bold  font-Josefin">Spa Hotels</h3>
                <p className="text-gray-500  text-[16px] bg-transparent  transition-all duration-300 font-Josefin ">
                  A collection of wellness-focused hotels with world-class spas and relaxation experiences.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <span className="text-3xl">🔹</span>
              <div>
                <h3 className="relative text-[24px]   font-bold  font-Josefin">Casino Hotels</h3>
                <p className="text-gray-500  text-[16px] bg-transparent  transition-all duration-300 font-Josefin ">
                  The best casino resorts in Las Vegas, featuring gaming, nightlife, and top-tier dining.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <span className="text-3xl">🔹</span>
              <div>
                <h3 className="relative text-[24px]   font-bold  font-Josefin">Budget Hotels</h3>
                <p className="text-gray-500  text-[16px] bg-transparent  transition-all duration-300 font-Josefin text-center">
                  Affordable yet comfortable options that let you enjoy Las Vegas without overspending.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="max-w-4xl mx-auto text-left mt-10">
            <p className="   text-black font-Josefin mb-4 text-2xl font-bold">
              Each listing includes:
            </p>
            <ul className="text-gray-700 text-lg space-y-3 font-Josefin">
              <li>✅ <strong>Hotel name and price per night</strong></li>
              <li>✅ <strong>Key highlights showcasing its best features</strong></li>
              <li>✅ <strong>A full, well-researched review</strong></li>
            </ul>
            <p className="text-lg text-gray-700 mt-6 font-Josefin ">
              This format ensures you get all the essential information at a glance, making it easier to find your perfect Las Vegas hotel.
            </p>
          </div>
        </div>
      </div>
      {/* What You’ll Find on Nupsy */}

      {/* Our Commitment to Accuracy */}
      <div className="py-16 bg-[#fcfcfc]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="relative text-4xl pb-2.5 font-bold mb-5 text-center font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">
              Our Commitment to Accuracy
            </h2>
            <p className="text-lg text-black md:text-[18px] font-Josefin mb-8">
              We take pride in providing reliable, up-to-date information. Our listings are based on:
            </p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {commitmentData.map((item) => (
              <div key={item.id} className="p-6 bg-white shadow-md rounded-lg">
                <div className="h-60 flex justify-center overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-black font-Josefin mb-4 text-2xl font-bold mt-6">{item.title}</h3>
              </div>
            ))}
          </div>
          <p className="text-lg text-black md:text-[18px] font-Josefin mt-12">If you ever notice a discrepancy or outdated information, feel free to reach out to us at <a href="mailto:info@nupsy.com">info@nupsy.com</a>, and we’ll review it promptly.
          </p>
        </div>
      </div>


      {/* Newsletter */}
      <div className="Newsletter py-14">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="NewsletterInner text-center w-[100%] max-w-[800px] mx-auto">
            <h2 className="relative text-[28px] md:text-4xl pb-2.5 font-bold mb-5 font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">Get in Touch

            </h2>
            <p className="text-[18px] font-Josefin pb-1">Have questions? Want to suggest a hotel or inquire about partnerships?
            </p>
            <p className="text-[18px] font-Josefin pb-1">📧 Email us at <a href="mailto:info@nupsy.com">info@nupsy.com</a>
            </p>
            <p className="text-[18px] font-Josefin pb-1">We’d love to hear from you!
            </p>
            <p className="text-[18px] font-Josefin"> For the latest <strong>Las Vegas hotel deals, travel tips, and exclusive offers</strong>, sign up for our newsletter below.
            </p>
            <h2 className="relative mt-10 text-[28px] md:text-4xl pb-2.5 font-bold mb-5 font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">Join Our Newsletter

            </h2>
            <NewsletterForm />
          </div>
        </div>
      </div>
      {/* Newsletter */}

      <Disclaimer />

    </div>
  );
};

export default About; 
