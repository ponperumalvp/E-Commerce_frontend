import { Kbd } from "flowbite-react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from "react-icons/md";
import React from "react";
import { useDispatch } from "react-redux";
import { setCountOnly } from "../../Redux/productSlice";

const IncrementButton = ({ count }) => {
  const handleInCreaseCount = () => {
    dispatch(setCountOnly(count + 1));
  };
  const handleDecreaseCount = () => {
    dispatch(setCountOnly(count - 1));
  };
  const dispatch = useDispatch();
  return (
    <div className="flex  gap-1">
      <button onClick={handleDecreaseCount}>
        <Kbd icon={MdKeyboardArrowLeft} />{" "}
      </button>
      <input
        type="number"
        value={count}
        className="w-10 h-8 border border-textClr flex items-center justify-center p-1"
      />
      <button onClick={handleInCreaseCount}>
        <Kbd icon={MdKeyboardArrowRight} />
      </button>
    </div>
  );
};

export default IncrementButton;
