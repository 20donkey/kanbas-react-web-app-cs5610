import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import { useSelector } from "react-redux";
import {
  fetchAllCourses,
  createModuleForCourse,
  findModulesForCourse,
  deleteCourse,
  updateCourse,
} from "../Courses/client";
import { fetchEnrollments, enrollInCourse, unenrollFromCourse } from "./client";
import { RootState } from "../store";

interface User {
  _id: string;
  username: string;
  role: string;
}

interface Course {
  _id: string;
  name: string;
  description: string;
  number?: string;
  startDate?: string;
  endDate?: string;
}

export default function Dashboard() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  ) as { currentUser: User | null };

  const [courses, setCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course>({
    _id: "",
    name: "",
    description: "",
    number: "",
    startDate: "",
    endDate: "",
  });
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isStudent = currentUser?.role === "STUDENT";
  const isFaculty = currentUser?.role === "FACULTY";

  // Fetch all courses and enrollments on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCourses = await fetchAllCourses();
        setCourses(fetchedCourses);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
        setError("Unable to load courses.");
      }

      if (isStudent && currentUser) {
        try {
          const enrollments = await fetchEnrollments(currentUser._id);
          setEnrolledCourses(enrollments.map((e: any) => e.course));
          setError(null);
        } catch (error) {
          console.error("Failed to fetch enrollments:", error);
          setError("Unable to load enrolled courses.");
        }
      }
    };

    fetchData();
  }, [currentUser, isStudent]);

  // Handle Add Course for Faculty
  const handleAddCourse = async () => {
    try {
      const newCourse = {
        ...course,
        _id: Date.now().toString(),
        startDate: course.startDate || new Date().toISOString().split("T")[0],
        endDate: course.endDate || new Date().toISOString().split("T")[0],
      };
      setCourses((prevCourses) => [...prevCourses, newCourse]);
    } catch (error) {
      console.error("Failed to add course:", error);
    }
  };

  // Handle Update Course for Faculty
  const handleUpdateCourse = async () => {
    try {
      await updateCourse(course);
      setCourses((prevCourses) =>
        prevCourses.map((c) => (c._id === course._id ? { ...course } : c))
      );
    } catch (error) {
      console.error("Failed to update course:", error);
    }
  };

  // Handle Delete Course for Faculty
  const handleDeleteCourse = async (courseId: string) => {
    try {
      await deleteCourse(courseId);
      setCourses((prevCourses) =>
        prevCourses.filter((course) => course._id !== courseId)
      );
    } catch (error) {
      console.error("Failed to delete course:", error);
    }
  };

  const handleEnrollmentToggle = async (courseId: string) => {
    if (!currentUser) return;

    if (enrolledCourses.includes(courseId)) {
      await unenrollFromCourse(currentUser._id, courseId);
      setEnrolledCourses((prev) => prev.filter((id) => id !== courseId));
    } else {
      await enrollInCourse(currentUser._id, courseId);
      setEnrolledCourses((prev) => [...prev, courseId]);
    }
  };

  const toggleEnrollmentView = () => {
    setShowAllCourses(!showAllCourses);
  };

  const filteredCourses = isStudent
    ? showAllCourses
      ? courses
      : courses.filter((course) => enrolledCourses.includes(course._id))
    : courses;

  if (!currentUser) {
    return (
      <div>
        <h2>All Courses</h2>
        {courses.map((c) => (
          <div key={c._id} className="card">
            <h5>{c.name}</h5>
            <p>{c.description}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={handleAddCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={handleUpdateCourse}
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
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}

      {isStudent && (
        <button
          className="btn btn-primary float-end mb-4"
          onClick={toggleEnrollmentView}
        >
          {showAllCourses ? "My Enrollments" : "All Courses"}
        </button>
      )}

      <h2 id="wd-dashboard-published">
        {isStudent
          ? showAllCourses
            ? "All Courses"
            : `Enrolled Courses (${filteredCourses.length})`
          : `All Courses (${filteredCourses.length})`}
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {filteredCourses.map((course) => (
            <div
              key={course._id}
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
            >
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={
                    isStudent && !enrolledCourses.includes(course._id)
                      ? "#"
                      : `/Kanbas/Courses/${course._id}/Home`
                  }
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  onClick={(e) => {
                    if (isStudent && !enrolledCourses.includes(course._id)) {
                      e.preventDefault();
                    }
                  }}
                >
                  <img
                    src={`/images/${course._id.toLowerCase()}.jpg`}
                    width="100%"
                    height={160}
                    alt={course.name}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden text-dark"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                  </div>
                </Link>
                {isStudent && (
                  <button
                    className={`btn float-end ${
                      enrolledCourses.includes(course._id)
                        ? "btn-danger"
                        : "btn-success"
                    }`}
                    onClick={() => handleEnrollmentToggle(course._id)}
                  >
                    {enrolledCourses.includes(course._id)
                      ? "Unenroll"
                      : "Enroll"}
                  </button>
                )}
                {isFaculty && (
                  <>
                    <button
                      className="btn btn-warning me-2 float-end"
                      onClick={() => setCourse(course)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger float-end"
                      onClick={() => handleDeleteCourse(course._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={handleAddCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={handleUpdateCourse}
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
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )} */}
    </div>
  );
}
