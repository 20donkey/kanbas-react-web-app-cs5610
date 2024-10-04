import { NavLink } from "react-router-dom";
import "../styles.css"

export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink to="/Kanbas/Courses/Home" className="list-group-item">
        Home
      </NavLink>
      <NavLink to="/Kanbas/Courses/Modules" className="list-group-item">
        Modules
      </NavLink>
      <NavLink to="/Kanbas/Courses/1234/Piazza" className="list-group-item">
        Piazza
      </NavLink>
      <NavLink to="/Kanbas/Courses/1234/Zoom" className="list-group-item">
        Zoom
      </NavLink>
      <NavLink to="/Kanbas/Courses/Assignments" className="list-group-item">
        Assignments
      </NavLink>
      <NavLink to="/Kanbas/Courses/1234/Quizzes" className="list-group-item">
        Quizzes
      </NavLink>
      <NavLink to="/Kanbas/Courses/People" className="list-group-item">
        People
      </NavLink>
    </div>
  );
}

