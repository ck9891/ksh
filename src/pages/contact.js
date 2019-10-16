import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contact"
        keywords={[`Staffing`, `Employment`, `react`, `tailwindcss`]}
      />
      <section>
        <section className="flex flex-col items-center text-center mb-6">
          <h1 className="bg-blue-200 text-3xl font-bold my-8 p-3 ">Contact Us</h1>
        </section>
        <form className="mx-auto md:w-1/2">


          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="first-name"
          >
            First Name
          </label>

          <input
            className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
            id="first-name"
            type="text"
            placeholder="Bill"
          />

          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="last-name"
          >
            Last Name
          </label>

          <input
            className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
            id="last-name"
            type="text"
            placeholder="Murray"
          />

          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            className="appearance-none bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
            id="message"
            placeholder="Say something..."
            rows="8"
          />

          <button className="flex bg-blue-200 text-2xl font-bold mb-0 p-3 px-5 mx-auto">
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default ContactPage;
