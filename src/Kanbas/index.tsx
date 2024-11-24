import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import Session from "./Account/Session";
import { useSelector } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Kanbas() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            {/* Redirect root path to sign-in page */}
            <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />

            {/* Public routes */}
            <Route path="/Account/*" element={<Account />} />

            {/* Protected routes */}
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={[]} />
                </ProtectedRoute>
              }
            />

            {/* Public or placeholder routes */}
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />

            {/* Catch-all route for unknown paths */}
            <Route
              path="*"
              element={<Navigate to="/Kanbas/Account/Signin" />}
            />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
