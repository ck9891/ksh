import React from "react";
import CardOpportunity from '../components/opportunities/CardOpportunity'
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
        <h1 className="bg-blue-200 text-3xl font-bold mb-6 p-3 ">Job Opportunities</h1>
      </section>
      <section className="flex flex-col md:flex-row items-center flex-wrap">
        <CardOpportunity
          jobTitle="General Labourer"
          industry="Manufacturing"
          salary="$16.5 - $17.5"
          shift="Day 7am-4pm; Afternoon 2pm-10pm"
          description="Good lifting capability;
                  packing / wrapping;
                  quality checks;
                  shipping / receiving."
          location="Dixie& Eglinton, Mississauga"
        />
      </section>

    </Layout>
  );
}

export default ApplyPage;
