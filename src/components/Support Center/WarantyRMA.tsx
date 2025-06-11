import { useState } from "react";
import { Shield } from "lucide-react";

export default function WarrantyRMA() {
  const [serialNumber, setSerialNumber] = useState("");

  const handleCheckStatus = () => {
    console.log(`Checking status for serial: ${serialNumber}`);
    // Implement warranty check logic here
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-8 shadow-sm border border-[#E5E7EB]">
        <div className="flex items-center space-x-4 ">
          <div className="p-3 rounded-lg bg-[#3B82F620]">
            <Shield className="w-8 h-8 text-[#3B82F6]" />
          </div>
          <h2 className="text-2xl font-semibold text-[#1F2937]">
            Warranty & RMA Checker
          </h2>
        </div>
        <p className="text-sm text-[#1F2937] mt-2 mb-6">
          Enter your serial number to check warranty status or start an RMA case
        </p>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Enter serial number (e.g., SN123456789)"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            className="flex-1 bg-gradient-to-r from-[#4299E1] to-[#9F7AEA] text-white placeholder-white px-6 py-3 rounded-xl text-lg font-medium"
          />
          <button
            onClick={handleCheckStatus}
            className="bg-gradient-to-r from-[#4299E1] to-[#9F7AEA] text-white font-semibold px-8 py-3 rounded-xl  transition-colors"
          >
            Check Status
          </button>
        </div>
      </div>
    </div>
  );
}
