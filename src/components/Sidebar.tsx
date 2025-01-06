import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../redux/slices/titleSlice";
import { useAppDispatch } from "../hooks/hooks"; // Import your custom hook
import Reports from "../images/Reports.png";
import Purchases from "../images/Purchases.png";
import Sales from "../images/Sales.png";
import estimates from "../images/estimates.png";
import invoices from "../images/invoices.png";
import customers from "../images/customers.png";
import bills from "../images/bills.png";
import logout from "../images/logout.png";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;
  const [darkMode, setDarkMode] = useState(true);
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);
  // const isAdmin = useSelector((state) => state.isAdmin?.isAdmin?.is_admin);
  // const perm = useSelector((state) => state.isAdmin?.isAdmin?.group);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  const handleLogOut = async () => {
    logOut({ refresh });
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/signin");
    dispatch(logout());
  };

  useEffect(() => {
    setDarkMode(localStorage.getItem("color-theme") === "dark");
  }, [darkMode]);
  console.log(darkMode);
  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);
  const dispatch = useAppDispatch();
  const handleLinkClick = (title: string) => {
    dispatch(setTitle(title));
  };

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-[187px] flex-col overflow-y-hidden bg-[#1D89E4] duration-300 ease-linear  lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-5  p-[24px] text-center">
        <NavLink to="/  ">
          <img src="" alt="" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block text-black lg:hidden"
        >
          <svg
            className="fill-black"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="py-4 px-2 lg:px-2">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <li onClick={() => handleLinkClick("Dashboard")}>
                <NavLink
                  to="/dashboard"
                  className={`group relative flex items-center gap-[14px] rounded-sm py-3 px-4 text-sm font-semibold  text-[#ECE9E9]  duration-100 ease-in-out   ${
                    pathname.includes("/dashboard") &&
                    "border-l-2 border-[#1D2532] text-black "
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-black"
                      d="M13 8V4C13 3.71667 13.0958 3.47917 13.2875 3.2875C13.4792 3.09583 13.7167 3 14 3H20C20.2833 3 20.5208 3.09583 20.7125 3.2875C20.9042 3.47917 21 3.71667 21 4V8C21 8.28333 20.9042 8.52083 20.7125 8.7125C20.5208 8.90417 20.2833 9 20 9H14C13.7167 9 13.4792 8.90417 13.2875 8.7125C13.0958 8.52083 13 8.28333 13 8ZM3 12V4C3 3.71667 3.09583 3.47917 3.2875 3.2875C3.47917 3.09583 3.71667 3 4 3H10C10.2833 3 10.5208 3.09583 10.7125 3.2875C10.9042 3.47917 11 3.71667 11 4V12C11 12.2833 10.9042 12.5208 10.7125 12.7125C10.5208 12.9042 10.2833 13 10 13H4C3.71667 13 3.47917 12.9042 3.2875 12.7125C3.09583 12.5208 3 12.2833 3 12ZM13 20V12C13 11.7167 13.0958 11.4792 13.2875 11.2875C13.4792 11.0958 13.7167 11 14 11H20C20.2833 11 20.5208 11.0958 20.7125 11.2875C20.9042 11.4792 21 11.7167 21 12V20C21 20.2833 20.9042 20.5208 20.7125 20.7125C20.5208 20.9042 20.2833 21 20 21H14C13.7167 21 13.4792 20.9042 13.2875 20.7125C13.0958 20.5208 13 20.2833 13 20ZM3 20V16C3 15.7167 3.09583 15.4792 3.2875 15.2875C3.47917 15.0958 3.71667 15 4 15H10C10.2833 15 10.5208 15.0958 10.7125 15.2875C10.9042 15.4792 11 15.7167 11 16V20C11 20.2833 10.9042 20.5208 10.7125 20.7125C10.5208 20.9042 10.2833 21 10 21H4C3.71667 21 3.47917 20.9042 3.2875 20.7125C3.09583 20.5208 3 20.2833 3 20ZM5 11H9V5H5V11ZM15 19H19V13H15V19ZM15 7H19V5H15V7ZM5 19H9V17H5V19Z"
                      fill="#333B48"
                    />
                  </svg>
                  Dashboard
                </NavLink>
              </li> */}

              {/* <!-- Menu Item Dashboard --> */}
              {/* <!-- Sales--> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/sales" || pathname.includes("sales")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-100 ease-in-out ${
                          pathname === "/sales" || pathname.includes("sales")
                            ? "text-white"
                            : "text-[#ECE9E9]"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <img src={Sales} alt="" />
                        Sales
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li onClick={() => handleLinkClick("Estimates")}>
                            <NavLink
                              to="/sales/estimates"
                              className={({ isActive }) =>
                                `group relative flex items-center gap-[4px] rounded-sm py-3 px-4 text-sm font-semibold duration-100 ease-in-out ${
                                  isActive
                                    ? "bg-white/20 rounded-xl text-white"
                                    : "text-[#ECE9E9]"
                                }`
                              }
                            >
                              <img src={estimates} alt="" />
                              Estimates
                            </NavLink>
                          </li>
                          <li onClick={() => handleLinkClick("Invoices")}>
                            <NavLink
                              to="/sales/invoices"
                              className={({ isActive }) =>
                                `group relative flex items-center gap-[4px] rounded-sm py-3 px-4 text-sm font-semibold duration-100 ease-in-out ${
                                  isActive
                                    ? "bg-white/20 rounded-xl text-white"
                                    : "text-[#ECE9E9]"
                                }`
                              }
                            >
                              <img src={invoices} alt="" />
                              Invoices
                            </NavLink>
                          </li>
                          <li onClick={() => handleLinkClick("Customers")}>
                            <NavLink
                              to="/sales/customers"
                              className={({ isActive }) =>
                                `group relative flex items-center gap-[4px] rounded-sm py-3 px-4 text-sm font-semibold duration-100 ease-in-out ${
                                  isActive
                                    ? "bg-white/20 rounded-xl text-white"
                                    : "text-[#ECE9E9]"
                                }`
                              }
                            >
                              <img src={customers} alt="" />
                              Customers
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* <!-- Purchases --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/purchases" || pathname.includes("purchases")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-100 ease-in-out ${
                          pathname === "/purchases" ||
                          pathname.includes("purchases")
                            ? "text-white"
                            : "text-[#ECE9E9]"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <img src={Purchases} alt="" />
                        Purchases
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li onClick={() => handleLinkClick("Bills")}>
                            <NavLink
                              to="/purchases/bills"
                              className={({ isActive }) =>
                                `group relative flex items-center gap-[4px] rounded-sm py-3 px-4 text-sm font-semibold duration-100 ease-in-out ${
                                  isActive
                                    ? "bg-white/20 rounded-xl text-white"
                                    : "text-[#ECE9E9]"
                                }`
                              }
                            >
                              <img src={bills} alt="" />
                              Bills
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* <!-- Reports --> */}
              <li onClick={() => handleLinkClick("Reports")}>
                <NavLink
                  to="/reports"
                  className={({ isActive }) =>
                    `group relative flex items-center gap-[14px] rounded-sm py-3 px-4 text-sm font-semibold duration-100 ease-in-out ${
                      isActive
                        ? "bg-white/20 rounded-xl text-white"
                        : "text-[#ECE9E9]"
                    }`
                  }
                >
                  <img src={Reports} alt="" />
                  Reports
                </NavLink>
              </li>

              <li
                className="absolute bottom-6 flex w-[80%] cursor-pointer  justify-center p-3 text-center"
                onClick={handleLogOut}
              >
                <button className="group flex items-center gap-[6px] text-sm font-normal text-white duration-100 ease-in-out">
                  <img src={logout} alt="" />
                  <span className="text-white  text-sm font-normal">
                    Logout
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
