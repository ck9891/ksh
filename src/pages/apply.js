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
    <main className="w-7">
      <section className="flex flex-col items-center text-center mb-6">
        <h1 className="bg-blue-200 text-3xl font-bold mb-6 p-3 ">Apply</h1>
      </section>
      <section className="flex flex-col items-center content">
        <form action="netlify" method="post">
          <fieldset>
            <label htmlFor="first_name" className="flex items-center">
            First Name
            <input type="text" name="first_name" id="firstName"/>
            </label>
            <label htmlFor="last_name" className="flex items-center">
              Last Name
            <input type="text" name="last_name" id="lastName"/>
            </label>
            <label htmlFor="address_one" className="flex items-center">
              Address
            <input type="text" name="address_one" id="addressOne"/>
            </label>
            <label htmlFor="address_two" className="flex items-center">
              Address Line 2
            <input type="text" name="address_two" id="addressTwo"/>
            </label>
            <label htmlFor="province" className="flex items-center">
              Province/State/Region
            <input type="text" name="province" id="province"/>
            </label>
            <label htmlFor="country" className="flex items-center">
              Country
            <input type="text" name="country" id="country"/>
            </label>
          </fieldset>
        </form>

      </section>
</main>
    </Layout>
  );
}

export default ApplyPage;
