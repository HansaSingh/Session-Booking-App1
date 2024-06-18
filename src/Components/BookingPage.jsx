import React from "react";
import image6 from "../assets/image6.jpeg";
import { FaRegCalendarDays } from "react-icons/fa6";
import { TbUserCheck } from "react-icons/tb";
import { MdDynamicFeed } from "react-icons/md";

const BookingPage = () => {
  return (
    <div className="max-w-full p-4">
      <div className="md:flex p-4 border-red-300 border-y-2 border-x flex-wrap shadow-lg">
        <div className="md:flex-shrink-0 md:w-48 md:mx-4 mx-auto">
          <img
            className="h-48 w-48 object-cover rounded-full border-solid border-2 border-red-300 mx-auto"
            src={image6}
            alt="Ridhima Sen"
          />
        </div>
        <div className="p-8 flex-1">
          <div className="uppercase tracking-wide text-sm font-bold">
            Ridhima Sen
          </div>
          <p className="block mt-1 leading-tight text-black">
            Consulting Leader
          </p>
          <p className="mt-2 flex text-gray-500">
            <TbUserCheck className="mr-2 mt-2 fill-red-300" /> Qualified in
            startup Consulting
          </p>
          <p className="mt-2 flex text-gray-500">
            <FaRegCalendarDays className="mr-2 mt-2 fill-red-300" />
            20 Years of experience in consulting
          </p>
          <p className="mt-2 flex text-gray-500">
            <MdDynamicFeed className="mr-2 mt-2 fill-red-300" />
            Consultation fee ₹1000
          </p>
        </div>
        <div className="border-l border-red-300 mx-4 hidden md:block"></div>
        <div className="mt-7 m-8 flex-1">
          <h3 className="text-md font-bold">Consultation Prices</h3>
          <div className="flex flex-col md:flex-row justify-evenly">
            <p className="text-gray-500 p-3">
              30 min session:
              <span className="font-bold text-black">₹1000</span>
            </p>
            <p className="text-gray-500 p-3">
              01 hr session: <span className="font-bold text-black">₹1500</span>
            </p>
            <p className="text-gray-500 p-3">
              Availability:
              <span className="font-bold text-black">Mon-Sat</span>
            </p>
          </div>
          <button className="text-white font-bold rounded-full bg-red-600 mt-6 md:mt-20 px-10 py-2">
            Book Now
          </button>
        </div>
        <div className="mt-6 mx-2 p-2 w-full md:w-1/3">
          <h3 className="text-md font-bold text-xl">Skills</h3>
          <div className="flex flex-wrap justify-between">
            {[
              "Marketing Consulting",
              "Accounts Consulting",
              "Business Consulting",
              "Business Consulting",
              "Business Consulting",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-red-200 text-red-800 text-xs font-semibold mr-2 px-5 py-1.5 rounded-full mb-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
