// import * as client from "./client";
// import { useEffect, useState } from "react";
// import { setCurrentUser } from "./reducer";
// import { useDispatch } from "react-redux";
// export default function Session({ children }: { children: any }) {
//   const [pending, setPending] = useState(true);
//   const dispatch = useDispatch();
//   const fetchProfile = async () => {
//     try {
//       const currentUser = await client.profile();
//       dispatch(setCurrentUser(currentUser));
//     } catch (err: any) {
//       console.error(err);
//     }
//     setPending(false);
//   };
//   useEffect(() => {
//     fetchProfile();
//   }, []);
//   if (!pending) {
//     return children;
//   }
// }

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser, clearCurrentUser } from "./reducer";
import * as client from "./client";

const Session = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const validateSession = async () => {
      try {
        const profile = await client.profile(); // Fetch profile from the backend
        dispatch(setCurrentUser(profile));
      } catch (error) {
        console.error("Session validation failed", error);
        dispatch(clearCurrentUser());
      }
    };

    validateSession();
  }, [dispatch]);

  return <>{children}</>;
};

export default Session;
