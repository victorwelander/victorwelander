import React from "react";
import { TbMenu } from "react-icons/tb";

const MobileNav = () => {
  return (
    <div className="relative sm:hidden">
      <button className="rounded-md px-2 py-2 hover:bg-[var(--accents-2)]">
        <TbMenu />
      </button>
    </div>
  );
};

export default MobileNav;
