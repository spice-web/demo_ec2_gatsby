import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Complete from "../components/complete"
import * as styles from '../styles/_form.module.scss'

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
    <div className="content__wrap content__wrap--lg">

      {/* 表題ブロック */}
      <div class="">お問い合わせ</div>

      {/* 受付メッセージブロック */}
      <div className="">
          { serverResponse ? <Complete /> : null }
      </div>

      {/* フォームブロック */}
      <div class="">
        <form onSubmit={onSubmit} method="POST" action="/api/send">
          <div class="">
            <label for="formName" class="">お名前</label>
            <input type="text" id="formName" value={value['formName'] || ``} onChange={handleChange} class="" placeholder="例：鈴木太郎" />
          </div>
          <label for="formEmail" class="">メールアドレス</label>
          <div class="">
            <input type="email" id="formEmail" value={value['formEmail'] || ``} onChange={handleChange} class="" placeholder="info@sunparking.co.jp" />
          </div>
          <label for="formTextarea" class="">メッセージ</label>
          <div class="">
            <textarea id="formTextarea" value={value['formTextarea'] || ``} onChange={handleChange} class="" rows="3" placeholder=""></textarea>
          </div>
          <div class="">
            <button type="submit" class="">送 信</button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
  )
}