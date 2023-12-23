'use client'
import React from 'react'
import {
  navigationMenuTriggerStyle,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from 'next/navigation';
const SettingsNavbar = () => {
    const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/settings/profile" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex flex-col justify-between items-center">
                <span className="text-lg"> Profile</span>
                {pathname === "/settings/profile" && (
                  <hr className="w-full h-2 border-gray-500" />
                )}
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/settings/videos" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex flex-col justify-between items-center">
                <span className="text-lg"> Videos</span>
                {pathname === "/settings/videos" && (
                  <hr className="w-full h-2 border-gray-500" />
                )}
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default SettingsNavbar