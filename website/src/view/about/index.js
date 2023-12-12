import CardAbout from "../../utils/card_about";
import sofia from "../../assets/image/Shofiyya.jpeg";
import raisya from "../../assets/image/Raisya_Zalfa_Kirana.jpeg";
import farida from "../../assets/image/Farida.png";
import deri from "../../assets/image/Deriyamsi.jpeg";
import nur from "../../assets/image/Nur_fadila.jpeg";
import mulyadi from "../../assets/image/Muliadi.png";
import anggi from "../../assets/image/Anggi_lolo.jpeg";
import astri from "../../assets/image/Astriani.jpeg";
import hanifah from "../../assets/image/Hanifah.jpeg";
import wahyudi from "../../assets/image/wahyudi.png";
import taufiq from "../../assets/image/Taufiqurrahman.jpg";
import bggunung from "../../assets/image/foto_gunung.jpeg";

function IndexAbout() {
  return (
    <div>
      <div className="relative h-[500px] w-full">
        <img
          className="bg-gray-600 h-full w-full opacity-70"
          src={bggunung}
          alt={bggunung}
        />
        <div className="absolute left-0 right-0 top-24 text-white">
          <h5 className=" font-popbold text-4xl mb-3">Information</h5>
          <p className=" text-2xl font-popregular">Come On, Get To Known!</p>
        </div>
      </div>
      <div className="-mt-20 grid md:grid-cols-3 md:px-12 px-3 gap-7 grid-cols-1 mb-20">
        <div className="col-start-2">
          <CardAbout
            avatar={sofia}
            name={"Shofiyya Keista Humairo"}
            position={"Project Management"}
            origin={"I’m from DKI Jakarta"}
          />
        </div>
        <div className=" mt-16 col-start-1">
          <CardAbout
            avatar={raisya}
            name={"Raisya Zalfa Kirana"}
            position={"Scrum Master"}
            origin={"I’m from Riau Island"}
          />
        </div>
        <div className=" mt-16 col-start-3">
          <CardAbout
            avatar={farida}
            name={"Farida Afrina"}
            position={"Scrum Master"}
            origin={"I’m from North Sumatera"}
          />
        </div>
        <div className=" mt-16 col-start-1">
          <CardAbout
            avatar={deri}
            name={"Deriyamsi Ritonga"}
            position={"Website UI Designer"}
            origin={"I’m from North Sumatera"}
          />
        </div>
        <div className=" mt-16 col-start-3">
          <CardAbout
            avatar={nur}
            name={"Nur Fadillah"}
            position={"Mobile UI Designer"}
            origin={"I’m from Central Sulawesi"}
          />
        </div>
        <div className=" mt-16 col-start-1">
          <CardAbout
            avatar={mulyadi}
            name={"Muliadi"}
            position={"Website UI Designer"}
            origin={"I’m from Nangroe Aceh Darussalam"}
          />
        </div>
        <div className=" mt-16 col-start-3">
          <CardAbout
            avatar={taufiq}
            name={"Muhammad Taufiqurrahman"}
            position={"Mobile Programmer"}
            origin={"I’m from East Java"}
          />
        </div>
        <div className=" mt-16 col-start-1">
          <CardAbout
            avatar={anggi}
            name={"Anggi Lolo Siregar"}
            position={"Website Programmer"}
            origin={"I’m from Riau Island"}
          />
        </div>
        <div className=" mt-16 col-start-3">
          <CardAbout
            avatar={astri}
            name={"Astriani"}
            position={"Mobile Programmer"}
            origin={"I’m from West Java"}
          />
        </div>
        <div className=" mt-16 col-start-1">
          <CardAbout
            avatar={hanifah}
            name={"Hanifah"}
            position={"Website Programmer"}
            origin={"I’m from Banten"}
          />
        </div>
        <div className=" mt-16 col-start-3">
          <CardAbout
            avatar={wahyudi}
            name={"Muhammad Wahyudi"}
            position={"Mobile Programmer"}
            origin={"I’m from East Java"}
          />
        </div>
      </div>
    </div>
  );
}

export default IndexAbout;
