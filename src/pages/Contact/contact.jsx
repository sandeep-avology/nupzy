import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Mail, Briefcase, Edit, Newspaper } from "lucide-react";
import contactBnr from "../../assets/images/contactBnr.jpg"
import NewsletterForm from "../../components/NewsletterForm/NewsletterForm";
const Contact = () => {
  return (
    <div>
      <div
        className="relative py-28 bg-cover bg-center bg-no-repeat h-[350px] md:h-[550px] flex items-center"
        style={{ backgroundImage: `url(${contactBnr})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="w-full max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-2.5 font-Josefin">Contact</h2>
          </div>
        </div>
      </div>
      <div className="contactcomponent py-14">
        <div className="container mx-auto px-4">
          <div className="">
            <div className="contact__wrapper grid grid-cols-1 md:grid-cols-2 bg-white w-full max-w-[1088px] mx-auto shadow-xl p-6 md:p-16 gap-4 mt-[-50px] md:mt-[-150px] relative z-[99]">
              {/* Contact Info */}
              <div className="contact__content-wrap">
                <h2 className="relative text-2xl md:text-3xl pb-2 font-bold mb-2 text-left font-Josefin ">
                  Get in Touch with Nupsy
                </h2>
                <p className="text-black text-sm md:text-[16px] font-Josefin pb-2">
                  At Nupsy, we are committed to helping travelers find the <strong>best hotels in Las Vegas. </strong> Whether you need assistance with a hotel listing, want to provide feedback, or have a business inquiry, our team is here to help.

                </p>
                <p className="text-black text-sm md:text-[16px] font-Josefin">
                  We strive to respond to all inquiries within <strong>24-48 hours</strong> during business days.
                </p>
                <div className="flex space-x-4 mt-8">
                  <a href="https://facebook.com" className="p-2 bg-[#ff3f3f] flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-500 transition duration-300">
                    <FontAwesomeIcon icon={faFacebookF} className="text-white w-5 h-5" />
                  </a>

                  <a href="https://twitter.com" className="p-2 bg-[#ff3f3f]  flex items-center justify-center w-10 h-10  rounded-full hover:bg-gray-500 transition duration-300">
                    <FontAwesomeIcon icon={faXTwitter} className="text-white w-5 h-5" />
                  </a>

                  <a href="https://instagram.com" className="p-2 bg-[#ff3f3f] flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-500 transition duration-300">
                    <FontAwesomeIcon icon={faInstagram} className="text-white w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact__form-wrap">
                <h4 className="relative text-2xl md:text-3xl pb-2 font-bold mb-2 text-left font-Josefin ">
                  Contact Form
                </h4>
                <p className="text-black text-sm md:text-[16px] font-Josefin">
                  If you prefer, you can fill out the form below, and our team will get back to you as soon as possible.
                </p>
                <form>
                  <div className="mt-5 md:mt-7">
                    <div className="mb-4">
                      <input type="text" placeholder="Your Name" className="w-full border p-2.5 rounded-[9px] outline-0 font-Josefin placeholder-[#000]" />
                    </div>
                    <div className="mb-4">
                      <input type="email" placeholder="Your Email" className="w-full border p-2.5 rounded-[9px] outline-0 font-Josefin placeholder-[#000]" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <select name="subject" className="w-full border p-2.5 rounded-[9px] font-Josefin placeholder-[#000] outline-0" required>
                      <option value="" disabled selected className="text-gray-400">Select Subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Business Inquiry">Business Inquiry</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <textarea name="message" required placeholder="Your Message" className="w-full border  p-2.5 rounded-[9px] resize-none outline-0 font-Josefin placeholder-[#000]"></textarea>
                  </div>
                  <div className="">
                    <button className="w-full bg-[#ff3f3f]  hover:bg-[#122b24] font-Montserrat capitalize font-[600] text-white p-3 rounded-[16px] shadow-lg ">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-14 bg-[#fcfcfc]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="relative text-3xl pb-2.5 font-bold mb-12 text-center font-Josefin after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full" >
            How to Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Contact */}
            <div className="p-6 bg-white shadow-lg rounded-lg items-start space-x-4">
              <Mail className="w-10 h-10 text-blue-500 mx-auto" />
              <div>
                <h3 className="relative text-[24px] mt-2  font-bold text-center font-Josefin">Email</h3>
                <p className="text-gray-500 mb-2 text-[16px] bg-transparent  transition-all duration-300 font-Josefin text-center" ><a href="mailto:info@nupsy.com">info@nupsy.com</a></p>
                <p className="text-gray-500  text-[16px] bg-transparent  transition-all duration-300 font-Josefin text-center">
                  For all inquiries, please reach out via email. Our team will get back to you as soon as possible.
                </p>
              </div>
            </div>

            {/* Business & Partnerships */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center items-start space-x-4">
              <Briefcase className="w-10 h-10 text-green-500 mx-auto" />
              <div>
                <h3 className="relative text-[24px] mt-2  font-bold text-center font-Josefin">Business & Partnerships</h3>
                <p className="text-gray-500  text-[16px] bg-transparent  transition-all duration-300 font-Josefin text-center">
                  If you’re a hotel, travel brand, or hospitality service interested in partnering with Nupsy, feel free to contact us for collaboration opportunities.
                </p>
              </div>
            </div>

            {/* Corrections & Updates */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center items-start space-x-4">
              <Edit className="w-10 h-10 text-orange-500 mx-auto" />
              <div>
                <h3 className="relative text-[24px] mt-2  font-bold text-center font-Josefin">Corrections & Updates</h3>
                <p className="text-gray-500  text-[16px] bg-transparent  transition-all duration-300 font-Josefin text-center">
                  We aim to provide accurate hotel information. If you notice any outdated details in our listings, let us know, and we’ll review the changes.
                </p>
              </div>
            </div>

            {/* Media & Press Inquiries */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center items-start space-x-4">
              <Newspaper className="w-10 h-10 text-red-500 mx-auto" />
              <div>
                <h3 className="relative text-[24px] mt-2  font-bold text-center font-Josefin">Media & Press Inquiries</h3>
                <p className="text-gray-500  text-[16px] bg-transparent  transition-all duration-300 font-Josefin text-center">
                  For media requests, interviews, or collaborations, please send us an email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="Newsletter py-14">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="NewsletterInner text-center w-[100%] max-w-[800px] mx-auto">
            <h2 className="relative text-[28px] md:text-4xl pb-2.5 font-bold mb-5 font-Josefin  after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-[#ff3f3f] after:rounded-full">Stay Connected</h2>
            <p className="text-[18px] font-Josefin pb-2">Join Our Newsletter – Sign up for the latest updates on Las Vegas hotel deals, travel insights, and exclusive offers.
            </p>
            <p className="text-[18px] font-Josefin">If you have any questions, don’t hesitate to reach out. We look forward to assisting you!
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
      {/* Newsletter */}




    </div>
  );
};

export default Contact;
