

import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Navigate, Route, Routes, useLocation, Link } from "react-router-dom";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import People from "./People";


export default function Courses() {
  const location = useLocation();
  
  // Split the pathname and only consider relevant parts
  const pathnames = location.pathname
    .split("/")
    .filter((x) => x && (x === "Assignments" || x === "A1")); // Filter to show only Assignments

  return (
    <div id="wd-courses">
     {/* Breadcrumb integrated into the header */}
<nav aria-label="breadcrumb">
  <ol className="breadcrumb d-flex align-items-center">

    <li className="breadcrumb-item text-danger fs-4">
      <FaAlignJustify className="me-2 fs-4 mb-1" />
      <Link to="/" className="text-danger text-decoration-none">Course 1234</Link>
    </li>
    {pathnames.map((value, index) => {
      const isLast = index === pathnames.length - 1;

      return isLast ? (
        <li key={value} className="breadcrumb-item active fs-4 text-danger" aria-current="page">
          {value}
        </li>
      ) : (
        <li key={value} className="breadcrumb-item">
          <Link to={`/${value}`} className="text-decoration-none text-danger">{value}</Link>
        </li>
      );
    })}
  </ol>
</nav>

      <hr />

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/A1" element={<AssignmentEditor />} />
            <Route path="People" element={<People />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

