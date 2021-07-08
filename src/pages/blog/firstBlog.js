import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function FirstBlog() {
  return (
    <Layout>
      <Seo title="About Me" />
      <h1>This is blog 1</h1>
      <Link to="..">Go back blog page</Link>
    </Layout>
  )
}
