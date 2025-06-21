import React, { useContext, useState } from "react";
import Spinner from "./Spinner";
import AuthContext from "../context/AuthContext";
import { toast } from 'react-toastify';

const UserAddress = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [altNumber, setAltNumber] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [addressType, setAddressType] = useState("Home");
  const [loading, setLoading] = useState(false);
  const { api } = useContext(AuthContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post('api/address/', {name, mobile_number : number, alt_number : altNumber, address_detail : address, district, state, pin_code : pincode, address_type : addressType})
      if (response.status === 201){
        setLoading(false)
        setName('')
        setNumber('')
        setAltNumber('')
        setAddress('')
        setDistrict('')
        setState('')
        setPincode('')
        setAddressType('Home')
        toast.success('Address Added Successfully')
      }
      
    } catch (error) {
      console.log(error.message)
      setLoading(false)
      toast.error(error.message)
    }

  };
  return (
    <div>
      <h1 className="text-2xl">Delivery Address</h1>
      <form
        className="mt-8 flex flex-col gap-3 px-2"
        onSubmit={onSubmitHandler}
      >
        <div className="flex flex-col gap-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border py-2 pl-2 rounded"
            placeholder="Enter Your Name"
            type="text"
          />
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border py-2 pl-2 rounded"
            placeholder="Enter Your Mobile Number"
            type="number"
          />
        </div>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border w-full rounded p-2"
          placeholder="Enter Your Address ( door no, area and street)"
          rows="6"
        ></textarea>
        <div className="flex flex-col gap-3">
          <input
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="border py-2 pl-2 rounded"
            placeholder="Enter Your City/District/Town"
            type="text"
          />
          <input
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="border py-2 pl-2 rounded"
            placeholder="Enter Your State"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-3">
          <input
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="border py-2 pl-2 rounded"
            placeholder="Enter Your Pincode"
            type="number"
          />
          <input
            value={altNumber}
            onChange={(e) => setAltNumber(e.target.value)}
            className="border py-2 pl-2 rounded"
            placeholder="Enter Your Alternative Mobile Number"
            type="number"
          />
        </div>
        <select
          value={addressType}
          onChange={(e) => setAddressType(e.target.value)}
          className="border py-2 pl-2 rounded"
        >
          <option value="Home">Home</option>
          <option value="Work">Work</option>
        </select>
        <div className="">
          {loading ? (
            <button
              disabled
              className="w-full py-3.5 rounded bg-blue-600 text-white cursor-pointer"
            >
              <Spinner width={"w-2.5"} height={"h-2.5"} color={"bg-white"} />
            </button>
          ) : (
            <button
              type="submit"
              className="w-full py-2 rounded bg-blue-600 text-white cursor-pointer"
            >
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserAddress;
