import React from 'react';
import SpaBnr from "../../assets/images/SpaBnr.avif";
import Waldorf from "../../assets/images/Waldorf.webp";
import Venetian from "../../assets/images/Venetianr.avif";
import Aria from "../../assets/images/Aria.jpg";
import Four from "../../assets/images/Four.jpg";
import Bellagio from "../../assets/images/Bellagio.jpg";
import Vdara from "../../assets/images/Vdara.jpg";
import Mirage from "../../assets/images/TheMirage.webp";
import Caesars from "../../assets/images/CaesarsPalacet.jpg";
import ThePalms from "../../assets/images/ThePalms.jpg"
import Aromatherapy from "../../assets/images/Aromatherapy.jpg"
import NewsletterForm from '../../components/NewsletterForm/NewsletterForm';
import Disclaimer from '../../components/Disclaimer/Disclaimer';

const hotels = [
  {
    name: "Waldorf Astoria Las Vegas",
    price: 399,
    img: `${Waldorf}`,
    features: [
      "Award-winning spa with private suites",
      "Heated rooftop pool with cabanas",
      "Tranquil, non-gaming hotel atmosphere",
    ],
    description:
      "The Waldorf Astoria offers one of the most exclusive spa experiences in Las Vegas. The three-floor spa features steam rooms, plunge pools, and private therapy suites, making it an ideal retreat from the Strip’s fast pace. With no casino on-site, the atmosphere remains peaceful and refined.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-waldorf-astoria-las-vegas.Qug4gGy",
  },
  {
    name: "The Venetian Resort",
    price: 289,
    img: `${Venetian}`,
    features: [
      "Canyon Ranch Spa + Fitness",
      "Thermal spa, salt grotto, and hydrotherapy rooms",
      "All-suite luxury accommodations",
    ],
    description:
      "The Canyon Ranch Spa + Fitness inside The Venetian is one of the most extensive spas in Las Vegas, featuring aqua therapy, holistic treatments, and wellness programs. The hotel’s large suites provide extra comfort, while the calming ambiance of the spa makes it a perfect getaway for relaxation.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-the-venetian-resort-las-vegas.W2cDged",
  },
  {
    name: "Aria Resort & Casino",
    price: 279,
    img: `${Aria}`,
    features: [
      "The Spa at Aria with Himalayan salt therapy",
      "Heated stone beds and private spa suites",
      "Large resort pools with lush landscaping",
    ],
    description:
      "The Spa at Aria provides a modern, high-tech approach to wellness, including Himalayan salt therapy rooms and heated stone beds for total relaxation. The tranquil pool areas and private spa suites offer a break from the excitement of the Strip.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-aria-resort-casino.5VSxuMX",
  },
  {
    name: "Four Seasons Hotel Las Vegas",
    price: 379,
    img: `${Four}`,
    features: [
      "Five-star spa with personalized treatments",
      "Private, non-gaming resort",
      "Relaxing pool deck with luxury service",
    ],
    description:
      "The Four Seasons is a secluded oasis within the city, offering five-star spa treatments and a private pool away from the crowds. This non-gaming resort focuses on personalized wellness experiences, making it perfect for travelers who want to unwind.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-four-seasons-hotel-las-vegas.OAr1OBh",
  },
  {
    name: "Bellagio Las Vegas",
    price: 299,
    img: `${Bellagio}`,
    features: [
      "Bellagio Spa & Salon with luxury treatments",
      "Five Mediterranean-inspired pools",
      "Elegant resort with a calming atmosphere",
    ],
    description:
      "The Bellagio Spa is known for its soothing ambiance and extensive treatment menu, including custom massages, facials, and body therapies. The expansive pool deck, featuring Mediterranean-style pools and private cabanas, provides a serene escape.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-bellagio.hrRKzVa",
  },
  {
    name: "Vdara Hotel & Spa",
    price: 249,
    img: `${Vdara}`,
    features: [
      "ESPA spa with holistic treatments",
      "Rooftop pool with cabanas",
      "Non-gaming, all-suite hotel",
    ],
    description:
      "Vdara is a wellness-focused hotel with an award-winning ESPA spa offering detoxifying therapies, aromatherapy, and stress-relief treatments. The absence of a casino ensures a quiet and peaceful experience, while the rooftop pool adds a touch of luxury.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-vdara-hotel-spa-at-aria-las-vegas.cqVYqsP",
  },
  {
    name: "The Mirage",
    price: 179,
    img: `${Mirage}`,
    features: [
      "The Spa at The Mirage with full-service treatments",
      "Large tropical pool area",
      "Affordable luxury with a relaxed vibe",
    ],
    description:
      "The Mirage offers a great mix of affordability and relaxation, featuring a full-service spa, sauna, and hydrotherapy treatments. The tropical-style pool and spa lounges create a calming environment without the high price tag of some other resorts.",
    link: "https://expedia.com/affiliates/hotel-search-the-mirage-hotel-casino-dateless.4lCKtcY",
  },
  {
    name: "Caesars Palace",
    price: 279,
    img: `${Caesars}`,
    features: [
      "Qua Baths & Spa with Roman-inspired treatments",
      "Laconium heated stone beds and hydrotherapy pools",
      "Iconic Garden of the Gods Pool Oasis",
    ],
    description:
      "The Qua Baths & Spa at Caesars Palace provides an immersive, Roman-style experience with hydrotherapy baths, Arctic ice rooms, and herbal steam rooms. The Garden of the Gods Pool Oasis offers multiple pools, cabanas, and daybeds for ultimate relaxation.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-caesars-palace-resort-casino.90NvcLN",
  },
  {
    name: "The Palms Casino Resort",
    price: 189,
    img: `${ThePalms}`,
    features: [
      "Drift Spa & Hammam with luxury wellness treatments",
      "Heated outdoor pools with a quiet atmosphere",
      "Stylish accommodations with modern design",
    ],
    description:
      "The Drift Spa & Hammam at The Palms offers unique spa experiences, including Turkish bath treatments, hot stone therapy, and deep tissue massages. The relaxed pool areas and modern accommodations create a refreshing escape from the usual Las Vegas energy.",
    link: "https://expedia.com/affiliates/hotel-search-4321-w-flamingo-rd.YmnXvS9",
  },
]

