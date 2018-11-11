import React from 'react'
import Layout from '../components/layout'
import Bid from '../components/Bid';

const IndexPage = () => {
  return (
    <Layout>
      <Bid milesValue={.15} sqFtValue={.10} />
    </Layout>
  );
}
 
export default IndexPage;