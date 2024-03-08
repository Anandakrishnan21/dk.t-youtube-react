import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { IoMenu, IoSearchOutline } from "react-icons/io5";
import { Input } from "../ui/input";
import { useSidebarContext } from "../../context/SidebarContext";
import { AvatarDemo } from "./AvatarDemo";

function Header({ hidden = false }) {
  const [searchTerm, setSearchTerm] = useState("");
  const { toggleSidebar } = useSidebarContext();
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="header">
      <div className="w-full flex items-center justify-between p-2">
        <div
          className={`gap-4 items-center flex-shrink-0 ${
            hidden ? "hidden" : "flex"
          }`}
        >
          <IoMenu className="h-6 w-6" onClick={toggleSidebar} />
          <p className="hidden md:flex text-xl font-semibold">
            Clip<span className="text-red-600 dark:text-red-900">Vista</span>
          </p>
          <p className="flex md:hidden text-xl font-semibold">
            C<span className="text-red-600 dark:text-red-900">V</span>
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <form
            onSubmit={onHandleSubmit}
            className="w-8/12 md:w-full flex flex-row items-center"
          >
            <Input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              className="dark:bg-neutral-900 rounded-r-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
          <div className="searchDiv">
            <IoSearchOutline size={20} />
          </div>
        </div>
        <div className="flex gap-2">
          <ModeToggle />
          <AvatarDemo />
        </div>
      </div>
    </header>
  );
}

export default Header;
