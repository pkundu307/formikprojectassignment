import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { withRouter } from "next/router";
import FormPreview from "./FormPreview";
import "./styles.css";

const Step1 = ({ router }) => {
  const queryDataStep2 = router.query;

  // State to store form data
  const [formData, setFormData] = useState({
    requisitionTitle: "",
    requisitionTitle2: "",
    numOpenings: "",
    gender: "",
    urgency: "",
    ...queryDataStep2 // Include data from Step 2 if necessary
  });

  const validationSchema = Yup.object().shape({
    requisitionTitle: Yup.string().required("Requisition Title is required"),
    requisitionTitle2: Yup.string().required("Requisition Title 2 is required"),
    numOpenings: Yup.number()
      .required("Number of Openings is required")
      .positive()
      .integer(),
    gender: Yup.string().required("Gender is required"),
    urgency: Yup.string().required("Urgency is required")
  });

  const initialValues = {
    requisitionTitle: "",
    requisitionTitle2: "",
    numOpenings: "",
    gender: "",
    urgency: ""
  };

  const handleSubmit = (values) => {
    // Update form data in state
    setFormData(values);

    // Redirect to Step 2 with the form data in query parameters
    router.push(
      {
        pathname: "/form/step2",
        query: {
          ...queryDataStep2,
          ...values
        }
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div className="form-container">
      <h2>Step 1</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label className="form-label" htmlFor="requisitionTitle">
                Requisition Title
              </label>
              <Field
                className="form-input"
                type="text"
                id="requisitionTitle"
                name="requisitionTitle"
              />
              <ErrorMessage
                className="error-message"
                name="requisitionTitle"
                component="div"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="requisitionTitle2">
                Requisition Title 2
              </label>
              <Field
                className="form-input"
                type="text"
                id="requisitionTitle2"
                name="requisitionTitle2"
              />
              <ErrorMessage
                className="error-message"
                name="requisitionTitle2"
                component="div"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="numOpenings">
                Number of Openings
              </label>
              <Field
                className="form-input"
                type="number"
                id="numOpenings"
                name="numOpenings"
              />
              <ErrorMessage
                className="error-message"
                name="numOpenings"
                component="div"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="gender">
                Gender
              </label>
              <Field
                className="form-input"
                as="select"
                id="gender"
                name="gender"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage
                className="error-message"
                name="gender"
                component="div"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="urgency">
                Urgency
              </label>
              <Field
                className="form-input"
                as="select"
                id="urgency"
                name="urgency"
              >
                <option value="">Select Urgency</option>
                <option value="urgent">Urgent</option>
                <option value="relaxed">Relaxed</option>
                <option value="immediate">Immediate Joining</option>
              </Field>
              <ErrorMessage
                className="error-message"
                name="urgency"
                component="div"
              />
            </div>
            <button className="form-button" type="submit">
              Next
            </button>
          </Form>
        )}
      </Formik>
      <FormPreview formData={formData} />
    </div>
  );
};

export default withRouter(Step1);
