import { FaFileAlt } from "react-icons/fa"; // Import the document icon
import LessonControlButtons from '../Modules/LessonControlButtons';
import '../../styles.css';
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus, FaSearch } from "react-icons/fa";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams(); // Retrieve the course ID
  const assignments = db.assignments;

  return (
    <div id="wd-assignments" className="wd-assignments-container">
      <div className="wd-header">
        <input
          id="wd-search-assignment"
          placeholder="Search..."
          className="wd-search-input"
        />
        <FaSearch className="wd-search-icon" />
        <div className="wd-buttons">
          <button id="wd-add-assignment-group" className="wd-group-btn">+ Group</button>
          <button id="wd-add-assignment" className="wd-assignment-btn">+ Assignment</button>
        </div>
      </div>

      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item" id="wd-title">
          <div className="wd-assignment-details d-flex align-items-start">
            <BsGripVertical className="wd-grisp-icon me-2 fs-3" />
            <div className="wd-assignment-title">ASSIGNMENT</div>
          </div>
          <div id="wd-total" className="float-end">
            40% of Total
          </div>
          <div className="float-end">
            <FaPlus />
            <IoEllipsisVertical className="fs-4" />
          </div>
        </li>

        {/* Render the filtered assignments */}
        {assignments
          .filter((assignment) => assignment.course === cid) // Filter assignments by course ID
          .map((assignment) => (
            <li key={assignment._id} className="wd-assignment-list-item">
              <div className="wd-assignment-details d-flex align-items-start">
                <BsGripVertical className="wd-grisp-icon me-2 fs-3" />
                <FaFileAlt className="wd-document-icon me-2" />
                <div className="wd-assignment-info">
                  <a
                    className="wd-assignment-link"
                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  >
                    {assignment._id}
                  </a>
                  <p className="wd-assignment-description">
                    <span style={{ color: 'red' }}>Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
                  </p>
                </div>
              </div>
              <LessonControlButtons />
            </li>
          ))}
      </ul>
    </div>
  );
}
