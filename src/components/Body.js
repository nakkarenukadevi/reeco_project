import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrint,
  faMagnifyingGlass,
  faBurger,
  faTruckFast,
  faDumpsterFire,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import ItemList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { productsAdded, productsModified } from "../reducers/productsSlice";


const Body = () => {
  //state.products Here state is store state, products is nothing but slice name
  //Inside productsFromStore you will have state passed to that slice alone as you are returning state.products
  const productsFromStore=useSelector((state)=>state.products);
  let dispatch = useDispatch();
  useEffect(() => {
    getdata();
  },[]);
  let getdata = async () => {
    let data = await fetch("http://localhost:3030/items");
    let json = await data.json();
    dispatch(productsAdded(json));
  };

  return (
    <>
      <div className="grid h-98 grid-row-2 mb-5">
        <div className="grid grid-rows-1 grid-cols-6 my-10 container mx-auto border shadow  text-center h-36 rounded-xl  border-gray-300">
          <div className="">
            <p className="text-gray-500 mt-3">supplier</p>
            <p className="mt-3 font-bold">
              East coast Fruites <br></br>& vegtables
            </p>
          </div>
          <div className="border border-r-gray-300">
            <p className="text-gray-500 mt-3">Shipping date</p>
            <p className="mt-3 font-bold">Thu , Feb 10 </p>
          </div>
          <div className="border border-r-gray-300">
            <p className="text-gray-500 mt-3">Total</p>
            <p className="mt-3  font-bold">$ 15,028.3</p>
          </div>
          <div className="border border-r-gray-300">
            <p className="text-gray-500 mt-3">category</p>
            <p className="mt-3  font-bold text-gray-400">
              <FontAwesomeIcon icon={faBurger} className="mr-3" />
              <FontAwesomeIcon icon={faTruckFast} className="mr-3" />
              <FontAwesomeIcon icon={faHandshake} className="mr-3" />

              <FontAwesomeIcon icon={faDumpsterFire} />
              <br></br>
              <FontAwesomeIcon icon={faBurger} className="mr-3" />
              <FontAwesomeIcon icon={faTruckFast} className="mr-3" />
              <FontAwesomeIcon icon={faHandshake} />
            </p>
          </div>
          <div className="border border-r-gray-300">
            <p className="text-gray-500 mt-3">Depatment</p>
            <p className="mt-3  font-bold">300-400-786</p>
          </div>
          <div>
            <p className="text-gray-500 mt-3">Status</p>
            <p className="mt-3  font-bold">
              Awaiting wating <br></br> your approvel
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 h-1/2 ">
          <div className="grid grid-rows-1 container mx-auto border shadow  text-center rounded-xl  border-gray-300 ">
            <div className="grid grid-cols-2 py-10 mx-7">
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
                  className="w-90 h-6 text-green-500 px-5 my-3"
                />
              </div>
            </div>
            <div className=" grid-cols-9 grid  text-lg text-gray-400 border rounded-t-lg   shadow border-gray-400 py-2 mx-9">
              <div className="flex justify-center col-span-3">ProductName</div>
              <div className="flex justify-center col-span-1 ">Brand</div>
              <div className="flex justify-center col-span-1">Price</div>
              <div className="flex justify-center col-span-1">Quantity</div>
              <div className="flex justify-center col-span-1"> Total</div>
              <div className="flex justify-center  col-span-2">Status</div>
            </div>

            {
            productsFromStore.map((productList) => {
              return <ItemList productList={productList}  />;
            })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
