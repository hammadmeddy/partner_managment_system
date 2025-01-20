import { lazy, useEffect, useState } from "react";
import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/Authentication/SignIn";
import Loader from "./common/Loader";
import PageTitle from "./components/PageTitle";
import { useDispatch } from "react-redux";
import Estimates from "./components/Estimates/Estimates";
import ForgetPassword from "./pages/Authentication/ForgetPassword";
import SignUp from "./pages/Authentication/SignUp";
import TwoFA from "./pages/Authentication/TwoFA";
import NewPassword from "./pages/Authentication/NewPassword";
import Login from "./pages/Authentication/SignIn";
import NewEstimates from "./components/Estimates/NewEstimates";
import Invoices from "./components/Invoices/Invoices";
import AllCustomers from "./components/Customers/AllCustomers";
import AddCustomers from "./components/Customers/AddCustomers";
import NewCustomer from "./components/Customers/NewCustomer";

const DefaultLayout = lazy(() => import("./layout/DefaultLayout"));

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  // const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  // console.log("Value of isAuthenticated is :", isAuthenticated);
  const isAuthenticated = true;

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          {isAuthenticated ? (
            <>
              <Route
                path="*"
                element={
                  isAuthenticated ? (
                    <Navigate to="/dashboard" replace />
                  ) : (
                    <Login />
                  )
                }
              />
              <Route
                path="/dashboard"
                element={
                  <>
                    <PageTitle title="Dashboard" />
                    <Dashboard />
                  </>
                }
              />

              <Route
                path="/sales/estimates"
                element={
                  <>
                    <PageTitle title="Estimates" />
                    <Estimates />
                  </>
                }
              />

              <Route
                path="/sales/invoices"
                element={
                  <>
                    <PageTitle title="Invoices" />
                    <Invoices />
                  </>
                }
              />

              <Route
                path="/newestimates"
                element={
                  <>
                    <PageTitle title="New Estimates" />
                    <NewEstimates />
                  </>
                }
              />

              <Route
                path="/sales/customers"
                element={
                  <>
                    <PageTitle title="Customers" />
                    <AllCustomers />
                  </>
                }
              />

              <Route
                path="/newcustomer"
                element={
                  <>
                    <PageTitle title="New Customer" />
                    <NewCustomer />
                  </>
                }
              />

              <Route
                path="/purchases/bills"
                element={
                  <>
                    <PageTitle title="Bills" />
                  </>
                }
              />

              <Route
                path="/reports"
                element={
                  <>
                    <PageTitle title="Reports" />
                  </>
                }
              />
              <Route
                path="/workflow/system"
                element={
                  <>
                    <PageTitle title="Workflow System" />
                  </>
                }
              />
            </>
          ) : (
            <>
              <Route
                path="/SignUp"
                element={
                  <>
                    <PageTitle title="Signup" />
                    <SignUp />
                  </>
                }
              />
              <Route
                path="/ForgetPassword"
                element={
                  <>
                    <PageTitle title="ForgetPassword" />
                    <ForgetPassword />
                  </>
                }
              />
              <Route
                path="/user/forgot/password/:token"
                element={
                  <>
                    <PageTitle title="ForgotPassword" /> <NewPassword />
                  </>
                }
              />
              <Route
                path="/user/activate/:token"
                element={
                  <>
                    <PageTitle title="UserActivate" /> <ActivateUser />
                  </>
                }
              />

              <Route
                path="/2fa"
                element={
                  <>
                    <PageTitle title="TwoFA" />
                    <TwoFA />
                  </>
                }
              />
              <Route
                path="/signin"
                element={
                  <>
                    <PageTitle title="Signin" />
                    <Login />
                  </>
                }
              />
              <Route path="*" element={<Login to="/signin" replace />} />
            </>
          )}
        </Route>
      </Routes>
    </>
  );
}

export default App;
