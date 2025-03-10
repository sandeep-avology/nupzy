import React from "react";
import PartyBnr from "../../assets/images/PartyBnr.jpg";
import Encore from "../../assets/images/Encore.jpg";
import Cosmopolitan from "../../assets/images/Cosmopolitan.jpg";
import Grand from "../../assets/images/las-vegas-hotels-mgm.jpg";
import Resorts from "../../assets/images/Resorts.jpg";
import Venetian from "../../assets/images/Venetian.jpg";
import Circa from "../../assets/images/Circa.jpg";
import Planet from "../../assets/images/Planet.png"
import TheLINQ from "../../assets/images/TheLINQ.png"
import Sahara from "../../assets/images/SAHARA.jpg"
import TheseHotels from "../../assets/images/Party-Hotels.jpg"
import NewsletterForm from "../../components/NewsletterForm/NewsletterForm";
import Disclaimer from "../../components/Disclaimer/Disclaimer";




const hotels = [
  {
    name: "Encore at Wynn Las Vegas",
    price: 349,
    img: `${Encore}`,
    features: [
      "Encore Beach Club hosts top DJs",
      "Luxury suites with Strip views",
      "Exclusive nightclubs and VIP service",
    ],
    description:
      "Encore at Wynn Las Vegas is a top choice for those looking for high-energy nightlife and pool parties. Encore Beach Club is a leading destination for daytime events, drawing some of the most famous DJs. Inside, XS Nightclub keeps the party going with an electrifying atmosphere. The resort’s upscale suites provide a comfortable space to recharge before another night out.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-encore-at-wynn-las-vegas.q51rh5f",
  },
  {
    name: "The Cosmopolitan of Las Vegas",
    price: 319,
    img: `${Cosmopolitan}`,
    features: [
      "Marquee Nightclub & Dayclub",
      "Rooftop pools with cabanas",
      "Central Strip location",
    ],
    description:
      "The Cosmopolitan offers a prime party atmosphere, with Marquee Nightclub & Dayclub hosting live performances and VIP events. The rooftop pools provide the perfect setting for daytime socializing. With its central location, the hotel keeps guests close to other major nightlife hotspots.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-the-cosmopolitan-of-las-vegas.APZbLXt",
  },
  {
    name: "MGM Grand",
    price: 199,
    img: `${Grand}`,
    features: [
      "Hakkasan Nightclub with top DJs",
      "Wet Republic Ultra Pool",
      "Prime Strip location",
    ],
    description:
      "MGM Grand is known for its massive entertainment spaces. Hakkasan Nightclub is a premier venue for world-famous DJs, while Wet Republic Ultra Pool draws crowds for daytime events. The casino, bars, and restaurants add to the hotel’s lively atmosphere.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-mgm-grand-hotel-casino.7q4IFHk",
  },
  {
    name: "Resorts World Las Vegas",
    price: 279,
    img: `${Resorts}`,
    features: [
      "Zouk Nightclub and Ayu Dayclub",
      "High-end dining and rooftop bars",
      "Modern, stylish accommodations",
    ],
    description:
      "One of the newest party hotels in Las Vegas, Resorts World offers an updated nightlife experience. Zouk Nightclub and Ayu Dayclub attract an energetic crowd, while the hotel’s sleek design and premium restaurants elevate the overall experience.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-las-vegas-hilton-at-resorts-world.FuyBxS0",
  },
  {
    name: "The Venetian Resort",
    price: 289,
    img: `${Venetian}`,
    features: [
      "TAO Beach Dayclub & Nightclub",
      "Spacious, all-suite accommodations",
      "Central location on the Strip",
    ],
    description:
      "The Venetian combines party energy with upscale amenities. TAO Beach Dayclub and Nightclub keep the atmosphere lively with top performances and guest DJs. The resort’s large suites provide extra comfort for groups.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-the-venetian-resort-las-vegas.36VyiH6",
  },
  {
    name: "Circa Resort & Casino (Adults Only)",
    price: 189,
    img: `${Circa}`,
    features: [
      "Stadium Swim rooftop pool party",
      "Downtown Las Vegas location",
      "Bars and gaming with a social vibe",
    ],
    description:
      "Circa Resort is an adults-only hotel known for non-stop energy. Stadium Swim offers a multi-level pool experience with giant LED screens and live entertainment. The casino and multiple bars create a space for guests to keep the excitement going day and night.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-circa-resort-casino.vQb5pTv",
  },
  {
    name: "Planet Hollywood Resort & Casino",
    price: 169,
    img: `${Planet}`,
    features: [
      "Social atmosphere and casino floor",
      "Close to entertainment and dining",
      "Affordable party-friendly option",
    ],
    description:
      "Planet Hollywood attracts a younger crowd with its energetic environment and accessible nightlife. The hotel is surrounded by entertainment venues, keeping guests close to the action without breaking the budget.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-planet-hollywood-resort-casino.uDPgnMG",
  },
  {
    name: "The LINQ Hotel + Experience",
    price: 149,
    img: `${TheLINQ}`,
    features: [
      "The LINQ Promenade for nightlife",
      "Social atmosphere with modern rooms",
      "Budget-friendly option on the Strip",
    ],
    description:
      "The LINQ is perfect for those looking for affordable nightlife options. The Promenade offers an easy way to bar hop and explore entertainment venues. The rooms are modern and designed for social travelers.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-the-linq-hotel-experience.VPQx3Il",
  },
  {
    name: "Sahara Las Vegas",
    price: 139,
    img: `${Sahara}`,
    features: [
      "Azilo Ultra Pool",
      "Trendy bars and lounges",
      "Boutique-style accommodations",
    ],
    description:
      "SAHARA blends style with a lively atmosphere. Azilo Ultra Pool is a popular spot for daytime events, while the hotel’s bars and lounges keep the energy going into the night.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-sahara-las-vegas.sPaujof",
  },
];

