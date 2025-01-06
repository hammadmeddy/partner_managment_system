// import { useState } from "react";
// import React from "react";
// import { resetPassword } from "../api/modules/Swiftsync.class";
// import Toaster from "./Toast/Toast";

// const ResetPassword = () => {
//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [oldPasswordError, setOldPasswordError] = useState("");
//   const [newPasswordError, setNewPasswordError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState({ success: "", error: "" });

//   const handleResetPassword = async () => {
//     if (!oldPassword) setOldPasswordError("Old password is required.");
//     else setOldPasswordError("");

//     if (!newPassword) setNewPasswordError("New password is required.");
//     else setNewPasswordError("");

//     setLoading(true);
//     const res = await resetPassword({
//       old_password: oldPassword,
//       new_password: newPassword,
//     });
//     console.log(res);
//     if (res?.status === 200) {
//       setLoading(true);
//       setError({ error: "", success: res?.data?.message });
//       //   setTimeout(() => {
//       //     navigate('signin');
//       //   }, 3000);
//     } else {
//       setError({
//         error: res?.message?.response?.data?.error,
//         success: "",
//       });
//     }
//     setLoading(false);
//   };

//   const handleOldPasswordChange = (e: any) => {
//     setOldPassword(e.target.value);
//     if (e.target.value) setOldPasswordError("");
//   };

//   const handleNewPasswordChange = (e: any) => {
//     setNewPassword(e.target.value);
//     if (e.target.value) setNewPasswordError("");
//   };

//   return (
//     // <>
//     //   <Toaster message={error} />
//     //   <div className=" rounded-md bg-[#EEEEEE]  py-9 px-10">
//     //     <div className="mb-4 text-2xl font-normal text-black">
//     //       Reset Password
//     //     </div>

//     //     {/* Input Fields in Flex Row Layout */}
//     //     <div className="mb-3 flex w-full flex-wrap justify-start gap-9">
//     //       {/* Old Password */}
//     //       <div className="w-full ">
//     //         <label htmlFor="oldPassword" className="text-[#75849B]">
//     //           Old password
//     //         </label>
//     //         <input
//     //           className="mt-2 h-12 w-full rounded-md bg-white px-4 outline-none"
//     //           type="password"
//     //           id="oldPassword"
//     //           placeholder="Enter old password"
//     //           value={oldPassword}
//     //           onChange={handleOldPasswordChange}
//     //         />
//     //       </div>

//     //       {/* New Password */}
//     //       <div className="w-full ">
//     //         <label htmlFor="newPassword" className="text-[#75849B]">
//     //           New password
//     //         </label>
//     //         <input
//     //           className="mt-2 h-12 w-full rounded-md bg-white px-4 outline-none"
//     //           type="password"
//     //           id="newPassword"
//     //           placeholder="Enter new password"
//     //           value={newPassword}
//     //           onChange={handleNewPasswordChange}
//     //         />
//     //         {newPasswordError && (
//     //           <div className="text-red-500 mt-1 text-sm">
//     //             {newPasswordError}
//     //           </div>
//     //         )}
//     //       </div>
//     //     </div>

//     //     {/* Reset Button */}
//     //     <div className="w-full text-center">
//     //       <button
//     //         onClick={handleResetPassword}
//     //         disabled={!oldPassword || !newPassword}
//     //         className={`mt-6 flex w-full items-center justify-center gap-1 rounded-md bg-[#2691B6] py-2 font-medium text-white  ${
//     //           !oldPassword || !newPassword
//     //             ? "cursor-not-allowed opacity-50"
//     //             : ""
//     //         }`}
//     //       >
//     //         Reset Password
//     //       </button>
//     //     </div>
//     //   </div>
//     // </>
//   );
// };

// export default ResetPassword;
