export default async function formHandler(req, res) {

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.GATSBY_SENDGRID_APIKEY);

  const { method, body } = req;

  const mailData = {
    from: 'admin@spice-web.jp',
    to: body.formEmail,
    bcc: 'admin@spice-web.jp',
    subject: 'サンパーキングwebサイトからのお問い合わせ',
    html: `<p>以下のお問い合わせを受け付けました。回答をお待ち下さい。</p>
    <hr>
    <p>お名前：${body.formName}</p>
    <p>フリガナ：${body.formKana}</p>
    <p>お電話番号：${body.formTel}</p>
    <p>FAX：${body.formFax}</p>
    <p>アドレス：${body.formEmail}</p>
    <p>メッセージ：${body.formTextarea}</p>`,
  }

  const response = sgMail.send(mailData)
  .then (
    result => res.status(200).json(JSON.stringify(result))
  )
  .catch (
    error => res.status(500).json(JSON.stringify(error))
  )
}