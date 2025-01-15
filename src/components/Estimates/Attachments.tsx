import React from "react";
import { useState } from "react";
import pointerdown from "../../images/pointerdown.png";
import pointerup from "../../images/pointerup.png";
import FileUploader from "../FileUploader";

const Attachments = () => {
  const [isAttachmentVisible, setIsAttachmentVisible] = useState(false);

  const toggleAttachmentVisibility = () => {
    setIsAttachmentVisible(!isAttachmentVisible); // Toggle the visibility state
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
          Attachments
        </span>
        <button
          onClick={toggleAttachmentVisibility}
          className="text-lg font-bold px-2 py-1 rounded-lg"
          title={isAttachmentVisible ? "Close Attachment" : "Open Attachment"}
        >
          <img
            src={isAttachmentVisible ? pointerdown : pointerup}
            alt={isAttachmentVisible ? "Close Attachment" : "Open Attachment"}
          />
        </button>
      </div>
      {isAttachmentVisible && (
        <FileUploader
          allowedTypes={["image/jpeg", "image/png", "image/gif"]}
          maxFileSizeMB={10}
          onFileUpload={handleFileUpload}
        />
      )}
    </div>
  );
};

export default Attachments;
