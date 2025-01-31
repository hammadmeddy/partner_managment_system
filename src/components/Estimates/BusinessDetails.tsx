import React from "react";
import pointerdown from "../../images/pointerdown.png";
import pointerup from "../../images/pointerup.png";
import { useState } from "react";
import FileUploader from "../FileUploader";
import BusinessAddressAndContactDetail from "./BusinessAddressAndContactDetail";

const BusinessDetails = () => {
  const [isBusinessDetailsVisible, setIsBusinessDetailsVisible] =
    useState(false);
  const toggleBusinessDetailsVisibility = () => {
    setIsBusinessDetailsVisible(!isBusinessDetailsVisible);
  };

  const [summary, setSummary] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporunt ut..."
  );
  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
  };

  const [title, setTitle] = useState("Elogix");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFileUpload = (file) => {
    if (file) {
      console.log("Uploaded file:", file);
    } else {
      console.log("File removed");
    }
  };
  return (
    <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] py-6 px-3">
      <div className="flex justify-between items-center mb-3">
        <span className="pb-3 text-[#242E3E] font-bold text-base">
          Business Address, Contact Details, Title, Summary & Logo
        </span>
        <button
          onClick={toggleBusinessDetailsVisibility}
          className="text-lg font-bold px-2 py-1 rounded"
          title={
            isBusinessDetailsVisible
              ? "Close Business Details"
              : "Open Business Details"
          }
        >
          <img
            src={isBusinessDetailsVisible ? pointerdown : pointerup}
            alt={
              isBusinessDetailsVisible
                ? "Close Business Details"
                : "Open Business Details"
            }
          />
        </button>
      </div>
      {isBusinessDetailsVisible && (
        <>
          <BusinessAddressAndContactDetail />
          <FileUploader
            allowedTypes={["image/jpeg", "image/png", "image/gif"]}
            maxFileSizeMB={10}
            onFileUpload={handleFileUpload}
          />
          <div className="flex gap-[16px] flex-col-2 mt-4">
            <span className="flex-1">
              <p className="text-[#595959] font-normal text-xs">
                Title
                <textarea
                  value={title}
                  onChange={handleTitleChange}
                  className="w-full border-[1px] border-[#ECE9E9] text-[#242E3E] rounded-lg p-2 text-sm resize-none"
                  rows={1}
                ></textarea>
              </p>
            </span>
            <span className="flex-1">
              <p className="  text-[#595959] font-normal text-xs">
                Summary
                <textarea
                  value={summary}
                  onChange={handleSummaryChange}
                  className="w-full border-[1px] text-[#242E3E]  border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
                  rows={1}
                ></textarea>
              </p>
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default BusinessDetails;
