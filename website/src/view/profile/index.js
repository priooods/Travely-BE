import { Link, Outlet, useNavigate } from "react-router-dom";
import icuser from "../../assets/image/ic_user.png";
import icfile from "../../assets/image/ic_file.png";
import icarrow from "../../assets/image/ic_arrow.png";
function IndexProfile() {
  const navigasi = useNavigate();
  function logout() {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("isId");
    return navigasi("/");
  }
  return (
    <div>
      <div className="md:flex justify-start w-full min-h-screen items-stretch">
        <div className="bg-[#2e97a7] w-[20%] self-auto border-slate-300 border-t text-white relative min-h-screen">
          <p className=" font-popbold text-2xl mt-12">User Profile</p>
          <ul className="md:px-5 mt-10">
            <Link to={"detail"}>
              <li className="flex justify-start font-popsemibold cursor-pointer">
                <img src={icuser} alt="icuser" />
                <p className=" text-lg ml-5 my-auto mr-auto">Profile</p>
                <img src={icarrow} alt="icarrow" />
              </li>
            </Link>
            <Link to={"order"}>
              <li className="flex justify-start font-popsemibold cursor-pointer mt-5">
                <img src={icfile} alt="icfile" />
                <p className=" text-lg ml-5 my-auto mr-auto">Order List</p>
                <img src={icarrow} alt="icarrow" />
              </li>
            </Link>
          </ul>
          <div className="absolute bottom-24 left-0 right-0">
            <div
              className="font-popmedium text-lg inline-flex gap-x-7 mt-auto cursor-pointer"
              onClick={logout}
            >
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default IndexProfile;
