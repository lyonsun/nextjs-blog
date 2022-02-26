import Layout from "../components/layout";
import Hero from "../elements/hero";
import Experience from "../elements/experience";
import Service from "../elements/service";
import About from "../elements/about";
import Clients from "../elements/clients";
import Portfolio from "../elements/portfolio";
import Testimony from "../elements/testimony";
import CTA from "../elements/cta";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Service />
      <About />
      <Clients />
      <Portfolio />
      <Testimony />
      <CTA />
    </Layout>
  )
}

export default Home;