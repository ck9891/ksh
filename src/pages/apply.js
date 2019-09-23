import React from "react";

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
        <h1 className="bg-blue-200 text-3xl font-bold mb-6 p-3 ">About</h1>
      </section>
      <section className="flex flex-col md:flex-row items-center">
        <h2 className="bg-blue-400 text-2xl font-bold inline-block my-8 p-3">
          Apply
        </h2>
        <div className="md:w-2/3 md:mr-8">
          <p className="border-l-4 border-gray-900 font-serif leading-loose pl-4 text-justify first-letter">

We provide staffing services to our clients based on their specific needs and requirements. By sourcing talented staff and the increase in networking and various media, we are able to keep up to the demands of Companies. These companies are expanding their temporary, temporary to permanent and contact placements as their business cycles.
          </p>

        </div>
      </section>
      
    </Layout>
  );
}

export default ApplyPage;
