import { MessageCircle, Phone, Mail } from "lucide-react";
import ContactCard from "./ContactCard";

export default function Contact() {
  const handleStartChat = () => {
    console.log("Starting live chat");
    // Implement chat logic here
  };

  const handleCallNow = () => {
    console.log("Initiating call");
    // Implement call logic here
  };

  const handleSendEmail = () => {
    console.log("Opening email form");
    // Implement email logic here
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ContactCard
        icon={MessageCircle}
        iconColor="#3B82F6"
        iconBgColor="#3B82F620"
        title="Live Chat"
        description="Chat with our AI assistant or connect to an agent"
        details={
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
            <span className="text-[#10B981] font-medium">Available now</span>
          </div>
        }
        buttonText="Start Chat"
        onButtonClick={handleStartChat}
      />

      <ContactCard
        icon={Phone}
        iconColor="#10B981"
        iconBgColor="#10B98120"
        title="Phone Support"
        description="Speak directly with our technical team"
        details={
          <>
            <div className="text-[#6B7280] mb-2">+1 (555) 123-4567</div>
            <div className="text-[#6B7280] mb-4">Mon-Fri, 8AM-6PM EST</div>
          </>
        }
        buttonText="Call Now"
        onButtonClick={handleCallNow}
      />

      <ContactCard
        icon={Mail}
        iconColor="#8B5CF6"
        iconBgColor="#8B5CF620"
        title="Email Support"
        description="Send us a detailed message"
        details={
          <>
            <div className="text-[#6B7280] mb-2">support@company.com</div>
            <div className="text-[#6B7280] mb-4">Response within 24 hours</div>
          </>
        }
        buttonText="Send Email"
        onButtonClick={handleSendEmail}
      />
    </div>
  );
}
