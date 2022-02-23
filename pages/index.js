import Layout from "../components/layout";
import Hero from "../elements/hero";
import Experience from "../elements/experience";
import Service from "../elements/service";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Service />
    </Layout>
  )
}

export default Home;