"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  const { user } = useKindeBrowserClient();

  return (
    <div className="flex justify-between border shadow-sm p-4">
      <div></div>
      <div>
        <Image
          src={user?.picture}
          width={35}
          height={35}
          alt="user"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
