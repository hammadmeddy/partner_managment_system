const RebateProgressBar = () => {
  return (
    <div className=" mx-auto space-y-6">
      {/* Main Progress Card */}
      <div className="bg-gradient-to-r from-[#4A90E2] to-[#8E44AD] rounded-2xl p-8 text-[#FFFFFF] relative overflow-hidden">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Q1 2024 Progress</h2>
            <p className="text-[#E2E8F0] opacity-90">45 days remaining</p>
          </div>
          <div className="bg-[#FFFFFF] bg-opacity-25 px-4 py-2 rounded-full">
            <span className="text-[#FFFFFF] font-medium">Silver Tier</span>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-semibold">Sales Progress</h3>
            <span className="text-xl font-bold">$187,500 / $250,000</span>
          </div>
          <div className="w-full bg-[#FFFFFF] bg-opacity-25 rounded-full h-4 mb-3">
            <div
              className="bg-[#FFFFFF] h-4 rounded-full shadow-sm"
              style={{ width: "75%" }}
            ></div>
          </div>
          <p className="text-[#E2E8F0] opacity-90">
            75% complete - $62,500 to target
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-[#FFFFFF] bg-opacity-15 backdrop-blur-sm rounded-xl p-4 border border-[#FFFFFF] border-opacity-20">
            <p className="text-#E2E8F0 opacity-90 mb-2">Current Rebate Rate</p>
            <p className="text-3xl font-bold">3.5%</p>
          </div>
          <div className="bg-[#FFFFFF] bg-opacity-15 backdrop-blur-sm rounded-xl p-4 border border-[#FFFFFF] border-opacity-20">
            <p className="text-#E2E8F0 opacity-90 mb-2">Earned This Quarter</p>
            <p className="text-3xl font-bold">$6,562</p>
          </div>
          <div className="bg-[#FFFFFF] bg-opacity-15 backdrop-blur-sm rounded-xl p-4 border border-[#FFFFFF] border-opacity-20">
            <p className="text-[#E2E8F0] opacity-90 mb-2">Next Tier At</p>
            <p className="text-3xl font-bold">$300,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RebateProgressBar;
