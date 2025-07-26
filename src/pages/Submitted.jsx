import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Submitted = () => {
  return (
    <>
      <div className="relative w-full h-[85vh] tracking-tighter">
        <div className="absolute top-0 h-[85vh] w-full z-[-1]">
          <img
            className="w-full h-full z-[1] rounded-b-4xl overflow-hidden object-cover"
            src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-contact-header-img-bg.jpg"
            alt=""
          />
          <div className="absolute w-full h-full z-[2] rounded-b-full bg-[#00000075] top-0"></div>
        </div>
        <div className="absolute top-[45vh] left-1/2 -translate-1/2">
          <h1 className="text-white text-7xl font-black tracking-tight text-center">
            CONTACT
          </h1>
        </div>
      </div>
      <div className="w-full h-[180vh] flex flex-col lg:flex-row px-0 lg:px-18 tracking-tighter -mt-14">
        <div className="w-full lg:w-[30vw] rounded-t-4xl lg:rounded-l-4xl bg-[#F7F6F2] h-full px-10 py-10">
          <h1 className="text-3xl lg:text-5xl font-bold lg:font-semibold items-start">
            Corporate Office
          </h1>

          <div className="flex gap-x-5 mt-4 lg:mt-7">
            <MapPin className="w-5 lg:w-10 h-5 lg:h-10 text-red-500 hover:pb-3 hover:transition-all hover:ease-linear duration-200" />
            <p className="text-md">
              Via di S. Vincenzo, 12/34A, 00123 Roma RM, Italy.
            </p>
          </div>
          <div className="flex gap-x-5 mt-4 lg:mt-7">
            <Phone className="w-5 lg:w-10 h-5 lg:h-10 text-red-500 hover:pb-3 hover:transition-all hover:ease-linear duration-200" />
            <p className="text-md">+39 123 456 7890</p>
          </div>
          <div className="flex gap-x-5 mt-4 lg:mt-7">
            <Mail className="w-5 lg:w-10 h-5 lg:h-10 text-red-500 hover:pb-3 hover:transition-all hover:ease-linear duration-200" />
            <p className="text-md">mail@example.com</p>
          </div>

          <div>
            <h1 className="text-3xl lg:text-5xl font-bold lg:font-semibold items-start mt-6">
              Press Inquiries
            </h1>
            <div className="flex gap-4 lg:gap-7 flex-col mt-4 lg:mt-7">
              <div className="flex gap-x-5">
                <Phone className="w-5 lg:w-10 h-5 lg:h-10 text-red-500 hover:pb-3 hover:transition-all hover:ease-linear duration-200" />
                <p className="text-md">+39 123 456 7890</p>
              </div>
              <div className="flex gap-x-5">
                <Mail className="w-5 lg:w-10 h-5 lg:h-10 text-red-500 hover:pb-3 hover:transition-all hover:ease-linear duration-200" />
                <p className="text-md">mail@example.com</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold lg:font-semibold items-start mt-6">
              Stay Connected
            </h1>
            <div className="flex items-start gap-5 mt-8 text-red-500 text-3xl ">
              <FaTwitter className="w-5 lg:w-10 h-5 lg:h-10 hover:pb-3 hover:transition-all hover:ease-linear duration-200" />
              <FaFacebookF className="w-5 lg:w-10 h-5 lg:h-10 hover:pb-3 hover:transition-all hover:ease-linear duration-200" />
              <FaInstagram className="w-5 lg:w-10 h-5 lg:h-10 hover:pb-3 hover:transition-all hover:ease-linear duration-200" />
              <FaYoutube className="w-5 lg:w-10 h-5 lg:h-10 hover:pb-3 hover:transition-all hover:ease-linear duration-200" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[60vw] bg-amber-50 rounded-r-4xl px-10 py-10">
          <h1 className="text-4xl font-semibold tracking-tighter ">
            We love to hear from you
          </h1>
          <p className="mt-5 text-lg opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <br />
          <h1 className="text-2xl text-center font-semibold tracking-tighter ">
            Submitted
          </h1>
          <br />
          <h1 className="text-4xl text-center text-red-500 font-semibold tracking-tighter ">
            Thank You For Visiting To Our Website
          </h1>
        </div>
      </div>
    </>
  );
};

export default Submitted;
