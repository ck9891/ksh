import React from "react";
import Img from 'gatsby-image';
import { graphql, Link } from "gatsby"
import CardOpportunity from '../components/opportunities/CardOpportunity'
import Layout from "../components/layout";
import SEO from "../components/seo";

function ApplyPage({data}) {
  return (
    <Layout>
      <SEO
        title="Job Opportunities"
        keywords={[`Staffing`, `Employment`, `react`, `tailwindcss`]}
      />
      <section className="max-w-5xl mx-auto my-8">
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
      </section>
      <div className="bg-gray-800 relative">
        <Img
          // className="hero-banner"
          fluid={data.file.childImageSharp.fluid}
          alt=""
        />
        <div className="hero-banner-content text-center">
          <Link to="/apply" className="bg-blue-200 text-2xl font-bold mb-0 p-3">Apply Now</Link>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "banner3.jpg" }) {
      childImageSharp {
        fluid(duotone: { highlight: "#bee3f8", shadow: "#00001f" },maxHeight:150, maxWidth:900, quality: 99
  ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default ApplyPage;
