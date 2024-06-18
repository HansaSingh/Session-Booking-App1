import React, { useState } from "react";
import image6 from "../assets/image6.jpeg";
import { LuCalendarDays } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import { TbUserCheck } from "react-icons/tb";
import { MdDynamicFeed } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

const ConsultingCard = () => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("Startup Consulting");
  const [isBooked, setIsBooked] = useState(false);

  const dates = [
    { label: "Today", available: 8 },
    { label: "Tomorrow", available: 6 },
    { label: "Sat 1, May", available: 6 },
  ];

  const handleDateChange = (direction) => {
    setSelectedDateIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex >= 0 && newIndex < dates.length) {
        return newIndex;
      }
      return prevIndex;
    });
  };

  const handleBooking = () => {
    if (selectedTime && selectedService) {
      setIsBooked(true);
    }
  };

  return (
    <>
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
              <LuCalendarDays className="mr-2 mt-2 fill-red-300" />
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
                01 hr session:{" "}
                <span className="font-bold text-black">₹1500</span>
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
      <div className="min-h-screen bg-white p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl font-bold mb-4">Available Slots</h1>
          <div className="flex justify-center items-center mb-4">
            <div className="bg-gray-200 rounded-lg p-1 flex w-full md:w-1/2">
              <div
                className={`font-semibold py-2 px-4 rounded-lg cursor-pointer ${
                  selectedService === "Startup Consulting"
                    ? "bg-red-100 text-red-500"
                    : "text-gray-500"
                }`}
                onClick={() => setSelectedService("Startup Consulting")}
              >
                Startup Consulting
              </div>
              <div
                className={`font-semibold py-2 px-4 rounded-lg cursor-pointer ${
                  selectedService === "Career Consulting"
                    ? "bg-red-100 text-red-500"
                    : "text-gray-500"
                }`}
                onClick={() => setSelectedService("Career Consulting")}
              >
                Career Consulting
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <IoIosArrowBack
              className="text-red-500 cursor-pointer shadow-lg rounded-full text-4xl p-1"
              onClick={() => handleDateChange(-1)}
            />
            <div className="flex space-x-4">
              {dates.map((date, index) => (
                <div
                  key={index}
                  className={`text-center ${
                    index === selectedDateIndex ? "font-bold" : ""
                  }`}
                >
                  <div className="text-sm">{date.label}</div>
                  <div className="text-blue-500 text-sm">
                    {date.available} Available
                  </div>
                  {index === selectedDateIndex && (
                    <div className="h-1 bg-red-500 mt-1"></div>
                  )}
                </div>
              ))}
            </div>
            <MdOutlineArrowForwardIos
              className="text-red-500 cursor-pointer rounded-full text-4xl p-1 shadow-lg"
              onClick={() => handleDateChange(1)}
            />
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="text-lg flex">
                <CiClock2 className="m-2" />
                30 min
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                "7:00-7:30 AM",
                "8:00-8:30 AM",
                "9:00-9:30 AM",
                "10:00-10:30 AM",
                "11:00-11:30 AM",
                "6:00-6:30 PM",
                "8:00-8:30 PM",
                "9:00-9:30 PM",
                "1:00-1:30 PM",
                "12:00-12:30 PM",
              ].map((time, index) => (
                <button
                  key={index}
                  className={`border py-2 rounded-md ${
                    selectedTime === time
                      ? "bg-red-200 text-red-500 border-red-500"
                      : "text-red-500 border-red-500"
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          <hr className="mt-6 border-#DBD9D9" />
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="text-lg flex">
                <CiClock2 className="m-2" />
                01 hour
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {["7:00-8:00 AM", "10:00-11:00 AM", "2:00-3:00 PM"].map(
                (time, index) => (
                  <button
                    key={index}
                    className={`border py-2 rounded-md ${
                      selectedTime === time
                        ? "bg-red-200 text-red-500 border-red-500"
                        : "text-red-500 border-red-500"
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                )
              )}
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-md"
              onClick={handleBooking}
            >
              Proceed Payment
            </button>
          </div>
          {isBooked && (
            <div className="mt-8 p-4 border-red-300 border-y-2 border-x flex-wrap shadow-lg">
              <h3 className="text-xl font-bold mb-4">Booking Confirmation</h3>
              <p>Date: {dates[selectedDateIndex].label}</p>
              <p>Time: {selectedTime}</p>
              <p>Service: {selectedService}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ConsultingCard;
