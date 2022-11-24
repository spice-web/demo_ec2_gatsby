import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo";

const FormFlex = () => (
  <Layout>
    <Seo title="お問い合わせ" />
    <>
    <form method="post"
      action="https://www.flexyform.com/f/1182875604167c7dcf13359e5c66df8294902e4c">
        <p>
            <label>お名前※必須</label>
            <input type="text" name="fullname" />
        </p>
        <p>
            <label>フリガナ※必須</label>
            <input type="text" name="kana" />
        </p>
        <p>
            <label>メールアドレス※必須</label>
            <input type="email" name="_reply_to" />
        </p>
        <p>
        <label>お問い合わせ内容※必須</label>
            <textarea name="message"></textarea>
        </p>
        <button type="submit">Send</button>
    </form>
    </>

  </Layout>
)

export default FormFlex