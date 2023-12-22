'use client'
import React from "react";
import SettingsNavbar from "@/components/Home/SettingsNavbar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-6">
      <h1 className="text-4xl font-bold  px-12">Settings</h1>
      <div className="flex justify-center items-center">
        <div className="mt-3  border-b border-black w-11/12">
          <SettingsNavbar />
        </div>
      </div>

      <div className=" px-12">{children}</div>
    </div>
  );
}
