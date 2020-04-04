
import Layout from "../components/layout";
import SEO from "../components/seo";
import React, {useState} from "react";
import axios from 'axios';
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
    <div className="flex flex-col justify-around my-2 w-5/12">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      </div>
    </>
  );
};

const MyAddressInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <div className="flex flex-col justify-around mx-8 w-full">
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};
const MyDateInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <div className="flex flex-col justify-around my-2 w-5/12">

        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
        </div>
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`

  margin-top: 1rem;
`;



const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <div className="flex flex-col justify-around my-2 w-64">

      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
      </div>
    </>
  );
};



  
function ApplyPage() {
const [serverState, setServerState] = useState({
  submitting: false,
  status: null
});
const handleServerResponse = (ok, msg, form) => {
  setServerState({
    submitting: false,
    status: {
      ok,
      msg
    }
  });
  if (ok) {
    form.reset();
  }
};
const handleOnSubmit = e => {
  e.preventDefault();
  const form = e.target;
  setServerState({
    submitting: true
  });
  const data = new FormData(form)
  console.log(data)
  axios({
      method: "post",
      url: "https://formspree.io/cam@cameronfarquharson.ca",
      data
    })
    .then(r => {
      handleServerResponse(true, "Thanks!", form);
    })
    .catch(r => {
      handleServerResponse(false, r.response.data.error, form);
    });
};
  return (
    <Layout>
      <SEO
        title="Apply"
        keywords={[`Staffing`, `Employment`, `react`, `tailwindcss`]}
      />
      <section className="max-w-3xl self-center w-full self-center mt-8">
      <section className="flex flex-col items-center text-center mb-6">
        <h1 className="bg-blue-200 text-3xl font-bold mb-6 p-3 ">Apply</h1>
      </section>
      <section className="flex flex-col items-center content mb-8">
          <>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                acceptedTerms: false, // added for our checkbox
                jobType: "" // added for our select
              }}
              validationSchema={Yup.object({
                firstName: Yup.string()
                  .min(15, "Must be 15 characters or less")
                  .required("Required"),
                lastName: Yup.string()
                  .min(20, "Must be 20 characters or less")
                  .required("Required"),
                email: Yup.string()
                  .email("Invalid email addresss`")
                  .required("Required"),
                acceptedTerms: Yup.boolean()
                  .required("Required")
                  .oneOf([true], "You must accept the terms and conditions."),
                jobType: Yup.string()
                  // specify the set of valid values for job type
                  // @see http://bit.ly/yup-mixed-oneOf
                  .oneOf(
                    ["designer", "development", "product", "other"],
                    "Invalid Job Type"
                  )
                  .required("Required")
              })}
              // onSubmit={(values, { setSubmitting }) => {
              //   setTimeout(() => {
              //     alert(JSON.stringify(values, null, 2));
              //     setSubmitting(false);
              //   }, 400);
              // }}
//               onSubmit={handleOnSubmit}
              onSubmit={(values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact-demo", ...values })
        })
        .then(() => {
          alert('Success');
          actions.resetForm()
        })
        .catch(() => {
          alert('Error');
        })
        .finally(() => actions.setSubmitting(false))
      }}
            >
              <Form className = "flex flex-row justify-around flex-wrap" data-netlify={true}>
                <MyTextInput
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                />
                <MyTextInput
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                />
                <MyAddressInput
                  label="Address Line 1"
                  name="addressLine1"
                  type="text"
                  placeholder="1280 Main St West"
                  className="w-full"
                />
                <MyAddressInput
                  label="Address Line 2"
                  name="addressLine2"
                  type="text"
                  placeholder="Address Line 2"
                  className="w-full"
                />
                <MyTextInput
                  label="City"
                  name="city"
                  type="text"
                  placeholder="Brampton"
                />
                <MyTextInput
                  label="Postal Code"
                  name="postalCode"
                  type="text"
                  placeholder="L9K 1J4"
                />
                <MyTextInput
                  label="Phone Number"
                  name="phoneNumber"
                  type="text"
                  placeholder="1234567890"
                />
                <MyTextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="jane@formik.com"
                />
                <MyTextInput
                  label="Position Applied For"
                  name="positionAppliedFor"
                  type="text"
                  placeholder="General Labourer"
                />
                <MyDateInput
                  label="Date Available to Start:"
                  name="date"
                  type="text"
                    placeholder="MM/DD/YYYY"
                />
                <MySelect label="Shift Preference" name="shiftPreference">
                  <option value="">Select Shift</option>
                  <option value="day">Day</option>
                  <option value="evening">Evening</option>
                  <option value="night">Night</option>
                </MySelect>
                <MySelect label="Have you worked with us before?" name="history">
                  <option value="">Select Yes or No</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </MySelect>
                <MySelect label="Are you authorized to work in Canada?" name="authorization">
                  <option value="">Select Yes or No</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </MySelect>
                <div className="w-full my-6">
                <button type="submit" className="block bg-blue-400 text-2xl font-bold py-3 px-6 mx-auto">Submit</button>
                </div>
              </Form>
            </Formik>
          </>
      </section>
</section>
    </Layout>
  );
}

export default ApplyPage;
