import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function Blog() {
  return (
    <Layout>
      <Seo title="Blog" />
      <h1>This is where my blogs will go</h1>
      <Link to="firstBlog">First Ever Blog</Link>
    </Layout>
  )
}
