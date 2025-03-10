import React from 'react'
import BudgetBnr from "../../assets/images/BudgetBnr.avif";
import LINQ from "../../assets/images/TheLINQ.png";
import Flamingo from "../../assets/images/Flamingo.jpg";
import Excalibur from "../../assets/images/Excalibur.jpg";
import Circu from "../../assets/images/Circu.jpg";
import Tropicana from "../../assets/images/Tropicana.jpg";
import OYO from "../../assets/images/OYO.jpg";
import Ellis from "../../assets/images/Ellis.jpg";
import Downtown from "../../assets/images/Downtown.jpg";
import Casinotower from "../../assets/images/Casinotower.jpg";
import Affordable from "../../assets/images/Affordable.jpg"
import NewsletterForm from '../../components/NewsletterForm/NewsletterForm';
import Disclaimer from '../../components/Disclaimer/Disclaimer';


const hotels = [
  {
    name: "The LINQ Hotel + Experience",
    price: 149,
    img: `${LINQ}`,
    features: [
      "Affordable, modern rooms",
      "Located on the Strip near nightlife and dining",
      "Fun atmosphere with easy access to entertainment",
    ],
    description:
      "The LINQ offers a prime location on the Strip at an affordable price. The rooms are modern and comfortable, making it a great option for budget-conscious travelers who want to stay near top attractions. The LINQ Promenade is packed with bars, restaurants, and entertainment venues, making it a great spot for those looking to explore without spending too much.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-the-linq-hotel-experience.pWBoqti",
  },
  {
    name: "Flamingo Las Vegas",
    price: 139,
    img: `${Flamingo}`,
    features: [
      "Central Strip location",
      "Tropical pool with waterfalls",
      "Classic casino with affordable gaming",
    ],
    description:
      "Flamingo Las Vegas is one of the best budget-friendly hotels on the Strip, offering a great mix of affordability and entertainment. The pool area is one of the best in its price range, featuring lush landscaping and waterfalls. The casino is also known for its low-minimum table games, making it ideal for casual players.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-flamingo-las-vegas-hotel-casino.NF11U5t",
  },
  {
    name: "Excalibur Hotel & Casino",
    price: 99,
    img: `${Excalibur}`,
    features: [
      "Family-friendly with arcade and shows",
      "Large casino with low-limit gaming",
      "Affordable dining options",
    ],
    description:
      "Excalibur is a great budget hotel in Las Vegas for families and casual travelers. The medieval-themed resort offers kid-friendly activities, affordable restaurants, and a casino with low-limit gaming. It’s one of the most budget-friendly options on the Strip while still offering entertainment and comfort.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-excalibur-hotel-casino.Rq34z51",
  },
  {
    name: "Circus Circus Hotel & Casino",
    price: 79,
    img: `${Circu}`,
    features: [
      "Family-friendly resort with an indoor amusement park",
      "Large casino with budget-friendly gaming",
      "One of the most affordable hotels on the Strip",
    ],
    description:
      "Circus Circus is one of the cheapest hotels in Las Vegas, making it a great option for families or budget travelers. The hotel features the Adventuredome, an indoor amusement park, along with affordable gaming and casual dining. The room rates are among the lowest in Las Vegas, making it a great choice for those looking to save.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-circus-circus-hotel.TWI5Q8H",
  },
  {
    name: "Tropicana Las Vegas",
    price: 109,
    img: `${Tropicana}`,
    features: [
      "Budget-friendly option with a tropical theme",
      "Comfortable rooms at an affordable rate",
      "Located on the South Strip",
    ],
    description:
      "Tropicana offers affordable rooms in a relaxed setting, with a tropical-themed casino and pool. The location on the South Strip provides easy access to nearby attractions while keeping prices lower than some of the more central resorts.",
    link: "https://expedia.com/affiliates/hotel-search-las-vegas-strip-dateless.9gfLGxB",
  },
  {
    name: "OYO Hotel & Casino Las Vegas",
    price: 69,
    img: `${OYO}`,
    features: [
      "One of the cheapest hotels near the Strip",
      "Affordable drinks and low-limit gaming",
      "Casual, laid-back atmosphere",
    ],
    description:
      "OYO is one of the cheapest hotels near the Las Vegas Strip, offering affordable rooms, cheap drinks, and casual dining. It’s a great option for those who want to save money while still being close to the action.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-oyo-hotel-and-casino-las-vegas.XimJ5Ht",
  },
  {
    name: "Ellis Island Hotel & Casino",
    price: 79,
    img: `${Ellis}`,
    features: [
      "Affordable and close to the Strip",
      "On-site brewery and low-cost dining",
      "Small, friendly casino",
    ],
    description:
      "Ellis Island is a hidden gem for budget travelers, offering low-priced rooms, cheap drinks, and an on-site brewery. The small casino has lower table limits, making it a great spot for casual gaming. It’s just a short walk from the Strip, providing easy access to major attractions without the high price tag.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-ellis-island-hotel.3cLhvk7",
  },
  {
    name: "Downtown Grand Hotel & Casino",
    price: 89,
    img: `${Downtown}`,
    features: [
      "Located in Downtown Las Vegas near Fremont Street",
      "Budget-friendly with modern rooms",
      "Rooftop pool with city views",
    ],
    description:
      "Downtown Grand is a great budget-friendly hotel away from the Strip, located near Fremont Street Experience. The hotel offers affordable rooms with a modern design, along with a rooftop pool and a relaxed atmosphere.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-downtown-grand-las-vegas.SNzw8vB",
  },
  {
    name: "The STRAT Hotel, Casino & Tower",
    price: 89,
    img: `${Casinotower}`,
    features: [
      "Located at the north end of the Strip",
      "Casino with affordable table games",
      "Tower with stunning city views",
    ],
    description:
      "The STRAT offers affordable accommodations with the bonus of an observation deck featuring one of the best views of Las Vegas. The casino is budget-friendly, and the hotel is located close to Downtown Las Vegas, offering easy access to the Fremont Street area.",
    link: "https://expedia.com/affiliates/las-vegas-hotels-the-strat-hotel.DjUIj9Z",
  },
];

