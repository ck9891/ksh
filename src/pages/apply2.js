
import Layout from "../components/layout";
import SEO from "../components/seo";
import React, {useState} from "react";
import axios from 'axios';
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import GravityForm from 'react-gravity-form';

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
         <GravityForm
            backendUrl="http://ksh.local/wp-json/gf/v2"
            formID="1"
            
            populatedFields={{parameterName: "Value"}}
            jumpToConfirmation={false} // optional, default is equal to true
        />

      </section>
</section>
    </Layout>
  );
}

export default ApplyPage;
