import React, { useState } from "react";
import {
  faCheck,
  faXmark,
  faTrash,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { changeProductStatus } from "./utils/CartSlice";
import { updateProductData } from "./utils/CartSlice";
import { removeProduct } from "./utils/CartSlice";

const ItemList = (props) => {
  let { id, status, ProductName, Brand, price, Quantity, imageurl, Total } =
    props.item;
  let [show_status_pop, set_show_status_pop] = useState(false);
  let [edit_pop, set_edit_pop] = useState(false);
  let [editForm, setEditForm] = useState({
    price: price,
    Quantity: Quantity,
    Total: Total,
    id: id,
  });

  let dispatch = useDispatch();
  let updateProduct = () => {
    dispatch(updateProductData(editForm));
    set_edit_pop(false);
  };

  let changeStatus = (id, status) => {
    let payload = {
      id: id,
      status: status,
    };
    dispatch(changeProductStatus(payload));
  };

  let deletproduct = (id) => {
    dispatch(removeProduct(id));
  };
  const renderStatusPop = () => {
    return (
      <>
        <div className="  absolute top-90 right-96 py-20 bg-white rounded-lg shadow  h-60">
          <FontAwesomeIcon
            icon={faXmark}
            className="absolute top-2 right-3"
            onClick={() => {
              set_show_status_pop(false);
            }}
          />
          <div className="font-extrabold flex items-start mx-5">
            Missing Product
          </div>
          <div className="grid grid-flow-row-1 font-bold justify-start  m-4 indent-1 text-gray-400">
            {ProductName} `urgent?
          </div>

          <div className="flex justify-end mr-8">
            <div
              className="mx-5"
              onClick={() => {
                changeStatus(id, "Missing-urgent");
                set_show_status_pop(false);
              }}
            >
              yes
            </div>
            <div
              onClick={() => {
                changeStatus(id, "Missing");
                set_show_status_pop(false);
              }}
            >
              No
            </div>
          </div>
        </div>
      </>
    );
  };
  let renderStatusText = (status) => {
    switch (status) {
      case "approved":
        return (
          <button className="bg-green-800 w-40 py-1 rounded-xl text-white text-bold">
            {status}
          </button>
        );
      case "Missing-urgent":
        return (
          <button className="bg-red-800 w-40 py-1 rounded-xl text-white text-bold">
            {status}
          </button>
        );
      case "Missing":
        return (
          <button className="bg-orange-500 w-40 py-1 rounded-xl text-white text-bold">
            {status}
          </button>
        );

      default:
        break;
    }
  };

  let handleChangeEditForm = (e, id) => {
    let total =
      e.target.name === "price"
        ? e.target.value * editForm.Quantity
        : e.target.value * editForm.price;
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,

      Total: total,
    });
  };

  let renderEditPop = () => {
    let { price, Quantity, Total } = editForm;

    return (
      <div className=" bg-white font-bold absolute top-90 right-72 w-1/2 rounded-lg shadow  mx-5 px-8 ">
        <FontAwesomeIcon
          icon={faXmark}
          className=" flex absolute top-2 right-2 "
          onClick={() => {
            set_edit_pop(false);
          }}
        />
        <div className="grid grid-cols-1 mt-14">{ProductName}</div>
        <div className="grid grid-cols-2">
          <div className="grid-cols-1 justify-center items-center flex">
            <img src={imageurl} style={{ width: "150px", height: "150px" }} />
          </div>
          <div className="grid grid-cols-1 justify-between">
            <div className="grid-rows-1 flex justify-between mt-3">
              <div className="px-3">
                <label>price:</label>
              </div>
              <div>
                <input
                  type="text"
                  value={price}
                  name="price"
                  className="border-2 to-black rounded-lg text-center py-1"
                  onChange={(e) => {
                    handleChangeEditForm(e);
                  }}
                />
              </div>
            </div>
            <div className="grid-cols-1 flex justify-between mt-3">
              <div className="px-3">
                <label>Quantity: </label>
              </div>
              <div>
                <input
                  type="text"
                  value={Quantity}
                  name="Quantity"
                  className="border-2 to-black rounded-lg text-center py-1"
                  onChange={(e) => {
                    handleChangeEditForm(e);
                  }}
                />
              </div>
            </div>
            <div className="grid grid-rows-4  mt-3 ">
              <div className="flex justify-between ">
                <div className="px-3">
                  <label>Total: </label>
                </div>
                <div className="border-2 w-52 rounded-lg py-1 px-3">
                  {Total}
                </div>
              </div>
            </div>

            <div className="mb-10 flex items-center justify-center">
              <div
                className="mt-2 mx-7 text-green-700"
                onClick={() => {
                  set_edit_pop(false);
                }}
              >
                cancel
              </div>
              <button
                className="bg-green-700 text-white mt-3 px-6 py-2 rounded-full"
                onClick={() => {
                  updateProduct();
                }}
              >
                send
              </button>
            </div>
          </div>
          <div className="grid-col-1 flex ">
            <div>
              <button className="bg-gray-100 w-36 mb-6  py-3 px-2  rounded-full mx-1 ">
                MissingProduct
              </button>
            </div>
            <div>
              <button className="bg-gray-100 w-42 px-7 mb-6  py-3  rounded-full  mx-1">
                Quantityisthenotsame
              </button>
            </div>
            <div>
              <button className="bg-gray-100 w-42 mx-5 mb-6  py-3 px-3 rounded-full  ">
                Priceisthenotsame
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div
        className="grid grid-flow-row grid-cols-10 grid-flow-row-6 border-b-2 border-gray-300   text-gray-400  py-3 mx-9"
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
          {Total}
        </div>

        <div className="col-span-2 flex justify-center   bg-gray-100">
          {renderStatusText(status)}
        </div>
        <div className=" items-center p-5  bg-gray-100 text-black flex ">
          <FontAwesomeIcon
            icon={faCheck}
            className="mr-3 justify-center flex"
            onClick={(e) => {
              {
                let cheack = e.currentTarget;
                cheack.style.color = "green";
              }

              changeStatus(id, "approved");
            }}
          />
          <FontAwesomeIcon
            icon={faXmark}
            className="justify-center flex"
            onClick={(e) => {
              {
                let cross = e.currentTarget;
                cross.style.color = "red";
              }
              set_show_status_pop(true);
            }}
          />
          <div
            className=" justify-center flex mx-3"
            onClick={() => {
              set_edit_pop(true);
            }}
          >
            <FontAwesomeIcon icon={faPencil} />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                deletproduct(id);
              }}
            />
          </div>
        </div>
      </div>
      {edit_pop ? renderEditPop() : ""}
      {show_status_pop ? renderStatusPop() : ""}
    </>
  );
};

export default ItemList;
