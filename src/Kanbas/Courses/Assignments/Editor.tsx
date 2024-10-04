import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from 'react';
import { Breadcrumb } from 'react-bootstrap'; 
import "../../styles.css"


export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4">
     
      <form>
        {/* Assignment Name */}
        <div className="row mb-3">
          <label htmlFor="wd-name" className="col-md-12">Assignment Name</label>
          <div className="col-md-12">
            <input id="wd-name"  defaultValue="A1" />
          </div>
        </div>
        {/* <assignent description> */}
        <div className="row mb-3">
        <div className="col-md-12 ">
         <div id="wd-descrip" className="form-control">
          <p>The assignment is available online</p>
          <p>Submit a link to the landing page of your Web Application running on Netlify</p>
          <p>The landing page should include the following:</p>
          <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the Kanbas application</li>
            <li>Links to all relevant source code repositories</li>

          </ul>
          <p>The Kanbas application should include a link to navigate back to the landing page.</p>
         </div>
         </div>

        </div>

        {/* Points */}
        <div className="row mb-3">
          <label htmlFor="wd-points" className="col-md-6 col-form-label  text-end">Points</label>
          <div className="col-md-6">
            <input id="wd-points" type="number" className="form-control w-50 " defaultValue="100" />
          </div>
        </div>

        {/* Assignment Group */}
        <div className="row mb-3">
          <label htmlFor="wd-group" className="col-md-6 col-form-label  text-end ">Assignment Group</label>
          <div className="col-md-6">
            <select id="wd-group" className="form-control w-50">
              <option value="assignments">ASSIGNMENTS</option>
            </select>
          </div>
        </div>

        {/* Display Grade As */}
        <div className="row mb-3">
          <label htmlFor="wd-display-grade-as" className="col-md-6 col-form-label  text-end">Display Grade as</label>
          <div className="col-md-6">
            <select id="wd-display-grade-as" className="form-control w-50">
              <option value="percentage">Percentage</option>
            </select>
          </div>
        </div>



        {/* Submission Type */}

        <div className="row mb-3">
        <label htmlFor="wd-submission-type" className="col-md-6 col-form-label text-end">Submission Type</label>
        <div className="col-md-6">
         <div id="wd-submission-group" className="form-control">
        
  
          

          <div className="col-md-10">
            <select id="wd-submission-type" className="form-control w-50">
              <option value="online">Online</option>
            </select>
          </div>

          <div>
          <h5 id="wd-checkboxes">Online Entry Options</h5>


<input type="checkbox" name="entry-option" className="wd-checkbox-option"/>
<label htmlFor="wd-chkbox-text">Text Entry</label><br/>

<input type="checkbox" name="entry-option" className="wd-checkbox-option"/>
<label htmlFor="wd-chkbox-website">Website URL</label><br/>

<input type="checkbox" name="entry-option" className="wd-checkbox-option"/>
<label htmlFor="wd-chkbox-media">Media Recordings</label><br/>

<input type="checkbox" name="entry-option"className="wd-checkbox-option" />
<label htmlFor="wd-chkbox-annotation">Student Annotation</label> <br/>

<input type="checkbox" name="entry-option" className="wd-checkbox-option"/>
<label htmlFor="wd-chkbox-file">File Uploads</label>
          </div>
          </div>
        </div>
        </div>
  

        {/* Assign Section */}
        <div className="row mb-3">
          <label className="col-md-6 col-form-label text-end">Assign</label>
          <div className="col-md-6">
            <div className="form-control">
              {/* Assign To */}
              <div className="row mb-3">
                <label htmlFor="wd-assign-to" className="col-md-4 col-form-label text-end">Assign To</label>
                <div className="col-md-4">
                  <input id="wd-assign-to" className="form-control " defaultValue="Everyone" />
                </div>
              </div>

              {/* Due Date */}
              <div className="row mb-3">
                <label htmlFor="wd-due-date" className="col-md-4 col-form-label text-end">Due</label>
                <div className="col-md-4">
                  <input id="wd-due-date" type="date" className="form-control" defaultValue="2024-05-13" />
                </div>
              </div>

              {/* Available From */}
              <div className="row mb-3">
                <label htmlFor="wd-available-from" className="col-md-4 col-form-label text-end">Available From</label>
                <div className="col-md-4">
                  <input id="wd-available-from" type="date" className="form-control" defaultValue="2024-05-06" />
                </div>
              </div>

              {/* Available Until */}
              <div className="row mb-3">
                <label htmlFor="wd-available-until" className="col-md-4 col-form-label text-end">Until</label>
                <div className="col-md-4">
                  <input id="wd-available-until" type="date" className="form-control" defaultValue="2024-05-20" />
                </div>
              </div>

              
            </div>
          </div>
        </div>

        {/* Save and Cancel buttons */}
<div className="d-flex justify-content-end mt-4">
  <button id="wd-cancel" className="btn btn-secondary me-2">Cancel</button>
  <button id="wd-save" className="btn btn-danger">Save</button>
</div>
      </form>
    </div>
  );
} 

