"use client";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../redux/slices/titleSlice";
import type { RootState, AppDispatch } from "../redux/store";
import { Menu, Search, Calendar, ChevronDown, Key } from "lucide-react";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const title = useSelector((state: RootState) => state.title.title);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Map pathnames to titles
  const getTitleFromPathname = (pathname: string) => {
    switch (pathname) {
      case "/administratorrdashboard":
        return "Admin Dashboard";
      case "/distributordashboard":
        return "Distributor Dashboard";
      case "/manufacturerdashboard":
        return "Manufacturer Dashboard";
      case "/support-dashboard":
        return "Support Dashboard";
      case "/support":
        return "Support";
      case "/partners":
        return "Partners";
      case "/orders":
        return "Orders";
      case "/projects":
        return "Projects";
      case "/rebates":
        return "Rebates";
      case "/dashboard":
        return "Dashboard";
      default:
        return "Dashboard";
    }
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const pageTitle = getTitleFromPathname(currentPath);
    dispatch(setTitle(pageTitle));
  }, [location.pathname, dispatch]);

  const updateViewportWidth = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateViewportWidth);
    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".user-dropdown")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const backButtonPages = ["/newestimates", "/newcustomer", "/addbill"];
  const showBackButton = backButtonPages.includes(location.pathname);

  const handleBack = () => {
    if (location.pathname === "/newestimates") {
      navigate("/sales/estimates");
    } else if (location.pathname === "/newcustomer") {
      navigate("/sales/customers");
    } else if (location.pathname === "/addbill") {
      navigate("/purchases/bills");
    }
  };

  const handleChangePassword = () => {
    setDropdownOpen(false);
    // Add your change password logic here
    console.log("Change password clicked");
    // navigate("/change-password"); // Uncomment when you have the route
  };

  const [hovered, setHovered] = useState(false);
  // Get current date
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-full">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-[#a26ed3] to-[#956bbc] text-[#ffffff]">
        <div className="flex items-center justify-between py-2 px-6">
          {/* Logo/Brand with Sidebar Toggle */}
          <div className="flex items-center gap-3">
            {/* Sidebar Toggle Button - Works on ALL screen sizes */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                props.setSidebarOpen(!props.sidebarOpen);
              }}
              className="p-2 hover:bg-purple-600 rounded-lg transition-colors"
              title="Toggle Sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="w-10 h-8 bg-[#ffffff] rounded-lg flex items-center justify-center">
              <span className="text-[#000000] font-bold text-lg">PMS</span>
            </div>
            <span className="hidden md:block text-xl font-semibold">
              Partner Management System
            </span>
          </div>

          {/* Date and Notifications */}
          <div className="flex items-center gap-4">
            <div
              className="relative flex items-center text-sm gap-2"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Calendar className="w-4 h-4" />
              <span className={`hidden md:block`}>Today : {currentDate}</span>
              {hovered && (
                <span className="absolute left-6 top-0 bg-[#ffffff] text-[#000000] w-[100px] text-xs rounded-md px-2 py-1 shadow-md z-10 md:hidden">
                  Today : {currentDate}
                </span>
              )}
            </div>
            {/* User Info with Dropdown */}
            <div className="relative user-dropdown">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 hover:bg-purple-600 rounded-lg p-2 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3aeccb] to-[#a26ed3] flex items-center justify-center">
                  {/* <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  /> */}
                </div>
                <div className="hidden md:block">
                  <span className="font-medium">Maryam Ahmed</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-[#ffffff] rounded-lg shadow-lg border border-[#e5e7eb] py-2 z-50">
                  <button
                    onClick={handleChangePassword}
                    className="w-full flex items-center text-sm gap-3 px-4 py-2 text-[#374151] hover:bg-[#f4f4fa] transition-colors text-left"
                  >
                    <strong>
                      <Key className="w-4 h-4" />
                    </strong>
                    <span>Change Password</span>
                  </button>
                </div>
              )}
            </div>
            {/* <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-[#7a62b6] rounded-lg transition-colors relative">
                <Mail className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
              </button>
              <button className="p-2 hover:bg-[#7a62b6] rounded-lg transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Header */}
      <div className="bg-gradient-to-r from-[#3aeccb] to-[#30d3b4] text-[#ffffff]">
        <div className="flex items-center justify-between py-3 pl-8 px-6">
          {/* Navigation Icons */}
          {/* <div className="flex items-center gap-4 hidden md:block">
            <div className="flex items-center gap-3">
              <button className="p-3 hover:bg-[#00d3ab] rounded-lg transition-colors">
                <Home className="w-5 h-5" />
              </button>
              <button className="p-3 hover:bg-[#00d3ab] rounded-lg transition-colors">
                <Mail className="w-5 h-5" />
              </button>
              <button className="p-3 hover:bg-[#00d3ab] rounded-lg transition-colors">
                <Calendar className="w-5 h-5" />
              </button>
              <button className="p-3 hover:bg-[#00d3ab] rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
              </button>
            </div>
          </div> */}

          {/* Page Title and Breadcrumb */}
          <h1 className="text-2xl font-bold pr-2">{title}</h1>
          {/* <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="hidden md:flex items-center gap-2 text-sm">
              <span>Home</span>
              <ChevronRight className="w-4 h-4" />
              <span>{title}</span>
            </div>
          </div> */}

          {/* Search Bar */}
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="md:w-64 w-36 px-4 py-2 pr-10 rounded-lg bg-[#ffffff] text-[#000000] placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#ffffff] focus:ring-opacity-50"
              />
              <button className="absolute right-0 top-0 h-full px-3 bg-white hover:bg-[#f4f4fa] rounded-r-lg transition-colors">
                <Search className="w-4 h-4 text-[#000000]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
