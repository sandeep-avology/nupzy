import React from 'react'
import { useEffect } from "react";
import TermsBg from "../../assets/images/Terms.jpg"
const Terms = () => {
    useEffect(() => {
        document.title = "Terms & Conditions";
    }, []);
    return (
        <div>
            <div className="relative py-28 bg-cover bg-center bg-no-repeat h-[450px] flex items-center"
                style={{ backgroundImage: `url(${TermsBg})` }}            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container mx-auto relative z-10 px-4">
                    <div className="w-full max-w-2xl mx-auto text-center text-white">
                        <h2 className="text-4xl font-bold mb-2.5 font-Josefin">Terms & Conditions</h2>
                    </div>
                </div>
            </div>

            <div className="description py-14">
                <div className="container mx-auto px-4">
                    <p className="font-Josefin text-[16px] leading-[28px]">Welcome to Nupsy. These Terms & Conditions  govern your use of our website. By accessing or using Nupsy, you agree to comply with these Terms. If you do not agree, please discontinue use of our website.
                    </p>

                </div>
            </div>

            <div className="Information pb-14">
                <div className="container mx-auto px-4">
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">1. About Nupsy</h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">
                            Nupsy is an independent hotel listing website that provides curated selections of <strong>Las Vegas hotels</strong>, including <strong>Party Hotels, Spa Hotels, Casino Hotels, and Budget Hotels.</strong> We do not own, operate, or directly endorse any hotel listed on our site.
                        </p>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">Our role is to provide <strong>information and recommendations </strong> to help travelers make informed decisions. All bookings must be completed through official hotel websites or third-party booking platforms.
                        </p>
                    </div>
                    <div className="Information border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">2. Use of Our Website </h4>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>By using Nupsy, you agree to:                        </p>
                        <ul className="pl-5">
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"> Access and use the website for lawful purposes only. </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"> Refrain from copying, modifying, or distributing content without permission.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"> Provide accurate and truthful information when submitting inquiries.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"> Not engage in any activity that may harm, disrupt, or interfere with the website.
                            </li>
                        </ul>
                        <p className='font-Josefin text-[16px] leading-[28px]'>We reserve the right to restrict access to Nupsy for users who violate these Terms.
                        </p>
                    </div>
                    <div className="border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">3. Hotel Listings & Information
                        </h4>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>We strive to provide accurate and up-to-date hotel information, but we do not guarantee:
                        </p>
                        <ul>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">Availability of rooms, pricing, or promotions.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">Accuracy of descriptions, images, or amenities listed.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">Uninterrupted access to hotel websites or third-party booking platforms.
                            </li>
                        </ul>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>Users should verify all hotel details directly with the hotel before booking.
                        </p>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>Nupsy is <strong>not responsible for any disputes, cancellations, or changes</strong> related to hotel bookings made through external websites.
                        </p>
                    </div>
                    <div className="border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">4. Third-Party Links & Services
                        </h4>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>Nupsy may contain links to:
                        </p>
                        <ul>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Official hotel websites </strong></li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Third-party booking platforms</strong> </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Affiliate partners</strong> </li>
                        </ul>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>These links are provided for <strong>convenience only</strong>, and Nupsy does not have control over third-party sites. We are <strong>not responsible for their content, policies, or transactions.</strong>
                        </p>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>If you choose to book a hotel or interact with a third-party website, you do so at your own risk.
                        </p>
                    </div>
                    <div className="border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin"> 5. Intellectual Property Rights
                        </h4>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>All content on Nupsy, including:
                        </p>
                        <ul>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">Text, images, and graphics
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">Website layout and design</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">Hotel listings and descriptions</li>
                        </ul>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>...is <strong>protected by copyright and intellectual property laws.</strong></p>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>You may <strong>not copy, modify, or reproduce content</strong> from Nupsy without written permission. Unauthorized use may result in legal action.
                        </p>
                    </div>
                    <div className="border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">6. Limitation of Liability
                        </h4>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>Nupsy is provided on an "as is" and "as available" basis. We do not guarantee that:
                        </p>
                        <ul>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]" >The website will always be available, secure, or error-free.                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]" >All information is completely accurate or up to date.                            </li>
                        </ul>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>To the fullest extent permitted by law, Nupsy is not liable for any direct, indirect, incidental, or consequential damages arising from:
                        </p>
                        <ul>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]" >Use of our website</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]" >Errors or inaccuracies in hotel listings</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]" >Booking issues with third-party websites</li>
                        </ul>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>Your use of Nupsy is at your own discretion and risk.
                        </p>
                    </div>
                    <div className="border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">7. Privacy & Data Protection
                        </h4>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>We take privacy seriously. By using Nupsy, you consent to the collection and use of data as outlined in our Privacy Policy.
                        </p>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>We do not sell or share personal information with third parties, except as required by law or to improve user experience (e.g., analytics, email communications).
                        </p>
                    </div>
                    <div className="border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">8. Changes to These Terms
                        </h4>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>We may update these Terms at any time without prior notice. The latest version will always be available on this page, with the  <strong>"Last Updated" date reflecting changes.</strong>
                        </p>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>Continued use of Nupsy after updates constitutes acceptance of the revised Terms.
                        </p>
                    </div>
                    <div className="border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">9. Governing Law
                        </h4>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>These Terms shall be governed by and interpreted in accordance with the laws of <strong>Insert Jurisdiction</strong>. Any disputes arising from these Terms shall be resolved in the courts of <strong>Insert Jurisdiction.</strong>
                        </p>
                    </div>
                    <div className="border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">10. Contact Us
                        </h4>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>For any questions about these Terms, please contact us:
                        </p>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'><strong>Email: </strong> <a href="mailto:info@nupsy.com"> info@nupsy.com
                        </a></p>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>We recommend reviewing these Terms regularly to stay informed about your rights and responsibilities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms