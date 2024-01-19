/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { InputSwitch } from "primereact/inputswitch";
import { useState } from "react";
import Link from "next/link";

const Headers = () => {
  const [value, setValue] = useState();

  return (
    <header className="flex justify-between items-center p-6 ">
      <Link href={"/"} className="w-56 h-10">
        <img
          src="https://game-club-me.vercel.app/assets/logo-dark-1c48d68e.png"
          className="w-56 h-10 "
          alt=""
        />
      </Link>
      <div className="relative">
        <SearchIcon className="absolute left-4 top-3 " />
        <input
          type="text"
          placeholder="Search games..."
          className=" px-14 py-2  w-[600px]  border-2 border-slate-600 rounded-2xl bg-transparent"
        />
      </div>
      <div className="flex justify-center items-center gap-4">
        <InputSwitch
          checked={value}
          onChange={(e) => setValue(e.value)}
          className="h-5"
        />
        <span className="text-xl">Dark Mode</span>
      </div>
    </header>
  );
};

export default Headers;
