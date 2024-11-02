// Editor.tsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate for navigation
import { updateAssignment, addAssignment } from './reducer';
import '../../styles.css';

// Import the AssignmentsState type
import type { AssignmentsState } from './reducer';

export default function AssignmentEditor() {
  const { assignmentId, cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate for redirection

  // Select the assignment from the Redux store
  const assignment = useSelector((state: { assignments: AssignmentsState }) =>
    state.assignments.assignments.find((a) => a._id === assignmentId)
  );

  // Local state to manage editable fields
  const [title, setTitle] = useState(assignment?.title || 'Untitled Assignment');
  const [points, setPoints] = useState(assignment?.points || 100);
  const [dueDate, setDueDate] = useState(assignment?.dueDate || '');
  const [assignTo, setAssignTo] = useState("Everyone");
  const [availableFrom, setAvailableFrom] = useState("2024-05-06T00:00");
  const [until, setUntil] = useState("2024-05-13T23:59");

  // Update local state when assignment changes
  useEffect(() => {
    if (assignment) {
      setTitle(assignment.title);
      setPoints(assignment.points);
      setDueDate(assignment.dueDate);
    }
  }, [assignment]);

  // Save changes by dispatching an update or add action to Redux
  const handleSave = () => {
	
    const updatedAssignment = {
      _id: assignment?._id || `A${Date.now()}`, // Use existing ID or create a new unique ID
      title,
      course: cid || '', // Use the current course ID
      dueDate,
      points,
    };
	

    if (assignment) {
      // If the assignment exists, update it
      dispatch(updateAssignment(updatedAssignment));
	  console.log("测试" , updateAssignment);
    } else {
      // If it's a new assignment, add it to the state
      dispatch(addAssignment(updatedAssignment));
    }

    // Navigate back to the assignments list screen
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  // Cancel function to discard changes and navigate back
  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
      <form>
        {/* Assignment Name */}
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input
            id="wd-name"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Assignment Description */}
        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <div id="wd-description" className="form-control" style={{ minHeight: '150px' }}>
            <p>The assignment is <span style={{ color: 'red' }}>available online</span></p>
            <p>Submit a link to the landing page of your Web application running on <a href="https://netlify.com">Netlify</a></p>
            <p>The landing page should include the following:</p>
            <ul>
              <li>Your full name and section</li>
              <li>Links to each of the lab assignments</li>
              <li>Link to the <a href="#">Kanbas</a> application</li>
              <li>Links to all relevant source code repositories</li>
            </ul>
            <p>The Kanbas application should include a link to navigate back to the landing page.</p>
          </div>
        </div>

        {/* Points */}
        <div className="mb-3 row">
          <label htmlFor="wd-points" className="col-md-2 col-form-label">Points</label>
          <div className="col-md-10">
            <input
              id="wd-points"
              type="number"
              className="form-control"
              value={points}
              onChange={(e) => setPoints(parseInt(e.target.value))}
            />
          </div>
        </div>

        {/* Assignment Group */}
        <div className="mb-3">
          <label className="form-label">Assign</label>
          <div className="border p-3">
            {/* Assign To */}
            <div className="mb-3 row">
              <label htmlFor="wd-assign-to" className="col-md-2 col-form-label">Assign to</label>
              <div className="col-md-10">
                <input
                  id="wd-assign-to"
                  className="form-control"
                  value={assignTo}
                  onChange={(e) => setAssignTo(e.target.value)}
                />
              </div>
            </div>

            {/* Due Date */}
            <div className="mb-3 row">
              <label htmlFor="wd-due-date" className="col-md-2 col-form-label">Due</label>
              <div className="col-md-10">
                <input
                  id="wd-due-date"
                  type="datetime-local"
                  className="form-control"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
            </div>

            {/* Available From and Until */}
            <div className="mb-3 row">
              <label htmlFor="wd-available-from" className="col-md-2 col-form-label">Available from</label>
              <div className="col-md-10">
                <input
                  id="wd-available-from"
                  type="datetime-local"
                  className="form-control mb-2"
                  value={availableFrom}
                  onChange={(e) => setAvailableFrom(e.target.value)}
                />
              </div>
              <label htmlFor="wd-until" className="col-md-2 col-form-label">Until</label>
              <div className="col-md-10">
                <input
                  id="wd-until"
                  type="datetime-local"
                  className="form-control"
                  value={until}
                  onChange={(e) => setUntil(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save and Cancel buttons */}
        <div className="d-flex justify-content-end mt-4">
          <button type="button" className="btn btn-secondary me-2" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" className="btn btn-danger" onClick={handleSave}>
			
            Save
          </button>
	
        </div>
      </form>
    </div>
  );
}


