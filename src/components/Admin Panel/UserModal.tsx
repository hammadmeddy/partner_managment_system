import React, { useState } from "react";
import { X } from "lucide-react";

const UserModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    isActive: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (!formData.role) newErrors.role = "Role is required.";
    return newErrors;
  };

  const isFormValid =
    formData.fullName &&
    formData.email &&
    /\S+@\S+\.\S+/.test(formData.email) &&
    formData.password &&
    formData.password.length >= 6 &&
    formData.role &&
    formData.isActive;

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form Submitted", formData);
    onClose(); // Close modal on successful submission
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[99999] cursor-default"
      style={{ zIndex: 1000 }}
      onClick={onClose}
    >
      <div
        className="bg-white shadow-2xl max-w-2xl w-[400px] overflow-y-auto relative animate-in fade-in-0 zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-4 mb-4 border-b border-[#e5e7eb]">
          <div>
            <h2 className="text-2xl flex justify-start font-bold text-[#0f172a]">
              Add New User
            </h2>
            <p className="text-[#64748b] mt-1">
              Add a new user by filling up this form
            </p>
          </div>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-[#64748b]" />
          </button>
        </div>
        <form className="p-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block flex justify-start text-[#475569] mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border-[1px] rounded-xl border-[#cbd5e1] text-black"
            />
            {errors.fullName && (
              <p className="text-[#ef4444] flex justify-start text-xs">
                {errors.fullName}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block flex justify-start text-[#475569] mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border-[1px] rounded-xl border-[#cbd5e1] text-black"
            />
            {errors.email && (
              <p className="text-[#ef4444] flex justify-start text-xs">
                {errors.email}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block flex justify-start text-[#475569] mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border-[1px] rounded-xl border-[#cbd5e1] text-black"
            />
            {errors.password && (
              <p className="text-[#ef4444] flex justify-start text-xs">
                {errors.password}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block flex justify-start text-[#475569] mb-1">
              Role
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border-[1px] rounded-xl border-[#cbd5e1] text-black"
            />
            {errors.role && (
              <p className="text-[#ef4444] flex justify-start text-xs">
                {errors.role}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="flex items-center text-[#475569]">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
                className="mr-2"
              />
              Is Active
            </label>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-[#64748b] rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!formData.isActive} // Disable when the checkbox is not checked
              className={`flex-1 px-6 py-3 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg ${
                formData.isActive
                  ? "cursor-pointer opacity-100"
                  : "cursor-not-allowed opacity-50"
              }`}
              style={{
                backgroundImage: formData.isActive
                  ? "linear-gradient(to right, #4f46e5, #9333ea)"
                  : "none",
                backgroundColor: formData.isActive ? "transparent" : "#cbd5e1", // Fallback for disabled
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
