import NavigationButton from "../NavigationButton";
import { Card, CardContent } from "../ui/card";

export function ReviewStep({
  formData,
  currentStep,
  onPrevious,
  onNext,
  isFirstStep,
  isLastStep,
}) {
  return (
    <Card className="max-w-3xl mx-auto">
      <CardContent className="p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#111827] mb-2">
            Review Your Information
          </h2>
          <p className="text-[#4B5563] text-lg">
            Please confirm all details are correct
          </p>
        </div>

        <div className="space-y-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-[#111827] mb-2">
                Company Name
              </h3>
              <p className="text-[#4B5563]">
                {formData.companyName || "Not provided"}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#111827] mb-2">
                Contact Email
              </h3>
              <p className="text-[#4B5563]">
                {formData.contactEmail || "Not provided"}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-[#111827] mb-2">Phone</h3>
              <p className="text-[#4B5563]">
                {formData.phone || "Not provided"}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#111827] mb-2">
                Business Type
              </h3>
              <p className="text-[#4B5563]">
                {formData.businessType || "Not provided"}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[#111827] mb-2">Address</h3>
            <p className="text-[#4B5563]">
              {formData.address || "Not provided"}
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
