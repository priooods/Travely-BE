function CardAbout({ avatar, name, position, origin }) {
  return (
    <div className="w-full h-auto">
      <div className="relative border border-slate-200 bg-white rounded-3xl shadow-xl p-8">
        <img
          alt={avatar}
          className="absolute object-cover left-0 right-0 -top-14 rounded-full h-24 w-24 bg-slate-600 mx-auto"
          src={avatar}
        />
        <div className="mt-7">
          <p className="break-all font-popbold text-center text-[#2e97a7]">
            {name}
          </p>
          <p className="font-popregular text-gray-700 text-sm">{position}</p>
          <span className="font-popregular text-slate-500 text-xs">
            {origin}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardAbout;
