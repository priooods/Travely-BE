import bggunung from "../../../assets/image/foto_gunung.jpeg";
import {
  Input,
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
} from "@nextui-org/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import client from "../../../service/services";
function IndexRegister() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fullname, setFullname] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  function register() {
    setIsLoading(true);
    client
      .post("/user/register", {
        fullname: fullname,
        nickname: nickname,
        email: email,
        password: password,
        phone: parseInt(phone),
      })
      .then((res) => {
        setTimeout(() => {
          setIsLoading(false);
          onOpen();
        }, 1000);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }
  function goLogin() {
    onOpenChange();
    navigate("/login");
  }
  return (
    <div>
      <div className="relative flex justify-center items-center h-screen w-full md:pt-[56px]">
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
              value={fullname}
              onValueChange={setFullname}
            />
            <Input
              size="sm"
              type="text"
              variant="bordered"
              placeholder="Nickname"
              className="mt-4"
              value={nickname}
              onValueChange={setNickname}
            />
            <Input
              size="sm"
              type="email"
              variant="bordered"
              placeholder="Email"
              className="mt-4"
              value={email}
              onValueChange={setEmail}
            />
            <Input
              variant="bordered"
              placeholder="Password"
              size="sm"
              value={password}
              onValueChange={setPassword}
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
              value={phone}
              onValueChange={setPhone}
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
              onClick={register}
              isLoading={isLoading}
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
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              <div className="text-center py-4">
                <h1 className="text-lg font-popsemibold text-[#2e97a7]">
                  Happy! You have successfully registered
                </h1>
                <p>Please Log In to be able to use it out service</p>
                <Button
                  size="sm"
                  onClick={goLogin}
                  className=" bg-[#2e97a7] text-white font-popmedium w-40 mt-8 text-lg h-9 shadow-xl"
                >
                  Ok
                </Button>
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default IndexRegister;
