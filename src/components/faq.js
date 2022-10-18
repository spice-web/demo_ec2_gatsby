import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"


const Faq = () => {
  const data = useStaticQuery(graphql`
    query {
      allFaqReserveJson {
        edges {
          node {
            title
            contents
          }
        }
      }

      allFaqPaymentJson {
        edges {
          node {
            title
            contents
            url
            link
            more
          }
        }
      }

      allFaqArrivalJson {
        edges {
          node {
            title
            contents
          }
        }
      }

      allFaqOtherJson {
        edges {
          node {
            title
            contents
            url
            link
            more
          }
        }
      }
      
    }
  `)

  const reserve = data.allFaqReserveJson.edges
  const payment = data.allFaqPaymentJson.edges
  const Arrival = data.allFaqArrivalJson.edges
  const Other = data.allFaqOtherJson.edges




  return (
    <>

      <h4 className="text-deep-gr">予約に関して</h4>
      {reserve.map(e => (
        <dl className="">
          <dt className="bg--dark-green text-white">{e.node.title}</dt>
          <dd className="text-sm">{e.node.contents}</dd>
        </dl>
      ))}

      <h4 className="text-deep-gr">支払い、料金に関して</h4>

      {payment.map(f => (
        <dl className="">
          <dt className="bg--dark-green text-white">{f.node.title}</dt>
          <dd className="text-sm">{f.node.contents}
            {f.node.url &&
              <Link to={f.node.url}>{f.node.link}</Link>
            }
            {f.node.more}
          </dd>
        </dl>
      ))}

      <h4 className="text-deep-gr">到着について</h4>

      {Arrival.map(g => (
        <dl className="">
          <dt className="bg--dark-green text-white">{g.node.title}</dt>
          <dd className="text-sm">{g.node.contents}</dd>
        </dl>
      ))}

      <h4 className="text-deep-gr">その他</h4>
      {Other.map(h => (
        <dl className="">
          <dt className="bg--dark-green text-white">{h.node.title}</dt>
          <dd className="text-sm">{h.node.contents}
            {h.node.url &&
              <Link to={h.node.url}>{h.node.link}</Link>
            }
            {h.node.more}</dd>
        </dl>
      ))}

    </>
  )
}

export default Faq