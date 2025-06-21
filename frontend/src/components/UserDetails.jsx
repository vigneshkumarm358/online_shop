import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const UserDetails = () => {
  const { userData } = useContext(UserContext);
  console.log(userData);

  if (userData === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl">User Details</h1>
      {userData.map((item) => (
        <div className="mt-4" key={item.id}>
          <div className="">
            <p>Username </p>
            <p>{item.username}</p>
          </div>
          <div className="">
            <p>Email </p>
            <p>{item.email}</p>
          </div>

          <div className="flex flex-col gap-3">
            {item.addresses.map((address) => (
              <div
                className="rounded bg-slate-200 p-4 relative"
                key={address.id}
              >
                <p className=" "><span className="text-gray-800">Name :</span> {address.name}</p>
                <p>
                  <span  className="text-gray-800">Mobile No :</span> {address.mobile_number} , {address.alt_number}{" "}
                </p>
                <div >
                  <p>{address.address_detail}</p>
                  <p>{address.district}</p>
                  <p>
                    {address.state} - {address.pin_code}
                  </p>
                </div>

                <p className="bg-slate-800 text-white py-.5 px-2 rounded absolute top-2 right-2">
                  {address.address_type}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
