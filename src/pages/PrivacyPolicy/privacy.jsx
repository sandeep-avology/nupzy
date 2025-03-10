import React from 'react'
import { useEffect } from "react";

import privacy from "../../assets/images/privacy.jpg"
const Privacy = () => {
    useEffect(() => {
        document.title = "Privacy Policy";
    }, []);
    

    return (
        <div>
            <div className="relative py-28 bg-cover bg-center bg-no-repeat h-[350px] md:h-[550px] flex items-center"
                style={{ backgroundImage: `url(${privacy})` }}            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container mx-auto relative z-10 px-4">
                    <div className="w-full max-w-2xl mx-auto text-center text-white">
                        <h2 className="text-4xl font-bold mb-2.5 font-Josefin">Privacy Policy
                        </h2>
                    </div>
                </div>
            </div>

            <div className="description py-14">
                <div className="container mx-auto px-4">
                    <p className="font-Josefin text-[16px] leading-[28px]">At Nupsy, we respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website.
                    </p>
                    <p className="font-Josefin text-[16px] leading-[28px]">By using Nupsy, you agree to the terms outlined in this policy. If you do not agree, please discontinue use of our website.
                    </p>
                </div>
            </div>

            <div className="Information pb-14">
                <div className="container mx-auto px-4">
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">1. Information We Collect</h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">
                            We collect different types of information to improve our services and provide a seamless user experience. The types of data we may collect include:
                        </p>

                        <h5 className="text-[24px] font-bold mb-2.5 font-Josefin">1.1 Information You Provide to Us</h5>
                        <ul className="space-y-2 pl-5">
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">
                                When you contact us via email or our Contact Form, we collect your name, email address, and message content.
                            </li>

                            <li className="font-Josefin text-[16px] pb-3 m-0 relative pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">When you sign up for our newsletter, we collect your email address to send updates, promotions, and hotel recommendations.</li>
                        </ul>

                        <h5 className="text-[24px] font-bold mb-2.5 font-Josefin">1.2 Automatically Collected Data</h5>
                        <p className="mb-2 font-Josefin text-[16px] leading-[28px]">
                            When you browse Nupsy, we may collect:
                        </p>
                        <ul className=" space-y-2 pl-5">
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Device Information:</strong> IP address, browser type, operating system, and referring website.</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Usage Data:</strong> Pages visited, time spent on pages, and other analytics data.</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Cookies and Tracking Technologies:</strong> We use cookies to improve functionality, analyze website performance, and personalize content.</li>
                        </ul>
                        <p className="mb-2 font-Josefin text-[16px] leading-[28px]">For more details on cookies, see Section 6.</p>

                        <h5 className="text-[24px] font-bold mb-2.5 font-Josefin">1.3 Third-Party Data Collection</h5>
                        <p className='font-Josefin text-[16px] leading-[28px]'>
                            We may use Google Analytics and similar services to track and analyze website traffic. These third-party services may collect anonymous usage data that helps us understand visitor behavior.
                        </p>
                    </div>

                    <div className="Information border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">2. How We Use Your Information
                        </h4>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>We use the data collected for the following purposes:
                        </p>
                        <ul className="pl-5">
                            <li  className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"> <strong>To Provide and Improve Our Services </strong> – Ensuring accurate hotel listings and a seamless browsing experience.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>To Communicate with You</strong> – Responding to inquiries, sending newsletters, and providing updates.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>To Enhance Website Performance</strong> – Tracking user behavior to improve navigation and functionality.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>To Comply with Legal Obligations</strong> – If required by law, we may process personal data in accordance with regulatory requirements.
                            </li>
                        </ul>
                        <p className='font-Josefin text-[16px] leading-[28px]'>We <strong>do not sell, rent, or trade your personal information</strong> to third parties.</p>
                    </div>
                    <div className="border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">3. How We Protect Your Data
                        </h4>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>We take reasonable measures to protect your personal data from unauthorized access, alteration, or disclosure. This includes:
                        </p>
                        <ul className="pl-5">
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Encryption protocols</strong> for secure data transmission.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Restricted access controls</strong> to prevent unauthorized handling of user data.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Regular security audits </strong>to maintain website safety.
                            </li>
                        </ul>
                        <p className='font-Josefin text-[16px] leading-[28px]'>Despite our efforts, no method of data transmission is 100% secure. We encourage users to take precautions when sharing personal information online.
                        </p>
                    </div>
                    <div className="border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">4. Data Sharing & Third-Party Services
                        </h4>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'> We may share limited data with third-party service providers for the following reasons:
                        </p>
                        <ul className="pl-5">
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Email Services:</strong> If you subscribe to our newsletter, we use a third-party provider (e.g., MailChimp, SendGrid) to manage email communications.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Analytics & Performance Tracking:</strong> We may use <strong>Google Analytics, Facebook Pixel, or similar services </strong> to analyze website traffic.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Legal Compliance</strong>: If required by law or legal request, we may share data to comply with regulations.
                            </li>
                        </ul>
                        <p>Any third-party service provider we work with is required to maintain <strong>data confidentiality and security standards.</strong></p>
                    </div>
                    <div className="border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">5. Your Data Rights & Choices
                        </h4>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>Depending on your location, you may have the right to:</p>
                        <ul className="pl-5">
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Access Your Data:</strong> Request a copy of the personal data we hold about you.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Correct Your Data:</strong> Request corrections to any inaccurate or incomplete information.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Delete Your Data:</strong> Request that we delete your personal data under certain conditions.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Opt-Out of Marketing Communications:</strong> Unsubscribe from our newsletter at any time by clicking the "unsubscribe" link in our emails.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Manage Cookies & Tracking:</strong> Adjust your browser settings to control cookie preferences.
                            </li>
                        </ul>
                        <p className='font-Josefin text-[16px] leading-[28px]'>To exercise any of these rights, please contact us at <a href="mailto:info@nupsy.com.">info@nupsy.com.</a>
                        </p>
                    </div>
                    <div className="border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">6. Cookies & Tracking Technologies</h4>
                        <p className='font-Josefin text-[16px] leading-[28px] mb-2'>We use cookies to improve your browsing experience. These may include:
                        </p>
                        <ul className="pl-5">
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Essential Cookies:</strong> Necessary for website functionality.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Performance Cookies:</strong> Help us analyze how visitors interact with the site.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Advertising Cookies:</strong> Used for tailored advertisements (only if applicable).
                            </li>
                        </ul>
                        <p className='font-Josefin text-[16px] leading-[28px]'>You can adjust your cookie preferences through your browser settings. Disabling cookies may affect certain features of the website.
                        </p>
                    </div>
                    <div className="border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">7. Data Retention  </h4>
                        <p className='font-Josefin text-[16px] leading-[28px]'>We retain personal data <strong>only as long as necessary</strong> for the purposes outlined in this policy. Once no longer needed, we securely delete or anonymize the data.
                        </p>
                        <p className='font-Josefin text-[16px] leading-[28px]'>For email subscribers, we retain email addresses until users unsubscribe or request removal.
                        </p>
                    </div>
                    <div className="border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">8. International Data Transfers
                        </h4>
                        <p className='font-Josefin text-[16px] leading-[28px]'>If you are accessing Nupsy from outside <strong>Canada or the United States, </strong> be aware that your information may be transferred to servers in these regions. By using our website, you consent to this transfer.
                        </p>
                    </div>
                    <div className="border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">9. Children’s Privacy
                        </h4>
                        <p className='font-Josefin text-[16px] leading-[28px]'>Nupsy is not intended for users under the age of <strong>18.</strong> We do not knowingly collect personal data from minors. If we become aware of such data, we will take steps to remove it.</p>
                    </div>
                    <div className="border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">10. Changes to This Privacy Policy
                        </h4>
                        <p className='font-Josefin text-[16px] leading-[28px]'>We may update this Privacy Policy periodically. Any changes will be reflected with a <strong>new "Last Updated" date</strong> at the top of this page.
                        </p >
                        <p className='font-Josefin text-[16px] leading-[28px]'>We encourage users to review this page regularly to stay informed about our data practices.
                        </p>
                    </div>
                    <div className="border rounded-lg shadow-lg bg-white p-6 mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">11. Contact Us
                        </h4>
                        <p className='font-Josefin text-[16px] leading-[28px]'>If you have any questions or concerns about this Privacy Policy, please contact us:
                        </p>
                        <p className='font-Josefin text-[16px] leading-[28px]'><strong>Email:</strong> <a href="mailto:info@nupsy.com">info@nupsy.com</a></p>
                        <p className='font-Josefin text-[16px] leading-[28px]'>We take privacy seriously and are committed to safeguarding your personal information.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Privacy