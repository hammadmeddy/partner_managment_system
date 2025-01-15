import React, { useState } from "react";
import edit from "../../images/edit.png";

const BusinessAddressAndContactDetail = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [businessTitle, setBusinessTitle] = useState("Elogix");
  const [contactDetail, setContactDetail] = useState("United States");

  // Handle text change for business title
  const handleBusinessTitleChange = (e) => {
    setBusinessTitle(e.target.value);
  };

  // Handle text change for contact detail
  const handleContactDetailChange = (e) => {
    setContactDetail(e.target.value);
  };

  // Handle save button click
  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex  flex-col md:flex-row justify-between items-center rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] py-6 px-3 mb-3">
      <div className="flex flex-col items-center md:items-start">
        {isEditing ? (
          <>
            <input
              type="text"
              value={businessTitle}
              onChange={handleBusinessTitleChange}
              className="border-[1px] border-[#ECE9E9] p-1 rounded-md mb-2"
            />
            <input
              type="text"
              value={contactDetail}
              onChange={handleContactDetailChange}
              className="border-[1px] border-[#ECE9E9] p-1 rounded-md"
            />
          </>
        ) : (
          <>
            <span className="text-sm font-bold text-[#242E3E]">
              {businessTitle}
            </span>
            <span className="text-xs font-normal text-[#242E3E]">
              {contactDetail}
            </span>
          </>
        )}
      </div>
      <div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="ml-2  text-[#1D89E4] hover:cursor-pointer mt-2"
        >
          {isEditing ? (
            "Save"
          ) : (
            <div className="flex gap-1 text-sm">
              <img src={edit} alt="Edit icon" className="h-5 w-5" /> Edit your
              business address and contact details
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default BusinessAddressAndContactDetail;
