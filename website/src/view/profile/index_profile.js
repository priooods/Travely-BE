import { useState, useEffect } from "react";
import client from "../../service/services";
import {
  Input,
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
} from "@nextui-org/react";

function IndexProfileDetail() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [request, setRequest] = useState(true);
  const [fullname, setFullname] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState(undefined);
  const [profileImg, setProfileImg] = useState(undefined);

  useEffect(() => {
    if (request)
      client
        .get("/user/me/" + localStorage.getItem("isId"))
        .then((res) => {
          setFullname(res.data.data?.fullname);
          setNickname(res.data.data?.nickname);
          setEmail(res.data.data?.email);
          setCountry(res.data.data?.country);
          setCity(res.data.data?.city);
          setAddress(res.data.data?.address);
          setPhone(res.data.data?.phone);
          setAvatar(res.data.data?.avatar);
        })
        .catch((err) => err);
    return () => setRequest(false);
  });

  function saveChange() {
    let form = new FormData();
    form.append("id", localStorage.getItem("isId"));
    form.append("fullname", fullname);
    form.append("nickname", nickname);
    form.append("email", email);
    form.append("country", country);
    form.append("city", city);
    form.append("address", address);
    form.append("phone", phone);
    form.append("avatar", profileImg ? avatar : null);
    client
      .post("/user/update", form)
      .then((res) => {
        onOpen();
      })
      .catch((err) => console.log(err));
  }

  const handleChange = (event) => {
    if (event.target.files.length !== 0) {
      setAvatar(event.target.files[0]);
      setProfileImg(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className="md:px-10 md:py-12">
      <p className="text-start font-popsemibold text-2xl text-[#2e97a7]">
        Profile
      </p>
      <div className="flex justify-start mt-10">
        <div className="relative">
          {!profileImg && (
            <img
              src={avatar}
              alt="avatar"
              className="rounded-full h-24 w-24 object-cover"
            />
          )}
          {profileImg && (
            <img
              src={profileImg}
              alt="avatar"
              className="rounded-full h-24 w-24 object-cover"
            />
          )}
          <input
            type="file"
            accept="image/*"
            className="absolute opacity-0 left-0 right-0 top-0 bottom-0"
            onChange={handleChange}
          />
        </div>
        <div className="ml-7 my-auto text-start">
          <h6 className=" font-popbold text-xl">{fullname}</h6>
          <p>
            {city}, <span>{country}</span>
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 w-full">
        <div className="text-start gap-y-5">
          <p className="font-popsemibold mb-1">Full Name</p>
          <Input
            size="sm"
            type="text"
            variant="bordered"
            placeholder="Full Name"
            value={fullname}
            onValueChange={setFullname}
          />
        </div>
        <div className="text-start gap-y-5">
          <p className="font-popsemibold mb-1">Nickname</p>
          <Input
            size="sm"
            type="text"
            variant="bordered"
            placeholder="Nickname"
            value={nickname}
            onValueChange={setNickname}
          />
        </div>
        <div className="text-start gap-y-5">
          <p className="font-popsemibold mb-1">Email Address</p>
          <Input
            size="sm"
            type="text"
            variant="bordered"
            value={email}
            placeholder="Email Address"
            onValueChange={setEmail}
          />
        </div>
        <div className="text-start gap-y-5">
          <p className="font-popsemibold mb-1">Country</p>
          <Input
            size="sm"
            type="text"
            variant="bordered"
            placeholder="country"
            value={country}
            onValueChange={setCountry}
          />
        </div>
        <div className="text-start gap-y-5">
          <p className="font-popsemibold mb-1">City</p>
          <Input
            size="sm"
            type="text"
            variant="bordered"
            placeholder="city"
            value={city}
            onValueChange={setCity}
          />
        </div>
        <div className="text-start gap-y-5">
          <p className="font-popsemibold mb-1">Address</p>
          <Input
            size="sm"
            type="text"
            variant="bordered"
            value={address}
            placeholder="Address"
            onValueChange={setAddress}
          />
        </div>
        <div className="text-start gap-y-5">
          <p className="font-popsemibold mb-1">Phone</p>
          <Input
            size="sm"
            type="text"
            variant="bordered"
            value={phone}
            placeholder="phone"
            startContent={<div>+62</div>}
            onValueChange={setPhone}
          />
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <Button className="text-white bg-[#2e97a7]" onClick={saveChange}>
          Save Changes
        </Button>
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
                  Happy! You have successfully updated profile
                </h1>
                <p>Now you have new profile</p>
                <Button
                  size="sm"
                  onClick={onOpenChange}
                  className=" bg-[#2e97a7] text-white font-popmedium w-40 mt-8 text-lg h-9 shadow-xl"
                >
                  Ok
                </Button>
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default IndexProfileDetail;
