import bggunung from "../../../assets/image/foto_gunung.jpeg";
import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function IndexRegister() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div>
      <div className="relative flex justify-center items-center h-screen w-full">
        <img
          className="absolute w-full h-screen left-0 right-0 top-0 bottom-0"
          src={bggunung}
          alt={bggunung}
        />
        <div className="md:w-4/6 bg-white rounded-xl h-[80vh] z-10 py-5">
          <p className="font-popbold text-4xl text-[#2e97a7] text-center">
            Sign Up
          </p>
          <div className="md:w-3/6 mx-auto mt-8">
            <Input
              size="sm"
              type="text"
              variant="bordered"
              placeholder="Fullname"
            />
            <Input
              size="sm"
              type="text"
              variant="bordered"
              placeholder="Nickname"
              className="mt-4"
            />
            <Input
              size="sm"
              type="email"
              variant="bordered"
              placeholder="Email"
              className="mt-4"
            />
            <Input
              variant="bordered"
              placeholder="Password"
              size="sm"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <ion-icon name="eye-outline"></ion-icon>
                  ) : (
                    <ion-icon name="eye-off-outline"></ion-icon>
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="mt-4"
            />
            <Input
              size="sm"
              type="number"
              variant="bordered"
              placeholder="Nomor Handphone"
              className="mt-4"
              startContent={<div>+62</div>}
            />
            <p className="text-xs mt-2 mb-5">
              By clicking Register, you agree to the{" "}
              <Link to={"/terms"}>
                <span className="text-blue-500 cursor-pointer">
                  Terms and Conditions
                </span>
              </Link>
            </p>
            <Button
              size="sm"
              className=" bg-[#2e97a7] text-white font-popmedium w-40 text-lg h-9 shadow-xl"
            >
              Sign Up
            </Button>
            <p className="text-sm mt-5">
              Already have a account ?{" "}
              <Link to={"/login"}>
                <span className="text-[#2e97a7] font-popsemibold cursor-pointer">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexRegister;
