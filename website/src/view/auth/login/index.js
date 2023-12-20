import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import bglogin from "../../../assets/image/gambar_login.png";
import bggunung from "../../../assets/image/foto_gunung.jpeg";
import { Link, useNavigate } from "react-router-dom";
import client from "../../../service/services";
function IndexLogin() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleVisibility = () => setIsVisible(!isVisible);

  function login() {
    client
      .post("/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setTimeout(() => {
          localStorage.setItem("isLogin", true);
          localStorage.setItem("isId", res.data.data.id);
          localStorage.setItem("isAvatar", res.data.data.avatar);
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }

  return (
    <div>
      <div className="relative flex justify-center items-center h-screen w-full md:pt-[56px]">
        <img
          className="absolute w-full h-screen left-0 right-0 top-0 bottom-0"
          src={bggunung}
          alt={bggunung}
        />
        <div className="grid md:grid-cols-2 gap-0 h-[80vh] w-[65%] z-10">
          <div className="form-left bg-white p-14 rounded-l-2xl border border-slate-500">
            <p className="font-popbold text-4xl text-[#2e97a7] text-center">
              Log In
            </p>
            <div className="mt-14 text-left">
              <Input
                size="sm"
                type="email"
                variant="bordered"
                placeholder="Email"
                onValueChange={setEmail}
              />
              <Input
                variant="bordered"
                placeholder="Password"
                size="sm"
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
                className="mt-6"
              />
              <p className=" font-popsemibold text-xs mt-4 underline text-[#2e97a7]">
                Forgot Password ?
              </p>
              <div className="flex justify-center mt-12">
                <Button
                  size="sm"
                  onClick={login}
                  className=" bg-[#2e97a7] text-white font-popmedium w-40 text-lg h-9 shadow-xl"
                >
                  Log In
                </Button>
              </div>
              <p className=" font-popregular mx-auto text-center text-xs mt-4">
                Don't have account yet ?{" "}
                <Link to={"/signup"}>
                  <span className="text-[#2e97a7]">Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-[#2e97a7] rounded-r-2xl flex justify-center items-center">
            <img src={bglogin} alt={bglogin} className=" h-80 w-80" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexLogin;
