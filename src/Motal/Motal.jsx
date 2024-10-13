import { Button, Modal, Select } from "flowbite-react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Motal = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalPlacement, setModalPlacement] = useState("center");
  const { totalCount, totalAmount, cartProducts } = useSelector(
    (store) => store.product
  );
  return (
    <>
      <div className="flex flex-wrap gap-4 ">
        <div className=" ">
          {/* <Select
            defaultValue="center"
            onChange={(event) => setModalPlacement(event.target.value)}
          >
            <option value="center">Center</option>
            <option value="top-left">Top left</option>
            <option value="top-center">Top center</option>
            <option value="top-right">Top right</option>
            <option value="center-left">Center left</option>
            <option value="center-right">Center right</option>
            <option value="bottom-right">Bottom right</option>
            <option value="bottom-center">Bottom center</option>
            <option value="bottom-left">Bottom left</option>
          </Select> */}
        </div>
        <Button onClick={() => setOpenModal(true)}>Submit</Button>
      </div>
      <Modal
        show={openModal}
        position={modalPlacement}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>Your Order Success</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6 ">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {cartProducts.map((item) => (
                <div className="font-serif">
                  <li>
                    {item.name} ({item.count})
                  </li>
                </div>
              ))}
            </p>
            <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400 font-serif">
              Total Items: {totalCount}
            </p>
            <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400 font-serif ">
              Total Amount:{totalAmount}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Motal;
