import React from 'react';
import { Link } from 'gatsby';
// import './Header.css'
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from "gatsby"


const Sponsor = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allEventsJson {
        edges {
          node {
            date
            title
          }
        }
      }
    }
  `)



  return (
    <div>
      {events.map(e => (
        <div>
          <h2>{e.node.title}</h2>
          <p>{e.node.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Sponsor;