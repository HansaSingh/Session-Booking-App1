import React from "react";

import HomePage from "../Components/HomePage";
import Bar from "../Components/Bar";
import Grid from "../Components/Grid";
import Grid2 from "../Components/Grid2";

function Landing() {
  return (
    <>
      <HomePage />
      <Bar />
      <Grid />
      <Grid2 />
      <div className="flex flex-col items-center w-full p-4">
        <h1 className="font-bold text-5xl m-8 ">
          {" "}
          Ready to take the first step towards an exciting career journey?
        </h1>
        <h3 className="text-3xl mt-10">
          Explore Bigstartups Network's "Work with Startups" <br />
          section today and unlock a world of possibilities.
        </h3>
        <button className=" w-4/12 mt-10 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 ml-5">
          Join Now
        </button>
        <div>
          <br /> <br /> <br /> <br />
        </div>
      </div>
    </>
  );
}

export default Landing;
