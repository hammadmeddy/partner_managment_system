import React from "react";
import RebateHeader from "./RebateHeader";
import RebateProgressBar from "./RebateProgressBar";
import UpcomingMilestones from "./UpcomingMilestones";
import SilverTierBenefit from "./SilverTierBenefit";
import RebateRecentHistory from "./RebateRecentHistory";

const Rebates = () => {
  return (
    <div className="min-h-screen">
      <RebateHeader />
      <RebateProgressBar />
      <div className="flex gap-6 mt-8">
        <UpcomingMilestones />{" "}
        <div className="w-[40%] space-y-4">
          <SilverTierBenefit /> <RebateRecentHistory />
        </div>
      </div>
    </div>
  );
};

export default Rebates;
