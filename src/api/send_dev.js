export default function formHandler(req, res) {

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    // port: 587,
    port: 465,
    host: 'smtp.sendgrid.net',
    auth: {
      user: 'apikey',
      pass: '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',
      // user: `${process.env.GATSBY_SENDGRID_USERNAME}`,
      // pass: `${process.env.GATSBY_SENDGRID_APIKEY}`,
    },
    secure: true,
  })

  if (!req.body.email) {
    return res.status(422).json("メールアドレスを入力してください")
  }

  const mailData = {
    from: 'TEST Sender <admin@spice-web.jp>',
    to: req.body.email ? req.body.email : '',
    subject: '【サンパーキング】お問い合わせありがとうございます',
    html: req.body.emailBody ? `<p>${req.body.emailBody}</p>` : "Null message.",
  }

  const results = transporter.sendMail(mailData)
    .then(result => res.status(200).json(JSON.stringify(result)))
    .catch(error => res.status(500).json(JSON.stringify(error)))
}