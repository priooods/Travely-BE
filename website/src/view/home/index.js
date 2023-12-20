import CardComponent from "../../utils/card";
import usatu from "../../assets/image/Anggi_lolo.jpeg";
import udua from "../../assets/image/Hanifah.jpeg";
import utiga from "../../assets/image/Deriyamsi.jpeg";
import videos from "../../assets/video/landing_page_vid.mp4";
import CardTestimoniComponent from "../../utils/card_testimoni";
import { useEffect, useState } from "react";
import client from "../../service/services";
function IndexHome() {
  const [destination, setDestination] = useState([]);
  const [req, setReq] = useState(true);

  useEffect(() => {
    if (req)
      client
        .get("/destination/home")
        .then((res) => {
          setDestination(res.data.data);
        })
        .catch((err) => console.log(err));
    return () => setReq(false);
  });
  return (
    <div>
      <div className="pt-8 pb-12 px-5">
        <div className=" h-[550px] w-full rounded-lg shadow-lg bg-slate-500 relative">
          <video
            src={videos}
            loop
            muted
            autoPlay={true}
            className="rotate-100 w-full h-full aspect-[1/3] object-fill"
          ></video>
          <h2 className="text-start absolute z-10 text-white font-popmedium leading-[1.8] text-6xl left-20 top-40 bottom-0">
            Welcome to <br /> DESTINIFY
          </h2>
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
          {destination?.map((item) => (
            <CardComponent
              key={item.id}
              id={item.id}
              img={item?.attachment[0]?.attachment}
              title={item?.title}
              price={item?.price}
              location={item?.region}
            />
          ))}
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
