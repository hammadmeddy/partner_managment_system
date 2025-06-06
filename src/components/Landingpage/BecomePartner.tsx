import { useNavigate } from "react-router-dom";

const BecomePartner = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/partneronboarding");
  };
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2196F3] via-[ #1E88E5] to-[#8E24AA] px-8 py-16 text-center">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/90 via-blue-600/90 to-purple-600/90"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Join Our Partner Network?
          </h1>

          <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Start your journey with our streamlined onboarding process and
            unlock exclusive benefits and resources.
          </p>

          <button
            onClick={handleButtonClick}
            className="bg-white text-[#1E88E5] font-semibold px-8 py-4 rounded-xl text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
          >
            Become a Partner
          </button>
        </div>

        {/* Subtle background pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-white rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default BecomePartner;
