import React from "react";
import { Link } from "react-router-dom";
import { BiSearch, BiHeart, BiCartAlt } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row  border border-b-1 items-center">
      <div className="w-1/3 p-2 m-2  leading-[0.6em] flex flex-col items-center">
        <Link to="/">
          <h1 className="text-right">
            <b className="text-6xl text-blue-600 font-mono">FAMOUS</b> <br />
            <b> Footwear </b>
          </h1>
        </Link>
      </div>
      <div className="w-2/3 flex flex-col">
        <div className="flex justify-end my-4">
          <div className=" py-2 px-4 flex flex-row border-2 border-gray-800 focus-within:shadow-lg">
            <input
              type="text"
              className="outline-none"
              placeholder="Find something famous for you"
            />
            <button className="text-2xl text-gray-400 pl-2">
              <BiSearch />
            </button>
          </div>
          <div className="mx-4">
            <button className="text-3xl text-gray-400 pl-2 py-2">
              <BiHeart />
            </button>
            <button className="text-3xl text-gray-400 pl-2 py-2">
              <BiCartAlt />
            </button>
          </div>
        </div>
        <ul className=" flex flex-col md:flex-row justify-evenly items-center">
          <li className="p-2 ">
            <Link to="/women">Women</Link>
          </li>
          <li className="p-2 ">
            <Link to="/men">Men</Link>
          </li>
          <li className="p-2 ">
            <Link to="/kids">Kids</Link>
          </li>
          <li className="p-2 ">
            <Link to="/brands">Brands</Link>
          </li>
          <li className="p-2 ">
            <Link to="/accessories">Accessories</Link>
          </li>
          <li className="p-2 ">
            <Link to="/sale">Sale</Link>
          </li>

          <li className="p-2 flex flex-row text-red-600">
            <MdOutlineLocalOffer className="text-2xl" />{" "}
            <Link to="offers">Your offers</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
