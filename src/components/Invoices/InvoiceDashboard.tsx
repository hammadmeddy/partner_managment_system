import React, { useState, useEffect } from "react";
import refresh from "../../images/refresh.png";

const InvoiceDashboard: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [relativeTime, setRelativeTime] = useState<string>("Just now");

  const handleRefresh = () => {
    const now = new Date();
    setLastUpdated(now);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const secondsDiff = Math.floor(
        (now.getTime() - lastUpdated.getTime()) / 1000
      );

      if (secondsDiff < 60) {
        setRelativeTime("Just now");
      } else if (secondsDiff < 3600) {
        const minutes = Math.floor(secondsDiff / 60);
        setRelativeTime(`${minutes} minute${minutes > 1 ? "s" : ""} ago`);
      } else {
        const hours = Math.floor(secondsDiff / 3600);
        setRelativeTime(`${hours} hour${hours > 1 ? "s" : ""} ago`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [lastUpdated]);

  return (
    <>
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border-[1px] border-[#ECE9E9]  rounded-lg p-4 text-left p-[24px]">
          <h3 className="text-[#595959] text-sm font-normal pb-4">Overdue</h3>
          <p className="text-[24px] font-bold text-[#242E3E]">$99.00</p>
        </div>
        <div className="bg-white border-[1px] border-[#ECE9E9]  rounded-lg p-4 text-left p-[24px]">
          <h3 className="text-[#595959] text-sm font-normal pb-4">
            Due within next 30 days
          </h3>
          <p className="text-[24px] font-bold text-[#242E3E]">$20.00</p>
        </div>
        <div className="bg-white border-[1px] border-[#ECE9E9]  rounded-lg p-4 text-left p-[24px]">
          <h3 className="text-[#595959] text-sm font-normal pb-4">
            Average time to get paid
          </h3>
          <p className="text-[24px] font-bold text-[#242E3E]">10 Days</p>
        </div>
        <div className="bg-white border-[1px] border-[#ECE9E9] rounded-lg p-4 text-left p-[24px]">
          <h3 className="text-[#595959] text-sm font-normal pb-4">
            Upcoming payout
          </h3>
          <p className="text-[24px] font-bold text-[#242E3E]">...</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-[24px]">
        <div className="flex justify-between w-[85%] items-center bg-[#E8F3FC] border-[#1D89E4] border-l-[3px] rounded-md mt-6 mb-6 p-4">
          <p className="text-sm text-[#1D89E4]">
            Invoices get paid 3x faster with online payments.
          </p>
          <a href="#" className="text-sm text-[#1D89E4] hover:underline">
            <strong>Turn on Payments</strong>
          </a>
        </div>
        <div className="flex justify-between items-center text-sm ">
          Last Updated {relativeTime}.
          <button onClick={handleRefresh} className="ml-2 font-bold ">
            <img src={refresh} alt="Refresh button" />
          </button>
        </div>
      </div>
    </>
  );
};

export default InvoiceDashboard;
