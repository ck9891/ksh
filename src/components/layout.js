import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

import Header from "./header";

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header siteTitle={data.site.siteMetadata.title} />

      <main className="flex flex-col flex-1 md:justify-center omax-w-5xl mx-auto px-4o  md:p-80 w-full">
        {children}
      </main>

      <footer className="bg-gray-300">
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
          <p className="text-black">
            Created by{" "}
            <a
              href="https://cameronfarquharson.com"
              className="font-bold no-underline text-blue"
            >
              Cameron Farquharson
            </a>
          </p>
          <p>Copyright 2019</p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
