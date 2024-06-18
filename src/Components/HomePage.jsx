import image28 from "../assets/image28.svg";
import image17 from "../assets/image17.svg";
import image19 from "../assets/image19.svg";
import image20 from "../assets/image20.svg";
const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-full p-4">
      <div className="flex flex-col md:flex-row items-center justify-between w-full bg-white p-4">
        <div className="flex flex-col items-start md:w-1/2">
          <h1 className="text-3xl font-bold">WORK WITH STARTUPS</h1>
          <p className="mt-2 text-gray-700 font-bold text-left">
            We&apos;re dedicated to bridging the gap between aspiring students
            <br />
            and innovative startups, creating opportunities that <br />
            know no boundaries.
          </p>
          <button className=" w-4/12 mt-4 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 ml-5">
            Button
          </button>
        </div>
        <div className="mt-4 md:mt-0 md:w-1/2 flex justify-center">
          <img src={image28} alt="Startups" className="w-1/2 h-auto" />
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-xl font-bold">
          Access to wide pool of student talent across the globe
        </h2>
      </div>

      <div className="mt-10 w-full text-center">
        <h2 className="text-2xl font-bold">For Students</h2>
        <div className="flex flex-col md:flex-row justify-around mt-8">
          <div className="flex flex-col items-center md:w-1/3 p-4">
            <img src={image20} alt="Jobs" className="w-32 h-32" />
            <h3 className="text-xl font-bold mt-4">Browse Jobs</h3>
            <p className="mt-2 text-gray-700 text-center">
              Discover a wide range of projects offered by startups, companies,
              and organizations across various industries and domains.
            </p>
            <button className="mt-4 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600">
              Explore
            </button>
          </div>

          <div className="flex flex-col items-center md:w-1/3 p-4">
            <img src={image17} alt="Internships" className="w-32 h-32" />
            <h3 className="text-xl font-bold mt-4">Browse Internship</h3>
            <p className="mt-2 text-gray-700 text-center">
              Discover internship opportunities offered by startups, SMEs,
              corporations, and other organizations seeking to recruit talented
              and ambitious individuals.
            </p>
            <button className="mt-4 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600">
              Explore
            </button>
          </div>

          <div className="flex flex-col items-center md:w-1/3 p-4">
            <img
              src={image19}
              alt="Freelancing Projects"
              className="w-32 h-32"
            />
            <h3 className="text-xl font-bold mt-4">Freelancing Projects</h3>
            <p className="mt-2 text-gray-700 text-center">
              Discover freelancing opportunities offered by startups, SMEs,
              corporations, and other organizations seeking to recruit talented
              and ambitious individuals.
            </p>
            <button className="mt-4 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
