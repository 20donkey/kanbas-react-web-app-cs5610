

import { NavLink, useParams, useLocation } from "react-router-dom";
import "../styles.css";
import { courses } from "../Database";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const location = useLocation();
  const course = courses.find((course) => course._id === cid);

  
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <NavLink
          key={link}
          to={`/Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item ${
            location.pathname.endsWith(link) ? "active" : ""
          }`}
        >
          {link}
        </NavLink>
      ))}
    </div>
  );
}
