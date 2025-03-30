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
      <div className="flex flex-col items-center w-full p-4 text-center">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl m-4 sm:m-6 md:m-8">
          Ready to take the first step towards an exciting career journey?
        </h1>
        <h3 className="text-lg sm:text-2xl md:text-3xl mt-6 sm:mt-8 md:mt-10">
          Explore Bigstartups Network&apos;s &quot;Work with Startups&quot;{" "}
          <br className="hidden sm:block" />
          section today and unlock a world of possibilities.
        </h3>
        <button className="w-10/12 sm:w-8/12 md:w-4/12 mt-6 sm:mt-8 md:mt-10 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600">
          Join Now
        </button>
        <div className="h-20 sm:h-32 md:h-40"></div>
      </div>
    </>
  );
}

export default Landing;
