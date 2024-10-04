import { FaFileAlt } from "react-icons/fa"; // Import the document icon
import LessonControlButtons from '../Modules/LessonControlButtons';
import '../../styles.css';
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="wd-assignments-container">
      <div className="wd-header">
      
        <input
          id="wd-search-assignment"
          placeholder="Search..."
          className="wd-search-input"
        />
        <FaSearch className= "wd-search-icon"/>
        
        <div className="wd-buttons">
          <button id="wd-add-assignment-group" className="wd-group-btn">+ Group</button>
          <button id="wd-add-assignment" className="wd-assignment-btn">+ Assignment</button>
        </div>
      </div>

     

      <ul id="wd-assignment-list">
   


        <li className="wd-assignment-list-item" id = "wd-title">
          <div className="wd-assignment-details d-flex align-items-start"> {/* Align items to the start */}
          <BsGripVertical className="wd-grisp-icon me-2 fs-3" />
            
            <div className="wd-assignment-title"> {/* Wrapper for title and description */}
              ASSIGNMENT
             
            </div>
      
          </div>
          <div id="wd-total" className="float-end">
          40% of Total
          </div>

          <div className="float-end">
      <FaPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>
        </li>



        <li className="wd-assignment-list-item">
          <div className="wd-assignment-details d-flex align-items-start"> {/* Align items to the start */}
          <BsGripVertical className="wd-grisp-icon me-2 fs-3" />
            <FaFileAlt className="wd-document-icon me-2" />
            <div className="wd-assignment-info"> {/* Wrapper for title and description */}
              <a className="wd-assignment-link" href="#/Kanbas/Courses/Assignments/A1">
                A1
              </a>
              <p className="wd-assignment-description">
  <span style={{ color: 'red' }}>Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | 
  <strong>Due</strong> May 13 at 11:59pm | 100 pts
</p>
            </div>
          </div>
          <LessonControlButtons />
        </li>

        <li className="wd-assignment-list-item">
          <div className="wd-assignment-details d-flex align-items-start">
          <BsGripVertical className="wd-grisp-icon me-2 fs-3" />
            <FaFileAlt className="wd-document-icon me-2" />
            <div className="wd-assignment-info">
              <a className="wd-assignment-link" href="#/Kanbas/Courses/Assignments/124">
                A2
              </a>
              <p className="wd-assignment-description">
              <span style={{ color: 'red' }}>Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am | 
                <strong>Due</strong> May 20 at 11:59pm | 100 pts
              </p>
            </div>
          </div>
          <LessonControlButtons />
        </li>

        <li className="wd-assignment-list-item">
          <div className="wd-assignment-details d-flex align-items-start">
          <BsGripVertical className="wd-grisp-icon me-2 fs-3" />
            <FaFileAlt className="wd-document-icon me-2" />
            <div className="wd-assignment-info">
              <a className="wd-assignment-link" href="#/Kanbas/Courses/Assignments/125">
                A3
              </a>
              <p className="wd-assignment-description">
              <span style={{ color: 'red' }}>Multiple Modules</span>| <strong>Not available until</strong> May 20 at 12:00am | 
                <strong>Due</strong> May 27 at 11:59pm | 100 pts
              </p>
            </div>
          </div>
          <LessonControlButtons />
        </li>
      </ul>
    </div>
  );
}
