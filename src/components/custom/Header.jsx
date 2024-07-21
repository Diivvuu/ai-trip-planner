import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 shadow-lg bg-black">
      <img className="w-20" src="/logo.svg" />
      <Button>Sign In</Button>
    </div>
  );
};

export default Header;
