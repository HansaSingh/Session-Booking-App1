import image10 from "../assets/image10.svg";
import image11 from "../assets/image11.svg";

import image13 from "../assets/image13.svg";
import image15 from "../assets/image15.svg";
import image16 from "../assets/image16.svg";
import image27 from "../assets/image27.svg";
const Grid2 = () => {
  const benefits = [
    {
      title: "Access to Diverse Talent",
      description:
        "By tapping into a global talent pool, startups can benefit from a broader range of perspectives, experiences, and skills. This diversity fosters innovation and allows startups to challenge norms, rethink ideas and unique solutions to challenges.",
      icon: image10, // Add the correct path to your icon
    },
    {
      title: "Cost Savings",
      description:
        "Startups often operate on tight budgets, and accessing cost-effective student resources can be a game-changer. This strategy can help startups reduce their overall costs associated with hiring while still accessing high-quality skills and services.",
      icon: image11,
    },
    {
      title: "Tailored Solutions",
      description:
        "Student resources can be tailored to meet the specific needs of startups, whether it's for short-term projects, fixed-term work, or assistance on specialized tasks. This flexibility allows startups to scale operations accordingly and pivot without committing to long-term contracts or excessive expenses.",
      icon: image27,
    },
    {
      title: "Flexible Hiring Models",
      description:
        "The ability to choose from a variety of hiring options, including full-time employees, interns, or freelancers, makes it easier for startups to find the right fit for their immediate needs and long-term strategic goals.",
      icon: image13,
    },
    {
      title: "Global Expansion Opportunities",
      description:
        "Building relationships with individuals from different backgrounds and cultures can be invaluable for startups looking to expand internationally. These global connections offer startups valuable insights and connections that can facilitate international growth and market penetration.",
      icon: image15,
    },
    {
      title: "Breaking Down Geographic Barriers",
      description:
        "Network startups can overcome these barriers and connect with top-tier talent from around the world. This access to a diverse talent pool fosters dynamic teams and innovative solutions, regardless of location.",
      icon: image16,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Key benefits for startups?
      </h2>
      <div className="relative flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="hidden md:block absolute inset-0 w-px bg-red-500 left-1/2 transform -translate-x-1/2"></div>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
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
              <div className="w-full h-px bg-red-500 mt-6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid2;
