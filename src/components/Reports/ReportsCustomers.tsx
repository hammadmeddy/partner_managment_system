import React from "react";

const ReportsCustomers = () => {
  const customerscards = [
    {
      title: "Income by Customer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "View Report",
    },
    {
      title: "Aged Receivables",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "View Report",
    },
  ];
  return (
    <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] p-[24px] ">
      <p className="pb-3 text-[#242E3E] font-bold text-base">Customers</p>
      <p className="text-[#595959]">
        Track payroll costs, including employee wages and benefits/deductions,
        and your payroll tax liabilities.
      </p>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-[16px] gap-y-6 mt-6">
          {customerscards.map((customers, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 border-[1px] border-[#ECE9E9]"
            >
              <h3 className="text-[16px] font-bold text-[#242E3E]">
                {customers.title}
              </h3>
              <p className="text-sm text-[#595959] mt-2">
                {customers.description}
              </p>
              <button className="text-[#1D89E4] text-sm font-bold mt-4 block hover:underline">
                {customers.link}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportsCustomers;
