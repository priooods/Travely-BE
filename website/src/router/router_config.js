import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import IndexHome from "../view/home";
import IndexDestination from "../view/destination";
import IndexAbout from "../view/about";
import IndexLogin from "../view/auth/login";
import IndexGuide from "../view/guide";
import IndexRegister from "../view/auth/register";
import IndexTerms from "../view/terms";
import IndexDetailDestinasi from "../view/detail_destination";
function RouterConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route exact path="/" element={<IndexHome />}></Route>
          <Route path="signup" element={<IndexRegister />}></Route>
          <Route path="login" element={<IndexLogin />}></Route>
          <Route path="destinasi" element={<IndexDestination />}></Route>
          <Route path="guide" element={<IndexGuide />}></Route>
          <Route path="about" element={<IndexAbout />}></Route>
          <Route path="terms" element={<IndexTerms />}></Route>
          <Route
            path="detail-destinasi/:id"
            element={<IndexDetailDestinasi />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterConfig;
