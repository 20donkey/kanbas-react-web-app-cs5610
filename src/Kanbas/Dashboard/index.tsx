
import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import { useSelector, useDispatch } from "react-redux";
import * as db from "../Database";
import { RootState } from "../store"; // Ensure RootState includes AccountState with currentUser
import { toggleEnrollment, toggleEnrollmentView } from "./reducer";

// Define a local User type with roles
interface User {
  _id: string;
  username: string;
  role: string; // Role is a string; we will handle specific roles in the component
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}) {
  const dispatch = useDispatch();

  // Retrieve currentUser and treat it as a `User | null`
  const { currentUser } = useSelector((state: RootState) => state.accountReducer) as { currentUser: User | null };
  const { enrollments } = db;
  const { enrolledCourses, showAllCourses } = useSelector((state: RootState) => state.dashboard.user);

  if (!currentUser) {
    return <p>Loading...</p>;
  }

  // Check roles locally in the component without modifying accountReducer
  const isStudent = currentUser.role === "STUDENT" || currentUser.role === "TA";
  const isFaculty = currentUser.role === "FACULTY";

  // Filtered courses for students based on enrollment toggle
  const filteredCourses = showAllCourses
    ? courses
    : courses.filter((course) => enrolledCourses.includes(course._id));

  // Handle enrollment toggle for a student
  const handleEnrollmentToggle = (courseId: string) => {
    dispatch(toggleEnrollment(courseId));
  };

  // Toggle between all courses and enrolled courses for students
  const handleToggleEnrollmentView = () => {
    dispatch(toggleEnrollmentView());
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* Faculty View */}
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
          <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
          <hr />
          <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {courses.map((c) => (
                <div key={c._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <div className="card rounded-3 overflow-hidden">
                    <Link
                      to={`/Kanbas/Courses/${c._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <img
                        src={`/images/${c._id.toLowerCase()}.jpg`}
                        width="100%"
                        height={160}
                        alt={c.name}
                      />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">{c.name}</h5>
                        <p
                          className="wd-dashboard-course-title card-text overflow-y-hidden text-dark"
                          style={{ maxHeight: 100 }}
                        >
                          {c.description}
                        </p>
                        <button className="btn btn-primary">Go</button>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(c._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(c);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Student View */}
      {isStudent && (
        <>
          <button
            className="btn btn-primary float-end"
            style={{ marginBottom: "1rem" }}
            onClick={handleToggleEnrollmentView}
          >
            {showAllCourses ? "My Enrollments" : "All Courses"}
          </button>
          <h2 id="wd-dashboard-published">Courses ({filteredCourses.length})</h2>
          <hr />
          <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {filteredCourses.map((c) => (
                <div key={c._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <div className="card rounded-3 overflow-hidden">
                    <Link
                      to={
                        enrolledCourses.includes(c._id)
                          ? `/Kanbas/Courses/${c._id}/Home`
                          : "/dashboard"
                      }
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                      onClick={(e) => {
                        if (!enrolledCourses.includes(c._id)) {
                          e.preventDefault(); // Prevent navigation if not enrolled
                        }
                      }}
                    >
                      <img
                        src={`/images/${c._id.toLowerCase()}.jpg`}
                        width="100%"
                        height={160}
                        alt={c.name}
                      />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">{c.name}</h5>
                        <p
                          className="wd-dashboard-course-title card-text overflow-y-hidden text-dark"
                          style={{ maxHeight: 100 }}
                        >
                          {c.description}
                        </p>
                        <button
                          className={`btn ${
                            enrolledCourses.includes(c._id) ? "btn-danger" : "btn-success"
                          } float-end`}
                          onClick={(event) => {
                            event.preventDefault();
                            handleEnrollmentToggle(c._id);
                          }}
                        >
                          {enrolledCourses.includes(c._id) ? "Unenroll" : "Enroll"}
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
