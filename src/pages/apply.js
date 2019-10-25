import React, {useState} from "react";
import { Form, Field } from '@leveluptuts/fresh'
import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";

function ApplyPage() {

  return (
    <Layout>
      <SEO
        title="Apply"
        keywords={[`Staffing`, `Employment`, `react`, `tailwindcss`]}
      />
      <section className="max-w-5xl self-center">
      <section className="flex flex-col items-center text-center mb-6">
        <h1 className="bg-blue-200 text-3xl font-bold mb-6 p-3 ">Apply</h1>
      </section>
      <section className="flex flex-col items-center content">
        {/* <form action="netlify" method="post">
          <fieldset>
            <label htmlFor="first_name" className="flex items-center m-2">
            First Name
            <input type="text" name="first_name" id="firstName" className="ml-4"/>
            </label>
            <label htmlFor="last_name" className="flex items-center m-2">
              Last Name
            <input type="text" name="last_name" id="lastName" className="ml-4"/>
            </label>
            <label htmlFor="address_one" className="flex items-center m-2">
              Address
            <input type="text" name="address_one" id="addressOne" className="ml-4"/>
            </label>
            <label htmlFor="address_two" className="flex items-center m-2">
              Address Line 2
            <input type="text" name="address_two" id="addressTwo" className="ml-4"/>
            </label>
            <label htmlFor="province" className="flex items-center m-2">
              Province/State/Region
            <input type="text" name="province" id="province" className="ml-4"/>
            </label>
            <label htmlFor="country" className="flex items-center m-2">
              Country
            <input type="text" name="country" id="country" className="ml-4"/>
            </label>
          </fieldset>
        </form> */}
          <Form
            onSubmit={data => {
              console.log(data)
            }}
          >
            <Field>First Name</Field>
            <Field>Last Name</Field>
            <Field>Address Line 1</Field>
            <Field>Address Line 2</Field>
            <Field>City</Field>
            <Field>Province</Field>
            <Field>Postal Code</Field>
            <Field>Phone Number</Field>
            <Field type="email">Email</Field>
            <Field>MM</Field>
            <Field>DD</Field>
            <Field>YYY</Field>
            {/* <Field type="select" options={options} /> */}
          </Form>
      </section>
</section>
    </Layout>
  );
}

export default ApplyPage;
