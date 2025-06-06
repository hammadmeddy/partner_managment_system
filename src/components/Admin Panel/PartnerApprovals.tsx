import PartnerApprovalItem from "./PartnetApprovalItem";

export default function PartnerApprovals() {
  const pendingApprovals = [
    {
      company: "TechCorp Solutions",
      email: "contact@techcorp.com",
      category: "System Integrator",
      region: "North America",
      date: "2024-01-15",
    },
    {
      company: "Global Distribution",
      email: "admin@globaldist.com",
      category: "Distributor",
      region: "Europe",
      date: "2024-01-14",
    },
    {
      company: "Smart Solutions Inc",
      email: "info@smartsolutions.com",
      category: "Partner",
      region: "Asia Pacific",
      date: "2024-01-13",
    },
  ];

  const handleReview = (company) => {
    console.log(`Reviewing ${company}`);
  };

  const handleApprove = (company) => {
    console.log(`Approving ${company}`);
  };

  const handleReject = (company) => {
    console.log(`Rejecting ${company}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#1F2937] mb-6">
        Pending Partner Approvals
      </h2>
      <div>
        {pendingApprovals.map((approval, index) => (
          <PartnerApprovalItem
            key={index}
            company={approval.company}
            email={approval.email}
            category={approval.category}
            region={approval.region}
            date={approval.date}
            onReview={handleReview}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        ))}
      </div>
    </div>
  );
}
