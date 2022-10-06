import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from "../components/layout"
import Seo from '../components/seo';
import { Pagination } from '../components/pagination';

const InformationPage = ({ data }) => {
  return (
    <Layout>
      <Seo title='HOME' />
      <ul>
        {data.allMicrocmsInformation.edges.map(({ node }) => (
          <li key={node.informationId}>
            <Link to={`/information/${node.informationId}`}>
              {node.title}
            </Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={data.allMicrocmsInformation.totalCount} />
    </Layout>
  )
}

export default InformationPage

export const query = graphql`
  query ($limit: Int!, $skip: Int!) {
    allMicrocmsInformation(limit: $limit, skip: $skip) {
      edges {
        node {
        id
        informationId
        title
        }
      }
      totalCount
    }
  }

`