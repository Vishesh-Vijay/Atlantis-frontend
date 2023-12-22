"use client";

import * as React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
;
import { SearchIcon , Mic, BellRing, Airplay, User, LogOut} from "lucide-react";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {useRouter} from "next/navigation"
import { IoLogOutOutline } from "react-icons/io5";

const CustomNavbar = () => {
  const [isMicOn,setIsMicOn] = React.useState(false);
  const router = useRouter();
  const handleLogout = () => {
    console.log("logout");
    if (localStorage.getItem("token")) localStorage.removeItem("token");
    if (localStorage.getItem("googleToken"))
      localStorage.removeItem("googleToken");
    router.push("/auth/login");
    
  };
 
  return (
    <Navbar className="mt-4">
      <div className="flex justify-center">
        <div className="flex gap-3">
          <div className="w-72 flex items-center">
            <span className=" absolute pl-3 flex items-center pointer-events-none">
              <SearchIcon size={18} className="text-gray-600" />
            </span>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 font-light text-gray-500 rounded-xl focus:outline-none bg-gray-100 focus:border-indigo-500"
              placeholder="Search... "
            />
          </div>

          <span
            className="pl-3 flex items-center pointer-events-none"
            onClick={() => setIsMicOn(!isMicOn)}
          >
            <Mic
              size={18}
              className={
                isMicOn
                  ? "text-red-600 cursor-pointer"
                  : "text-gray-600 cursor-pointer"
              }
            />
          </span>
        </div>
      </div>

      <NavbarContent
        as="div"
        className="flex space-x-3 items-center "
        justify="end"
      >
        <div>
          <NavbarContent className="hidden sm:flex gap-3">
            <span className=" pl-3 flex items-center pointer-events-none">
              <Airplay size={18} className="text-gray-600" />
            </span>
            <span className=" pl-3 flex items-center pointer-events-none">
              <BellRing size={18} className="text-gray-600" />
            </span>
          </NavbarContent>
        </div>
        <Dropdown
          placement="bottom-end"
          className="border border-gray-200 bg-violet-200 rounded-2xl"
        >
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="faded">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold text-cen ter italic">Signed in as</p>
              <p className="font-semibold text-center italic">
                zoey@example.com
              </p>
            </DropdownItem>
            <DropdownItem
              key="settings"
              className="bg-white rounded-lg"
              onClick={() => {
                router.push("/settings/profile");
              }}
            >  
              <span className=" text-center flex items-center justify-center">
                <IoSettingsOutline className="inline-block mr-1  text-gray-800 w-5" />
                Settings
              </span>
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              onClick={handleLogout}
              className="bg-white rounded-lg text-center mt-1"
            >
              <span className="text-center flex items-center justify-center">
                <LogOut className="inline-block mr-1 text-gray-800 w-5" />
                Logout
              </span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};



export default CustomNavbar;
