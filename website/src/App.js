import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import "react-image-gallery/styles/css/image-gallery.css";
import Navigasi from "./component/navigasi";
import FooterComponent from "./component/footer";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div
        className={
          location.pathname === "/login" || location.pathname === "/signup"
            ? "absolute z-10 top-0 left-0 right-0"
            : ""
        }
      >
        <Navigasi />
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
      <div
        className={
          location.pathname === "/login" || location.pathname === "/signup"
            ? "hidden"
            : "block"
        }
      >
        <FooterComponent></FooterComponent>
      </div>
    </div>
  );
}

export default App;
