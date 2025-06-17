import React from "react";

const UserAddress = () => {
  return (
    <div>
      <h1 className="text-2xl">Delivery Address</h1>
      <form className="mt-8 flex flex-col gap-3 px-2">
        <div className="flex flex-col gap-3">
          <input className="border py-2 pl-2 rounded" placeholder="Enter Your Name" type="text"  />
          <input className="border py-2 pl-2 rounded" placeholder="Enter Your Mobile Number" type="number"  />
        </div>
        <textarea className="border w-full rounded p-2" placeholder="Enter Your Address ( door no, area and street)" rows='6'></textarea>
        <div className="flex flex-col gap-3">
            <input className="border py-2 pl-2 rounded" placeholder="Enter Your City/District/Town" type="text"  />
            <input className="border py-2 pl-2 rounded" placeholder="Enter Your State" type="text"  />
        </div>
        <div className="flex flex-col gap-3">
          <input className="border py-2 pl-2 rounded" placeholder="Enter Your Pincode" type="number"  />
          <input className="border py-2 pl-2 rounded" placeholder="Enter Your Alternative Mobile Number" type="number"  />
        </div>
        <select className="border py-2 pl-2 rounded">
            <option value="">Home</option>
            <option value="">Work</option>
        </select>
        <div className="flex gap-2">
            <button className="w-full py-2 rounded bg-stone-500 text-white cursor-pointer">Cancel</button>
            <button className="w-full py-2 rounded bg-blue-600 text-white cursor-pointer">Save</button>
        </div>
      </form>
    </div>
  );
};

export default UserAddress;
