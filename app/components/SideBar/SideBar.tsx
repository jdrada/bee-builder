import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <aside className="h-screen bg-gray-800 flex-shrink-0 w-64 overflow-y-auto grid flex items-stretch">
      <div className="flex items-center h-24 justify-self-center">
        <Link className="text-white text-2xl" href={"/"}>
          🐝 BeeBuild
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
