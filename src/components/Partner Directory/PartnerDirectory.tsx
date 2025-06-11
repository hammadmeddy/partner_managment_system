import {
  Search,
  Plus,
  MapPin,
  Star,
  Users,
  Check,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PartnerDirectory() {
  const partners = [
    {
      id: 1,
      name: "TechFlow Solutions",
      tier: "Gold",
      location: "North America",
      specialty: "Specialty: Industrial AI Consulting",
      rating: 3.7,
      projects: 156,
      avatar: "🏢",
      tierColor: "#FFD700",
    },
    {
      id: 2,
      name: "Global Electronics",
      tier: "Silver",
      location: "Europe",
      specialty: "Specialty: Electronic Design Services",
      rating: 4.2,
      projects: 89,
      avatar: "🌐",
      tierColor: "#C0C0C0",
    },
    {
      id: 3,
      name: "Innovation Partners",
      tier: "Gold",
      location: "Asia Pacific",
      specialty: "Specialty: Digital Vision",
      rating: 4.8,
      projects: 234,
      avatar: "💡",
      tierColor: "#FFD700",
    },
  ];

  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedTier, setSelectedTier] = useState("All Tiers");

  const regions = ["All Regions", "North America", "Europe", "Asia Pacific"];
  const tiers = ["All Tiers", "Gold", "Silver", "Registered"];

  const Dropdown = ({ options, selected, setSelected }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen((prev) => !prev);
    const handleOptionClick = (option) => {
      setSelected(option);
      setIsOpen(false);
    };

    return (
      <div className="relative w-48">
        <button
          onClick={toggleDropdown}
          className="w-full px-4 py-3 bg-white text-[#333333] font-medium rounded-lg flex justify-between items-center"
          type="button"
        >
          <span>{selected}</span>
          <ChevronDown className={`transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
        {isOpen && (
          <ul className="absolute w-full bg-white mt-1 rounded-lg shadow-lg z-10">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {selected === option && (
                  <Check className="mr-2 text-green-500" />
                )}
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const navigate = useNavigate();

  const handleOnBoarding = () => {
    navigate("/partneronboarding");
  };

  const filteredPartners = partners.filter((partner) => {
    const matchesRegion =
      !selectedRegion ||
      selectedRegion === "All Regions" ||
      partner.location === selectedRegion;
    const matchesTier =
      !selectedTier ||
      selectedTier === "All Tiers" ||
      partner.tier === selectedTier;
    return matchesRegion && matchesTier;
  });

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-black mb-2">
            Partner Directory
          </h1>
          <p className="text-[#718096] text-lg">
            Connect with our trusted network of partners worldwide
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex md:flex-row flex-col gap-3 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#666666] w-5 h-5" />
            <input
              type="text"
              placeholder="Search partners by name, location, or specialty..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border-0 rounded-lg text-[#333333] placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-#3182CE"
            />
          </div>
          <div className="flex space-x-4">
            {/* Custom Dropdowns */}
            <Dropdown
              options={regions}
              selected={selectedRegion}
              setSelected={setSelectedRegion}
            />
            <Dropdown
              options={tiers}
              selected={selectedTier}
              setSelected={setSelectedTier}
            />
          </div>
        </div>

        {/* Become a Partner CTA */}
        <div className="bg-[#F7FAFC] border-dotted border-[#2196F3] border-2 rounded-xl p-12 text-center mb-8">
          <div className="w-16 h-16 bg-[#4299E1] rounded-full flex items-center justify-center mx-auto mb-6">
            <Plus className="w-8 h-8 text-[#FFFFFF]" />
          </div>
          <h2 className="text-2xl font-bold text-[#2D3748] mb-3">
            Become a Partner
          </h2>
          <p className="text-[#718096] text-lg mb-8 max-w-md mx-auto">
            Join our network and unlock exclusive benefits, training, and
            support
          </p>
          <button
            onClick={handleOnBoarding}
            className="px-8 py-4 bg-gradient-to-r from-[#4299E1] to-[#9F7AEA] text-[#FFFFFF] font-semibold rounded-xl hover:from-[#3182CE] hover:to-[#805AD5] transition-all shadow-lg"
          >
            Start Onboarding
          </button>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners.length > 0 ? (
            filteredPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Partner Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 pb-6 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#FFFFFF] font-bold text-lg">
                      {partner.avatar}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-[#2D3748] text-lg">
                        {partner.name}
                      </h3>
                      <span
                        className="px-2 py-1 text-xs font-bold rounded text-[#000000]"
                        style={{ backgroundColor: partner.tierColor }}
                      >
                        {partner.tier}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-[#718096]" />
                  <span className="text-[#718096]">{partner.location}</span>
                </div>

                {/* Specialty */}
                <p className="text-[#718096] mb-4">{partner.specialty}</p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#F6AD55] fill-current" />
                    <span className="text-[#2D3748] font-semibold">
                      {partner.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-[#718096]" />
                    <span className="text-[#718096]">
                      {partner.projects} projects
                    </span>
                  </div>
                </div>

                {/* View Profile Button */}
                <button className="w-full py-3 bg-gradient-to-r from-[#4299E1] to-[#9F7AEA] text-white font-semibold rounded-lg  transition-colors">
                  View Profile
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-[#718096]">
              No partners match the selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
