import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function About() {
  return (
    <Layout>
      <Seo title="About Me" />
      <h1>A little about me...</h1>
      <p>I am from Des Moines and love to program. I do it for a living at Principal Financial Group as a full-stack engineer.</p>
      <Link to="/">Go back to my homepage</Link>
    </Layout>
  )
}
