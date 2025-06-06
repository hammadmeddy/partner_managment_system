export default function NavigationButton({
  currentStep,
  onPrevious,
  onNext,
  isFirstStep,
  isLastStep,
}) {
  return (
    <div className="flex gap-4 justify-between">
      <button
        onClick={onPrevious}
        disabled={isFirstStep}
        style={{
          backgroundColor: isFirstStep ? "#3aeccb" : "#30d3b4", // bg-yellow-400 and hover:bg-yellow-500
          color: "#111827", // text-gray-900
          border: "1px solid #30d3b4", // border-yellow-400
          padding: "0.5rem 2rem",
          borderRadius: "0.75rem",
          fontWeight: "500",
          transition: "background-color 0.3s",
          opacity: isFirstStep ? 0.5 : 1, // disabled:opacity-50
          cursor: isFirstStep ? "not-allowed" : "pointer", // disabled:cursor-not-allowed
        }}
      >
        {isFirstStep ? "Go Back" : "Previous"}
      </button>

      <button
        onClick={onNext}
        style={{
          padding: "0.5rem 2rem",
          borderRadius: "0.75rem",
          fontWeight: "500",
          color: "#FFFFFF", // text-white
          background: isLastStep
            ? "linear-gradient(to right, #3B82F6, #7C3AED)" // from-blue-500 to-purple-600
            : "#3B82F6", // bg-blue-500
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => {
          if (isLastStep) {
            e.target.style.background =
              "linear-gradient(to right, #2563EB, #5B21B6)"; // hover:from-blue-600 to-purple-700
          } else {
            e.target.style.background = "#2563EB"; // hover:bg-blue-600
          }
        }}
        onMouseOut={(e) => {
          e.target.style.background = isLastStep
            ? "linear-gradient(to right, #3B82F6, #7C3AED)" // original gradient
            : "#3B82F6"; // original solid color
        }}
      >
        {isLastStep ? "Submit Application" : "Next"}
      </button>
    </div>
  );
}
