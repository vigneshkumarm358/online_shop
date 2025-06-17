import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import assets from "../assets/assets";
import { RiMenu3Fill } from "react-icons/ri";
import { BiSolidUser } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";

const Navbar = () => {
  const { isAuthorized, navigate } = useContext(AuthContext);

  return (
    <div>
      <nav className="bg-teal-800 text-white flex items-center justify-between py-4 px-2">
        <img className="w-50 " src={assets.logo} alt="" />
        <div className="hidden ">
          <Link to="/">Home</Link>
          <Link to="/">Products</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
        <div className="flex justify-between   gap-4 text-3xl">
          <BsCartFill onClick={() => navigate('/cart')} />
          <BiSolidUser onClick={() => navigate(isAuthorized ? 'account' : 'login' )} />
          <RiMenu3Fill />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
