import React, { useState } from "react";
import { BiSolidUserDetail, BiSolidLogOut } from "react-icons/bi";
import { FaMapLocationDot, FaBagShopping } from "react-icons/fa6";
import UserDetails from "../components/UserDetails";
import UserAddress from "../components/UserAddress";
import UserOrders from "../components/UserOrders";

const Profile = () => {
  const [currentItem, setCurrentItem] = useState("details");

  const renderComponent = () => {
    switch (currentItem) {
      case "details":
        return <UserDetails />;
      case "address":
        return <UserAddress />;
      case "orders":
        return <UserOrders />;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <div className="w-[20vw] bg-stone-100 flex flex-col text-center gap-12 p-2 h-screen sticky top-0">
        <div
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            currentItem === "details" ? "text-teal-800 font-semibold" : ""
          }`}
          onClick={() => setCurrentItem("details")}
        >
          <BiSolidUserDetail className="text-3xl" />
          <p>User Details</p>
        </div>
        <div
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            currentItem === "address" ? "text-teal-800 font-semibold" : ""
          }`}
          onClick={() => setCurrentItem("address")}
        >
          <FaMapLocationDot className="text-3xl" />
          <p>Delivery Details</p>
        </div>
        <div
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            currentItem === "orders" ? "text-teal-800 font-semibold" : ""
          }`}
          onClick={() => setCurrentItem("orders")}
        >
          <FaBagShopping className="text-3xl" />
          <p>My Orders</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-red-600 cursor-pointer">
          <BiSolidLogOut className="text-3xl" />
          <p>User Logout</p>
        </div>
      </div>
      <div className="w-[80vw] p-2">{renderComponent()}</div>
    </div>
  );
};

export default Profile;
