import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./utils/Slice";
import { missing } from "./utils/Slice";
import { useState } from "react";

const ItemsList = (props) => {
  let { id, ProductName, price, imageurl, Total, Brand, Quantity, status } =
    props.item;

  let count = useSelector((state) => state.cart.approved);

  let productMissing = useSelector((state) => state.cart.MissingProduct);

  let [showModel, setShowModel] = useState(false);

  let [approved, setapproved] = useState("");

  let dispatch = useDispatch();

  const orderApproved = (e) => {
    status = "approved";
    setapproved(count);

    if (status == "approved") {
      let toggleicon = e.target;
      toggleicon.classList.toggle("text-green-700");
    }

    dispatch(increment());
  };

  let togglepop = () => {
    setShowModel(!showModel);
  };
  return (
    <>
      <div
        key={id}
        className="grid grid-flow-row grid-cols-8 grid-flow-row-6 border border-b-gray-400 px-1 text-gray-400 mx-5"
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
        <div className="px-5 justify-center items-center bg-gray-300 text-black flex z-2 col-span-2">
          {/* {approved == "approved" ? (
            <button className="py-3 px-4 bg-green-900 text-white rounded-lg mx-3">
              {approved}
            </button>
          ) : (
            ""
          )} */}

          <FontAwesomeIcon
            icon={faCheck}
            className="mr-5 text-gray-500"
            onClick={(e) => {
              orderApproved(e);
            }}
          />
          <FontAwesomeIcon
            icon={faXmark}
            className="mr-5 text-gray-500"
            onClick={(e) => {
              togglepop();
            }}
          />
          <span> Edit</span>
        </div>
      </div>

      {showModel == true ? (
        <div className=" bg-slate-300 text-black  h-56 w-1/5 fixed top-80  inset-60  container mx-auto px-10 ">
          <FontAwesomeIcon
            icon={faXmark}
            className="mr-5 text-black relative top-3 left-50"
            onClick={(e) => {
              e.target.parentElement.remove();
            }}
          />
          <div className="  p-3 font-bold ">
            miss your porduct ?<div className="truncate">{ProductName}</div>
          </div>
          <br></br>
          <div className="px-10 ">
            <button className="mr-6 font-bold" onClick={() => {}}>
              yes
            </button>
            <button className="mr-6 font-bold">No</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ItemsList;
