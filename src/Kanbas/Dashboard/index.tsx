

import { Link } from "react-router-dom";
import "../styles.css"; 

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="container">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/Home">
              <img src="/images/reactjs.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1234 React JS
                </h5>
                <p className="wd-dashboard-course-description card-text">
                  Full Stack software developer
                </p>
                <p className="wd-dashboard-course-meta card-text">
                  202410_1 Fall 2024 Semester Full Term
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/Home">
              <img src="/images/nodejs.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS5201 Node JS
                </h5>
                <p className="wd-dashboard-course-description card-text">
                  Backend Development with Node
                </p>
                <p className="wd-dashboard-course-meta card-text">
                  202410_1 Fall 2024 Semester Full Term
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/Home">
              <img src="/images/python.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS3456 Python Programming
                </h5>
                <p className="wd-dashboard-course-description card-text">
                  Data Science with Python
                </p>
                <p className="wd-dashboard-course-meta card-text">
                  202410_1 Fall 2024 Semester Full Term
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/Home">
              <img src="/images/angular.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS4567 Angular Framework
                </h5>
                <p className="wd-dashboard-course-description card-text">
                  Frontend Development with Angular
                </p>
                <p className="wd-dashboard-course-meta card-text">
                  202410_1 Fall 2024 Semester Full Term
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/Home">
              <img src="/images/java.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS5678 Java Programming
                </h5>
                <p className="wd-dashboard-course-description card-text">
                  Enterprise Applications with Java
                </p>
                <p className="wd-dashboard-course-meta card-text">
                  202410_1 Fall 2024 Semester Full Term
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/Home">
              <img src="/images/sql.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS6789 SQL Databases
                </h5>
                <p className="wd-dashboard-course-description card-text">
                  Database Management with SQL
                </p>
                <p className="wd-dashboard-course-meta card-text">
                  202410_1 Fall 2024 Semester Full Term
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/Home">
              <img src="/images/docker.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS7890 Docker & Containers
                </h5>
                <p className="wd-dashboard-course-description card-text">
                  Containerization with Docker
                </p>
                <p className="wd-dashboard-course-meta card-text">
                  202410_1 Fall 2024 Semester Full Term
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}