import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Contact Me" />
    <h1>To contact me:</h1>
    <p>email: pfothergill@hotmail.com</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
