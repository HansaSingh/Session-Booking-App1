import React from "react";
import image1 from "../assets/download.jpeg";
import image2 from "../assets/image1.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image29 from "../assets/image29.jpeg";
import image30 from "../assets/image30.jpeg";
import image31 from "../assets/image31.jpg";
import image32 from "../assets/image32.jpg";
import image33 from "../assets/image33.jpeg";
import { TiTabsOutline } from "react-icons/ti";

const image = [
  {
    id: 1,
    title: "The Future of AI Writing: What do you want to know",
    category: "Business consulting",
    image: image2,
    position: "left",
  },
  {
    id: 2,
    title: "The Future of AI Writing: What do you want to know",
    category: "Business consulting",
    image: image2,
    position: "right",
  },
  {
    id: 3,
    title: "The Future of AI Writing: What do you want to know",
    category: "Business consulting",
    image: image2,
    position: "left",
  },
  {
    id: 4,
    title: "The Future of AI Writing: What do you want to know",
    category: "Business consulting",
    image: image2,
    position: "right",
  },
];

const images = [
  {
    id: 1,
    title: "The Future of AI Writing: What do you want to know",
    category: "Business consulting",
    image: image3,
  },
  {
    id: 2,
    title: "The Future of AI Writing: What do you want to know",
    category: "Business consulting",
    image: image3,
  },
  {
    id: 3,
    title: "The Future of AI Writing: What do you want to know",
    category: "Business consulting",
    image: image3,
  },
  {
    id: 4,
    title: "The Future of AI Writing: What do you want to know",
    category: "Business consulting",
    image: image3,
  },
];

const features = [
  {
    id: 1,
    title: "Podcast",
    description: "Share your journey and insights",
    image: image29,
  },
  {
    id: 2,
    title: "Interviews",
    description: "Highlight your startup story",
    image: image30,
  },
  {
    id: 3,
    title: "Startup Stories",
    description: "Showcasing your achievements",
    image: image31,
  },
  {
    id: 4,
    title: "Feature Videos",
    description: "Feature your brand videos",
    image: image32,
  },
  {
    id: 5,
    title: "Feature Articles",
    description: "Feature your brand articles",
    image: image33,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <div className="max-w-4xl w-full p-4">
        <div>
          <div className="text-center bg-gray-700 text-white">
            <img
              src={image1}
              alt="Logo"
              className="mx-auto h-[70px] w-[50px] mb-4 py-2"
            />
            <h1 className="text-3xl font-bold mb-2">In Spotlight This Month</h1>
            <p className="text-white mb-6">
              Discover This Month’s Featured Videos & Articles
            </p>
          </div>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Spotlight Videos</h2>
            <p className="text-gray-600">
              We are thrilled to present a special of featuring your Startup,
              Product & Members. Explore about startups, products & member of
              our community who is making waves in the industry by our featured
              videos, podcasts, interviews, stories and articles in our
              spotlight section.
            </p>
          </div>
          <div>
            {image.map((i, index) => (
              <div
                key={i.id}
                className={`flex flex-col md:flex-row mb-6 items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <img
                  src={i.image}
                  alt={i.title}
                  className="w-full md:w-[300px] h-[140px] object-cover mb-4 md:mb-0 md:mr-4"
                />
                <div
                  className={`${index % 2 !== 0 ? "text-right md:mr-4" : ""}`}
                >
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <TiTabsOutline className="mr-2" />
                    <p>{i.category}</p>
                  </div>
                  <h3 className="text-lg font-bold">{i.title}</h3>
                </div>
              </div>
            ))}
            <hr className="mt-6 border-gray-300" />
            <div className="text-center">
              <h2 className="text-2xl font-bold my-4">Spotlight Advices</h2>
              <p>
                Explore the inspiring journey of our startups & products from
                its inception to its current success
              </p>
              <div className="">
                <div className="w-full max-w-4xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {images.map((i, index) => (
                      <div
                        key={i.id}
                        className={`flex flex-col border border-gray-300 p-4 ${
                          index % 2 === 1 ? "md:col-start-2" : ""
                        }`}
                      >
                        <img
                          src={i.image}
                          alt={i.title}
                          className="w-full h-[120px] object-contain mb-4"
                        />
                        <div>
                          <p className="text-sm text-gray-500 flex items-center mb-2">
                            <TiTabsOutline className="mr-1" />
                            {i.category}
                          </p>
                          <h3 className="text-lg font-bold">{i.title}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <button className="bg-red-500 text-white py-2 px-4 rounded-[5px] font-bold">
                    Feature Spotlight
                  </button>
                  <hr className="mt-6 border-gray-800" />
                </div>
                <div className="text-center text-4xl font-bold mt-4">
                  SP
                  <span>
                    <img
                      src={image5}
                      alt="Spotlight Icon"
                      className="inline-block rounded-full w-12 h-12"
                    />
                  </span>
                  TLIGHT
                  <div className="flex flex-col items-center mt-[-6px]">
                    <img src={image4} alt="Spotlight" className="max-w-md" />
                  </div>
                </div>
                <p className="text-center font-bold text-xl">
                  Get startups Featured in BigStartups Spotlight
                </p>
                <p className="text-center">
                  Feature your founders, startups, and products through engaging
                  videos and articles in our Spotlight Section, maximizing your
                  exposure and credibility.
                </p>
              </div>
            </div>
            <div className="">
              <div className="max-w-6xl mx-auto p-4">
                <div className="text-center bg-white p-6 mb-6">
                  <button className="bg-red-500 text-white px-4 py-2 font-bold rounded-[5px]">
                    Get Featured
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {features.slice(0, 3).map((feature) => (
                    <div key={feature.id}>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-48 object-cover mb-4"
                      />
                      <h3 className="text-xl font-bold mb-2 text-center">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-center">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {features.slice(3).map((feature) => (
                    <div key={feature.id} className="bg-white p-6">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-48 object-cover mb-4"
                      />
                      <h3 className="text-xl font-bold mb-2 text-center">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-center">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="text-center bg-white p-6 shadow-lg rounded-lg">
                  <p className="text-black mb-4 text-xl font-bold">
                    Thank you for being a part of our community. We’re excited
                    to see your startup grow and thrive.
                  </p>
                  <p className="text-gray-600">
                    Join our community on social media to stay updated with the
                    latest news, tips, and success stories from fellow
                    entrepreneurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
