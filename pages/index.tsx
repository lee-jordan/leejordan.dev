import Head from 'next/head';
import Layout from '../components/layout';
import Fetch from 'isomorphic-unfetch';


const Index = ({ data }) => {
  return (
    <Layout>
      <div>
        { data.title }
      </div>
    </Layout>
  )
  
}

export const getServerSideProps = async({ res }) => {
  const response = await Fetch('https://api.leejordan.dev/homepage');

  const data = await response.json();
  return {
    props: {
      data
    }
  };
}

export default Index;