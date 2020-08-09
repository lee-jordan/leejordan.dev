import Layout from '../components/layout';
import Intro from '../components/intro';
import Experience from '../components/experience';
import Projects from '../components/projects';

const Index = () => {
  return (
    <Layout>
      <div>
        <Intro/>
        <Experience />
        <Projects />
      </div>
    </Layout>
  )
  
}

export default Index;