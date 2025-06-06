import NavigationButton from "../NavigationButton";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function QualificationsStep({
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
            Qualifications
          </h2>
          <p className="text-[#4B5563] text-lg">
            Share your expertise and certifications
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <Label
              htmlFor="yearsInBusiness"
              className="text-[#9CA3AF] mb-2 block"
            >
              Years in Business
            </Label>
            <Input
              id="yearsInBusiness"
              value={formData.yearsInBusiness}
              onChange={(e) => onInputChange("yearsInBusiness", e.target.value)}
              placeholder="5"
              className="bg-[#FACC15] border-[#FACC15] text-[#111827] placeholder:text-[#374151] h-12"
            />
          </div>

          <div>
            <Label
              htmlFor="certifications"
              className="text-[#9CA3AF] mb-2 block"
            >
              Certifications
            </Label>
            <Input
              id="certifications"
              value={formData.certifications}
              onChange={(e) => onInputChange("certifications", e.target.value)}
              placeholder="ISO 9001, OHSAS 18001, etc."
              className="bg-[#FACC15] border-[#FACC15] text-[#111827] placeholder:text-[#374151] h-12"
            />
          </div>

          <div>
            <Label htmlFor="references" className="text-[#9CA3AF] mb-2 block">
              References
            </Label>
            <Input
              id="references"
              value={formData.references}
              onChange={(e) => onInputChange("references", e.target.value)}
              placeholder="Previous client contacts or projects"
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
