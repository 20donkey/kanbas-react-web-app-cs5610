// // // import * as client from "./client";
// // // import { useState, useEffect } from "react";
// // // import { Link, useNavigate } from "react-router-dom";

// // // export default function Profile() {
// // //   const [profile, setProfile] = useState({
// // //     id: "",
// // //     username: "",
// // //     password: "",
// // //     firstName: "",
// // //     lastName: "",
// // //     dob: "",
// // //     email: "",
// // //     role: "USER",
// // //   });

// // //   const navigate = useNavigate();

// // //   const fetchProfile = async () => {
// // //     const account = await client.profile();
// // //     console.log(account);
// // //     if (account !== null && account.dob && account.dob !== "") {
// // //       account.dob = new Date(account.dob).toISOString().split("T")[0];
// // //     }
// // //     setProfile(account);
// // //   };

// // //   useEffect(() => {
// // //     fetchProfile();
// // //   }, []);

// // //   const save = async () => {
// // //     await client.updateUser(profile);
// // //     await fetchProfile(); // Refresh profile data after saving
// // //   };
  

// // //   const signout = async () => {
// // //     await client.signout();
// // //     navigate("/Kanbas/Account/Signin");
// // //   };

// // //   return (
// // //     <div className="container my-5 p-4 border rounded shadow">
// // //       <h1 className="text-center mb-4">Profile</h1>
// // //       <Link
// // //         to="/Kanbas/Account"
// // //         className="btn btn-warning w-100 mb-4"
// // //       >
// // //         Users
// // //       </Link>
// // //       {profile && (
// // //         <form className="col-md-6 mx-auto">
// // //           <div className="form-group">
// // //             <input
// // //               placeholder="Username"
// // //               className="form-control mb-3"
// // //               value={profile.username}
// // //               onChange={(e) =>
// // //                 setProfile({ ...profile, username: e.target.value })
// // //               }
// // //             />
// // //             <input
// // //               placeholder="Password"
// // //               className="form-control mb-3"
// // //               value={profile.password}
// // //               onChange={(e) =>
// // //                 setProfile({ ...profile, password: e.target.value })
// // //               }
// // //             />
// // //             <div className="form-row">
// // //               <div className="col">
// // //                 <input
// // //                   placeholder="First Name"
// // //                   className="form-control mb-3"
// // //                   value={profile.firstName}
// // //                   onChange={(e) =>
// // //                     setProfile({ ...profile, firstName: e.target.value })
// // //                   }
// // //                 />
// // //               </div>
// // //               <div className="col">
// // //                 <input
// // //                   placeholder="Last Name"
// // //                   className="form-control mb-3"
// // //                   value={profile.lastName}
// // //                   onChange={(e) =>
// // //                     setProfile({ ...profile, lastName: e.target.value })
// // //                   }
// // //                 />
// // //               </div>
// // //             </div>
// // //             <input
// // //               placeholder="Date of Birth"
// // //               className="form-control mb-3"
// // //               value={profile.dob}
// // //               type="date"
// // //               onChange={(e) =>
// // //                 setProfile({ ...profile, dob: e.target.value })
// // //               }
// // //             />
// // //             <input
// // //               placeholder="Email"
// // //               className="form-control mb-3"
// // //               value={profile.email}
// // //               onChange={(e) =>
// // //                 setProfile({ ...profile, email: e.target.value })
// // //               }
// // //             />
// // //             <select
// // //               className="form-control mb-3"
// // //               value={profile.role}
// // //               onChange={(e) =>
// // //                 setProfile({ ...profile, role: e.target.value })
// // //               }
// // //             >
// // //               <option value="USER">User</option>
// // //               <option value="ADMIN">Admin</option>
// // //               <option value="FACULTY">Faculty</option>
// // //               <option value="STUDENT">Student</option>
// // //             </select>
// // //             <button
// // //               className="btn btn-primary btn-block mb-3"
// // //               type="button"
// // //               onClick={save}
// // //             >
// // //               Save
// // //             </button>
// // //             <button
// // //               className="btn btn-danger btn-block"
// // //               type="button"
// // //               onClick={signout}
// // //             >
// // //               Signout
// // //             </button>
// // //           </div>
// // //         </form>
// // //       )}
// // //     </div>
// // //   );
// // // }
// // import React, { useEffect, useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import * as client from "./client";

// // export default function Profile() {
// //   const [profile, setProfile] = useState({
// //     id: "",
// //     username: "",
// //     password: "",
// //     firstName: "",
// //     lastName: "",
// //     dob: "",
// //     email: "",
// //     role: "USER",
// //   });

// //   const navigate = useNavigate();

