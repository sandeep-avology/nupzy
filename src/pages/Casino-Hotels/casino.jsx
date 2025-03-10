import React from 'react';
import CasinoHotelsBnr from "../../assets/images/CasinoHotelsBnr.avif";
import TheVenetiann from "../../assets/images/TheVenetiann.avif";
import Caesars from "../../assets/images/CaesarsPalace.jpg";
import MGM from "../../assets/images/MGM-Grand.jpg";
import Wynn from "../../assets/images/Wynn.jpg";
import Bellagios from "../../assets/images/Bellagios.avif";
import Resortss from "../../assets/images/Resortss.jpg";
import Cosmopolitans from "../../assets/images/Cosmopolitans.jpg";
import Circaness from "../../assets/images/Circaness.jpg";
import Mirage from "../../assets/images/Mirage.jpg";
import LuxuryCasino from "../../assets/images/Luxury-Casino.jpg";
import NewsletterForm from '../../components/NewsletterForm/NewsletterForm';
import Disclaimer from '../../components/Disclaimer/Disclaimer';

const hotels = [
  {
    name: "The Venetian Resort",
    price: 289,
    img: `${TheVenetiann}`,
    features: [
      "Expansive casino with classic and modern games",
      "High-limit poker and exclusive lounges",
      "Luxury all-suite accommodations",
    ],
    description:
      "The Venetian offers one of the most elegant casino experiences in Las Vegas. The massive gaming floor features thousands of slot machines, poker tables, and exclusive high-limit areas. Guests can enjoy a sophisticated atmosphere while staying in luxurious suites with spacious living areas.",
    link: "https://expedia.com/affiliates/hotel-search-the-venetian-resort-las-vegas-dateless.4drW1AM",
  },
  {
    name: "Caesars Palace",
    price: 279,
    img: `${Caesars}`,
    features: [
      "High-energy casino with VIP gaming rooms",
      "Iconic Roman-themed décor and architecture",
      "Entertainment from world-class performers",
    ],
    description:
      "Caesars Palace is one of the most legendary casino hotels in Las Vegas, featuring an action-packed gaming floor with a mix of classic and modern games. The high-limit tables and exclusive VIP lounges attract both casual players and high rollers. Outside the casino, the resort offers renowned shows, fine dining, and a luxurious spa.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-caesars-palace-resort-casino.Xw5RAww",
  },
  {
    name: "MGM Grand",
    price: 199,
    img: `${MGM}`,
    features: [
      "Massive gaming floor with poker, slots, and table games",
      "Exclusive VIP lounges and high-limit gaming",
      "Top-tier entertainment, including live shows",
    ],
    description:
      "MGM Grand has one of the largest casino floors in Las Vegas, offering an extensive selection of table games, poker rooms, and slot machines. Guests can enjoy private gaming lounges, live sports betting, and immersive entertainment from some of the biggest names in music and theater.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-mgm-grand-hotel-casino.VtiMOSu",
  },
  {
    name: "Wynn Las Vegas",
    price: 349,
    img: `${Wynn}`,
    features: [
      "Elegant casino floor with private gaming salons",
      "Award-winning restaurants and nightlife",
      "Five-star luxury accommodations",
    ],
    description:
      "Wynn Las Vegas provides a high-end casino experience, featuring sleek gaming tables, private salons, and an exclusive sports book area. The resort is also home to some of the best fine dining in Las Vegas, making it a top choice for travelers who want a first-class experience.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-wynn-las-vegas.9s9kwHo",
  },
  {
    name: "Bellagio Las Vegas",
    price: 299,
    img: `${Bellagios}`,
    features: [
      "Classic casino floor with poker, blackjack, and roulette",
      "Exclusive poker room with high-stakes tables",
      "Famous fountains and upscale resort atmosphere",
    ],
    description:
      "Bellagio is known for its refined gaming experience, offering a world-famous poker room, high-stakes tables, and a relaxed yet upscale casino atmosphere. Outside the casino, guests can enjoy the resort’s iconic fountains, Michelin-star dining, and stunning pool areas.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-bellagio.0FpN2B6",
  },
  {
    name: "Resorts World Las Vegas",
    price: 279,
    img: `${Resortss}`,
    features: [
      "Modern casino floor with interactive gaming options",
      "High-tech sportsbook and high-limit lounges",
      "Three hotel brands under one roof",
    ],
    description:
      "Resorts World offers a modern take on the classic Las Vegas casino experience, featuring advanced gaming technology, a high-limit poker room, and exclusive gaming lounges. The resort is also home to multiple luxury hotel brands, catering to different types of travelers.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-las-vegas-hilton-at-resorts-world.nHwXkQd",
  },
  {
    name: "The Cosmopolitan of Las Vegas",
    price: 319,
    img: `${Cosmopolitans}`,
    features: [
      "Stylish casino floor with unique slot and table games",
      "Private high-limit gaming rooms",
      "Trendy, modern hotel design",
    ],
    description:
      "The Cosmopolitan offers a hip, modern casino atmosphere, with sleek gaming tables, specialty slot machines, and private high-roller rooms. The resort’s cutting-edge design, nightlife scene, and rooftop pools make it a favorite for younger travelers.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-the-cosmopolitan-of-las-vegas.SENlepH",
  },
  {
    name: "Circa Resort & Casino (Adults Only)",
    price: 189,
    img: `${Circaness}`,
    features: [
      "Stadium-style sportsbook with a massive LED screen",
      "Classic gaming with a retro-Vegas feel",
      "Rooftop pool with a lively social atmosphere",
    ],
    description:
      "Circa Resort is an adults-only casino hotel, featuring one of the largest sportsbooks in Las Vegas and a retro-style casino floor. With a high-energy atmosphere, lively pool deck, and top-tier gaming, it’s a great option for those looking for a social and engaging experience.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-circa-resort-casino.zPG5Gs8",
  },
  {
    name: "The Mirage",
    price: 179,
    img: `${Mirage}`,
    features: [
      "Casino floor with a mix of table games and slots",
      "Relaxed, tropical-inspired atmosphere",
      "Great mix of gaming and entertainment",
    ],
    description:
      "The Mirage offers a laid-back gaming experience, featuring a variety of table games, slot machines, and a poker room. The resort’s tropical décor, pool area, and entertainment options make it a popular choice for travelers looking for a classic Las Vegas feel.",
    link: "https://expedia.com/affiliates/hotel-search-the-mirage-hotel-casino-dateless.Ms2HQxc",
  },
];






