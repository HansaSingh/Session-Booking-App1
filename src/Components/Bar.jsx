import image7 from "../assets/image7.svg";
import image21 from "../assets/image21.svg";
import image22 from "../assets/image22.svg";
import image23 from "../assets/image23.svg";
import image24 from "../assets/image24.svg";
import image25 from "../assets/image25.svg";

const Bar = () => {
  const benefits = [
    {
      title: "Diverse Opportunities",
      description:
        "Bigstartups Network opens doors to a wide array of opportunities, allowing individuals to explore roles in startups spanning various industries and locations. This diversity provides exposure to different business models, cultures, and challenges, enriching one's professional experience and skill set",
      icon: image7,
    },
    {
      title: "Global Reach",
      description:
        "By transcending regional boundaries, Bigstartups Network enables individuals to access opportunities worldwide. This global reach not only expands the pool of available positions but also fosters cross-cultural collaboration and networking, opening doors to international career advancement and personal growth.",
      icon: image23,
    },
    {
      title: "Flexibility",
      description:
        "The platform offers flexibility in terms of employment arrangements, catering to different preferences and lifestyles. Whether someone seeks the stability of full-time employment, the flexibility of part-time roles, or the autonomy of freelancing, Bigstartups Network empowers individuals to tailor their work arrangements to suit their needs and aspirations.",
      icon: image21,
    },
    {
      title: "Career Control",
      description:
        "Bigstartups Network puts individuals in the driver's seat of their careers, allowing them to make informed choices aligned with their goals and values. This autonomy fosters a sense of empowerment and ownership over one's professional trajectory, enabling individuals to pursue paths that resonate with their interests, skills, and aspirations",
      icon: image22,
    },
    {
      title: "Skill Development",
      description:
        "Engaging with startups from diverse backgrounds provides ample opportunities for skill development and growth. Whether it's through challenging projects, exposure to new technologies, or mentorship from seasoned entrepreneurs, Bigstartups Network offers a dynamic learning environment where individuals can continuously enhance their capabilities and adapt to evolving industry trends.",
      icon: image24,
    },
    {
      title: "Networking Opportunities",
      description:
        "By connecting with startups and professionals from around the world, individuals can expand their professional network and access valuable connections and resources. These networking opportunities not only facilitate career advancement but also foster a sense of community and collaboration within the global startup ecosystem.",
      icon: image25,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Key benefits for students?
      </h2>
      <div className="relative flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="hidden md:block absolute inset-0 w-px bg-red-500 left-1/2 transform -translate-x-1/2 "></div>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6  rounded-lg shadow-md ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
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
    </div>
  );
};

export default Bar;
