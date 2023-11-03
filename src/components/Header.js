import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faAngleDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <>
      <div className="grid  bg-green-900 text-white grid-rows-1  grid-cols-2 text-center py-4  ">
        <div className="grid-cols-1 flex justify-center ">
          <p className="mx-20 font-bold">Reeco</p>
          <ul className="mx-3 flex text-gray-300">
            <li className="mx-4">Store</li>
            <li className="mx-4">Order</li>
            <li>Anlytics</li>
          </ul>
        </div>
        <div className="grid-cols-1 justify-end mx-20 text-gray-300  flex">
          <p className="">
            <FontAwesomeIcon icon={faCartShopping} className="mx-3" />
            <span className="mx-3">Hello , james</span>
            <FontAwesomeIcon icon={faAngleDown} className="" />
          </p>
        </div>
      </div>
      <div className="grid grid-rows-2 mt-3 ">
        <div className="grid justify-start items-center ml-24">
          <p className="ml-28 text-gray-400">
            <span className="mr-3">Orders</span>
            <span className="mr-3">
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
            <span className="underline underline-offset-2 ">
              Orders 32457ABC
            </span>
          </p>
        </div>
        <div className="grid grid-cols-2 shadow justify-start items-center ">
          <div className=" text-xl  extrabold text-center mr-44">
            Orders 32457ABC
          </div>
          <div className="  justify-end mr-10 flex py-4">
            <button className="py-2 px-8 text-green-900  border-green-800 border-2 mx-4 rounded-full">
              Back
            </button>
            <button className="bg-green-800 text-white border py-2 px-10 rounded-full">
              Approved order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
