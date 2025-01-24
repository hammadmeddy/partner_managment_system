import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DropdownUser from "./DropdownUser";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../redux/slices/titleSlice";
import { RootState, AppDispatch } from "../redux/store";
import backarrow from "../images/backarrow.png";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const title = useSelector((state: RootState) => state.title.title);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Map pathnames to titles
  const getTitleFromPathname = (pathname: string) => {
    switch (pathname) {
      case "/sales/estimates":
        return "Estimates";
      case "/newestimates":
        return "New Estimates";
      case "/sales/invoices":
        return "Invoices";
      case "/sales/customers":
        return "Customers";
      case "/newcustomer":
        return "New Customer";
      case "/purchases/bills":
        return "Bills";
      case "/addbill":
        return "Add Bill";
      case "/reports":
        return "Reports";
      case "/settings":
        return "Settings";
      default:
        return "Home"; // default title
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

  const backButtonPages = ["/newestimates", "/newcustomer", "/addbill"];
  const showBackButton = backButtonPages.includes(location.pathname);

  const handleBack = () => {
    if (location.pathname === "/newestimates") {
      navigate("/sales/estimates"); // Navigate to the estimates page
    } else if (location.pathname === "/newcustomer") {
      navigate("/sales/customers"); // Navigate to the customers page
    } else if (location.pathname === "/addbill") {
      navigate("/purchases/bills"); // Navigate to the customers page
    }
  };

  return (
    <header className="sticky top-0 z-999 flex w-full border-b bg-[#F4F8FF] border-[#EDEDED]">
      <div className="flex flex-grow items-center justify-between py-[24px] shadow-2 md:px-6 px-4 2xl:px-11">
        <div className="flex items-center gap-4">
          {/* Toggle Button */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border p-1.5 shadow-sm lg:hidden items-center"
          >
            <span className="relative block h-6.5 w-6.5 cursor-pointer">
              <span className="absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-[#1D89E4] delay-[0] duration-200 ease-in-out ${
                    !props.sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-[#1D89E4] delay-150 duration-200 ease-in-out ${
                    !props.sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-[#1D89E4] delay-200 duration-200 ease-in-out ${
                    !props.sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-[#1D89E4] delay-300 duration-200 ease-in-out ${
                    !props.sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-[#1D89E4] duration-200 ease-in-out ${
                    !props.sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>

          {/* Back Button */}
          {showBackButton && (
            <button onClick={handleBack}>
              <img src={backarrow} alt="Back Arrow" />
            </button>
          )}

          {/* Title */}
          <h4 className="text-lg text-[#242E3E] text-[24px] font-bold leading-[32px]">
            {title}
          </h4>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          {/* User Area */}
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
