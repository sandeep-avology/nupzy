import React from "react";
import heroBanner from "../../assets/images/heroBanner.jpg";
import FeaturedHotels from "../../components/FeaturedHotels/FeaturedHotels";
import HotelCategories from "../../components/HotelsCategory/HotelsCategory";
import WhyChoose from "../../assets/images/WhyChoose.avif";
import NewsletterForm from "../../components/NewsletterForm/NewsletterForm";
import Disclaimer from "../../components/Disclaimer/Disclaimer";
import TopList from "../../components/mobileDesign/TopList";


const features = [
  { title: " Hand-Picked Listings", description: "We feature only real, top-rated hotels in Las Vegas." },
  { title: " Up-to-Date Pricing", description: "Know what to expect before you book." },
  { title: " Straightforward Categories", description: "Find exactly what you're looking for, fast." },
  { title: " Expert Reviews", description: "Detailed insights to help you choose the best stay." },

];
const Home = () => {
  return (
    <div>
      <div className="">
        {/* Home Banner */}
        <div className="heroBanner h-[350px] relative py-28 bg-cover bg-center bg-no-repeat md:h-[650px] flex items-center"
          style={{ backgroundImage: `url(${heroBanner})` }}    >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto relative z-10 px-[16px]">
            <div className="w-[100%] max-w-[718px] mx-auto text-center text-white">
              <h1 className="md:text-6xl text-[32px] leading-[36px]  font-bold mb-5 md:leading-[70px] font-Josefin">
                Nupsy – Your Guide to the Best Hotels in Las Vegas
              </h1>
              <p className="text-[20px]  font-Josefin">Find the Perfect Las Vegas Hotel for Your Stay</p>
            </div>
          </div>
        </div>
        {/* Home Banner */}

        {/*Description  */}
        <div className="description py-14">
          <div className="container mx-auto px-[16px]">
            <p className="font-Josefin font-normal text-[16px] leading-[28px]">Las Vegas is home to some of the most exciting hotels in the world, offering everything from high-energy party resorts to luxurious spa retreats, world-class casino hotels, and budget-friendly stays. Whether you're visiting for the nightlife, relaxation, or the thrill of the Strip, Nupsy makes it easy to find the best hotels in Las Vegas. Our listings feature hotels with up-to-date pricing, key highlights, and detailed reviews, making it simple to compare options. We focus on four key categories to match every type of traveler:
            </p>
          </div>
        </div>
        {/*Description  */}

        {/* Featured Las Vegas Hotels */}
        <div className="featured pb-[56px]">
          <div className="container mx-auto px-[16px]">
            <div className="featuredBox">
              <div className="">
                <FeaturedHotels />
              </div>
            </div>
          </div>
        </div>
        {/* Featured Las Vegas Hotels */}


        {/* Find Hotels by Category */}
        <HotelCategories />
        {/* Find Hotels by Category */}

        {/*  */}

        <div className="chooseNupsy bg-[#fcfcfc] mt-14 py-14">
          <div className="container mx-auto px-4 lg:px-16">
            <div className="text-center mb-12">
              <h2 className=" text-[28px] md:text-4xl font-bold font-Josefin text-gray-800">Why Choose Nupsy?</h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <img src={WhyChoose} alt="Why Choose Nupsy" className="w-full h-auto rounded-lg shadow-lg" />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2">
                <ul className="space-y-4 text-gray-700">
                  {features.map((feature, index) => (
                    <li key={index} className=" pl-[30px] relative after:content-['✔️'] after:absolute after:left-0  after:top-[0]">
                      <span className="text-lg font-semibold text-gray-900 font-Josefin">{feature.title} </span>
                      {feature.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="Newsletter py-14">
          <div className="container mx-auto px-4 lg:px-16">
            <div className="NewsletterInner text-center w-[100%] max-w-[800px] mx-auto">
              <h2 className="relative text-[28px] md:text-4xl pb-2.5 font-bold mb-5 font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">Join Our Newsletter
              </h2>
              <p className="text-[18px] font-Josefin">Stay updated with the best Las Vegas hotel deals, insider travel tips, and exclusive offers. Sign up now and never miss a great deal!
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
        {/* Newsletter */}

        <Disclaimer />
      </div>
      <TopList />

    </div>
  );
};

export default Home;
