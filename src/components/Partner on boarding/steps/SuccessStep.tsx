import { Check } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export function SuccessStep() {
  const navigate = useNavigate();

  const handlePartnerPage = () => {
    navigate("/partnerdashboard");
  };
  return (
    <Card className="max-w-3xl mx-auto mb-8">
      <CardContent className="p-12 text-center">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{
            background: "linear-gradient(to bottom right, #22C55E, #3B82F6)", // from-green-500 to-blue-500
          }}
        >
          <Check className="w-12 h-12 text-white" />
        </div>

        <h2
          className="text-3xl font-bold mb-6"
          style={{ color: "#111827" }} // text-gray-900
        >
          Application Submitted!
        </h2>

        <p
          className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#4B5563" }} // text-gray-600
        >
          Thank you for applying to become a partner. Our team will review your
          application and get back to you within 2-3 business days.
        </p>

        <div
          className="rounded-lg p-8 mb-8"
          style={{ backgroundColor: "#F9FAFB" }} // bg-gray-50
        >
          <h3
            className="text-xl font-semibold mb-6"
            style={{ color: "#111827" }} // text-gray-900
          >
            What happens next?
          </h3>
          <div className="space-y-4 text-left max-w-md mx-auto">
            {[
              "Application review (1-2 business days)",
              "Background and reference check",
              "Welcome package and account setup",
              "Access to partner portal and resources",
            ].map((text, index) => (
              <div key={index} className="flex items-center">
                <Check
                  className="w-5 h-5 mr-3 flex-shrink-0"
                  style={{ color: "#22C55E" }} // text-green-500
                />
                <span style={{ color: "#4B5563" }}>{text}</span>{" "}
                {/* text-gray-600 */}
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={handlePartnerPage}
          className="px-8 rounded-xl"
          style={{
            background: "linear-gradient(to right, #3B82F6, #7C3AED)", // from-blue-500 to-purple-600
          }}
          onMouseEnter={
            (e) =>
              (e.currentTarget.style.background =
                "linear-gradient(to right, #2563EB, #6B21A8)") // hover:from-blue-600 to-purple-700
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(to right, #3B82F6, #7C3AED)")
          }
        >
          Go to Partner Portal
        </Button>
      </CardContent>
    </Card>
  );
}
