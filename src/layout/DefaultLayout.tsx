"use client";

import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  const isAuthenticated = true;
  const [sidebarOpen, setSidebarOpen] = useState(true); // Default to open on large screens

  return (
    <div className="min-h-screen bg-[#f4f4fa]">
      {/* Double Header - Full width spanning entire screen */}
      {isAuthenticated && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
      )}

      {/* Content area below header */}
      <div className="pt-[135px] lg:pt-[160px]">
        <div className="flex">
          {/* Sidebar - Always render, let the sidebar component handle visibility */}
          {isAuthenticated && (
            <div className="fixed lg:ml-4 z-50">
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            </div>
          )}

          {/* Main content area - Only adjust margin on large screens */}
          <div
            className={`flex-1 lg:transition-all lg:duration-300 lg:ease-in-out ${
              isAuthenticated && sidebarOpen
                ? "lg:ml-[230px]"
                : "lg:ml-[80px] ml-[35px]"
            }`}
          >
            <main className="p-4 md:p-8 2xl:p-8">
              <div className="mx-auto max-w-screen-3xl">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
