import { Check } from "lucide-react";

export function StepIndicator({
  steps,
  currentStep,
  getStepState,
  showStepText = true,
}) {
  return (
    <div className="mb-8">
      {showStepText && (
        <p className="text-[#757575] mb-6">
          Step {currentStep} of {steps.length}
        </p>
      )}
      <div className="flex justify-between items-center">
        {steps.map((step) => {
          const Icon = step.icon;
          const state = getStepState(step.id);
          return (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                  state === "completed"
                    ? "bg-[#4CAF50] text-[#FFFFFF]"
                    : state === "active"
                    ? "bg-[#2196F3] text-[#FFFFFF]"
                    : "bg-[#E5E7EB] text-[#9E9E9E]"
                }`}
              >
                {state === "completed" ? (
                  <Check className="w-6 h-6" />
                ) : (
                  <Icon className="w-6 h-6" />
                )}
              </div>
              <span
                className={`text-sm font-medium ${
                  state === "active" ? "text-[#2196F3]" : "text-[#9E9E9E]"
                }`}
              >
                {step.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
