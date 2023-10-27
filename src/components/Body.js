import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import {
  faBowlFood,
  faPizzaSlice,
  faBasketShopping,
  faRectangleList,
  faAppleWhole,
  faMagnifyingGlass,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import ItemsList from "./ItemsList";

const Body = () => {
  let [product, setProduct] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const editProduct = (editForm, id) => {
    let edititem = product.map((editProcutitem) => {
      if (editProcutitem.id == id) {
        return { ...editProcutitem, ...editForm };
      }
      return editProcutitem;
    });
    setProduct(edititem);
  };
  const updataProduct = (action, id) => {
    let update = product.map((productitem) => {
      if (productitem.id === id) {
        return { ...productitem, status: action };
      }
      return productitem;
    });
    setProduct(update);
  };

  let getdata = async () => {
    let pdata = await fetch(" http://localhost:3000/items");
    let json = await pdata.json();

    setProduct(json);
  };

  return (
    <>
      <div className="grid grid-flow-row grid-cols-6 border shadow  mt-10 container mx-auto rounded-lg ">
        <div className="border border-left-1 p-5">
          <span className="text-gray-400">Supplier</span>
          <p className="text-bold">
            East coast fruits&<p> vegetables</p>
          </p>
        </div>
        <div className="border border-left-1 p-5">
          <span className="text-gray-400">Shipping data</span>
          <p className="text-bold">Thu, Feb 10</p>
        </div>
        <div className="border border-left-1 p-5">
          <span className="text-gray-400">Total</span>
          <p className="text-bold">$15,028.3</p>
        </div>
        <div>
          <spna className="text-gray-400 p-2">Category</spna>
          <p>
            <FontAwesomeIcon icon={faBowlFood} className="text-gray-300 ml-4" />
            <FontAwesomeIcon
              icon={faPizzaSlice}
              className="text-gray-300 ml-4"
            />
            <FontAwesomeIcon
              icon={faBasketShopping}
              className="text-gray-300 ml-4"
            />
            <FontAwesomeIcon
              icon={faRectangleList}
              className="text-gray-300 ml-4"
            />
            <FontAwesomeIcon
              icon={faAppleWhole}
              className="text-gray-300 ml-4"
            />
          </p>
          <FontAwesomeIcon
            icon={faBasketShopping}
            className="text-gray-300 ml-4"
          />
          <FontAwesomeIcon
            icon={faRectangleList}
            className="text-gray-300 ml-4"
          />
          <FontAwesomeIcon icon={faAppleWhole} className="text-gray-300 ml-4" />
          <FontAwesomeIcon
            icon={faBasketShopping}
            className="text-gray-300 ml-4"
          />

          <FontAwesomeIcon icon={faAppleWhole} className="text-gray-300 ml-4" />
        </div>
        <div className="border border-left-1 p-5">
          <span className="text-gray-400">Depatment</span>
          <p className="text-bold">300-444-678</p>
        </div>
        <div className="border border-left-1 p-5">
          <span className="text-gray-400">Status</span>
          <p className=" text-bold">
            Awaiting your <br></br>approvel
          </p>
        </div>
      </div>
      <div className=" container mx-auto mt-7 grid-row-2  border border-gray-500 rounded-lg shadow mb-12 ">
        <div className="grid grid-cols-2 py-10 ">
          <div className="px-10 flex justify-start">
            <input
              type="text"
              className="py-2 px-20  rounded-full border border-gray-400"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="relative right-10 top-4 text-gray-400"
            />
          </div>
          <div className="flex justify-end items-end">
            <button className="px-5 py-3 border border-green-800 rounded-full mx-5">
              Add item
            </button>
            <FontAwesomeIcon
              icon={faPrint}
              className="w-90 h-6 text-green-800 px-5 my-3"
            />
          </div>
        </div>
        <div className=" grid-cols-8 grid  text-lg text-gray-400 border rounded-t-lg  mx-5 shadow border-gray-400 py-2">
          <div className="flex justify-center col-span-2">ProductName</div>
          <div className="flex justify-center ">Brand</div>
          <div className="flex justify-center">Price</div>
          <div className="flex justify-center">Quantity</div>
          <div className="flex justify-center"> Total</div>
          <div className="flex justify-center  col-span-2">Status</div>
        </div>

        {product.map((item) => {
          return (
            <ItemsList
              key={item.id}
              item={item}
              updatProductStatus={updataProduct}
              editProduct={editProduct}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
