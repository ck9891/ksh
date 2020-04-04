import React from "react";
import { Link } from 'gatsby';
import Layout from "../components/layout";
import SEO from "../components/seo";

function EmployersPage() {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`Staffing`, `Employment`, `react`, `tailwindcss`]}
      />
      <section className="flex flex-col items-center text-center mb-6">
        <h1 className="bg-blue-200 text-3xl font-bold mb-6 p-3 ">Employers</h1>
      </section>
      <section className="flex flex-col md:flex-row items-center">
          <p className="border-l-4 border-gray-900 font-serif leading-loose pl-4 text-justify first-letter">
Our friendly staff take the time to understand your company, it’s culture, environment. We work towards building a long-term partnership and establishing what it is you would like to cultivate with your new or existing team.
          </p>

      </section>
      <section className="flex flex-col md:flex-row items-center  md:my-8">
          <p className="border-r-4 border-gray-900 font-serif leading-loose pr-4 text-justify first-letter">
            With lots of experience in the industry an a good reputation with customers and candidates we endeavor to provide you with top quality personnel, service, for competitive rates; along with Our Commitment of Excellence.
          </p>
      </section>
      <section className="flex flex-col md:flex-row items-center">
          <p className="border-l-4 border-gray-900 font-serif leading-loose pl-4 text-justify first-letter">
            We will only place candidates that “fit” your requirements with experience, skills, training, and the personality for the position you are seeking.
          </p>
      </section>
      <section className="flex flex-col md:flex-row items-center  md:my-8">
          <p className="border-r-4 border-gray-900 font-serif leading-loose pr-4 text-justify first-letter">
            Working with you to achieve standards for Workplace Safety and benefiting from our expertise, training, and commitment.
          </p>

      </section>
      <section className="flex flex-col md:flex-row items-center self-center md:my-8">
        <Link to="/contact" className="bg-blue-200 text-2xl font-bold mb-0 p-3">Contact Us</Link>
      </section>
    </Layout>
  );
}

export default EmployersPage;
