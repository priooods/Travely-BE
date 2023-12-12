import imgs from "../../assets/image/museum_tsunami.jpeg";
import ImageGallery from "react-image-gallery";
function IndexDetailDestinasi() {
  const images = [
    {
      original: imgs,
      thumbnail: imgs,
      thumbnailHeight: 300,
      originalClass: "h-[450px]",
    },
    {
      original: imgs,
      thumbnail: imgs,
      thumbnailHeight: 300,
      originalClass: "h-[450px]",
    },
    {
      original: imgs,
      thumbnail: imgs,
      thumbnailHeight: 300,
      originalClass: "h-[450px]",
    },
  ];
  return (
    <div className="bg-slate-300 w-full">
      <div className="w-[70%] mx-auto bg-white min-h-screen py-14 px-20">
        <p className="font-bold text-3xl mb-10">Tsunami Museum</p>
        <ImageGallery
          items={images}
          showNav={false}
          showPlayButton={false}
          autoPlay
        />
        <div className="md:mt-12 text-start">
          <p className="">
            The Tsunami Museum is located on Jalan Sultan Iskandar Muda, Banda
            Aceh city. The designer of this museum was Mr Ridwan Kamil who
            served as Governor of West Java. The purpose of this museum is to
            commemorate the earthquake that caused the tsunami in 2004, apart
            from that it is also an educational center.
          </p>
          <p className="mt-10 font-bold">Facility</p>
          <ul>
            <li>Mineral Water</li>
            <li>Parking</li>
          </ul>
          <p className="mt-10 font-bold">Ticket Price Details</p>
          <p className=" text-green-600">Rp. 5.000,-/Person</p>
        </div>
      </div>
    </div>
  );
}

export default IndexDetailDestinasi;
