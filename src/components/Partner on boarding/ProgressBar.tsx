export function ProgressBar({ currentStep, totalSteps }) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-[#E5E7EB] rounded-full h-2 mb-8">
      <div
        className="bg-[#FFC107] h-2 rounded-full transition-all duration-300"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
}