const Spa = () => {
  return (
    <div>
      <div
        className="relative py-28 bg-cover bg-center bg-no-repeat h-[350px] md:h-[550px] flex items-center"
        style={{ backgroundImage: `url(${SpaBnr})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="w-full max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-2.5 font-Josefin">Spa Hotels
            </h2>
            <p className="text-lg font-Josefin">
              Relax and Recharge at the Top Spa Hotels in Las Vegas
            </p>
          </div>
        </div>
      </div>
      <div className="description py-14">
        <div className="container mx-auto px-4">
          <p className="font-Josefin text-[16px] leading-[28px]">
            Las Vegas isn’t just about nightlife and casinos—it’s also home to some of the most luxurious <strong>spa hotels</strong> in the world. Whether you're looking for a <strong>wellness retreat</strong>, a <strong>serene escape</strong>, or just a place to unwind between exploring the city, these <strong>Las Vegas spa hotels</strong> offer world-class treatments, tranquil pools, and rejuvenating experiences.
          </p>

        </div>
      </div>

      {/* PartyHotels */}
      <div className="PartyHotels py-14 bg-[#fcfcfc]">
        <div className="container mx-auto px-4">
          <h2 className="relative text-4xl pb-2.5 font-bold mb-12 text-center font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#fa5f30] after:rounded-full">
            Top Spa Hotels in Las Vegas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative pb-[60px]"
              >
                <a
                  href={hotel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden relative rounded-2xl"
                >
                  <img
                    src={hotel.img}
                    alt={hotel.name}
                    className="w-full h-80 object-cover transform transition-transform duration-500 hover:scale-110 rounded-2xl"
                  />
                  <strong className="text-[16px] text-black font-normal  mt-2 absolute bottom-2.5 right-2.5 bg-[#fff] rounded-[6px] p-[10px] font-Josefin">
                    💰 Price Per Night: ${hotel.price}
                  </strong>
                </a>

                <div className="p-5">
                  <h3 className="text-2xl font-semibold font-Josefin ">{hotel.name}</h3>


                  <ul className="mt-3 space-y-1 text-gray-700 font-Josefin">
                    {hotel.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  <p className="mt-3 text-gray-600 font-Josefin">{hotel.description}</p>

                  <a
                    href={hotel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center mt-4 px-4 py-2 text-white bg-[#fa5f30] hover:bg-[#122b24] transition-colors duration-300 rounded-[6px] absolute bottom-5 font-Montserrat "
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* PartyHotels */}
      {/* Why These Hotels? */}
      <div className="TheseHotels py-14">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="text-center">
              <h2 className="relative text-4xl pb-2.5 font-bold mb-3 font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#fa5f30] after:rounded-full">
                Why These Hotels?
              </h2>
              <p className="mt-3 text-gray-600 font-Josefin">
                Each of these <strong>Las Vegas spa hotels</strong> offers a <strong>tranquil atmosphere, high-end treatments, and serene relaxation areas. </strong> Whether you’re looking for a <strong>five-star wellness retreat</strong> or an <strong>affordable spa hotel</strong>, these resorts provide <strong>exceptional comfort and rejuvenating experiences.</strong>
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl group">
                <img
                  src={Aromatherapy}
                  alt="Why These Hotels?"
                  className="w-full h-[500px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why These Hotels? */}
      {/* Book Your Las Vegas Party Getaway */}
      <div className="py-14 bg-[#122b24]">
        <div className="container mx-auto px-4">
          <div className="w-[100%] max-w-[900px] mx-auto">
            <div className="text-center">
              <h3 className="relative text-4xl text-white pb-2.5 font-bold mb-5 font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#fff] after:rounded-full">Book Your Las Vegas Spa Retreat </h3>
              <p className="text-[16px] font-Josefin text-white leading-[28px] mb-4">Las Vegas is home to some of the <strong>best spa hotels in the world</strong>, offering everything from <strong>therapeutic massages</strong> to <strong>private rooftop pools.</strong> Whether you want to <strong>detox after a night out, enjoy a relaxing getaway</strong>, or <strong>experience top-tier wellness treatments</strong>, these hotels provide the perfect setting.
              </p>
              <p className="text-[16px] font-Josefin text-white leading-[28px]">💆‍♀️ Start planning your Las Vegas spa retreat today!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Book Your Las Vegas Party Getaway */}

      {/* Newsletter */}
      <div className="Newsletter py-14">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="NewsletterInner text-center w-[100%] max-w-[800px] mx-auto">
            <h2 className="relative text-[28px] md:text-4xl pb-2.5 font-bold mb-5 font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#fa5f30] after:rounded-full">Join Our Newsletter
            </h2>
            <p className="text-[18px] font-Josefin"> Get exclusive updates on the <strong>best Las Vegas spa hotels, wellness retreats, and special offers.</strong> Sign up now and stay in the loop!

            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
      {/* Newsletter */}
      <Disclaimer />


    </div>
  )
}

export default Spa