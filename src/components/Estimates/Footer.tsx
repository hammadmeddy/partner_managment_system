import React from "react";
import { useState } from "react";
import pointerdown from "../../images/pointerdown.png";
import pointerup from "../../images/pointerup.png";

const Footer = () => {
  const [isNoteVisible, setIsNoteVisible] = useState(false);
  const [note, setNote] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ); // State to manage the note

  const toggleNoteVisibility = () => {
    setIsNoteVisible(!isNoteVisible); // Toggle the visibility state
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value); // Update state with the input value
  };
  return (
    <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] py-6 px-3">
      <div className="flex justify-between items-center mb-3">
        <span className="pb-3 text-[#242E3E] font-bold text-base">Footer</span>
        <button
          onClick={toggleNoteVisibility}
          className="text-lg font-bold  px-2 py-1 rounded"
          title={isNoteVisible ? "Close Footer" : "Open Footer"}
        >
          <img
            src={isNoteVisible ? pointerdown : pointerup}
            alt={isNoteVisible ? "Close Footer" : "Open Footer"}
          />
        </button>
      </div>

      {isNoteVisible && (
        <p className="text-[#595959] font-normal text-xs">
          Enter Note
          <textarea
            value={note}
            onChange={handleNoteChange}
            className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            rows={3} // Adjust the number of rows as needed
          ></textarea>
        </p>
      )}
    </div>
  );
};

export default Footer;
