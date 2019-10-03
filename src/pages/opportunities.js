import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";

function ApplyPage() {
  return (
    <Layout>
      <SEO
        title="Job Opportunities"
        keywords={[`Staffing`, `Employment`, `react`, `tailwindcss`]}
      />
      <section className="flex flex-col items-center text-center mb-6">
        <h1 className="bg-blue-200 text-3xl font-bold mb-6 p-3 ">Job Oppurtunities</h1>
      </section>
      <section className="flex flex-col md:flex-row items-center">
        <div className="job-card">
            <h2 className="card-title text-2xl"><strong>Title: </strong>General Labourer</h2>
            <h3><strong>Industry: </strong>Manufacturing</h3>
            <p><strong>Salary: </strong>$16.5 - $17.5</p>
            <p><strong>Shift:</strong> Day 7am-4pm; Afternoon 2pm-10pm</p>
            <div className="card-body">
                Good lifting capability;
                packing / wrapping;
                quality checks;
                shipping / receiving.
            </div>
            <p><strong>Location: </strong>Dixie& Eglinton, Mississauga</p>
        </div>
      </section>
      
    </Layout>
  );
}

export default ApplyPage;
