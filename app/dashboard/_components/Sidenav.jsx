"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { GraduationCap, Hand, LayoutIcon, Settings } from "lucide-react";
import Image from "next/image";
import React from "react";

const Sidenav = () => {
  const { user } = useKindeBrowserClient();
  const menuList = [
    { id: "1", name: "Dashboard", icon: LayoutIcon, path: "/dashboard" },
    {
      id: "2",
      name: "Students",
      icon: GraduationCap,
      path: "/dashboard/students",
    },
    { id: "3", name: "Attendence", icon: Hand, path: "/dashboard/attendence" },
    { id: "4", name: "Settings", icon: Settings, path: "/dashboard/settings" },
  ];

  return (
    <div className="border shadow-md h-screen p-5">
      <Image src={"/logo.svg"} alt="logo" width={180} height={50} />
      <hr className="my-5"></hr>
      {menuList.map((menu, index) => (
        <h2 className="flex items-center gap-3 text-base p-4 cursor-pointer text-slate-500 hover:bg-primary hover:text-white rounded-lg my-2">
          <menu.icon />
          {menu.name}
        </h2>
      ))}
      <div className="flex items-center gap-2 bottom-4 fixed p-2">
        <Image
          src={user?.picture}
          height={35}
          width={35}
          alt="user"
          className="rounded-full"
        />
        <div>
          <h2 className="text-sm font-bold">{user?.given_name} </h2>
          <h2 className="text-xs slate-400">{user?.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
