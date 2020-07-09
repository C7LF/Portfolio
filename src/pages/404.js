import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Box from "@material-ui/core/Box";

const NotFoundPage = () => (
  <Layout>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Box>
  </Layout>
)

export default NotFoundPage
