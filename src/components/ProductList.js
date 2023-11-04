import React, { useState } from "react";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { changeProductStatus } from "./utils/CartSlice";
import { updateProductData } from "./utils/CartSlice";

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
  const renderStatusPop = () => {
    return (
      <>
        <div className="w-1/4 h-64 bg-gray-300 font-bole absolute top-3/4 left-44  ">
          <FontAwesomeIcon
            icon={faXmark}
            className="justify-center flex"
            onClick={() => {
              set_show_status_pop(false);
            }}
          />
          <div className="grid grid-flow-row-1 font-bold">{ProductName}</div>

          <div className="flex px-4">
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
          <button className="bg-green-800 px-4 py-2 text-white text-bold mx-3">
            {status}
          </button>
        );
      case "Missing-urgent":
        return (
          <button className="bg-red-800 px-4 py-2 text-white text-bold mx-3">
            {status}
          </button>
        );
      case "Missing":
        return (
          <button className="bg-orange-500 px-4 py-2 text-white text-bold mx-3">
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
      <div className="w-1/4 h-74 bg-gray-300 font-bole absolute top-3/4 left-44  ">
        <FontAwesomeIcon
          icon={faXmark}
          className="justify-center flex"
          onClick={() => {
            set_edit_pop(false);
          }}
        />
        <div>
          {ProductName}
          <div>
            <div>
              <label>price:</label>
            </div>
            <input
              type="text"
              value={price}
              name="price"
              onChange={(e) => {
                handleChangeEditForm(e);
              }}
            />
          </div>
          <div>
            <div>
              <label>Quantity: </label>
            </div>
            <input
              type="text"
              value={Quantity}
              name="Quantity"
              onChange={(e) => {
                handleChangeEditForm(e);
              }}
            />
          </div>
          <div>
            <div>
              <label>Total: </label>
            </div>
            <div>{Total}</div>
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
            onClick={() => {
              changeStatus(id, "approved");
            }}
          />
          <FontAwesomeIcon
            icon={faXmark}
            className="justify-center flex"
            onClick={() => {
              set_show_status_pop(true);
            }}
          />
          <div
            className=" justify-center flex ml-3"
            onClick={() => {
              set_edit_pop(true);
            }}
          >
            Edit
          </div>
        </div>
      </div>
      {edit_pop ? renderEditPop() : ""}
      {show_status_pop ? renderStatusPop() : ""}
    </>
  );
};

export default ItemList;
