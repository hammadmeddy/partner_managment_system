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
import ForgetPassword from "./pages/Authentication/ForgetPassword";
import SignUp from "./pages/Authentication/SignUp";
import TwoFA from "./pages/Authentication/TwoFA";
import NewPassword from "./pages/Authentication/NewPassword";
import Login from "./pages/Authentication/SignIn";
import Projects from "./components/Projects/Projects";
import ManufacturerDashboard from "./components/Manufacturer/ManufacturerDashboard";
import DistributorDashboard from "./components/Distributor/DistributorDashboard";
import PartnerDashboard from "./components/Partners/PartnersDashboard";
import SupportDashboard from "./components/Support/SupportDashboard";
import AdministratorDashboard from "./components/Administrator/AdministratorDashboard";
import PartnerOnBoarding from "./components/Partner on boarding/PartnerOnBoarding";
import Orders from "./components/Orders/Orders";
import PartnerDirectory from "./components/Partner Directory/PartnerDirectory";
import Rebates from "./components/Rebates/Rebates";
import SupportCenter from "./components/Support Center/SupportCenter";
import ProjectDashboard from "./components/Projects/project-dashboard";
import AdminPanel from "./components/Admin Panel/AdminPanel";

const DefaultLayout = lazy(() => import("./layout/DefaultLayout"));

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  // const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
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
                path="/adminpanel"
                element={
                  <>
                    <PageTitle title="Admin Panel" />
                    <AdminPanel />
                  </>
                }
              />
              <Route
                path="/administratordashboard"
                element={
                  <>
                    <PageTitle title="Admin Dashboard" />
                    <AdministratorDashboard />
                  </>
                }
              />
              <Route
                path="/partneronboarding"
                element={
                  <>
                    <PageTitle title="" />
                    <PartnerOnBoarding />
                  </>
                }
              />
              <Route
                path="/partnerdirectory"
                element={
                  <>
                    <PageTitle title="Partners" />
                    <PartnerDirectory />
                  </>
                }
              />
              <Route
                path="/rebates"
                element={
                  <>
                    <PageTitle title="Rebates" />
                    <Rebates />
                  </>
                }
              />
              <Route
                path="/project/details"
                element={
                  <>
                    <PageTitle title="Dashboard" />
                    <ProjectDashboard />
                  </>
                }
              />
              <Route
                path="/supportcenter"
                element={
                  <>
                    <PageTitle title="Support" />
                    <SupportCenter />
                  </>
                }
              />
              <Route
                path="/manufacturerdashboard"
                element={
                  <>
                    <PageTitle title="Manufacturer Dashboard" />
                    <ManufacturerDashboard />
                  </>
                }
              />
              <Route
                path="/distributordashboard"
                element={
                  <>
                    <PageTitle title="Distributor Dashboard" />
                    <DistributorDashboard />
                  </>
                }
              />
              <Route
                path="/partnerdashboard"
                element={
                  <>
                    <PageTitle title="Partner Dashboard" />
                    <PartnerDashboard />
                  </>
                }
              />
              <Route
                path="/support-dashboard"
                element={
                  <>
                    <PageTitle title="Support Dashboard" />
                    <SupportDashboard />
                  </>
                }
              />
              <Route
                path="/projects"
                element={
                  <>
                    <PageTitle title="Projects" />
                    <Projects />
                  </>
                }
              />
              <Route
                path="/orders"
                element={
                  <>
                    <PageTitle title="Orders" />
                    <Orders />
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
