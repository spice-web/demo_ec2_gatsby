import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Complete from "../components/complete"
import * as styles from '../styles/_form.module.scss'

import Faq from "../components/faq"

export default function FormPage() {
  const [value, setValue] = React.useState({})
  const [serverResponse, setServerResponse] = React.useState(``)

  // フォームの入力内容をリアルタイムでリッスンし仮保存しておく関数
  function handleChange(e) {
    value[e.target.id] = e.target.value
    setServerResponse(``)
    setValue({ ...value })
    console.log('■ value')
    console.log(value)
  }
  // ここまで

  // フォームが送信されたら、送信処理のために入力内容(value)を api/send.js に送る関数
  async function onSubmit(e) {
    e.preventDefault()
    const response = await window
    .fetch(`/api/send`, {
      method: `POST`,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value),
    })
    .then(res=>res.json())
    setServerResponse(response)
    setValue(``) // フォームの入力内容をカラにする
    console.log('■ response')
    console.log(response)
  }
  // ここまで

  return (

  <Layout>
    <Seo title="お問い合わせ" />

    {/* コンテナ */}
    <div className="content__wrap">
      <div className="content__inner --sm">

        {/* 表題ブロック */}
        <h2 class="headline--title">INQUIRY<span>お問い合わせ</span></h2>

        <p className="text-light">各店舗のご利用・ご予約に関するお問い合せ、サンパーキング各店舗のご利用・ご予約に関するお問い合わせは、下記メールフォームまたはサン予約センター TEL. 0476-33-1123 にてお受けいたします。 ご質問・ご要望にはなるべく迅速にお答えいたします。なお、ご入力いただきましたお客様の個人情報および記述内容は、内容の確認ならびにお客様への回答のために 必要な範囲でのみ利用させていただきます。</p>

        <p className="text-center text-deep-gr"><Link to="/policy">&gt;&gt;&gt;サイトポリシー</Link></p>
        <p className="text-center text-xs">必須の欄は必ずご記入の上お問い合わせください。 漢字・カナは全角、半角数字、半角ハイフンをご使用ください。</p>

        <p className="text-center text-deep-gr">お問い合わせの前に<Link to="/faq">よくあるお問い合わせ</Link>のご確認もお願いします。</p>

      </div>
      {/* content__inner */}

        <div className="content__inner --sm bg--light-gray dbr-md">

        {/* フォームブロック */}
        <div className="content__inner--xs">
          
          {/* 受付メッセージブロック */}
          <div className="text-center">
            {serverResponse ? <Complete /> : null}
          </div>

          <form onSubmit={onSubmit} method="POST" action="/api/send">

            {/* お名前 */}
            <div class="">
              <label for="formName" class="">お名前</label>
              <input type="text" id="formName" value={value['formName'] || ``} onChange={handleChange} class="" placeholder="例：鈴木太郎" />
            </div>

            {/* フリガナ */}
            <div class="">
              <label for="formKana" class="">フリガナ</label>
              <input type="text" id="formKana" value={value['formKana'] || ``} onChange={handleChange} class="" placeholder="例：スズキタロウ" />
            </div>


            {/* 電話番号 */}
            <div class="">
              <label for="formTel" class="">電話番号</label>
                <input type="text" id="formTel" value={value['formTel'] || ``} onChange={handleChange} class="" placeholder="例：0476-33-1155" />
            </div>

            {/* FAX */}
            <div class="">
              <label for="formFax" class="">FAX番号</label>
              <input type="text" id="formFax" value={value['formFax'] || ``} onChange={handleChange} class="" placeholder="例：0476-33-1198" />
            </div>

            {/* メールアドレス */}
            <label for="formEmail" class="">メールアドレス</label>
            <div class="">
              <input type="email" id="formEmail" value={value['formEmail'] || ``} onChange={handleChange} class="" placeholder="info@sunparking.co.jp" />
            </div>

            {/* お問い合わせ内容 */}
            <label for="formTextarea" class="">お問い合わせ内容</label>
            <div class="">
              <textarea id="formTextarea" value={value['formTextarea'] || ``} onChange={handleChange} class="" rows="3" placeholder=""></textarea>
            </div>

            {/* 送信ボタン */}
            <div class="">
              <button type="submit" class="button__submit"></button>
            </div>
          </form>
        </div>
        {/* フォームブロック */}

      </div>
      {/* content__inner */}

      <div className="content__inner --sm bg--light-gray dbr-md">
        <div className="content__inner--xs">
          <h3 className="text-deep-gr text-center">よくあるお問い合わせ</h3>
          

          <Faq />



        </div>
      </div>
      {/* content__inner */}

    </div>
      {/* コンテナ */}
  </Layout>
  )
}