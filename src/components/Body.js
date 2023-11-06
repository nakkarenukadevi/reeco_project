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
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import ItemList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "./utils/CartSlice";
import { addProductReducer } from "./utils/CartSlice";

import { serachProductItem } from "./utils/CartSlice";

const Body = () => {
  let store_Res = useSelector((state) => state.productdata.data);
  console.log(store_Res);
  let [additem, setadditem] = useState(false);
  let [serachItem, setserachItem] = useState("");
  let [addForm, setAddForm] = useState({
    price: "",
    Quantity: "",
  });
  let dispatch = useDispatch();
  useEffect(() => {
    getdata();
  }, []);
  let getdata = async () => {
    let data = await fetch("http://localhost:3000/items");
    let json = await data.json();

    dispatch(fetchdata(json));
  };
  let handleAddForm = (e) => {
    setAddForm({ ...addForm, [e.target.name]: e.target.value });
  };
  let addProduct = () => {
    let obj = {
      ...store_Res[0],
      ...addForm,
      Total: addForm.price * addForm.Quantity,
      id: Math.random(),
    };
    dispatch(addProductReducer(obj));
  };
  let serachProduct = () => {
    dispatch(serachProductItem(serachItem));
  };
  let rednderAddProductPop = () => {
    return (
      <>
        <div className="w-1/4 h-64 bg-white rounded-xl font-bole absolute top-72 inset-1/3 border-2 shadow  text-center">
          <FontAwesomeIcon
            icon={faXmark}
            className="absolute top-3 right-3"
            onClick={() => {
              setadditem(false);
            }}
          />
          <div className="mt-10 flex justify-between px-4 items-center">
            <div className="font-bold">
              <label>Price:</label>
            </div>
            <div>
              <input
                type="text"
                name="price"
                onChange={(e) => {
                  handleAddForm(e);
                }}
                className="border-2 rounded-md py-1"
              />
            </div>
          </div>
          <div className="mt-3  flex justify-between px-4  items-center">
            <div className="font-bold">
              <label>Quantity:</label>
            </div>
            <div>
              <input
                type="text"
                name="Quantity"
                onChange={(e) => {
                  handleAddForm(e);
                }}
                className="border-2 rounded-md py-1"
              />
            </div>
          </div>
          <div className="mt-3">
            <button
              className="py-3 px-6  bg-blue-700 text-white rounded-lg"
              onClick={() => {
                addProduct();
                setadditem(false);
              }}
            >
              add
            </button>
          </div>
        </div>
      </>
    );
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
                  onChange={(e) => {
                    setserachItem(e.target.value);
                  }}
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="relative right-10 top-4 text-gray-400"
                  onClick={() => {
                    serachProduct();
                  }}
                />
              </div>
              <div className="flex justify-end items-end">
                <button
                  className="px-5 py-3 border border-green-800 rounded-full mx-5"
                  onClick={() => {
                    setadditem(true);
                  }}
                >
                  Add item
                </button>
                <FontAwesomeIcon
                  icon={faPrint}
                  className="w-90 h-6 text-green-500 px-5 my-3"
                />
              </div>
            </div>
            <div className=" grid-cols-10 grid  text-lg text-gray-400 border rounded-t-lg   shadow border-gray-400 py-2 mx-9">
              <div className="flex justify-center col-span-3">ProductName</div>
              <div className="flex justify-center col-span-1 ">Brand</div>
              <div className="flex justify-center col-span-1">Price</div>
              <div className="flex justify-center col-span-1">Quantity</div>
              <div className="flex justify-center col-span-1"> Total</div>
              <div className="flex justify-center  col-span-2">Status</div>
            </div>
            {store_Res.map((item) => {
              return <ItemList item={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
      {additem ? rednderAddProductPop() : ""}
    </>
  );
};

export default Body;
