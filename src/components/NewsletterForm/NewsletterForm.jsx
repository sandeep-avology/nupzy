import React from "react";

const NewsletterForm = () => {
    return (
        <form className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
            <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-2/3 px-4 py-2 rounded-lg text-gray-900 border border-gray-300 focus:outline-none font-Montserrat "
            />
            <button
                type="submit"
                className="bg-[#ff3f3f] hover:bg-[#122b24] transition duration-300 text-white font-Montserrat font-semibold px-6 py-2 rounded-lg"
            >
                Sign Up Now
            </button>
        </form>
    );
};

export default NewsletterForm;
