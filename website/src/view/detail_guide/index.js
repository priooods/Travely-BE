import bggunung from "../../assets/image/foto_gunung.jpeg";
import { useEffect, useState } from "react";
import client from "../../service/services";
import { useParams, useNavigate } from "react-router-dom";
import startnone from "../../assets/image/star_kosong.png";
import startfull from "../../assets/image/star_penuh.png";
import Rating from "react-rating";
import {
  Input,
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
} from "@nextui-org/react";
function IndexDetailGuide() {
  let { id } = useParams();
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isWarning, setWarning } = useState(false);
  const [request, setRequest] = useState(true);
  const [booking, setBooking] = useState(null);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    if (request) {
      client
        .get("/guide/detail/" + id)
        .then((res) => {
          setDetail(res.data.data);
        })
        .catch((err) => console.log(err));
    }
    return () => setRequest(false);
  });
  function goProfile() {
    navigate("/profile/order");
  }
  function goLogin() {
    navigate("/login");
  }
  function bookingNow() {
    if (localStorage.getItem("isId") && localStorage.getItem("isLogin")) {
      client
        .post("/order/add", {
          user_tabs_id: localStorage.getItem("isId"),
          m_guide_tabs_id: id,
          order_date: booking,
        })
        .then((res) => {
          onOpen();
        })
        .catch((err) => console.log(err));
    } else {
      setWarning(true);
    }
  }
  return (
    <div className="bg-slate-200">
      <div className="relative h-[400px] w-full">
        <img
          className="bg-gray-600 h-full w-full opacity-70"
          src={bggunung}
          alt={bggunung}
        />
        <div className="absolute left-0 right-0 top-24 text-white">
          <h5 className=" font-popbold text-4xl mb-3">Detail Tour Guide</h5>
        </div>
      </div>
      <div className="w-3/6 mx-auto bg-white pb-20">
        <div className="flex md:px-10 justify-center bg-white">
          <img
            src={detail?.avatar}
            alt="avatar"
            className=" rounded-full h-52 w-52 z-10 -mt-20"
          />
          <div className="my-auto ml-14 text-start py-5">
            <p className="text-2xl font-popbold text-[#2e97a7]">
              {detail?.fullname}
            </p>
            <p className="text-lg font-popbold text-red-500">
              Rp. {detail?.price}
            </p>
            <p>{detail?.region}</p>
            <Rating
              emptySymbol={
                <img src={startnone} alt={startnone} className="h-5 w-5" />
              }
              fullSymbol={<img src={startfull} alt={startfull} />}
              initialRating={detail?.rating}
            ></Rating>
          </div>
        </div>
        <div className="mt-10 px-16">
          <div className="md:grid grid-cols-4 gap-6 mt-5">
            <p className="text-start font-popmedium my-auto">Fullname</p>
            <Input
              size="sm"
              isReadOnly
              type="text"
              className="col-span-3"
              variant="bordered"
              placeholder="Fullname"
              value={detail?.fullname}
            />
          </div>
          <div className="md:grid grid-cols-4 gap-6 mt-5">
            <p className="text-start font-popmedium my-auto">Nickname</p>
            <Input
              size="sm"
              isReadOnly
              type="text"
              className="col-span-3"
              variant="bordered"
              placeholder="Fullname"
              value={detail?.nickname}
            />
          </div>
          <div className="md:grid grid-cols-4 gap-6 mt-5">
            <p className="text-start font-popmedium my-auto">About</p>
            <Input
              size="sm"
              isReadOnly
              type="text"
              className="col-span-3"
              variant="bordered"
              placeholder="Fullname"
              value={detail?.about}
            />
          </div>
          <div className="md:grid grid-cols-4 gap-6 mt-5">
            <p className="text-start font-popmedium my-auto">Email</p>
            <Input
              size="sm"
              isReadOnly
              type="text"
              className="col-span-3"
              variant="bordered"
              placeholder="Fullname"
              value={detail?.email}
            />
          </div>
          <div className="md:grid grid-cols-4 gap-6 mt-5">
            <p className="text-start font-popmedium my-auto">Speaks</p>
            <Input
              size="sm"
              isReadOnly
              type="text"
              className="col-span-3"
              variant="bordered"
              placeholder="Fullname"
              value={detail?.speak}
            />
          </div>
          <div className="md:grid grid-cols-4 gap-6 mt-5">
            <p className="text-start font-popmedium my-auto">Address</p>
            <Input
              size="sm"
              isReadOnly
              type="text"
              className="col-span-3"
              variant="bordered"
              placeholder="Fullname"
              value={detail?.address}
            />
          </div>
          <div className="md:grid grid-cols-4 gap-6 mt-5">
            <p className="text-start font-popmedium my-auto">Date</p>
            <Input
              size="sm"
              type="date"
              className="col-span-3"
              variant="bordered"
              placeholder="Masukan tanggal booking"
              onValueChange={setBooking}
            />
          </div>
          <div className="flex justify-end mt-16">
            <Button
              className="bg-[#2e97a7] text-white font-popsemibold"
              onClick={bookingNow}
            >
              Booking Now
            </Button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              <div className="text-center py-4">
                <h1 className="text-lg font-popsemibold text-[#2e97a7]">
                  Happy! You have successfully Ordered
                </h1>
                <p>
                  Wait for an email reply from the admin and the Tour Guide will
                  contact you
                </p>
                <Button
                  size="sm"
                  onClick={goProfile}
                  className=" bg-[#2e97a7] text-white font-popmedium w-40 mt-8 text-lg h-9 shadow-xl"
                >
                  Ok
                </Button>
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isWarning}
        onOpenChange={setWarning(!isWarning)}
        hideCloseButton
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              <div className="text-center py-4">
                <h1 className="text-lg font-popsemibold text-[#2e97a7]">
                  Oopss ! You must login first
                </h1>
                <p>Sorry.. you cannot order guide if you not login first</p>
                <Button
                  size="sm"
                  onClick={goLogin}
                  className=" bg-red-500 text-white font-popmedium w-40 mt-8 text-lg h-9 shadow-xl"
                >
                  Login First
                </Button>
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default IndexDetailGuide;
