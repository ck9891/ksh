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
      <section className="flex flex-col items-center text-center mb-6">
        <h1 className="bg-blue-200 text-3xl font-bold mb-6 p-3 ">Apply</h1>
      </section>
      <section className="flex flex-col md:flex-row items-center">
        <form action="netlify" method="post">
          <label htmlFor="first_name">
           First Name
           <input type="text" name="first_name" id="firstName"/>
          </label>
          <label htmlFor="last_name">
            Last Name
           <input type="text" name="last_name" id="lastName" />
          </label>
          <label htmlFor="address_one">
            Address
           <input type="text" name="address_one" id="addressOne" />
          </label>
          <label htmlFor="address_two">
            Address Line 2
           <input type="text" name="address_two" id="addressTwo" />
          </label>
          <label htmlFor="province">
            Province/State/Region
           <input type="text" name="province" id="province" />
          </label>
          <label htmlFor="country">
            Country
           <input type="text" name="country" id="country" />
          </label>
        </form>

      </section>

    </Layout>
  );
}

export default ApplyPage;
