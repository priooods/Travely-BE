import { Button } from "@nextui-org/react";
import Rating from "react-rating";
import startnone from "../assets/image/star_kosong.png";
import startfull from "../assets/image/star_penuh.png";
function CardGuideIndex({ image, stars, title, price, location }) {
  return (
    <div>
      <div className="border h-full w-full shadow-xl">
        <div className="relative">
          <img
            src={image}
            alt={image}
            className=" h-52 w-full rounded-t-xl object-fill"
          />
        </div>
        <div className="px-4 py-3">
          <p className="text-start font-popsemibold text-lg mt-1">{title}</p>
          <div className="mt-5 text-sm font-popregular">
            <p className="text-red-500 font-popmedium">Rp.{price} / Orang</p>
            <p className="text-xs text-slate-500">{location}</p>
            <Rating
              emptySymbol={
                <img src={startnone} alt={startnone} className="h-5 w-5" />
              }
              fullSymbol={<img src={startfull} alt={startfull} />}
              initialRating={stars}
            ></Rating>
          </div>
          <div className="mt-3 flex justify-end">
            <Button
              className="bg-[#2e97a7] text-white font-popmedium text-xs"
              size="sm"
            >
              Lihat Detail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardGuideIndex;
