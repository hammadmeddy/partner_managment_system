"use client";

import { useState } from "react";
import { Building2, Settings, Check, Clock, Users } from "lucide-react";
import {
  initialFormData,
  STEP_STATES,
} from "../../utils/global functions/formdata";
import { WelcomeStep } from "./steps/WelcomeStep";
import { CompanyInfoStep } from "./steps/CompanyInfoStep";
import { QualificationsStep } from "./steps/QualificationStep";
import { ReviewStep } from "./steps/ReviewStep";
import { SuccessStep } from "./steps/SuccessStep";
import { OnboardingHeader } from "./OnBoardingHeader";
import { ProgressBar } from "./ProgressBar";
import { StepIndicator } from "./StepIndicator";

export default function PartnerOnBoarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);

  const steps = [
    { id: 1, name: "Welcome", icon: Users },
    { id: 2, name: "Company Info", icon: Building2 },
    { id: 3, name: "Qualifications", icon: Settings },
    { id: 4, name: "Review", icon: Check },
    { id: 5, name: "Approval", icon: Clock },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepState = (stepId) => {
    if (currentStep === 5) {
      return stepId <= 4 ? STEP_STATES.COMPLETED : STEP_STATES.ACTIVE;
    }
    if (stepId < currentStep) return STEP_STATES.COMPLETED;
    if (stepId === currentStep) return STEP_STATES.ACTIVE;
    return STEP_STATES.INACTIVE;
  };

  const renderStepContent = () => {
    // Common props for navigation
    const commonProps = {
      currentStep,
      onPrevious: prevStep,
      onNext: nextStep,
      isFirstStep: currentStep === 1,
      isLastStep: currentStep === 4,
    };

    switch (currentStep) {
      case 1:
        return <WelcomeStep {...commonProps} />;
      case 2:
        return (
          <CompanyInfoStep
            formData={formData}
            onInputChange={handleInputChange}
            {...commonProps}
          />
        );
      case 3:
        return (
          <QualificationsStep
            formData={formData}
            onInputChange={handleInputChange}
            {...commonProps}
          />
        );
      case 4:
        return <ReviewStep formData={formData} {...commonProps} />;
      case 5:
        return <SuccessStep />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto">
        <OnboardingHeader showBackButton={currentStep < 5} />

        {currentStep < 5 && (
          <>
            <ProgressBar currentStep={currentStep} totalSteps={5} />
            <StepIndicator
              steps={steps}
              currentStep={currentStep}
              getStepState={getStepState}
              showStepText={true}
            />
          </>
        )}

        {currentStep === 5 && (
          <StepIndicator
            steps={steps}
            currentStep={currentStep}
            getStepState={getStepState}
            showStepText={false}
          />
        )}

        {renderStepContent()}
      </div>
    </div>
  );
}
