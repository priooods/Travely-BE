import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import client from "../../service/services";
import { useParams } from "react-router-dom";
function IndexDetailDestinasi() {
  let { id } = useParams();
  const [request, setRequest] = useState(true);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    if (request) {
      client
        .get("/destination/detail/" + id)
        .then((res) => {
          setDetail(res.data.data);
        })
        .catch((err) => console.log(err));
    }
    return () => setRequest(false);
  });

  return (
    <div className="bg-slate-300 w-full">
      <div className="w-[70%] mx-auto bg-white min-h-screen py-14 px-20">
        <p className="font-bold text-3xl mb-10">{detail?.title}</p>
        <ImageGallery
          items={detail?.attachment ?? []}
          showNav={false}
          showPlayButton={false}
          autoPlay
        />
        <div className="md:mt-12 text-start">
          <p className="">{detail?.description}</p>
          <p className="mt-10 font-bold">Facility</p>
          <ul>
            <li>{detail?.facility}</li>
          </ul>
          <p className="mt-10 font-bold">Ticket Price Details</p>
          <p className=" text-green-600">Rp. {detail?.price},-/Person</p>
        </div>
      </div>
    </div>
  );
}

export default IndexDetailDestinasi;
