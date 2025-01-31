import React from "react";
import FinancialStatement from "./FinancialStatement";
import Taxes from "./Taxes";
import Payroll from "./Payroll";
import ReportsCustomers from "./ReportsCustomers";

const Reports = () => {
  return (
    <div className="space-y-5">
      <FinancialStatement /> <Taxes /> <Payroll /> <ReportsCustomers />
    </div>
  );
};

export default Reports;
