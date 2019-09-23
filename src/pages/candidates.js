import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";

function CandidatesPage() {
  return (
    <Layout>
      <SEO
        title="Candidates"
        keywords={[`Staffing`, `Employment`, `react`, `tailwindcss`]}
      />
      <section className="flex flex-col items-center text-center mb-0">
        <h1 className="bg-blue-200 text-3xl font-bold mb-0 p-3 ">Candidates</h1>
      </section>
     
<div className="timeline">
  <div className="container left">
    <div className="content">
      <h3 className="font-bold mb-4 text-2xl">Find the Right Fit</h3>
      <p>Our Mission is to match candidates with a job that fits their needs, skills and training.</p>
    </div>
  </div>
  <div className="container right">
    <div className="content">
      <h3 className="font-bold mb-4 text-2xl">Interviews</h3>
      <p>KSH Staffing will prepare applicants for interviews with potential employers.</p>    
  </div>
  </div>
  <div className="container left">
    <div className="content">
      <h3 className="font-bold mb-4 text-2xl">Provide a Safe Workplace</h3>
      <p>KSH works to ensure workplace safety and compliance at job sites while on assignment.</p>
    </div>
  </div>
  <div className="container right">
    <div className="content">
      <h3 className="font-bold mb-4 text-2xl">Training</h3>
      <p>Employees will receive WHMIS training and other assignment-specific training.</p>
    </div>
  </div>
  <div className="container left">
    <div className="content">
      <h3 className="font-bold mb-4 text-2xl">Pay</h3>
      <p>Employees will receive vacation pay and statutory holiday pay as outlined in the Employment Standards Act.</p>
    </div>
  </div>
</div>
<section className="flex flex-col items-center text-center mb-0">
    <Link to="/apply" className="bg-blue-200 text-2xl font-bold mb-0 p-3">Apply Now</Link>
</section>
    </Layout>
  );
}

export default CandidatesPage;
