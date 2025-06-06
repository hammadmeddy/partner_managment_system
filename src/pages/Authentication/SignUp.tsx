import React, { useState, FormEvent, useEffect } from "react";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    email: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
    email: "",
  });

  const [touched, setTouched] = useState({
    password: false,
    confirmPassword: false,
    email: false,
  });

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "password":
        if (!value) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
        if (!/[A-Z]/.test(value))
          return "Password must contain at least one uppercase letter";
        if (!/[0-9]/.test(value))
          return "Password must contain at least one number";
        break;
      case "confirmPassword":
        if (!value) return "Confirm Password is required";
        if (value !== formData.password) return "Passwords do not match";
        break;
      case "email":
        if (!value) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(value)) return "Please enter a valid email";
        break;
      default:
        return "";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (type !== "checkbox") {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  useEffect(() => {
    // Validate fields when touched
    Object.keys(touched).forEach((field) => {
      if (touched[field as keyof typeof touched]) {
        const error = validateField(
          field,
          formData[field as keyof typeof formData] as string
        );
        setErrors((prev) => ({
          ...prev,
          [field]: error,
        }));
      }
    });
  }, [touched, formData]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      password: true,
      confirmPassword: true,
      email: true,
    });

    // Validate all fields
    const newErrors = {
      password: validateField("password", formData.password),
      confirmPassword: validateField(
        "confirmPassword",
        formData.confirmPassword
      ),
      email: validateField("email", formData.email),
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).every((error) => !error)) {
      console.log("Form submitted:", formData);
    }
  };

  // Check if the form is valid
  const isFormValid =
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword &&
    formData.email &&
    formData.password &&
    formData.confirmPassword === formData.password;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl flex flex-col mx-3 md:flex-row overflow-hidden rounded-lg shadow-xl relative">
        {/* Left Section (Form) */}
        <div className="w-full md:w-3/5 bg-white p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="text-center block text-[#b2282f] sm:hidden mb-4 font-semibold text-xl">
                Sign Up
              </div>
              <label className="block text-[#b2282f] mb-2">EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full py-2 border-b focus:outline-none focus:border-[#b2282f]"
                placeholder="Enter your email"
              />
              {touched.email && errors.email && (
                <p className="text-[#b2282f] text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-[#b2282f] mb-2">PASSWORD</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full py-2 border-b focus:outline-none focus:border-[#b2282f]"
                placeholder="Enter your password"
              />
              {touched.password && errors.password && (
                <p className="text-[#b2282f] text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <label className="block text-[#b2282f] mb-2">
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full py-2 border-b focus:outline-none focus:border-[#b2282f]"
                placeholder="Confirm your password"
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-[#b2282f] text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#b2282f] border-gray-300 rounded focus:ring-[#b2282f]"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>
              {/* <button type="button" className="text-sm text-[#b2282f] hover:underline">
                                Forgot password?
                            </button> */}
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-3 rounded transition-opacity ${
                isFormValid
                  ? "bg-[#b2282f] text-white hover:bg-[#d54d6d]"
                  : "bg-[#b2282f] text-white cursor-not-allowed opacity-40"
              }`}
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Circle with Arrow */}
        <div className="hidden md:flex absolute left-[58%] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#b2282f] rounded-full items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        {/* Right Section */}
        <div className="w-full hidden md:flex pb-8 md:w-2/5 bg-[#b2282f] text-white flex items-center justify-center p-6">
          <h1 className="text-5xl font-bold relative inline-block">
            <span className="relative">
              Sign
              <span className="absolute left-0 bottom-[-11px] w-full h-[2px] bg-white pt-1"></span>
            </span>
            up
          </h1>
        </div>
      </div>
    </div>
  );
}
