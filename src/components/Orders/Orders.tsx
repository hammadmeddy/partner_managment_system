import React from "react";
import OrderDashboardCards from "./OrderDashboardCards";
import OrderHeader from "./OrderHeader";
import FeaturedProducts from "./FeaturedProducts";
import RecentOrders from "./RecentOrders";

const Orders = () => {
  return (
    <div className="min-h-screen">
      <OrderHeader />
      <OrderDashboardCards />
      <div className="flex gap-4">
        <RecentOrders />
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default Orders;
