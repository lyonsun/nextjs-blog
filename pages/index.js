import Layout from "../components/layout";
import Hero from "../elements/hero";
import Experience from "../elements/experience";
import Service from "../elements/service";
import About from "../elements/about";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Service />
      <About />
    </Layout>
  )
}

export default Home;