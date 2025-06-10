import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export function OnboardingHeader({ showBackButton = true }) {
  const navigate = useNavigate();

  const handleBackButton = () => navigate("/");
  return (
    <div className="mb-8">
      {showBackButton && (
        <Button
          onClick={handleBackButton}
          variant="ghost"
          className="text-[#2196F3] hover:text-[#1E88E5]  p-0 h-auto mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      )}

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#212121] mb-2">
          Partner Onboarding
        </h1>
        <p className="text-[#757575] text-lg">
          Join our growing network of successful partners
        </p>
      </div>
    </div>
  );
}
