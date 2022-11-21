import * as React from "react"
import { Link } from "gatsby"

const text = {
  marginBottom: '2rem',
}

export default function Complete() {
  return (
    <>
      <p style={text}>
        この度は、お問い合わせいただき誠に有りがとうございます。<br />
        ご返答まで、今しばらくお待ち下さいますようよろしくお願い申し上げます。
      </p>
    </>
  );
}