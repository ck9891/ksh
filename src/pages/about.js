import React from "react";
import Img from 'gatsby-image';
import { graphql, Link } from "gatsby"
import {useSpring, animated} from 'react-spring';
import Layout from "../components/layout";
import SEO from "../components/seo";
import FooterBanner from '../components/FooterBanner'

function AboutPage({data}) {
  const [props] = useSpring({
    top: 100,
    background: 'black',
    from: { top: 0 },
    delay: '2000'
  })
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`Staffing`, `Employment`, `react`, `tailwindcss`]}
      />

      <section className="max-w-5xl mx-auto my-8">
      <animated.div className="flex flex-col items-center text-center"

          style={props}>
        <h1 className="bg-blue-200 text-3xl font-bold mb-6 p-3 ">About</h1>
      </animated.div>
      <section className="flex flex-col md:flex-row items-center">
        <h2 className="bg-blue-400 text-2xl font-bold inline-block my-8 p-3">
          About KSH Staffing Solutions
        </h2>
        <div className="md:w-2/3 md:mr-8">
          <p className="border-l-4 border-gray-900 font-serif leading-loose pl-4 text-justify first-letter">
We provide staffing services to our clients based on their specific needs and requirements. By sourcing talented staff and the increase in networking and various media, we are able to keep up to the demands of Companies. These companies are expanding their temporary, temporary to permanent and contact placements as their business cycles.
          </p>

        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center  md:my-8">
        <div className="md:w-2/3">
          <p className="border-r-4 border-gray-900 font-serif leading-loose pr-4 text-justify first-letter">

            KSH understands the expectations of Leading Edge Companies and Canada’s Top 50 Companies to work for. They have made the commitment to use our services and expertise. We reward that commitment with reliability, dependability and consistent performance through the years.
          </p>

        </div>
        <h2 className="bg-blue-400 text-2xl font-bold inline-block my-8 p-3 mr-8">
          Why KSH Staffing Solutions?
        </h2>
      </section>
      <section className="flex flex-col md:flex-row items-center">

        <div className=" md:mr-8">
          <p className="border-l-4 border-gray-900 font-serif leading-loose pl-4 text-justify first-letter">
We are customer driven, and understand their demands and the importance of deadlines and the time constraints in their day to day operations.
Our customers choose KSH Staffing because we understand their business, we are professional and an experienced source for staffing for their company needs.
          </p>

        </div>
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

export default AboutPage;
