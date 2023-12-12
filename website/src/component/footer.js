import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";

function FooterComponent() {
  return (
    <div className="relative h-[300px] bg-[rgb(46,151,167)] text-white">
      <div className="md:grid grid-cols-5 gap-5 px-10 pt-7">
        <div className="text-start font-popmedium col-span-3">
          <img
            src={logo}
            alt="logo"
            className="text-start mb-auto h-28 w-28 cursor-pointer"
          ></img>
          <div className="text-xs w-52 font-popregular">
            Enjoy your journey in your hands <b>Destinify</b> Helps you find
            Travel Guides
          </div>
        </div>
        <div className="text-start font-popmedium">
          <p className="uppercase text-sm font-popbold mb-4">service</p>
          <Link to={"about"}>
            <p className="text-sm mb-2">About Us</p>
          </Link>
          <Link to={"terms"}>
            <p className="text-sm mb-2">Terms & Condition</p>
          </Link>
        </div>
        <div className="text-start font-popmedium">
          <p className="uppercase text-sm font-popbold mb-4">Social Media</p>
        </div>
      </div>
      <p className="absolute bottom-5 font-popmedium left-0 text-xs right-0">
        All right Reversed 2023. copyright PT. Local Tour Guide
      </p>
    </div>
  );
}
export default FooterComponent;
