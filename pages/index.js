import Layout from "../components/layout";
import Hero from "../elements/hero";
import Experience from "../elements/experience";
import Service from "../elements/service";
import About from "../elements/about";
import Clients from "../elements/clients";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Service />
      <About />
      <Clients />
    </Layout>
  )
}

export default Home;