const Party = () => {
  return (
    <div>
      <div
        className="relative py-28 bg-cover bg-center bg-no-repeat h-[350px] md:h-[550px] flex items-center"
        style={{ backgroundImage: `url(${PartyBnr})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="w-full max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-2.5 font-Josefin">Party Hotels</h2>
            <p className="text-lg font-Josefin">
              Experience Non-Stop Entertainment in Las Vegas
            </p>
          </div>
        </div>
      </div>

      <div className="description py-14">
        <div className="container mx-auto px-4">
          <p className="font-Josefin text-[16px] leading-[28px]">
            Las Vegas is the ultimate destination for travelers looking for world-class nightlife, pool parties, and high-energy entertainment. The right hotel can make all the difference, offering exclusive nightclubs, rooftop lounges, and poolside events with top DJs. Whether you're planning a <strong>bachelor or bachelorette trip, a group getaway</strong>, or just want to be in the center of the action, these <strong>Las Vegas party hotels</strong> deliver an unforgettable experience.
          </p>
          <p className="font-Josefin text-[16px] leading-[28px]">Below are <strong>9 of the best party hotels in Las Vegas</strong>, known for their legendary nightlife, dayclubs, and social atmospheres.
          </p>
        </div>
      </div>

      {/* PartyHotels */}
      <div className="PartyHotels py-14 bg-[#fcfcfc]">
        <div className="container mx-auto px-4">
          <h2 className="relative text-4xl pb-2.5 font-bold mb-12 text-center font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">
            Top Party Hotels in Las Vegas
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
                      <li key={i}>✅ {feature}</li>
                    ))}
                  </ul>

                  <p className="mt-3 text-gray-600 font-Josefin">{hotel.description}</p>

                  <a
                    href={hotel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center mt-4 px-4 py-2 text-white bg-[#ff3f3f] hover:bg-[#122b24] transition-colors duration-300 rounded-[6px] absolute bottom-5 font-Montserrat "
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
              <h2 className="relative text-4xl pb-2.5 font-bold mb-3 font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">Why These Hotels?</h2>
              <p className="mt-3 text-gray-600 font-Josefin">
                Each of these Las Vegas party hotels is known for its nightlife, pool parties, and high-energy entertainment.
                Whether you’re looking for a VIP club experience, a packed dance floor, or a daytime pool party,
                these hotels offer the best settings for a social getaway.
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl group">
                <img
                  src={TheseHotels}
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
              <h3 className="relative text-white text-4xl pb-2.5 font-bold mb-5 font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-white after:rounded-full">Book Your Las Vegas Party Getaway
              </h3>
              <p className="text-[16px] font-Josefin text-white leading-[28px] mb-4">Las Vegas is one of the <strong>best cities for party lovers</strong>, and these hotels put you at the center of the action. Whether you want to <strong>dance all night at a nightclub, relax in a cabana,</strong> or experience world-class DJs, these hotels have everything you need.
              </p>
              <p className="text-[16px] font-Josefin text-white leading-[28px]">🎉 Start planning your Las Vegas party getaway today!</p>
            </div>
          </div>
        </div>
      </div>
      {/* Book Your Las Vegas Party Getaway */}


      {/* Newsletter */}
      <div className="Newsletter py-14">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="NewsletterInner text-center w-[100%] max-w-[800px] mx-auto">
            <h2 className="relative text-[28px] md:text-4xl  pb-2.5 font-bold mb-5 font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">Join Our Newsletter
            </h2>
            <p className="text-[18px] font-Josefin"> Get exclusive updates on the <strong>best Las Vegas party hotels, VIP deals, and nightlife events.</strong> Sign up now and stay in the loop!
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
      {/* Newsletter */}
      <Disclaimer />
    </div>
  );
};

export default Party;
