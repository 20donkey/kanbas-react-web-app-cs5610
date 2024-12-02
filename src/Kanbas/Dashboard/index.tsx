import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import { useSelector } from "react-redux";
import * as courseClient from "../Courses/client";
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
  oldId: string;
  username: string;
  role: string;
}

interface Course {
  courseId: string;

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
    courseId: "",
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
      if (!currentUser) {
        setCourses([]);
        setEnrolledCourses([]);
        return;
      }
  
      try {
        const fetchedCourses = await courseClient.fetchAllCourses();
        setCourses(fetchedCourses);
  
        if (["STUDENT", "TA", "FACULTY"].includes(currentUser.role)) {
          const enrollments = await fetchEnrollments(currentUser.oldId);
          console.log("Enrollments fetched for user:", enrollments);
          const enrolledCourseIds = enrollments.map((e: any) => e.courseId);
          setEnrolledCourses(enrolledCourseIds);
        }
  
        setError(null);
      } catch (error) {
        console.error("Failed to fetch courses or enrollments:", error);
        setError("Unable to load courses or enrollments.");
      }
    };
  
    fetchData();
  }, [currentUser]);
  

  // Handle Add Course for Faculty
  // const handleAddCourse = async () => {
  //   try {
     
  //     const newCourse = await courseClient.createCourse(course);
  //     console.log("Course data being submitted:", course);
  //     console.log("Adding course with data:", course); 

  //     setCourses((prevCourses) => [...prevCourses, newCourse]);
  //   } catch (error) {
  //     console.error("Failed to add course:", error);
  //   }
  // };
// const handleAddCourse = async () => {
//   try {
//     const newCourse = await courseClient.createCourse(course);
//     console.log("New course added:", newCourse);

//     if (!newCourse.courseId && newCourse._id) {
//       newCourse.courseId = newCourse._id; // Ensure `courseId` exists
//     }

//     setCourses((prevCourses) => [...prevCourses, newCourse]);

//     if (["STUDENT", "TA", "FACULTY"].includes(currentUser?.role || "")) {
//       setEnrolledCourses((prevEnrolled) => [...prevEnrolled, newCourse.courseId]);
//     }
//   } catch (error) {
//     console.error("Failed to add course:", error);
//   }
// };
const handleAddCourse = async () => {
  try {
    const newCourse = await courseClient.createCourse(course);
    console.log("New course added:", newCourse);

    if (!newCourse.courseId && newCourse._id) {
      newCourse.courseId = newCourse._id; // Map `_id` to `courseId` if needed
    }

    // Add the new course to the `courses` state
    setCourses((prevCourses) => [...prevCourses, newCourse]);

    // Add the course to `enrolledCourses` for faculty or students
    if (["STUDENT", "TA", "FACULTY"].includes(currentUser?.role || "")) {
      setEnrolledCourses((prev) => [...prev, newCourse.courseId]);
    }
  } catch (error) {
    console.error("Failed to add course:", error);
  }
};

  // Handle Update Course for Faculty
  const handleUpdateCourse = async () => {
    try {
      await updateCourse(course);
      setCourses((prevCourses) =>
        prevCourses.map((c) => (c.courseId === course.courseId ? { ...course } : c))
      );
    } catch (error) {
      console.error("Failed to update course:", error);
    }
  };

  // Handle Delete Course for Faculty
  const handleDeleteCourse =  async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course.courseId !== courseId));
  };
 

  const handleEnrollmentToggle = async (courseId: string) => {
    if (!currentUser) return;

    if (enrolledCourses.includes(courseId)) {
      await unenrollFromCourse(currentUser.oldId, courseId);
      setEnrolledCourses((prev) => prev.filter((id) => id !== courseId));
    } else {
      await enrollInCourse(currentUser.oldId, courseId);
      setEnrolledCourses((prev) => [...prev, courseId]);
    }
  };

  const toggleEnrollmentView = () => {
    setShowAllCourses(!showAllCourses);
  };

  // const filteredCourses =
  // currentUser?.role === "ADMIN"
  //   ? courses // ADMIN sees all courses
  //   : ["STUDENT", "TA", "FACULTY"].includes(currentUser?.role || "")
  //   ? showAllCourses
  //     ? courses // STUDENT, TA, FACULTY can toggle between all courses
  //     : courses.filter((course) => enrolledCourses.includes(course.courseId)) // Only enrolled courses
  //   : [];
  const filteredCourses =
  currentUser?.role === "ADMIN"
    ? courses // ADMIN sees all courses
    : ["STUDENT", "TA", "FACULTY"].includes(currentUser?.role || "")
    ? showAllCourses
      ? courses // Toggle to view all courses
      : courses.filter((course) => enrolledCourses.includes(course.courseId)) // Only enrolled courses
    : [];




  if (!currentUser) {
    return (
      <div>
        <h2>All Courses</h2>
        {courses.map((c) => (
          <div key={c.courseId} className="card">
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
          {showAllCourses ? "My Enrollments" : "Enrolling"}
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
              key={course.courseId}
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
            >
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={
                    isStudent && !enrolledCourses.includes(course.courseId)
                      ? "#"
                      : `/Kanbas/Courses/${course.courseId}/Home`
                  }
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  onClick={(e) => {
                    if (isStudent && !enrolledCourses.includes(course.courseId)) {
                      e.preventDefault();
                    }
                  }}
                >
                  <img
                    src={`/images/${course.courseId.toLowerCase()}.jpg`}
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
                {showAllCourses && isStudent && (
                  <button
                    className={`btn float-end ${
                      enrolledCourses.includes(course.courseId)
                        ? "btn-danger"
                        : "btn-success"
                    }`}
                    onClick={() => handleEnrollmentToggle(course.courseId)}
                  >
                    {enrolledCourses.includes(course.courseId)
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
                      onClick={() => handleDeleteCourse(course.courseId)}
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