const Casino = () => {
  return (
    <div>
      {/* CasinoHotelsBnr  */}
      <div
        className="relative py-28 bg-cover h-[350px] bg-center bg-no-repeat md:h-[550px] flex items-center"
        style={{ backgroundImage: `url(${CasinoHotelsBnr})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="w-full max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-2.5 font-Josefin">  Casino Hotels
            </h2>
            <p class="text-lg font-Josefin">Stay in the Heart of the Action at the Top Casino Hotels in Las Vegas</p>
          </div>
        </div>
      </div>
      {/* CasinoHotelsBnr  */}

      {/* Description  */}
      <div className="description py-14">
        <div className="container mx-auto px-4">
          <p className="font-Josefin text-[16px] leading-[28px]">
            Las Vegas is home to some of the <strong>most famous casino resorts in the world</strong>, offering 24/7 gaming, high-end entertainment, and top-tier dining. Whether you’re here for the slot <strong>machines, poker tables , or high-limit rooms, </strong> these <strong>Las Vegas casino hotels</strong> deliver an unmatched experience.
          </p>

        </div>
      </div>
      {/* Description */}

      {/* Casino Hotels */}
      <div className="casino py-14 bg-[#fcfcfc]">
        <div className="container mx-auto px-4">
          <h2 className="relative text-4xl pb-2.5 font-bold mb-12 text-center font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">
            Top Casino Hotels in Las Vegas          </h2>

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
      {/* Casino Hotels */}

      {/* Why These Hotels? */}
      <div className="TheseHotels py-14">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="text-center">
              <h2 className="relative text-4xl pb-2.5 font-bold mb-3 font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">Why These Hotels?</h2>
              <p className="mt-3 text-gray-600 font-Josefin">
                Each of these <strong>Las Vegas casino hotels</strong> is known for <strong>offering top-tier gaming, exclusive lounges, and high-limit poker rooms.</strong> Whether you're looking for a <strong>luxury casino experience</strong>, a <strong>modern gaming floor</strong>, or an <strong>adults-only casino resort</strong>, these hotels offer the best options for staying in the center of the action.

              </p>
              <div className="mt-8 overflow-hidden rounded-2xl group">
                <img
                  src={LuxuryCasino}
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
              <h3 className="relative text-white text-4xl pb-2.5 font-bold mb-5 font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-white after:rounded-full">Book Your Las Vegas Casino Stay
              </h3>
              <p className="text-[16px] font-Josefin text-white leading-[28px] mb-4">Las Vegas is the <strong>ultimate destination for gaming enthusiasts</strong>, offering <strong>24/7 casinos, luxury accommodations, and non-stop entertainment</strong>. Whether you want to <strong>play high-stakes poker, spin the roulette wheel, or enjoy the slots</strong>, these <strong>casino hotels provide the perfect experience.</strong>
              </p>
              <p className="text-[16px] font-Josefin text-white leading-[28px]">🎲 <strong>Start planning your Las Vegas casino getaway today!</strong>
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
            <h2 className="relative text-[28px] md:text-4xl pb-2.5 font-bold mb-5 font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">Join Our Newsletter
            </h2>
            <p className="text-[18px] font-Josefin"> Get exclusive updates on the <strong>best Las Vegas casino hotels, gaming promotions, and special offers. </strong> Sign up now and stay in the loop!

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

export default Casino