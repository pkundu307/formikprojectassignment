// Inside Step3.js
import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import FormPreview from "./FormPreview"; // Adjust the import path
import "./styles.css"; // Import the CSS file

const Step3 = () => {
  const router = useRouter();

  // Retrieve data from Step 1 and Step 2 query parameters
  const queryDataStep1 = router.query;
  const queryDataStep2 = router.query;

  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDetails: "",
    jobDescription: "",
    interviewMode: "",
    interviewDuration: "",
    jobLocation: "",
    ...queryDataStep1, // Combine Step 1 and Step 2 data
    ...queryDataStep2 // Include Step 3 data
  });

  useEffect(() => {
    // Update formData when query parameters change (e.g., navigating back from Step 3)
    setFormData((prevData) => ({
      ...prevData,
      ...queryDataStep1,
      ...queryDataStep2
    }));
  }, [queryDataStep1, queryDataStep2]);

  const validationSchema = Yup.object().shape({
    interviewMode: Yup.string().required("Interview Mode is required"),
    interviewDuration: Yup.string().required("Interview Duration is required"),
    jobLocation: Yup.string().required("Job Location is required")
  });

  const initialValues = {
    interviewMode: "",
    interviewDuration: "",
    jobLocation: ""
  };

  const handleSubmit = (values) => {
    // Set the formData including Step 3 fields
    setFormData({
      ...formData,
      ...values
    });

    // Show an alert box with all form data from Step 1, Step 2, and Step 3
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="form-container">
      <h2>Step 3</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <div>
              <label className="form-label" htmlFor="interviewMode">
                Interview Mode
              </label>
              <Field
                className="form-input"
                as="select"
                id="interviewMode"
                name="interviewMode"
              >
                <option value="">Select Interview Mode</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </Field>
            </div>
            <div>
              <label className="form-label" htmlFor="interviewDuration">
                Interview Duration
              </label>
              <Field
                className="form-input"
                as="select"
                id="interviewDuration"
                name="interviewDuration"
              >
                <option value="">Select Interview Duration</option>
                <option value="short">Short</option>
                <option value="long">Long</option>
              </Field>
            </div>
            <div>
              <label className="form-label" htmlFor="jobLocation">
                Job Location
              </label>
              <Field
                className="form-input"
                as="select"
                id="jobLocation"
                name="jobLocation"
              >
                <option value="">Select Job Location</option>
                <option value="kolkata">Kolkata</option>
                <option value="mumbai">Mumbai</option>
              </Field>
            </div>
            <div className="form-button-group">
              <button
                className="form-button"
                type="button"
                onClick={() => router.push("/form/step2")}
              >
                Previous
              </button>
              <button className="form-button" type="submit">
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <FormPreview formData={formData} />
    </div>
  );
};

export default Step3;