// //   const fetchProfile = async () => {
// //     try {
// //       const account = await client.profile();
// //       if (account?.dob) {
// //         account.dob = new Date(account.dob).toISOString().split("T")[0];
// //       }
// //       setProfile(account);
// //     } catch (error) {
// //       console.error("Failed to fetch profile", error);
// //       navigate("/Kanbas/Account/Signin"); // Redirect to sign-in if unauthorized
// //     }
// //   };

// //   useEffect(() => {
// //     fetchProfile();
// //   }, []);

// //   const save = async () => {
// //     console.log("Saving profile with data:", profile);
// //     try {
// //       const updatedProfile = await client.updateUser(profile); // Ensure updateUser returns the updated profile
// //       console.log("Profile updated successfully:", updatedProfile);
// //       setProfile(updatedProfile); // Update state with the server response
// //     } catch (error) {
// //       console.error("Failed to save profile:", error);
// //     }
// //   };
// //   const signout = async () => {
// //     try {
// //       await client.signout();
// //       navigate("/Kanbas/Account/Signin");
// //     } catch (error) {
// //       console.error("Failed to sign out", error);
// //     }
// //   };

// //   return (
// //     <div className="container my-5 p-4 border rounded shadow">
// //       <h1 className="text-center mb-4">Profile</h1>
// //       <Link to="/Kanbas/Account" className="btn btn-warning w-100 mb-4">
// //         Users
// //       </Link>
// //       {profile && (
// //         <form>
// //           <div className="form-group">
// //             <input
// //               placeholder="Username"
// //               className="form-control mb-3"
// //               value={profile.username}
// //               onChange={(e) =>
// //                 setProfile({ ...profile, username: e.target.value })
// //               }
// //             />
// //             <input
// //               placeholder="Password"
// //               className="form-control mb-3"
// //               value={profile.password}
// //               onChange={(e) =>
// //                 setProfile({ ...profile, password: e.target.value })
// //               }
// //             />
// //             <input
// //               placeholder="First Name"
// //               className="form-control mb-3"
// //               value={profile.firstName}
// //               onChange={(e) =>
// //                 setProfile({ ...profile, firstName: e.target.value })
// //               }
// //             />
// //             <input
// //               placeholder="Last Name"
// //               className="form-control mb-3"
// //               value={profile.lastName}
// //               onChange={(e) =>
// //                 setProfile({ ...profile, lastName: e.target.value })
// //               }
// //             />
// //             <input
// //               placeholder="Date of Birth"
// //               className="form-control mb-3"
// //               value={profile.dob}
// //               type="date"
// //               onChange={(e) =>
// //                 setProfile({ ...profile, dob: e.target.value })
// //               }
// //             />
// //             <input
// //               placeholder="Email"
// //               className="form-control mb-3"
// //               value={profile.email}
// //               onChange={(e) =>
// //                 setProfile({ ...profile, email: e.target.value })
// //               }
// //             />
// //             <select
// //               className="form-control mb-3"
// //               value={profile.role}
// //               onChange={(e) =>
// //                 setProfile({ ...profile, role: e.target.value })
// //               }
// //             >
// //               <option value="USER">User</option>
// //               <option value="ADMIN">Admin</option>
// //               <option value="FACULTY">Faculty</option>
// //               <option value="STUDENT">Student</option>
// //             </select>
// //             <button
// //               className="btn btn-primary w-100 mb-3"
// //               type="button"
// //               onClick={save}
// //             >
// //               Save
// //             </button>
// //             <button
// //               className="btn btn-danger w-100"
// //               type="button"
// //               onClick={signout}
// //             >
// //               Signout
// //             </button>
// //           </div>
// //         </form>
// //       )}
// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import * as client from "./client";
// import { clearCurrentUser } from "./reducer";

// export default function Profile() {
//   const [profile, setProfile] = useState({
//     id: "",
//     username: "",
//     password: "",
//     firstName: "",
//     lastName: "",
//     dob: "",
//     email: "",
//     role: "USER",
//   });

//   const navigate = useNavigate();

