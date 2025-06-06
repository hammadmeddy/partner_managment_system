import NavigationButton from "../NavigationButton";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function CompanyInfoStep({
  formData,
  onInputChange,
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
            Company Information
          </h2>
          <p className="text-[#4B5563] text-lg">Tell us about your business</p>
        </div>

        <div className="space-y-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label
                htmlFor="companyName"
                className="text-[#9CA3AF] mb-2 block"
              >
                Company Name
              </Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => onInputChange("companyName", e.target.value)}
                placeholder="Your Company LLC"
                className="bg-[#FACC15] border-[#FACC15] text-[#111827] placeholder:text-[#374151] h-12"
              />
            </div>

            <div>
              <Label
                htmlFor="contactEmail"
                className="text-[#9CA3AF] mb-2 block"
              >
                Contact Email
              </Label>
              <Input
                id="contactEmail"
                type="email"
                value={formData.contactEmail}
                onChange={(e) => onInputChange("contactEmail", e.target.value)}
                placeholder="contact@company.com"
                className="bg-[#FACC15] border-[#FACC15] text-[#111827] placeholder:text-[#374151] h-12"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phone" className="text-[#9CA3AF] mb-2 block">
                Phone Number
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => onInputChange("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
                className="bg-[#FACC15] border-[#FACC15] text-[#111827] placeholder:text-[#374151] h-12"
              />
            </div>

            <div>
              <Label
                htmlFor="businessType"
                className="text-[#9CA3AF] mb-2 block"
              >
                Business Type
              </Label>
              <Input
                id="businessType"
                value={formData.businessType}
                onChange={(e) => onInputChange("businessType", e.target.value)}
                placeholder="System Integrator"
                className="bg-[#FACC15] border-[#FACC15] text-[#111827] placeholder:text-[#374151] h-12"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address" className="text-[#9CA3AF] mb-2 block">
              Business Address
            </Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => onInputChange("address", e.target.value)}
              placeholder="123 Business St, City, State 12345"
              className="bg-[#FACC15] border-[#FACC15] text-[#111827] placeholder:text-[#374151] h-12"
            />
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
