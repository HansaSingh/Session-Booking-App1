import { FaBell, FaComment, FaGlobe } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex flex-col items-center border-b pb-2 w-full mt-4">
      <div className="flex items-center w-full px-4 justify-between">
        <div className="flex items-center">
          <div className="w-5 h-5 bg-red-500 rounded-full mr-4"></div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
            <MdSearch className="text-lg mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none border-none"
            />
          </div>
        </div>
        <div className="font-bold text-xl">Offers & Deals</div>
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative  flex">
            <FaBell className="text-lg  mt-6" />
            <span className="  text-red-500 rounded-full text-xs font-bold  mt-3">
              10
            </span>
          </div>
          <div className="relative  flex">
            <FaComment className="text-lg  mt-6" />
            <span className="  text-red-500 rounded-full text-xs font-bold  mt-3">
              15
            </span>
          </div>
          <div className="relative  flex">
            <FaGlobe className="text-lg  mt-6" />
            <span className="  text-red-500 rounded-full text-xs font-bold  mt-3">
              89
            </span>
          </div>
          <div className="w-8 h-8 bg-gray-300 rounded-full ">
            {" "}
            <img
              className="rounded-full"
              src="https://s3-alpha-sig.figma.com/img/bac4/a410/a6a07dcec78edd7a906eb420144f1042?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YF~iHSW-BOoFbqwLPTc5byciw0K72JSwR3iGNmfgYFcuGOfdh-mger3iZtHHf7kMBdFkXNRAldT5pc4vAX0KPByVrn794XWmyumj1EygVb4wBjib0o1W52sMh21suycspQdboT7RHvGORdX1jLdLTGlv4peoKPJ0Mo52-GZEzOH6qv8uzzGXKamazz2JQEC3RFxDhfAB6C44o~Bfxii5-Az47xNsc12VSJq7aZaXWeobTUoIuSiG~Ohd~ycSF29U~xqhT27LgoHzhdUEu-tK1AJhGpNB59RBFNqcCvTwb~M98bdLa1kUZI~s6wBzOmxk8DxwCCg3lSduIo-YsqJLWQ__"
              href="pic"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-around w-full mt-2">
        {["LaunchPad", "Learning", "Networking", "Projects", "Jobs"].map(
          (item, index) => (
            <Link to={`/${item}`} key={index} className="text-center">
              <span className="font-bold">{item}</span>
              <div className="h-0.5 bg-red-500 mt-1"></div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default NavBar;
