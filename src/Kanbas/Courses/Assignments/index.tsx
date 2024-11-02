
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { setAssignments, filterAssignmentsByCourse, removeAssignment } from './reducer';
import assignmentsData from '../../Database/assignments.json';
import { FaFileAlt, FaSearch, FaPlus, FaTrash } from 'react-icons/fa';
import { BsGripVertical } from 'react-icons/bs';
import { IoEllipsisVertical } from 'react-icons/io5';
import LessonControlButtons from '../Modules/LessonControlButtons';
import '../../styles.css';

import type { AssignmentsState } from './reducer';

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const assignments = useSelector((state: { assignments: AssignmentsState }) => state.assignments.filteredAssignments || []);
  const allAssignments = useSelector((state: { assignments: AssignmentsState }) => state.assignments.assignments || []);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

  const handleDeleteClick = (assignmentId: string) => {
    setAssignmentToDelete(assignmentId);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (assignmentToDelete) {
      dispatch(removeAssignment(assignmentToDelete));
    }
    setShowDeleteDialog(false);
    setAssignmentToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteDialog(false);
    setAssignmentToDelete(null);
  };
  useEffect(() => {
    if (allAssignments.length === 0) {
      console.log("Loading initial assignments from database...");
      dispatch(setAssignments(assignmentsData));
    }
  }, [dispatch, allAssignments.length]);

  useEffect(() => {
    if (cid) {
      dispatch(filterAssignmentsByCourse(cid));
    }
  }, [cid, dispatch]);

  return (
    <div id="wd-assignments" className="wd-assignments-container">
      <div className="wd-header">
        <input
          id="wd-search-assignment"
          placeholder="Search..."
          className="wd-search-input"
          onChange={(e) => dispatch(filterAssignmentsByCourse(e.target.value))}
        />
        <FaSearch className="wd-search-icon" />
        <div className="wd-buttons">
          <button id="wd-add-assignment-group" className="wd-group-btn">+ Group</button>
          <button
            id="wd-add-assignment"
            className="wd-assignment-btn"
            onClick={() => {
              navigate(`/Kanbas/Courses/${cid}/Assignments/new`); // Navigate to the editor for a new assignment
            }}
          >
            + Assignment
          </button>
        </div>
      </div>

      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item" id="wd-title">
          <div className="wd-assignment-details d-flex align-items-start">
            <BsGripVertical className="wd-grisp-icon me-2 fs-3" />
            <div className="wd-assignment-title">ASSIGNMENT</div>
          </div>
          <div id="wd-total" className="float-end">40% of Total</div>
          <div className="float-end">
            <FaPlus />
            <IoEllipsisVertical className="fs-4" />
          </div>
        </li>

        {assignments && assignments.length > 0 ? (
          assignments.map((assignment) => (
            <li key={assignment._id} className="wd-assignment-list-item">
              <div className="wd-assignment-details d-flex align-items-start">
                <BsGripVertical className="wd-grisp-icon me-2 fs-3" />
                <FaFileAlt className="wd-document-icon me-2" />
                <div className="wd-assignment-info">
                  <a
                    className="wd-assignment-link"
                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                  </a>
                  <p className="wd-assignment-description">
                    <span style={{ color: 'red' }}>Multiple Modules</span> | <strong>Due</strong> {assignment.dueDate} | {assignment.points} pts
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-end align-items-center">
          <LessonControlButtons />
          <FaTrash
            className="wd-delete-icon ms-3 text-danger"
            onClick={() => handleDeleteClick(assignment._id)}
          />
        </div>
            </li>
          ))
        ) : (
          <li>No assignments found for this course.</li>
        )}

        {/* Delete Confirmation Dialog */}
      {showDeleteDialog && (
        <div className="wd-delete-dialog-overlay">
          <div className="wd-delete-dialog">
            <p>Are you sure you want to delete this assignment?</p>
            <button className="btn btn-danger me-2" onClick={confirmDelete}>Yes</button>
            <button className="btn btn-secondary" onClick={cancelDelete}>No</button>
          </div>
        </div>
      )}
      </ul>
    </div>
  );
}

