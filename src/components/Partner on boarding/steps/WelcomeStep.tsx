import { Building2, Settings, Check, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import NavigationButtons from "../NavigationButton";
import NavigationButton from "../NavigationButton";

export function WelcomeStep({
  currentStep,
  onPrevious,
  onNext,
  isFirstStep,
  isLastStep,
}) {
  return (
    <Card className="max-w-3xl mx-auto">
      <CardContent className="p-12 text-center">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{
            background: "linear-gradient(to bottom right, #3B82F6, #7C3AED)", // from-blue-500 to-purple-600
          }}
        >
          <Users className="w-12 h-12" style={{ color: "#FFFFFF" }} />
        </div>

        <h2
          className="text-3xl font-bold mb-6"
          style={{ color: "#111827" }} // text-gray-900
        >
          Welcome to Our Partner Network!
        </h2>

        <p
          className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#4B5563" }} // text-gray-600
        >
          Join thousands of successful partners who are growing their business
          with us. Our onboarding process takes just a few minutes to complete.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#DBEAFE" }} // bg-blue-100
            >
              <Building2 className="w-8 h-8" style={{ color: "#2563EB" }} />{" "}
              {/* text-blue-600 */}
            </div>
            <h3
              className="font-semibold mb-2"
              style={{ color: "#111827" }} // text-gray-900
            >
              Exclusive Access
            </h3>
            <p className="text-sm" style={{ color: "#4B5563" }}>
              Partner-only products and pricing
            </p>
          </div>

          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#DCFCE7" }} // bg-green-100
            >
              <Settings className="w-8 h-8" style={{ color: "#16A34A" }} />{" "}
              {/* text-green-600 */}
            </div>
            <h3
              className="font-semibold mb-2"
              style={{ color: "#111827" }} // text-gray-900
            >
              Technical Support
            </h3>
            <p className="text-sm" style={{ color: "#4B5563" }}>
              Dedicated support team
            </p>
          </div>

          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#EDE9FE" }} // bg-purple-100
            >
              <Check className="w-8 h-8" style={{ color: "#7C3AED" }} />{" "}
              {/* text-purple-600 */}
            </div>
            <h3
              className="font-semibold mb-2"
              style={{ color: "#111827" }} // text-gray-900
            >
              Rebate Programs
            </h3>
            <p className="text-sm" style={{ color: "#4B5563" }}>
              Quarterly incentives and bonuses
            </p>
          </div>
        </div>
        <NavigationButton
          currentStep={currentStep}
          onPrevious={onPrevious}
          onNext={onNext}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
        />
      </CardContent>
    </Card>
  );
}
