import React from "react";
import Img from 'gatsby-image';
import { graphql, Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage({data}) {
  return (

    <Layout>
      <SEO
        title="Home"
        keywords={[`Staffing`, `Employment`, `Permanent`, `Temporary`]}
      />
      <div className="bg-gray-800 relative">
      <Img
        className="hero-banner"
        fluid={data.file.childImageSharp.fluid}
        alt=""
      />
        <div className="hero-banner-content text-center">
          <h2 className="bg-blue-400 text-2xl font-bold inline-block my-8 p-3">
            Welcome to KSH Staffing Solutions Inc.
          </h2>
        </div>
      </div>
      <section className="text-center py-10 ">
        <div className="max-w-5xl mx-auto">
        <p className="leading-loose text-xl px-4">
          KSH Staffing Solutions offers temporary and temporary-permanent employment opportunities. Our long standing relationships with many great companies with excellent reputations can connect you to amazing assignments that suit your experience, skills schedule and lifestyle.
        </p>
        </div>
      </section>
      <section className="bg-gray-300 py-12">
      <section className="flex flex-col items-center text-center mb-0">
        <h1 className="bg-blue-200 text-3xl font-bold mb-0 p-3 ">Our Candidates</h1>
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
      </section>
      {/* employers section */}
      <section className="py-10 md:px-2 px-4 bg-blue-400 text-white sm:text-lg etext-xl ">
        <div className="max-w-5xl mx-auto ">
        <section className="flex flex-col items-center text-center mb-4">
            <h2 className="bg-blue-200 text-gray-900  text-2xl font-bold mb-6 p-3 ">Employers</h2>
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
            <Link to="/contact" className="bg-blue-200 text-gray-900 text-2xl font-bold mb-0 p-3">Contact Us</Link>
        </section>
        </div>
      </section>
    </Layout>
  );
}
export const query = graphql`
  query {
    file(relativePath: { eq: "banner2.jpg" }) {
      childImageSharp {
        fluid(maxHeight:300, maxWidth:900, quality: 99
  ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage;
