import { useEffect, useState } from "react";
import client from "../../service/services";
import {
  useDisclosure,
  Modal,
  Button,
  ModalContent,
  ModalBody,
} from "@nextui-org/react";

function IndexOrderDetail() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [order, setOrder] = useState([]);
  const [req, setReq] = useState(true);
  const [detail, setDetail] = useState(null);

  function calls() {
    client
      .get("/order/me/" + localStorage.getItem("isId"))
      .then((res) => {
        setOrder(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (req) calls();

    return () => setReq(false);
  });

  function cancelBooking() {
    client
      .post("/order/updated", {
        id: detail.id,
        status: 2,
      })
      .then((res) => {
        console.log(res);
        calls();
        onOpenChange();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="md:px-5 md:py-12">
      <p className=" font-popbold text-xl mb-5 text-start">History Order</p>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 text-center">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Nama Guide
              </th>
              <th scope="col" className="px-6 py-3">
                Biaya Guide
              </th>
              <th scope="col" className="px-6 py-3">
                Alamat Guide
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal Berangkat
              </th>
              <th scope="col" className="px-6 py-3">
                Status Order
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {order.map((item, index) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 text-center">{index + 1}</td>
                  <td className="py-4">{item.fullname}</td>
                  <td className="py-4">{item.price}</td>
                  <td className="py-4">{item.region}</td>
                  <td className="py-4">{item.order_date}</td>
                  <td className="py-4">
                    {item.status === 0
                      ? "Belum di Proses"
                      : item.status === 2
                      ? "Cancelled"
                      : "Confirm"}
                  </td>
                  <td className="py-4">
                    {item.status === 0 && (
                      <div className="flex justify-center">
                        <span
                          className="rounded-lg cursor-pointer bg-red-500 text-white font-popmedium px-3 py-1.5 w-auto text-center mx-auto"
                          onClick={() => {
                            setDetail(item);
                            onOpen();
                          }}
                        >
                          Cancel Order
                        </span>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
                  Are you sure you want to cancel your trip?
                </h1>
                <p>Data that is canceled cannot be changed</p>
                <Button
                  size="sm"
                  onClick={cancelBooking}
                  className=" bg-red-500 text-white font-popmedium w-40 mt-8 text-lg h-9 shadow-xl cursor-pointer"
                >
                  Yes Canceled
                </Button>
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default IndexOrderDetail;
