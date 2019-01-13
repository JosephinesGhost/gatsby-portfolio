import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1> 
    <p>
    Chocolate gummies cake. Cookie oat cake jujubes cupcake tart tart chocolate bar gingerbread jelly-o. Gummies chocolate cake macaroon sesame snaps cookie. Dragée wafer danish dragée muffin muffin. Marzipan gummies cookie cupcake pudding pie. Caramels chocolate bar sugar plum. Halvah muffin pie gummi bears. Fruitcake chocolate gingerbread. 
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`