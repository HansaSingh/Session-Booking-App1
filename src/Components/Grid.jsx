import image8 from "../assets/image8.svg";
import image9 from "../assets/image9.svg";
import image26 from "../assets/image26.svg";

import image12 from "../assets/image12.svg";
import image14 from "../assets/image14.svg";
const Grid = () => {
  const additionalBenefits = [
    {
      title: "Career Advancement",
      description:
        "Position yourself for career advancement by gaining practical experience, expanding your professional network, and building a solid reputation within the startup community.",
      icon: image8,
    },
    {
      title: "Portfolio Building",
      description:
        "Build a strong portfolio of projects and experiences that showcase your skills and accomplishments to potential employers or clients.",
      icon: image9,
    },
    {
      title: "Exposure to Cutting-Edge Technologies",
      description:
        "Work on projects that leverage the latest technologies and trends, giving you hands-on experience with tools and platforms shaping the future of business.",
      icon: image9,
    },
    {
      title: "Networking Opportunities",
      description:
        "Connect with like-minded students and professionals passionate about innovation and entrepreneurship. Build lasting relationships that can open doors to future collaborations and opportunities.",
      icon: image26,
    },
  ];

  const forStartups = [
    {
      title: "Post Projects",
      description:
        "We provide flexible hiring options to suit your business requirements.",
      icon: image12,
    },
    {
      title: "Post Jobs & Internships",
      description:
        "With Bigstartups Network, there are no regional barriers. Expand your horizons and connect with the best talent worldwide.",
      icon: image14,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Additional Benefits
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {additionalBenefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
          >
            <img
              src={benefit.icon}
              alt={benefit.title}
              className="w-[200px] h-[200px] mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">
              {benefit.title}
            </h3>
            <p className="text-gray-600 text-center">{benefit.description}</p>
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold mb-8 text-center">For Startups</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {forStartups.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
          >
            <img
              src={benefit.icon}
              alt={benefit.title}
              className="w-[200px] h-[200px] mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">
              {benefit.title}
            </h3>
            <p className="text-gray-600 text-center">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
