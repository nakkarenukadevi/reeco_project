import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faAngleDown,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <>
      <div className="grid grid-flow-row lg:grid-cols-4 bg-green-700 py-4 items-center ">
        <div className=" text-white font-bold font-serif grid justify-center ">
          Reeco
        </div>
        <div className=" grid justify-start">
          <ul className="list-none text-gray-300 flex ">
            <li className="pr-8">Store</li>
            <li className="pr-8">Order</li>
            <li className="pr-8">Analytics</li>
          </ul>
        </div>
        <div className="grid justify-end mr-6">
          <FontAwesomeIcon icon={faCartShopping} className="text-white " />
        </div>
        <div className="text-white">
          Hello, james
          <FontAwesomeIcon icon={faAngleDown} className="text-white ml-3" />
        </div>
      </div>
      <div className=" grid-flow-row grid-rows-2 mt-4  shadow">
        <div className="text-gray-400 text-md ml-20">
          <span className="mr-3">Order</span>
          <FontAwesomeIcon icon={faGreaterThan} className="mr-3" />
          <span className="text-underline text-gray-400 underline underline-offset-1 ">
            Order 32457ABC
          </span>
        </div>
        <div className="grid grid-cols-3 mt-5 items-center py-3">
          <div className="grid justify-center font-bold ">Order 32457ABC </div>

          <div className="col-span-2 justify-end flex items-center  ">
            <button className="py-2 px-8 border border-green-600 text-green-600 rounded-full mr-6 font-bold">
              Back
            </button>
            <button className="py-2 px-2.5 border bg-green-900 text-white rounded-full mr-6 font-bold">
              Approve order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
