import Layout from '../components/layout';
import Intro from '../components/intro';
import Fetch from "isomorphic-unfetch";


const Index = ({ homepage, projects }) => {
  return (
    <Layout>
      <div>
        <Intro {...homepage}/>
        { JSON.stringify(projects) }
      </div>
    </Layout>
  )
  
}

export default Index;

export const getServerSideProps = async (context) => {
  const { res } = context;

  const homepageRes = await Fetch("https://api.leejordan.dev/homepage");
  const projectsRes = await Fetch("https://api.leejordan.dev/projects");

  if (homepageRes.status !== 200 || projectsRes.status !== 200) {
    res.statusCode = 503;
    return;
  }
  const homepage = await homepageRes.json();
  const projects = await projectsRes.json();

  // console.log(data);

  return {
    props: {
      homepage,
      projects
    },
  };
};