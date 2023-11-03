import React, { useState } from "react";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";

const ItemList = (props) => {
  let { id, status, ProductName, Brand, price, Quantity, imageurl, Total } =
    props.productList;
  let dispatch = useDispatch();

  let [getstatus, setgetstatus] = useState("");

  return (
    <>
      <div
        className="grid grid-flow-row grid-cols-9 grid-flow-row-6 border-b-2 border-gray-300   text-gray-400  py-3 mx-9"
        key={id}
      >
        <div className="flex justify-start col-span-3  items-center ">
          <div className="col-span-1 justify-center items-center">
            <img
              src={imageurl}
              style={{ width: "30px", height: "30px" }}
              alt="producimg"
            />
          </div>
          <div className="flex col-span-2 justify-center items-center">
            {ProductName}
          </div>
        </div>
        <div className="flex justify-center  items-center   col-span-1 ">
          {Brand}
        </div>
        <div className="flex justify-center  items-center  col-span-1">
          $ {price}
        </div>
        <div className="flex justify-center  items-center col-span-1 ">
          {Quantity}
        </div>
        <div className="flex justify-center items-center col-span-1">
          {" "}
          {Total}
        </div>
        <div className="flex justify-end items-center text-gray-500 col-span-2 bg-gray-300">
          <div className="col-span-1 flex justify-start   bg-gray-300">
            {getstatus == "" ? (
              ""
            ) : (
              <button className="bg-green-800 px-4 py-2 text-white text-bold mx-3">
                {getstatus}
              </button>
            )}
          </div>
          <div className=" items-center p-5  bg-gray-300 text-black flex ">
            <FontAwesomeIcon
              icon={faCheck}
              className="mr-3 justify-center flex"
              onClick={() => {
               // additem(id);
              }}
            />
            <FontAwesomeIcon icon={faXmark} className="justify-center flex" />
            <div className=" justify-center flex ml-3">Edit</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
