import React, { useState } from "react";
import uploadicon from "../images/uploadicon.png";

const FileUploader = ({
  allowedTypes = ["image/jpeg", "image/png", "image/gif"],
  maxFileSizeMB = 10,
  onFileUpload,
}) => {
  const [file, setFile] = useState(null); // State to store the uploaded file
  const [error, setError] = useState(""); // State to store validation errors

  const maxFileSize = maxFileSizeMB * 1024 * 1024; // Convert MB to bytes

  const validateFile = (uploadedFile) => {
    if (!allowedTypes.includes(uploadedFile.type)) {
      setError("Invalid file type. Only JPG, PNG, and GIF files are allowed.");
      return false;
    }

    if (uploadedFile.size > maxFileSize) {
      setError(`File size exceeds ${maxFileSizeMB} MB.`);
      return false;
    }

    return true;
  };

  const handleFileChange = (uploadedFile) => {
    setError(""); // Clear any previous error

    if (validateFile(uploadedFile)) {
      setFile(uploadedFile); // Store the file in state
      onFileUpload(uploadedFile); // Notify parent component
    }
  };

  const handleInputChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      handleFileChange(uploadedFile);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) {
      handleFileChange(uploadedFile);
    }
  };

  const removeFile = () => {
    setFile(null); // Remove the uploaded file
    setError(""); // Clear any errors
    onFileUpload(null); // Notify parent component that the file is removed
  };

  return (
    <div className="border-[1px] border-dashed rounded-lg border-[#A5D0F4]">
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="flex flex-col items-center justify-center h-40 bg-gray-50 rounded-lg cursor-pointer relative"
      >
        <label
          htmlFor="file-input"
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="flex flex-col justify-center items-center space-y-3">
            {/* Upload icon */}
            <img src={uploadicon} alt="Upload icon" />

            {/* Text for upload */}

            <p className="text-sm text-[#1D89E4] font-bold">Upload a file</p>
            <p className="text-[#595959] text-xs font-normal">
              Or Drag And Drop PNG, JPG, GIF Up To 10MB
            </p>
          </div>
        </label>
        <input
          id="file-input"
          type="file"
          onChange={handleInputChange}
          className="absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer"
          accept={allowedTypes.join(", ")}
        />
      </div>

      {file && (
        <div className="mt-4 p-2">
          <p className="text-[#595959] text-sm font-semibold">
            File: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
          </p>
          <button
            onClick={removeFile}
            className="mt-2 text-xs hover:underline"
            style={{ color: "red" }}
          >
            Remove File
          </button>
        </div>
      )}

      {error && (
        <p className="p-2 text-sm mt-2" style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default FileUploader;
