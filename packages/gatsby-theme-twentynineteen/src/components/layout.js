/** @jsx jsx */
import { jsx, Styled, ThemeProvider } from "theme-ui"

// import React from "react"
import PropTypes from "prop-types"

// import { StaticQuery, graphql } from "gatsby";
import Header from "./header"
import Footer from "./footer"

import { Box } from "@theme-ui/components"

import "../style.scss"
import theme from "../style/theme-config"

const Layout = ({ children, classNames }) => (
  <ThemeProvider theme={theme}>
    <Styled.root>
      <div
        id="page"
        className={`site ${classNames}`}
        sx={{ p: 5, backgroundColor: `background` }}
      >
        <a className="skip-link screen-reader-text" href="#content">
          Skip to content
        </a>

        <Header siteTitle={`Demo Blog`} />

        <Box
          mb={4}
          sx={{
            p: 3,
            bg: [`#252525`, `#757575`, `#A5A5A5`, `#E5E5E5`],
            color: [`#00E5E5`, `#00A5A5`, `#007575`, `#002525`],
          }}
        >
          THIS COMES FROM THEME UI
        </Box>

        <div
          id="content"
          className="site-content"
          sx={{ p: 5, backgroundColor: `white` }}
        >
          <section id="primary" className="content-area">
            <main id="main" className="site-main">
              {children}
            </main>

            {/* #main */}
          </section>
          {/* #primary */}
        </div>
        <div
          style={{
            margin: `0 auto`,
            paddingTop: 0,
          }}
        >
          <Footer />
        </div>
      </div>
    </Styled.root>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
