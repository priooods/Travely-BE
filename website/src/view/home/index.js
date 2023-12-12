import CardComponent from "../../utils/card";
import csatu from "../../assets/image/bintan_mangrove.jpeg";
import cdua from "../../assets/image/museum_tsunami.jpeg";
import ctiga from "../../assets/image/danau-toba.jpeg";
import cempat from "../../assets/image/taman_marzuki.jpeg";
import usatu from "../../assets/image/Anggi_lolo.jpeg";
import udua from "../../assets/image/Hanifah.jpeg";
import utiga from "../../assets/image/Deriyamsi.jpeg";
// import videos from "../../assets/image/landing_page.mp4";
import CardTestimoniComponent from "../../utils/card_testimoni";
function IndexHome() {
  return (
    <div>
      <div className="pt-8 pb-12 px-5">
        <div className=" h-[550px] w-full rounded-lg shadow-lg bg-slate-500">
          {/* <video alt={videos} controls autoPlay className="rotate-100">
            <source src={videos} type="video/mp4" />
            No suppoty
          </video> */}
        </div>
        <div className=" mt-28">
          <p className="text-center font-popbold md:text-5xl text-[#2e97a7]">
            Choose Destination
          </p>
          <p className="md:text-xl font-popregular mt-3 md:w-96 mx-auto">
            "Travel and change of place import new vigor to mind"
          </p>
        </div>
        <div className="mt-32 grid md:grid-cols-4 grid-cols-1 gap-12">
          <CardComponent
            img={csatu}
            title="Bintan Mangrove"
            price="30.000"
            location="Lagoi"
          />
          <CardComponent
            img={cdua}
            title="Museum Tsunami"
            price="5.000"
            location="Banda Aceh"
          />
          <CardComponent
            img={ctiga}
            title="Danau Toba"
            price="10.000"
            location="Kabupaten Toba"
          />
          <CardComponent
            img={cempat}
            title="Taman Ismail Marzuki"
            price="12.000"
            location="Jakarta Pusat"
          />
        </div>
        <div className="md:mt-32">
          <p className="text-center font-popbold md:text-4xl uppercase text-[#2e97a7]">
            testimonial
          </p>
          <div className="mt-28 grid md:grid-cols-3 grid-cols-1 gap-12">
            <CardTestimoniComponent
              avatar={usatu}
              description={
                "The tour guide is very communicative, fun, knows everything about the tours at the transport museum and the price is quite cheap. Anyway, very satisfied and very exciting"
              }
              name={"Rika Wahyuni"}
              city={"Banyuwangi"}
            />
            <CardTestimoniComponent
              avatar={udua}
              description={
                "Thank you, Destinify for the tour while in West Java, the tour guide was super kind and friendly, very professional in providing education to us"
              }
              name={"Shifa Ayutia"}
              city={"Batu City"}
            />
            <CardTestimoniComponent
              avatar={utiga}
              description={
                "It's amazing that I've used Destinify's services twice and it doesn't disappoint, the tour guide is kind and friendly and ready if needed, thank you, Destinify, always successful"
              }
              name={"Maulida Adista"}
              city={"Medan City"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexHome;