//   const fetchProfile = async () => {
//     try {
//       const account = await client.profile();
//       if (account?.dob) {
//         account.dob = new Date(account.dob).toISOString().split("T")[0];
//       }
//       setProfile(account);
//     } catch (error) {
//       console.error("Failed to fetch profile", error);
//       navigate("/Kanbas/Account/Signin");
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const save = async () => {
//     try {
//       await client.updateUser(profile);
//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Failed to save profile", error);
//     }
//   };

//   const signout = async () => {
//     try {
//       await client.signout(); // Clear the session on the backend
//       dispatch(clearCurrentUser()); // Reset currentUser in Redux
//       navigate("/Kanbas/Account/Signin"); // Redirect to the sign-in page
//     } catch (error) {
//       console.error("Failed to sign out", error);
//     }
//   };

//   return (
//     <div className="container my-5 p-4 border rounded shadow">
//       <h1 className="text-center mb-4">Profile</h1>
//       <Link to="/Kanbas/Account" className="btn btn-warning w-100 mb-4">
//         Users
//       </Link>
//       {profile && (
//         <form>
//           <div className="form-group">
//             <input
//               placeholder="Username"
//               className="form-control mb-3"
//               value={profile.username}
//               onChange={(e) =>
//                 setProfile({ ...profile, username: e.target.value })
//               }
//             />
//             <input
//               placeholder="Password"
//               className="form-control mb-3"
//               value={profile.password}
//               onChange={(e) =>
//                 setProfile({ ...profile, password: e.target.value })
//               }
//             />
//             <input
//               placeholder="First Name"
//               className="form-control mb-3"
//               value={profile.firstName}
//               onChange={(e) =>
//                 setProfile({ ...profile, firstName: e.target.value })
//               }
//             />
//             <input
//               placeholder="Last Name"
//               className="form-control mb-3"
//               value={profile.lastName}
//               onChange={(e) =>
//                 setProfile({ ...profile, lastName: e.target.value })
//               }
//             />
//             <input
//               placeholder="Date of Birth"
//               className="form-control mb-3"
//               value={profile.dob}
//               type="date"
//               onChange={(e) =>
//                 setProfile({ ...profile, dob: e.target.value })
//               }
//             />
//             <input
//               placeholder="Email"
//               className="form-control mb-3"
//               value={profile.email}
//               onChange={(e) =>
//                 setProfile({ ...profile, email: e.target.value })
//               }
//             />
//             <select
//               className="form-control mb-3"
//               value={profile.role}
//               onChange={(e) =>
//                 setProfile({ ...profile, role: e.target.value })
//               }
//             >
//               <option value="USER">User</option>
//               <option value="ADMIN">Admin</option>
//               <option value="FACULTY">Faculty</option>
//               <option value="STUDENT">Student</option>
//             </select>
//             <button
//               className="btn btn-primary w-100 mb-3"
//               type="button"
//               onClick={save}
//             >
//               Save
//             </button>
//             <button
//               className="btn btn-danger w-100"
//               type="button"
//               onClick={signout}
//             >
//               Signout
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// }
// function dispatch(arg0: { payload: undefined; type: "account/clearCurrentUser"; }) {
//   throw new Error("Function not implemented.");
// }

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";


export default function Profile() {
  const [profile, setProfile] = useState({
    id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      const account = await client.profile();
      if (account?.dob) {
        account.dob = new Date(account.dob).toISOString().split("T")[0];
      }
      setProfile(account);
    } catch (error) {
      console.error("Failed to fetch profile", error);
      navigate("/Kanbas/Account/Signin"); // Redirect to sign-in if unauthorized
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // const save = async () => {
  //   console.log("Saving profile with data:", profile);
  //   try {
  //     const updatedProfile = await client.updateUser(profile);
  //     setProfile(updatedProfile);
  //   } catch (error) {
  //     console.error("Failed to save profile:", error);
  //   }
  // };
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setProfile(updatedProfile));
  };


  const signout = async () => {
    try {
      await client.signout();
      navigate("/Kanbas/Account/Signin"); // Redirect to sign-in after sign-out
    } catch (error) {
      console.error("Failed to sign out", error);
    }
  };

  return (
    <div className="container my-5 p-4 border rounded shadow">
      <h1 className="text-center mb-4">Profile</h1>
     
      {profile && (
        <form>
          <div className="form-group">
            <input
              placeholder="Username"
              className="form-control mb-3"
              value={profile.username}
              onChange={(e) =>
                setProfile({ ...profile, username: e.target.value })
              }
            />
            <input
              placeholder="Password"
              className="form-control mb-3"
              value={profile.password}
              onChange={(e) =>
                setProfile({ ...profile, password: e.target.value })
              }
            />
            <input
              placeholder="First Name"
              className="form-control mb-3"
              value={profile.firstName}
              onChange={(e) =>
                setProfile({ ...profile, firstName: e.target.value })
              }
            />
            <input
              placeholder="Last Name"
              className="form-control mb-3"
              value={profile.lastName}
              onChange={(e) =>
                setProfile({ ...profile, lastName: e.target.value })
              }
            />
            <input
              placeholder="Date of Birth"
              className="form-control mb-3"
              value={profile.dob}
              type="date"
              onChange={(e) =>
                setProfile({ ...profile, dob: e.target.value })
              }
            />
            <input
              placeholder="Email"
              className="form-control mb-3"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
            />
            <select
              className="form-control mb-3"
              value={profile.role}
              onChange={(e) =>
                setProfile({ ...profile, role: e.target.value })
              }
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
            <button
              className="btn btn-primary w-100 mb-3"
              type="button"
              onClick={updateProfile}
            >
              Update
            </button>
            <button
              className="btn btn-danger w-100"
              type="button"
              onClick={signout}
            >
              Signout
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
