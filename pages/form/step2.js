// Inside Step2.js
import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import FormPreview from "./FormPreview"; // Adjust the import path
import "./styles.css"; // Import the CSS file

const Step2 = () => {
  const router = useRouter();

  // Retrieve data from Step 1 query parameters
  const queryDataStep1 = router.query;

  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDetails: "",
    jobDescription: "",
    ...queryDataStep1 // Combine Step 1 and Step 2 data
  });

  useEffect(() => {
    // Update formData when query parameters change (e.g., navigating back from Step 3)
    setFormData((prevData) => ({
      ...prevData,
      ...queryDataStep1
    }));
  }, [queryDataStep1]);

  const validationSchema = Yup.object().shape({
    jobTitle: Yup.string().required("Job Title is required"),
    jobDetails: Yup.string().required("Job Details is required"),
    jobDescription: Yup.string().required("Job Description is required")
  });

  const initialValues = {
    jobTitle: "",
    jobDetails: "",
    jobDescription: ""
  };

  const handleSubmit = (values) => {
    // Set the formData including Step 2 fields
    setFormData({
      ...formData,
      ...values
    });

    // Redirect to Step 3 with all data from Step 1 and Step 2 in query parameters
    router.push(
      {
        pathname: "/form/step3",
        query: {
          ...queryDataStep1, // Data from Step 1
          ...values // Data from Step 2
        }
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div className="form-container">
      <h2>Step 2</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <div>
              <label className="form-label" htmlFor="jobTitle">
                Job Title
              </label>
              <Field
                className="form-input"
                type="text"
                id="jobTitle"
                name="jobTitle"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="jobDetails">
                Job Details
              </label>
              <Field
                className="form-input"
                type="text"
                id="jobDetails"
                name="jobDetails"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="jobDescription">
                Job Description
              </label>
              <Field
                className="form-input"
                as="textarea"
                id="jobDescription"
                name="jobDescription"
              />
            </div>
            <div className="form-button-group">
              <button
                className="form-button"
                type="button"
                onClick={() => router.push("/form/step1")}
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

export default Step2;
