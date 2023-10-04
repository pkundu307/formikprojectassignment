import React from "react";

const FormPreview = ({ formData }) => {
  return (
    <div className="form-preview">
      <h2>Your inputs are:</h2>
      <div className="preview-data">
        <strong>Requisition Title:</strong> {formData.requisitionTitle}
      </div>
      <div className="preview-data">
        <strong>Requisition Title 2:</strong> {formData.requisitionTitle2}
      </div>
      <div className="preview-data">
        <strong>Number of Openings:</strong> {formData.numOpenings}
      </div>
      <div className="preview-data">
        <strong>Gender:</strong> {formData.gender}
      </div>
      <div className="preview-data">
        <strong>Urgency:</strong> {formData.urgency}
      </div>
      {/* Add more fields below */}
      <div className="preview-data">
        <strong>Job Title:</strong> {formData.jobTitle}
      </div>
      <div className="preview-data">
        <strong>Job Details:</strong> {formData.jobDetails}
      </div>
      <div className="preview-data">
        <strong>Job Description:</strong> {formData.jobDescription}
      </div>
      <div className="preview-data">
        <strong>Interview Mode:</strong> {formData.interviewMode}
      </div>
      <div className="preview-data">
        <strong>Interview Duration:</strong> {formData.interviewDuration}
      </div>
      <div className="preview-data">
        <strong>Job Location:</strong> {formData.jobLocation}
      </div>
    </div>
  );
};

export default FormPreview;
