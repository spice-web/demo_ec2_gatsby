import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/_price_chart.scss"

// button
// import ButtonMore from "../components/button-more"


const PriceChart = () => {
  const data = useStaticQuery(graphql`
    query {
      left: allPriceChartJson(filter: {data: {keytext: {eq: "left"}}}) {
        edges {
          node {
            date
            price
            sale
          }
        }
      }
      right: allPriceChartJson(filter: {data: {keytext: {eq: "right"}}}) {
        edges {
          node {
            date
            price
            sale
          }
        }
      }
    }
  `)
  
  const prices = data.left.edges
  const prices_R = data.right.edges
  


  return (
    <>
        <div className="price-chart">

          <div className="priceBox">
            <dl className="flex__wrap price-chart__row price-chart__head">
              <dt className="bdr-white bg--dark-green text-white flex-col-3 text-center is-center day">日数</dt>
              <dd className="bdr-white bg--dark-green text-white flex-col-3 text-center is-center">通常料金（税込）</dd>
              <dd className="bdr-white bg--pink text-white flex-col-3 text-center price__head--sale ">キャンペーン<span className="nowrap">料金（税込）</span></dd>
            </dl>

            {prices.map(e => (
              <dl className="flex__wrap text-center price-chart__row">
                <dt className="text-white bdr-white bg--dark-green flex-col-3 text-sm text-medium is-center day">{e.node.date}</dt>
                <dd className="bg--light-yellow text-deep-gr bdr-white flex-col-3 text-sm is-center price--normal">{e.node.price}<span className="text-xs">円</span></dd>
                <dd className="bdr-white text-lg text-medium flex-col-3 bg--light-gray text-pk price--sale">{e.node.sale}<span className="en">円</span></dd>
              </dl>
            ))}
          </div>


          <div className="priceBox price__second">
            {/* 右側 */}
            <dl className="flex__wrap price-chart__row price-chart__head">
                <dt className="bdr-white bg--dark-green text-white flex-col-3 text-center is-center day">日数</dt>
                <dd className="bdr-white bg--dark-green text-white flex-col-3 text-center is-center">通常料金（税込）</dd>
                <dd className="bdr-white bg--pink text-white flex-col-3 text-center price__head--sale ">キャンペーン<span className="nowrap">料金（税込）</span></dd>
              </dl>
              {prices_R.map(e => (
                <dl className="flex__wrap text-center price-chart__row">
                  <dt className="text-white bdr-white bg--dark-green flex-col-3 text-sm is-center day">{e.node.date}</dt>
                  <dd className="bg--light-yellow text-deep-gr bdr-white flex-col-3 text-sm is-center price--normal">{e.node.price}<span className="text-xs">円</span></dd>
                  <dd className="bdr-white text-lg text-medium flex-col-3 bg--light-gray text-pk price--sale">{e.node.sale}<span className="en">円</span></dd>
                </dl>
              ))}
          </div>
        </div>
        

          {/* <div className="price-chart price__second">
            <dl className="flex__wrap price-chart__row price-chart__head">
              <dt className="bdr-white bg--dark-green text-white flex-col-3 text-center is-center day">日数</dt>
              <dd className="bdr-white bg--dark-green text-white flex-col-3 text-center is-center">通常料金（税込）</dd>
              <dd className="bdr-white bg--pink text-white flex-col-3 text-center price__head--sale ">キャンペーン<span className="nowrap">料金（税込）</span></dd>
            </dl>

            {prices.map(e => (
              <dl className="flex__wrap text-center price-chart__row">
                <dt className="text-white bdr-white bg--dark-green flex-col-3 text-sm is-center day">{e.node.date}</dt>
                <dd className="bg--light-yellow text-deep-gr bdr-white flex-col-3 text-sm is-center price--normal">{e.node.price}<span className="text-xs">円</span></dd>
                <dd className="bdr-white text-md flex-col-3 bg-light-gray text-pk price--sale">{e.node.sale}<span className="en">円</span></dd>
              </dl>
            ))}
          </div> */}

    <p className="priceNote text-xxs">※表示価格は税込みです。12/29～1/1ご入庫分は繁忙期料金1,000円（税込1,100円）が別途加算されます。<br />【ご注意】◎本キャンペーンの料金は公式サイトからのWeb予約限定となります。◎キャンペーン料金でご利用の場合、マイル積算、他の割引券利用はできません。※通常料金でご利用の場合は、受付時、お申し出により提携マイルが積算できます。◎大型バス等をご利用のお客様は、サン予約センターまでメールまたはお電話にてお問い合わせください。◎本キャンペーンで取得した個人情報(メールアドレスを含む)は弊社以外の第三者に開示することはありません。◎予告無しにキャンペーンが変更になる場合があります。ご了承ください。</p>
  </>

)}

export default PriceChart