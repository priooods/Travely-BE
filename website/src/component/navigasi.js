import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";

function Navigasi() {
  return (
    <div className="md:flex md:px-6 justify-center w-full h-[56px] bg-[#2e97a7] items-center text-white">
      <img
        src={logo}
        alt="logo"
        className="text-start h-24 w-24 cursor-pointer"
      ></img>
      <div className="md:flex gap-x-10 mx-auto font-semibold text-xs font-popregular">
        <Link to={"/"}>
          <span className=" cursor-pointer">Home</span>
        </Link>
        <Link to={"destinasi"}>
          <span className=" cursor-pointer">Destination</span>
        </Link>
        <Link to={"guide"}>
          <span className=" cursor-pointer">Local Guide</span>
        </Link>
        <Link to={"about"}>
          <span className=" cursor-pointer">About Us</span>
        </Link>
      </div>
      <div className="flex gap-x-4 font-popregular text-xs items-center">
        <Link to={"login"}>
          <span className=" cursor-pointer">Log in</span>
        </Link>
        <Link to={"signup"}>
          <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-gray-700">
            Sign Up
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navigasi;