const Budget = () => {
  return (
    <div>
      {/* Budget   */}
      <div
        className="relative py-28 bg-cover bg-center bg-no-repeat h-[350px] md:h-[550px] flex items-center"
        style={{ backgroundImage: `url(${BudgetBnr})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="w-full max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-2.5 font-Josefin">  Budget Hotels            </h2>
            <p class="text-lg font-Josefin">Affordable Las Vegas Hotels Without Sacrificing Comfort
            </p>
          </div>
        </div>
      </div>
      {/* Budget   */}

      {/* Description  */}
      <div className="description py-14">
        <div className="container mx-auto px-4">
          <p className="font-Josefin text-[16px] leading-[28px]">
            Las Vegas is known for its luxury resorts, but that doesn’t mean you need to spend a fortune to enjoy your stay. Whether you're visiting for a <strong>weekend getaway, business trip, or budget-friendly vacation</strong>, these <strong>Las Vegas budget hotels</strong> offer excellent value without compromising on comfort.
          </p>

        </div>
      </div>
      {/* Description */}

      {/* Casino Hotels */}
      <div className="casino py-14 bg-[#fcfcfc]">
        <div className="container mx-auto px-4">
          <h2 className="relative text-4xl pb-2.5 font-bold mb-12 text-center font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">
            Top Budget Hotels in Las Vegas
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
      {/* Casino Hotels */}


      {/* Why These Hotels? */}
      <div className="TheseHotels py-14">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="text-center">
              <h2 className="relative text-4xl pb-2.5 font-bold mb-3 font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">Why These Hotels?</h2>
              <p className="mt-3 text-gray-600 font-Josefin">
                Each of these <strong>Las Vegas budget hotels</strong> offers <strong>affordable rates, comfortable accommodations, and great locations.</strong> Whether you're looking for <strong>a cheap hotel on the Strip, a family-friendly resort, or a low-cost casino hotel</strong>, these options provide great value without sacrificing comfort.
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl group">
                <img
                  src={Affordable}
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
              <h3 className="relative text-white text-4xl pb-2.5 font-bold mb-5 font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-white after:rounded-full">Book Your Budget-Friendly Las Vegas Stay
              </h3>
              <p className="text-[16px] font-Josefin text-white leading-[28px] mb-4">Las Vegas has plenty of <strong> affordable hotels</strong> that still offer <strong>great amenities, fun entertainment, and prime locations.</strong> Whether you're looking for <strong>cheap hotels on the Strip, budget casino hotels, or an affordable place near Fremont Street</strong>, these options ensure you get the best experience without overspending.
              </p>
              <p className="text-[16px] font-Josefin text-white leading-[28px]"><strong>💰 Start planning your budget-friendly Las Vegas stay today!
              </strong></p>
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
            <p className="text-[18px] font-Josefin"> Get exclusive updates on the <strong>best budget hotels in Las Vegas, travel deals, and insider tips</strong>. Sign up now and never miss a great deal!

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

export default Budget