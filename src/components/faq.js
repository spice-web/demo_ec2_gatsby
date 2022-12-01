import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import * as styles from "../styles/_faq.module.scss"


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

      allFaqDepartureJson {
        edges {
          node {
            title
            contents
          }
        }
      }

      
    }
  `)

  const reserve = data.allFaqReserveJson.edges
  const payment = data.allFaqPaymentJson.edges
  const Departure = data.allFaqDepartureJson.edges
  const Arrival = data.allFaqArrivalJson.edges
  const Other = data.allFaqOtherJson.edges

  const TitleStyles = {
    padding: "10px 30px 10px 15px",
    borderRadius: "3px",
  }



  return (
    <>

    <div className={styles.faqWrap}>
      <h4 className="text-deep-gr mb--sm">予約に関して</h4>
      {reserve.map(e => (
        <dl class="faq faq__def">
          <dt style={TitleStyles} className="headline--greenLabel faq__title">{e.node.title}<button class="question-button" aria-label="予約に関して"><span></span><span></span></button></dt>
          <dd class="text-sm faq__answer">{e.node.contents}</dd>
        </dl>
      ))}
    </div>

    <div className={styles.faqWrap}>
      <h4 className="text-deep-gr mb--sm">支払い、料金に関して</h4>

      {payment.map(f => (
        <dl class="faq faq__def">
          <dt style={TitleStyles} className="headline--greenLabel faq__title">{f.node.title}<button class="question-button" aria-label="支払い、料金に関して"><span></span><span></span></button>
          </dt>
          <dd class="text-sm faq__answer">{f.node.contents}
            {f.node.url &&
              <Link to={f.node.url}>{f.node.link}</Link>
            }
            {f.node.more}
          </dd>
        </dl>
      ))}
    </div>

    <div className={styles.faqWrap}>
      <h4 className="text-deep-gr mb--sm">出発当日に関して</h4>
      {Departure.map(i => (
        <dl class="faq faq__def">
          <dt style={TitleStyles} className="headline--greenLabel faq__title">{i.node.title}<button class="question-button" aria-label="出発当日に関して"><span></span><span></span></button>
          </dt>
          <dd class="text-sm faq__answer">{i.node.contents}</dd>
        </dl>
      ))}
    </div>

    <div className={styles.faqWrap}>
      <h4 className="text-deep-gr mb--sm">到着について</h4>

      {Arrival.map(g => (
        <dl class="faq faq__def">
          <dt style={TitleStyles} className="headline--greenLabel  faq__title">{g.node.title}<button class="question-button" aria-label="到着について"><span></span><span></span></button></dt>
          <dd class="text-sm faq__answer">{g.node.contents}</dd>
        </dl>
      ))}

      <h4 className="text-deep-gr mb--sm">その他</h4>
      {Other.map(h => (
        <dl class="faq faq__def">
          <dt style={TitleStyles} class="headline--greenLabel faq__title">{h.node.title}<button class="question-button" aria-label="その他"><span></span><span></span></button></dt>
          <dd class="text-sm faq__answer">{h.node.contents}
            {h.node.url &&
              <Link to={h.node.url}>{h.node.link}</Link>
            }
            {h.node.more}</dd>
        </dl>
      ))}
    </div>

    </>
  )
}

export default Faq