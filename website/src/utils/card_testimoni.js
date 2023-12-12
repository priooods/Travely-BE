function CardTestimoniComponent({ avatar, description, name, city }) {
  return (
    <div>
      <div className="w-full h-auto ">
        <div className="relative border border-slate-200 rounded-lg shadow-xl p-8">
          <img
            className="absolute object-cover left-0 right-0 -top-14 rounded-full h-32 w-32 bg-slate-600 mx-auto"
            src={avatar}
            alt={avatar}
          />
          <div className="mt-16">
            <p className=" font-popblack text-7xl text-[#2e97a7]">&#8223;</p>
            <p className="break-all text-start h-[100px]">{description}</p>
            <p className="font-popbold text-lg mt-12 text-[#2e97a7]">{name}</p>
            <span className="font-popregular text-slate-500 mt-4">{city}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTestimoniComponent;
