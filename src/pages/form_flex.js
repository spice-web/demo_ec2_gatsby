import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo";

const FormFlex = () => (
  <Layout>
    <Seo title="お問い合わせありがとうございます" />
    <>
    <form method="post"
      action="https://www.flexyform.com/f/1182875604167c7dcf13359e5c66df8294902e4c">
        <p>
            <label>Fullname</label>
            <input type="text" name="fullname" />
        </p>
        <p>
            <label>Email</label>
            <input type="email" name="_reply_to" />
        </p>
        <button type="submit">Send</button>
    </form>
    </>

  </Layout>
)

export default FormFlex