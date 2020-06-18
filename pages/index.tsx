import React from "react"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Work from "../components/sections/Work"
import Projects from "../components/sections/Projects"
import Fun from "../components/sections/Fun"
import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
      <Hero/>
      <About/>
      <Work/>
      <Projects/>
      <Fun/>
  </Layout>
)

export default IndexPage
