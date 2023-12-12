function CardComponent({ img, title, price, location }) {
  return (
    <div>
      <div className="rounded-lg w-full h-auto border border-slate-100 shadow-lg">
        <div className=" h-56 bg-slate-500">
          <img src={img} alt={img} />
        </div>
        <div className="p-5 text-start">
          <h5 className=" font-popsemibold text-lg text-[#2e97a7]">{title}</h5>
          <p className="text-red-500 font-popregular">Rp.{price}</p>
          <span className=" inline-flex mt-3 -ml-2">
            {" "}
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-sharp/24/000000/marker.png"
              alt="marker"
            />{" "}
            {location}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
