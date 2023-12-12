import { Button } from "@nextui-org/react";
import Rating from "react-rating";
import startnone from "../assets/image/star_kosong.png";
import startfull from "../assets/image/star_penuh.png";
import { Link } from "react-router-dom";
function CardDestinationIndex({
  id,
  image,
  stars,
  title,
  name,
  type,
  price,
  location,
}) {
  return (
    <div>
      <div className="border h-full w-full shadow-xl">
        <div className="relative">
          <Rating
            className="absolute top-3 text-xs h-5 right-3"
            emptySymbol={
              <img src={startnone} alt={startnone} className="h-5 w-5" />
            }
            fullSymbol={<img src={startfull} alt={startfull} />}
            initialRating={stars}
          ></Rating>
          <img
            src={image}
            alt={image}
            className=" h-52 w-full rounded-t-xl object-fill"
          />
        </div>
        <div className="px-4 py-3">
          <p className="text-center font-popsemibold text-lg mt-1">{title}</p>
          <div className="mt-5 text-sm font-popregular">
            <p>{name}</p>
            <p>{type}</p>
            <p className="text-red-500 font-popmedium">Rp.{price} / Orang</p>
            <p className="text-xs text-slate-500">{location}</p>
          </div>
          <div className="mt-3 flex justify-end">
            <Link to={`/detail-destinasi/${id}`}>
              <div
                className="bg-[#2e97a7] px-3 py-1 rounded-lg text-white font-popmedium text-xs"
                size="sm"
              >
                Lihat Detail
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDestinationIndex;
