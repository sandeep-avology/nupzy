import React from 'react'
import { useEffect } from "react";
import PersonalBg from "../../assets/images/Refunds.jpg"

const Refunds = () => {

    useEffect(() => {
        document.title = "Refunds Policy";
    }, []);


    return (
        <div>
            <div className="relative py-28 bg-cover bg-center bg-no-repeat h-[350px] md:h-[550px] flex items-center"
                style={{ backgroundImage: `url(${PersonalBg})` }}            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container mx-auto relative z-10 px-4">
                    <div className="w-full max-w-2xl mx-auto text-center text-white">
                        <h2 className="text-4xl font-bold mb-2.5 font-Josefin">Refunds Policy

                        </h2>
                    </div>
                </div>
            </div>
            <div className="description py-14">
                <div className="container mx-auto px-4">
                    <p className="font-Josefin text-[16px] leading-[28px]">Nupsy is a <strong>hotel listing website</strong> that provides curated selections of <strong> Las Vegas hotels.</strong> We do not process hotel bookings directly, and we do not handle payments for hotel reservations. As a result, Nupsy does not offer refunds for any hotel bookings, as all transactions are completed through third-party hotel websites or booking platforms.
                    </p>
                    <p className="font-Josefin text-[16px] leading-[28px]">This policy outlines the scope of our services and clarifies how refund-related concerns should be addressed.

                    </p>
                </div>
            </div>

            <div className="Information pb-14">
                <div className="container mx-auto px-4">
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">1. Nupsy’s Role & No Direct Transactions
                        </h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">Nupsy is an <strong>informational platform</strong> that helps travelers discover <strong>Party Hotels, Spa Hotels, Casino Hotels, and Budget Hotels</strong> in Las Vegas. We do not:
                        </p>
                        <ul>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">Process hotel reservations or bookings.</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">Collect payment for any hotel stays.</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">Offer refunds, modifications, or cancellations for hotel bookings.</li>
                        </ul>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">All hotel bookings are completed through <strong>third-party hotel websites or online travel agencies.</strong> Any <strong> refund requests or disputes</strong> must be handled directly with the hotel or booking provider.
                        </p>
                    </div>
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">2. How to Request a Refund for a Hotel Booking
                        </h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">If you need to request a refund, cancellation, or modification for a hotel booking, please contact the provider where the reservation was made. Here’s how:
                        </p>
                        <ul>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Hotel Directly</strong> – If you booked through a hotel's official website, visit their contact page or call their customer service.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Online Travel Agencies (OTA) </strong> – If you booked through Expedia, Booking.com, Hotels.com, Priceline, or another third-party site, refer to their refund policy and contact their support team.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Check Your Confirmation Email</strong> – Refund eligibility and cancellation policies are usually stated in your booking confirmation email.
                            </li>
                        </ul>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">Nupsy is not responsible for any refund-related issues, as we do not process hotel transactions.
                        </p>
                    </div>
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">3. Refunds for <strong>Third-Party Services</strong> Linked on Nupsy
                        </h4>
                        <p>While browsing Nupsy, you may come across links to third-party services, including:</p>
                        <ul>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">Hotel websites</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">Travel agencies</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">Affiliate booking platforms</li>
                        </ul>
                        <p>Each third-party service has its own <strong>refund and cancellation policies</strong>, which we do not control. If you have concerns regarding a third-party transaction, please contact the respective provider directly.
                        </p>
                        <p>Nupsy is not liable for any disputes, cancellations, or refund requests related to external services.</p>
                    </div>

                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">4. Errors & Discrepancies in Hotel Listings
                        </h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">We strive to provide <strong>accurate and up-to-date information</strong> about hotels, but we do not guarantee:
                        </p>
                        <ul>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">Availability of rooms, promotions, or pricing.</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">Accuracy of descriptions, images, or amenities listed.</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">Uninterrupted access to hotel websites or third-party booking platforms.</li>
                        </ul>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">If you notice an <strong>error or outdated information</strong> on our website, please email us at <a href="mailto:info@nupsy.com">info@nupsy.com</a>, and we will review the details. However, Nupsy is not responsible for hotel listing inaccuracies that impact bookings.
                        </p>
                    </div>

                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">5. Non-Refundable Services
                        </h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">As a <strong>free-to-use platform</strong>, Nupsy does not charge users for accessing hotel listings. Since we do not sell products or services, there are <strong>no applicable refund requests for Nupsy’s content or features.</strong>
                        </p>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">Any <strong>advertising or partnership agreements</strong> with Nupsy will be subject to separate contractual terms.
                        </p>
                    </div>
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">6. Changes to This Refunds Policy
                        </h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">We may update this Refunds Policy periodically. Any changes will be reflected with a new "Last Updated" date at the top of this page.
                        </p>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">We encourage users to review this page regularly to stay informed about our policies.
                        </p>
                    </div>
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">7. Contact Us</h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">If you have any questions regarding this Refunds Policy, please contact us:</p>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]"><strong>Email:</strong> <a href="mailto:info@nupsy.com">info@nupsy.com</a>
                        </p>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">We appreciate your understanding and encourage you to reach out to your hotel or booking provider for any refund-related inquiries.
                        </p>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Refunds