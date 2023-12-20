import CardGuideIndex from "../../utils/card_guide";
import icSearch from "../../assets/image/ic_search.svg";
import icfilter from "../../assets/image/filter.png";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import client from "../../service/services";
function IndexGuide() {
  const [callCity, setCallCity] = useState(true);
  const [callGuide, setCallGuide] = useState(true);
  const [callParams, setCallParams] = useState(true);
  const [city, setCity] = useState([]);
  const [province, setProvince] = useState("");
  const [searching, setSearching] = useState("");
  const [arrs, setArrs] = useState([]);

  function requestGuide(region, search) {
    let urls = "/guide";
    if (region && search) {
      urls = `/guide?region=${region}&search=${search}`;
    }
    if (region) {
      urls = `/guide?region=${region}`;
    }
    if (search) {
      urls = `/guide?search=${search}`;
    }

    client
      .get(urls)
      .then((res) => {
        setArrs(res.data.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }

  useEffect(() => {
    if (callCity) {
      client
        .get("/destination/city")
        .then((res) => setCity(res.data.data))
        .catch((err) => {
          console.log(err, "error");
        });
    }
    return () => setCallCity(false);
  });

  useEffect(() => {
    if (callGuide) {
      requestGuide();
    }
    return () => setCallGuide(false);
  }, [callGuide, arrs]);
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
            <DropdownMenu aria-label="Static Actions" items={city}>
              {(item) => (
                <DropdownItem
                  key={item.id}
                  onPress={() => {
                    setProvince(item.title);
                    setCallParams(true);
                    if (callParams) {
                      requestGuide(item.id, searching);
                    }
                  }}
                >
                  {item.title}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          <Input
            type="text"
            variant="bordered"
            placeholder="Search"
            endContent={
              <div
                className="cursor-pointer"
                onClick={() => {
                  setCallParams(true);
                  if (searching && callParams) {
                    requestGuide(province, searching);
                    setCallParams(false);
                  } else {
                    requestGuide();
                    setCallParams(false);
                  }
                }}
              >
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
              id={item.id}
              key={item.title + index.toString()}
              image={item.avatar}
              title={item.fullname}
              stars={item.rating}
              price={item.price}
              location={item.region}
            />
          );
        })}
      </div>
    </div>
  );
}

export default IndexGuide;
