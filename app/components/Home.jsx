"use client";
import React, { useState } from "react";
import Image from "next/image";
import Data from "@/app/components/Data";
import Data1 from "@/app/components/Data1";
import Sidebar from "./Sidebar";

function HomePage() {
  const [tab, setTab] = useState("Discussion Forum");
  return (
    <>
      <div className="xl:hidden flex justify-center gap-5 mt-5 w-full">
        <button
          className={`${
            tab === "Discussion Forum"
              ? "bg-blue-950 text-white"
              : "bg-gray-200 text-gray-700"
          } py-2 px-4 w-1/2 rounded-lg`}
          onClick={() => setTab("Discussion Forum")}
        >
          Discussion Forum
        </button>
        <button
          className={`${
            tab === "Market Stories"
              ? "bg-blue-950 text-white"
              : "bg-gray-200 text-gray-700"
          } py-2 px-4 rounded-lg`}
          onClick={() => setTab("Market Stories")}
        >
          Market Stories
        </button>
      </div>

      <div className=" flex justify-evenly overflow-x-hidden overflow-y-auto   ">
        <Sidebar />

        <div
          className={` text-center py-5 flex flex-col items-center ${
            !(tab === "Discussion Forum") && "hidden"
          }`}
        >
          <h1 className=" font-bold 2xl:text-2xl text-md uppercase text-red-700 hidden xl:block">
            Discussion Forum
          </h1>
          {Data.map((item) => {
            return (
              <div
                className=" shadow-xl w-[95vw] m-3 xl:w-3/4 xl:m-10 p-5 rounded-lg flex flex-col gap-3"
                key={item.content}
              >
                <div className="flex justify-between items-center ">
                  <div className=" flex gap-6 items-center">
                    <Image
                      src={item.image}
                      width={30}
                      height={30}
                      alt="Picture of the author"
                    />
                    <h2 className=" font-semibold text-sm">{item.title}</h2>
                    <button className=" bg-blue-950 h-fit w-fit px-2 py-1  xl:w-20  rounded-xl text-white  text-sm">
                      sector2
                    </button>
                  </div>
                  <div className=" text-blue-500 text-sm">2 min ago</div>
                </div>
                <div className="text-sm xl:text-lg text-justify">
                  <p>{item.content}</p>
                </div>
                <div className=" flex justify-center gap-10 mt-5 ">
                  <div className=" flex gap-3 items-center">
                    <Image
                      src="/heart.png"
                      width={24}
                      height={20}
                      alt="Picture of the author"
                      className="w-8 h-6 xl:h-8"
                    />
                    <p className="text-sm xl:text-lg">2k</p>
                  </div>
                  <div className=" flex gap-3 items-center">
                    <Image
                      src="/view.png"
                      width={30}
                      height={30}
                      alt="Picture of the author"
                      className="w-8 h-6 xl:h-8"
                    />
                    <p className="text-sm xl:text-lg">2k</p>
                  </div>
                  <div className=" flex gap-3 items-center">
                    <Image
                      src="/comment.png"
                      width={20}
                      height={20}
                      alt="Picture of the author"
                      className="w-8 h-6 xl:h-8"
                    />
                    <p className="text-sm xl:text-lg">2k comments</p>
                  </div>
                  <div className=" flex gap-3 items-center">
                    <Image
                      src="/share.png"
                      width={20}
                      height={30}
                      alt="Picture of the author"
                      className="w-8 h-6 xl:h-8"
                    />
                    <p className="text-sm xl:text-lg">2k</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" text-center xl:mr-10 p-5 w-full xl:w-auto">
          <h1 className=" font-bold text-2xl uppercase text-red-700">
            Market Stories
          </h1>
          {Data1.map((item) => {
            return (
              <div
                className=" shadow-md w-full xl:w-60  xl:h-64  object-cover mt-10 "
                key={item.image}
              >
                <div className="">
                  <Image
                    width={400}
                    height={400}
                    src={item.image}
                    alt="test"
                    className=" object-cover"
                  />
                </div>

                <h2 className="  font-semibold text-left ml-5 mt-2">
                  {item.title}
                </h2>
                <p className="   text-xs  text-justify p-3">{item.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default HomePage;
