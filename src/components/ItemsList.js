import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const ItemsList = (props) => {
  console.log(props);
  let { id, ProductName, price, imageurl, Total, Brand, Quantity, status } =
    props.item;
  let { updatProductStatus } = props;
  let { editProduct } = props;

  let [showModel, setShowModel] = useState(false);
  let [editModel, setEditModel] = useState(false);
  let [editForm, seteditForm] = useState({
    price: price,
    Quantity: Quantity,
    Total: Total,
    tag: "",
  });

  let toggleEditmodel = () => {
    setEditModel(true);
  };
  let togglepop = () => {
    setShowModel(!showModel);
  };

  return (
    <>
      <div
        key={id}
        className="grid grid-flow-row grid-cols-8 grid-flow-row-6 border-b-2 border-gray-300 px-1  text-gray-400 mx-5"
      >
        <div className="flex px-5 py-3  col-span-2 ">
          <img
            src={imageurl}
            style={{ width: "30px", height: "30px" }}
            className="mx-3 "
          />
          {ProductName}
        </div>
        <div className="px-5 justify-center flex items-center">{Brand}</div>
        <div className="flex justify-center items-center  px-5">{price}</div>
        <div className="px-5 justify-center flex items-center">{Quantity}</div>
        <div className="px-5 justify-center flex items-center">{Total}</div>
        <div className="px-5  bg-gray-100 text-black flex z-2 ">
          <div className="  ">
            {status == "approved" ? (
              <div>
                <button
                  className="py-3 px-4 bg-green-800 text-white  rounded-lg  mt-6"
                  id="togglebtn"
                >
                  {status}
                </button>
              </div>
            ) : (
              ""
            )}

            {status == "Missingurgent" ? (
              <div>
                <button
                  className="py-3 px-4 bg-orange-600 text-white  rounded-lg   mt-3"
                  id="togglebtn"
                >
                  {status}
                </button>
              </div>
            ) : (
              ""
            )}

            {status == "Missing" ? (
              <div>
                <button
                  className="py-3 px-4 bg-red-800 text-white  rounded-lg mt-7"
                  id="togglebtn"
                >
                  {status}
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className=" justify-center items-center px-5  bg-gray-100 text-black flex z-2 ">
          <FontAwesomeIcon
            icon={faCheck}
            className="mr-5 text-gray-500"
            onClick={(e) => {
              updatProductStatus("approved", id);
            }}
          />
          <FontAwesomeIcon
            icon={faXmark}
            className="mr-5 text-gray-500"
            onClick={(e) => {
              togglepop();
            }}
          />
          <span
            onClick={() => {
              toggleEditmodel();
            }}
          >
            Edit
          </span>
        </div>
      </div>
      {editModel == true ? (
        <div className=" bg-gray-100 shadow text-black h-3/4 w-3/4 absolute inset-y-3/4 text-start py-5  rounded-lg  inset-60  container mx-auto px-10 ">
          <FontAwesomeIcon
            icon={faXmark}
            className="mr-5 text-black relative top-0 left-full "
            onClick={(e) => {
              setEditModel(false);
            }}
          />
          <div className="px-5 py-3 truncate font-extrabold">
            {ProductName}...
          </div>
          <div className="grid grid-row-1 grid-cols-3 my-8">
            <div className="grid-cols-1">
              <img
                src={imageurl}
                style={{ width: "100px", height: "100px" }}
                className="mx-3 "
              />
            </div>
            <div className="grid grid-row-2">
              <div className="my-3 flex items-center  justify-between font-bold ">
                <div>
                  <label className="mx-6">Price</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="py-3 w-20 rounded-lg text-center text-gray-400"
                    value={editForm.price}
                    onChange={(e) => {
                      let obj = {
                        ...editForm,
                        price: e.target.value,
                        Total: parseInt(e.target.value) * parseInt(Quantity),
                      };
                      seteditForm(obj);
                    }}
                  />
                </div>
              </div>
              <div className="my-3 flex items-center  justify-between font-bold">
                <div>
                  <label className="mx-6">Quantity</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="py-3 w-20 rounded-lg text-center text-gray-400"
                    value={editForm.Quantity}
                    onChange={(e) => {
                      seteditForm({
                        ...editForm,
                        Quantity: e.target.value,
                        Total:
                          parseInt(editForm.price) * parseInt(e.target.value),
                      });
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center  justify-between font-bold ">
                <div>
                  <label className="mx-8">Total</label>
                </div>
                <div className=" text-gray-400">
                  {parseInt(editForm.price) * parseInt(editForm.Quantity)}
                </div>
              </div>
            </div>
          </div>
          <div className=" grid-rows-1 grid-col-4 flex my-10">
            <button
              className="bg-white mx-1 px-9 py-4 grid-col-1 rounded-full font-bold text-gray-400 "
              onClick={() => {
                seteditForm({ ...editForm, tag: "Missing Product" });
              }}
            >
              Missing Product
            </button>
            <button
              className="bg-white mx-1 px-9 py-4 grid-col-1 rounded-full font-bold text-gray-400 "
              onClick={() => {
                seteditForm({ ...editForm, tag: "Quantity" });
              }}
            >
              Quantity is not in same
            </button>
            <button
              className="bg-white mx-1 px-9 py-4 grid-col-1 rounded-full font-bold text-gray-400 "
              onClick={() => {
                seteditForm({ ...editForm, tag: "Price is not same" });
              }}
            >
              Price is not the same
            </button>
            <button
              className="bg-white mx-1 px-9 py-4 grid-col-1 rounded-full font-bold text-gray-400 "
              onClick={() => {
                seteditForm({ ...editForm, tag: "other" });
              }}
            >
              Other
            </button>
          </div>
          <div className="flex justify-end items-center">
            <div className="mx-6 font-bold text-green-700">cencel</div>
            <div>
              <button
                className="bg-green-700 text-white py-2 px-6 rounded-full "
                onClick={() => {
                  editProduct(editForm, id);
                }}
              >
                send
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {showModel === true ? (
        <div className=" bg-slate-300 text-black  h-56 w-1/5 fixed top-80  rounded-lg inset-60  container mx-auto px-10 ">
          <FontAwesomeIcon
            icon={faXmark}
            className="mr-5 text-black relative top-3 left-full"
            onClick={(e) => {
              setShowModel(false);
            }}
          />
          <div className="  p-3 font-bold ">
            miss your porduct ?<div className="truncate">{ProductName}</div>
          </div>
          <br></br>
          <div className="px-10 ">
            <button
              className="mr-3 font-bold"
              onClick={() => {
                updatProductStatus("Missingurgent", id);
              }}
            >
              yes
            </button>
            <button
              className="mr-9 font-bold"
              onClick={() => {
                updatProductStatus("Missing", id);
              }}
            >
              No
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ItemsList;
