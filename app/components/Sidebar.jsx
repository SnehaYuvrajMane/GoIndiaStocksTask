"use client";
import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { VscCommentDiscussion } from "react-icons/vsc";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative h-screen">
      <div
        className={`${
          isOpen ? "w-80 xl:w-96" : "w-0 left-0 overflow-hidden"
        } bg-blue-950 text-white transition-all duration-500 h-screen top-0 fixed xl:relative `}
      >
        <div className=" flex justify-between p-3">
          <div className=" flex gap-5 text-white items-center">
            <FaRegUserCircle className="text-white w-5 h-5" />
            <h2>Hello User</h2>
          </div>
          <div>
            <IoIosNotifications className="w-6 h-6" />
          </div>
        </div>
        <div className=" border-rose-50 border "></div>
        <div>
          <ul className=" list-none p-10 ">
            <li className=" m-2 flex gap-5 items-center">
              <VscCommentDiscussion />
              Dicussion Forum
            </li>
            <li className=" m-2">Market Stories</li>
            <li className=" m-2"> Sentiment</li>
            <li className=" m-2">Market</li>
            <li className=" m-2">Sector</li>
            <li className=" m-2">Watchlist</li>
            <li className=" m-2">Events</li>
            <li className=" m-2">News/Interviews</li>
          </ul>
        </div>
      </div>
      <div
        className={`fixed flex items-center w-4 h-20 bg-blue-900 top-1/2 text-white text-xl transition-all duration-500 ${
          isOpen ? "left-80 xl:left-96" : "left-0"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        &gt;
      </div>
    </div>
  );
};

export default Sidebar;
