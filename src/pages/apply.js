import React, {useState} from "react";

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
      <main className="max-w-4xl self-center">
      <section className="flex flex-col items-center text-center mb-6">
        <h1 className="bg-blue-200 text-3xl font-bold mb-6 p-3 ">Apply</h1>
      </section>
      <section className="flex flex-col items-center content">
        <form action="netlify" method="post">
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
        </form>

      </section>
</main>
    </Layout>
  );
}

export default ApplyPage;
