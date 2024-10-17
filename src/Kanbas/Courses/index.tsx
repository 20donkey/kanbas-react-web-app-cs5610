



import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Navigate, Route, Routes, useLocation, Link , useParams} from "react-router-dom";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import People from "./People";
import { courses } from "../Database";


export default function Courses() {

  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);

  const location = useLocation();
  
  


  return (
    <div id="wd-courses">
    


<nav aria-label="breadcrumb">
        <ol className="breadcrumb d-flex align-items-center">

          <li className="breadcrumb-item text-danger fs-4">
            <FaAlignJustify className="me-2 fs-4 mb-1" />
            <Link to={`/Kanbas/Courses/${cid}`} className="text-danger text-decoration-none">
              {course && course.name} &gt; {location.pathname.split("/")[4]}
            </Link>
          </li>
         
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
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
            <Route path="People" element={<People />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

