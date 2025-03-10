import React from 'react';
import AboutBg from "../../assets/images/About.avif";
import librabet from "../../assets/images/librabet-logo.jpg";
import bet from "../../assets/images/20bet.png";
import eightlogoorange from "../../assets/images/eightlogo_orange.png";

const cardData = [
    {
        imgSrc: librabet,
        rating: "9.9",
        votes: "(945)",
        bonusText: "100% Up To $150",
        link: "https://example.com/librabet",
        bgColor: "bg-red-500", // Red background
    },
    {
        imgSrc: bet,
        rating: "9.5",
        votes: "(875)",
        bonusText: "50 Free Spins",
        link: "https://example.com/casino1",
        bgColor: "bg-[#0b1d34]", // Blue background
    },
    {
        imgSrc: eightlogoorange,
        rating: "9.3",
        votes: "(812)",
        bonusText: "200% Bonus Up To $300",
        link: "https://example.com/casino2",
        bgColor: "bg-white", // Orange background
    },
];

const TopList = () => {
    return (
        <div className='mobile-view-layout'>
            <div className="mobile-view hidden">
                <div
                    className="relative py-28 bg-cover bg-center bg-no-repeat h-[250px] flex items-center"
                    style={{ backgroundImage: `url(${AboutBg})` }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="container mx-auto relative z-10 px-4">
                        <div className="w-full max-w-2xl mx-auto text-center text-white">
                            <h2 className="text-4xl font-bold mb-2.5 font-Josefin">
                                Best Betting Sites Canada
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="top-list">
                    <div className="container mx-auto px-4">
                        {cardData.map((item, index) => (
                            <div
                                key={index}
                                className="top-list-wrap shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] p-5 rounded-lg flex justify-between bg-[#ff0033] my-5 border-2 border-[#ffb700]"
                            >
                                <div className="toplist-left w-[47%]">
                                    <div className={`tp-logo librabet_bg ${item.bgColor} p-2 rounded-md`}>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            <img src={item.imgSrc} alt={`Casino ${index + 1}`} />
                                        </a>
                                    </div>
                                    <div className="rating-wrap flex justify-between my-4">
                                        <div className="rating-txt">
                                            <p className="text-[1.4rem] text-white font-medium mb-0 leading-[1.4]">
                                                Rating:
                                                <span className="block font-bold tracking-[1px]">{item.rating}</span>
                                            </p>
                                        </div>
                                        <div className="votes-txt">
                                            <p className="text-[1.4rem] text-white font-medium mb-0 leading-[1.4]">
                                                Votes:{" "}
                                                <span className="block font-bold tracking-[1px]">{item.votes}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="stars">⭐⭐⭐⭐⭐</div>
                                </div>

                                <div className="toplist-right w-[50%] relative">
                                    <div className="toplist-heading">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                                            <h4 className="text-[22px] leading-6 font-bold mb-2 font-Josefin text-white">
                                                Welcome Bonus
                                            </h4>
                                            <p className="font-Josefin text-[16px] text-white">{item.bonusText}</p>
                                        </a>
                                    </div>
                                    <div className="top-list-btn absolute bottom-5">
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-center px-4 py-2 text-white bg-[#ff3f3f] block hover:bg-[#122b24] transition-colors duration-300 rounded-[6px] font-Montserrat"
                                        >
                                            Sign Up
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="tp-bottom-text-section py-9">
                    <div class="container mx-auto px-4">
                        <div class="tp-bottom-text-wrapper">
                            <h3 className='text-[22px] leading-6 font-bold mb-2 font-Josefin text-black'>The Best Sports Betting Providers Canada</h3>
                            <p className='font-Josefin text-[16px] text-black'>
                                Looking for a trusted betting site in Canada? Draft Bowl helps you find and compare top-rated sportsbooks that offer competitive odds, exciting promotions, and a smooth sports betting experience. Whether you're betting on hockey, football, basketball, or e-sports, we’ve got the best options for you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopList;
