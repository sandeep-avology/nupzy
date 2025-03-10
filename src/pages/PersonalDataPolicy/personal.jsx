import React from 'react'
import { useEffect } from "react";
import PersonalBg from "../../assets/images/Personal.jpg"


const Personal = () => {
    useEffect(() => {
        document.title = "Personal Data Policy";
    }, []);

    return (
        <div>
            <div className="relative py-28 bg-cover bg-center bg-no-repeat h-[350px] md:h-[550px] flex items-center"
                style={{ backgroundImage: `url(${PersonalBg})` }}            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container mx-auto relative z-10 px-4">
                    <div className="w-full max-w-2xl mx-auto text-center text-white">
                        <h2 className="text-4xl font-bold mb-2.5 font-Josefin">Personal Data Policy
                        </h2>
                    </div>
                </div>
            </div>
            <div className="description py-14">
                <div className="container mx-auto px-4">
                    <p className="font-Josefin text-[16px] leading-[28px]">At Nupsy, we take your privacy seriously and are committed to protecting your <strong>personal data</strong>. This Personal Data Policy explains what personal data we collect, how we use it, and the measures we take to keep it secure.
                    </p>
                    <p className="font-Josefin text-[16px] leading-[28px]">By using Nupsy, you agree to the terms of this policy. If you do not agree, please discontinue use of our website.
                    </p>
                </div>
            </div>
            <div className="Information pb-14">
                <div className="container mx-auto px-4">
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">1. What is Personal Data?
                        </h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">
                            "Personal data" refers to any information that can identify you as an individual, either directly or indirectly. This includes, but is not limited to:
                        </p>
                        <ul>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">Name</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">Email address</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"> IP address</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">Usage data (browsing activity, device type, etc.)</li>
                        </ul>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">Nupsy does not collect sensitive personal data such as financial details, social security numbers, or health information.
                        </p>
                    </div>
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">2. How We Collect Your Data
                        </h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">We collect personal data through the following methods:
                        </p>
                        <h5>2.1 Information You Provide to Us
                        </h5>
                        <ul>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">When you <strong>contact us</strong> via email or through our <strong>contact form</strong>, we collect your <strong>name, email address, and message content.</strong></li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]">When you <strong> subscribe to our newsletter</strong>, we collect your <strong>email address</strong> to send updates and promotional content.
                            </li>
                        </ul>
                        <h5>2.2 Automatically Collected Data
                        </h5>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">When you browse Nupsy, we may collect:
                        </p>
                        <ul>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Device Information:</strong> IP address, browser type, operating system, and referring website.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Usage Data:</strong> Pages visited, time spent on pages, and interactions with content.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Cookies & Tracking Technologies: </strong>We use cookies to improve functionality, analyze website performance, and personalize content.
                            </li>
                        </ul>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">For more details on cookies, see Section 6.
                        </p>
                        <h5>2.3 Data from Third-Party Services
                        </h5>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">We may use <strong>Google Analytics, Facebook Pixel, or similar services</strong> to track website activity and performance. These services collect <strong>anonymous data</strong> to help us improve user experience.
                        </p>
                    </div>
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">3. How We Use Your Personal Data
                        </h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">We use personal data for the following purposes:
                        </p>
                        <ul>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]" ><strong>To Provide and Improve Our Services</strong> – Ensuring accurate hotel listings and a seamless browsing experience.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"> <strong>To Communicate with You</strong> – Responding to inquiries, sending newsletters, and providing updates.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>To Enhance Website Performance</strong> – Tracking user behavior to improve navigation and functionality.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>To Comply with Legal Obligations</strong> – If required by law, we may process personal data in accordance with regulatory requirements.</li>
                        </ul>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">We <strong> do not sell, rent, or trade your personal information</strong> to third parties.
                        </p>
                    </div>
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">4. How We Protect Your Data</h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">We take <strong>reasonable security measures</strong> to protect your personal data, including:
                        </p>
                        <ul>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Encryption protocols</strong> for secure data transmission.</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"> <strong>Restricted access controls</strong> to prevent unauthorized handling of user data.</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Regular security audits</strong> to maintain website safety.                            </li>
                        </ul>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">However, no method of data transmission is 100% secure. We encourage users to take precautions when sharing personal information online.
                        </p>
                    </div>
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">5. Data Sharing & Third-Party Services</h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">We may share limited data with trusted third-party service providers, including:
                        </p>
                        <ul>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Email Services:</strong> If you subscribe to our newsletter, we use a third-party provider (e.g., MailChimp, SendGrid) to manage email communications.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Analytics & Performance Tracking:</strong> We may use Google Analytics or similar services to analyze website traffic.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Legal Compliance:</strong> If required by law, we may share data to comply with regulations.
                            </li>
                        </ul>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">All third-party service providers are required to maintain <strong>data confidentiality and security standards.</strong>
                        </p>
                    </div>
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">6. Cookies & Tracking Technologies</h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]"> Nupsy uses cookies to improve your browsing experience. These may include:
                        </p>
                        <ul>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Essential Cookies:</strong> Necessary for website functionality.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Performance Cookies:</strong> Help us analyze how visitors interact with the site.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Advertising Cookies: </strong> Used for tailored advertisements (only if applicable).
                            </li>
                        </ul>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">You can adjust your cookie preferences through your browser settings. Disabling cookies may affect certain features of the website.
                        </p>
                    </div>
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">7. Your Rights & Choices</h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">Depending on your location, you may have the right to:
                        </p>
                        <ul>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"> <strong>Access Your Data</strong> – Request a copy of the personal data we hold about you.
                            </li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"> <strong>Correct Your Data</strong> – Request corrections to any inaccurate or incomplete information.</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Delete Your Data</strong> – Request that we delete your personal data under certain conditions.</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Opt-Out of Marketing Communications</strong> – Unsubscribe from our newsletter at any time.</li>
                            <li className="font-Josefin text-[16px] relative m-0 pb-3 pl-5 after:content-[''] after:absolute after:left-0  after:top-[8px]  after:w-[8px] after:h-[8px] after:bg-black  after:rounded-[50%]"><strong>Manage Cookies & Tracking</strong> – Adjust your browser settings to control cookies.</li>
                        </ul>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">To exercise any of these rights, please contact us at <a href="mailto:info@nupsy.com.">info@nupsy.com.</a>
                        </p>
                    </div>
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">8. Data Retention
                        </h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">We retain personal data only as long as necessary for the purposes outlined in this policy. Once no longer needed, we securely delete or anonymize the data.
                        </p>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">For email subscribers, we retain email addresses until users unsubscribe or request removal.</p>
                    </div>
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">9. International Data Transfers
                        </h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">If you are accessing Nupsy from outside Canada or the United States, be aware that your information may be transferred to servers in these regions. By using our website, you consent to this transfer.</p>
                    </div>
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">10. Children’s Privacy
                        </h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">Nupsy is not intended for users under the age of <strong>18</strong>. We do not knowingly collect personal data from minors. If we become aware of such data, we will take steps to remove it.
                        </p>
                    </div>
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">11. Changes to This Personal Data Policy
                        </h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">We may update this policy periodically. Any changes will be reflected with a new "Last Updated" date at the top of this page.
                        </p>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">We encourage users to review this page regularly to stay informed about our data practices.
                        </p>
                    </div>
                    <div className="Information p-6 border rounded-lg shadow-lg bg-white mb-5">
                        <h4 className="text-[30px] font-bold mb-2.5 font-Josefin">12. Contact Us
                        </h4>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">If you have any questions or concerns about this Personal Data Policy, please contact us:
                        </p>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]"><strong>Email:</strong> <a href="mailto:info@nupsy.com">info@nupsy.com</a></p>
                        <p className="mb-4 font-Josefin text-[16px] leading-[28px]">We are committed to safeguarding your personal information and ensuring transparency in our data practices.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Personal