import CardGuideIndex from "../../utils/card_guide";
import imgs from "../../assets/image/guide.jpeg";
import icSearch from "../../assets/image/ic_search.svg";
import icfilter from "../../assets/image/filter.png";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
} from "@nextui-org/react";
import { useState } from "react";
function IndexGuide() {
  const [arrs, setArrs] = useState([
    {
      image: imgs,
      title: "Khairul Anwar",
      price: 5000,
      location: "Banda Aceh, Indonesia",
    },
    {
      image: imgs,
      title: "Safirah",
      price: 10000,
      location: "Langsa City, Indonesia",
    },
    {
      image: imgs,
      title: "Assyifa Ayunda",
      price: 5000,
      location: "Aceh Besar, Indonesia",
    },
    {
      image: imgs,
      title: "Safirah",
      price: 10000,
      location: "Sabang City, Indonesia",
    },
    {
      image: imgs,
      title: "Khairul Anwar",
      price: 5000,
      location: "Aceh Besar, Indonesia",
    },
  ]);
  return (
    <div className="text-start py-10 px-6">
      <div className="grid grid-cols-3 gap-4 justify-start">
        <h1 className="font-popbold text-2xl my-auto col-span-2">
          Local Tour Guide
        </h1>
        <div className="flex gap-x-5 items-center">
          <Dropdown>
            <DropdownTrigger>
              <img
                className="h-6 w-6 cursor-pointer"
                src={icfilter}
                alt={icfilter}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="aceh">Aceh</DropdownItem>
              <DropdownItem key="north sumatera">North Sumatera</DropdownItem>
              <DropdownItem key="riau islands">Riau Islands</DropdownItem>
              <DropdownItem key="dki jakarta">DKI Jakarta</DropdownItem>
              <DropdownItem key="west java">West Java</DropdownItem>
              <DropdownItem key="dki jakarta">Banten</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input
            type="text"
            variant="bordered"
            placeholder="Search"
            endContent={
              <div className="cursor-pointer">
                <img src={icSearch} alt={icSearch} />
              </div>
            }
            classNames={{
              inputWrapper: ["h-8"],
            }}
          />
        </div>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-5 gap-6">
        {arrs.map((item, index) => {
          return (
            <CardGuideIndex
              key={item.title + index.toString()}
              image={item.image}
              title={item.title}
              price={item.price}
              location={item.location}
            />
          );
        })}
      </div>
    </div>
  );
}

export default IndexGuide;
