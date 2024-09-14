import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/nodejs.jpg" width={200} alt="Node JS" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/2345/Home">
              CS5201 Node JS
            </Link>
            <p className="wd-dashboard-course-title">
              Backend Development with Node
            </p>
            <Link to="/Kanbas/Courses/2345/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/python.jpg" width={200} alt="Python" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/3456/Home">
              CS3456 Python Programming
            </Link>
            <p className="wd-dashboard-course-title">
              Data Science with Python
            </p>
            <Link to="/Kanbas/Courses/3456/Home"> Go </Link>
          </div>

          <div className="wd-dashboard-course">
          <img src="/images/angular.jpg" width={200} alt="Angular" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/4567/Home">
              CS4567 Angular Framework
            </Link>
            <p className="wd-dashboard-course-title">
              Frontend Development with Angular
            </p>
            <Link to="/Kanbas/Courses/4567/Home"> Go </Link>
          </div>
        </div>

     <div className="wd-dashboard-course">
          <img src="/images/java.jpg" width={200} alt="Java" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
              CS5678 Java Programming
            </Link>
            <p className="wd-dashboard-course-title">
              Enterprise Applications with Java
            </p>
            <Link to="/Kanbas/Courses/5678/Home"> Go </Link>
          </div>
        </div>

      
        <div className="wd-dashboard-course">
          <img src="/images/sql.jpg" width={200} alt="SQL" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/6789/Home">
              CS6789 SQL Databases
            </Link>
            <p className="wd-dashboard-course-title">
              Database Management with SQL
            </p>
            <Link to="/Kanbas/Courses/6789/Home"> Go </Link>
          </div>
        </div>

     
        <div className="wd-dashboard-course">
          <img src="/images/docker.jpg" width={200} alt="Docker" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/7890/Home">
              CS7890 Docker & Containers
            </Link>
            <p className="wd-dashboard-course-title">
              Containerization with Docker
            </p>
            <Link to="/Kanbas/Courses/7890/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

