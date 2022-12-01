import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Faq from "../components/faq"
import Wrap from "../components/grayContainer"

import * as styles from '../styles/_form.module.scss'

// smoothscroll
import scrollTo from 'gatsby-plugin-smoothscroll';

const FormFlex = () => (
  <Layout>
    <Seo title="お問い合わせ" />
    <h2 class="headline--title">INQUIRY<span>お問い合わせ</span></h2>
    {/* コンテナ */}
    <div className="content__wrap content__pd">
      <div className="content__inner --sm">
          <p className="pg--md mb--lg">各店舗のご利用・ご予約に関するお問い合せ、サンパーキング各店舗のご利用・ご予約に関するお問い合わせは、下記メールフォームまたはサン予約センター TEL. 0476-33-1123 にてお受けいたします。 ご質問・ご要望にはなるべく迅速にお答えいたします。<br />なお、ご入力いただきましたお客様の個人情報および記述内容は、内容の確認ならびにお客様への回答のために 必要な範囲でのみ利用させていただきます。</p>

          <p className="text-center text-deep-gr mb--xs"><Link to="/policy">&gt;&gt;&gt;サイトポリシー</Link></p>
          <p className="text-center text-xs mb--lg">必須の欄は必ずご記入の上お問い合わせください。<br />漢字・カナは全角、半角数字、半角ハイフンをご使用ください。</p>

          <p className="text-center text-deep-gr mb--xxl">お問い合わせの前に<button className={styles.linkBox} onClick={() => scrollTo('#faq')}>よくあるお問い合わせ</button>の<br className="br_maxsm" />ご確認もお願いします。</p>

        </div>

        <Wrap>

        {/* フォームブロック */}
        <div className="content__inner--xs">
          <form method="post"
            action={process.env.GATSBY_FLEXYFORM_ACTION}>
            {/* action="https://www.flexyform.com/f/1182875604167c7dcf13359e5c66df8294902e4c"> */}

            {/* セレクト */}
              <label for="select" htmlFor="select">お問い合わせ先</label>
              <select name="select" id="select" size="1" required >
                <option value="" hidden>選択してください</option>
                <option value="サンパーキング成田店">サンパーキング成田店</option>
                <option value="その他">その他</option>
              </select>

            {/* お名前 */}
              <div>
                  <label htmlFor="formName">お名前※必須</label>
                  <input type="text" name="お名前" id="formName" required />
              </div>
              <div>
                  <label htmlFor="kana">フリガナ※必須</label>
                  <input type="text" name="フリガナ" pattern="/\A[ァ-ヴー]+\z/u" id="kana" required />
              </div>

              {/* 電話番号 */}
              <div>
                <label htmlFor="formTel">電話番号（数字のみハイフン無し）</label>
                <input type="text" pattern="^[0-9]{9,}$" maxlength="11" inputmode="numeric" name="電話番号" id="formTel" />
              </div>

              {/* FAX番号 */}
              <div>
                <label htmlFor="formFax">FAX番号（数字のみハイフン無し）</label>
                <input type="text" pattern="^[0-9]{9,}$" maxlength="10" inputmode="numeric" name="FAX番号" id="formFax" />
              </div>
              <div>
                <label htmlFor="email">メールアドレス※必須</label>
                <input type="email"  pattern=".+\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]" name="メールアドレス" id="email" required />
              </div>

            {/* お問い合わせ内容 */}
              <div>
                  <label htmlFor="ContactUs">お問い合わせ内容※必須</label>
                  <textarea name="お問い合わせ内容" id="ContactUs" rows="3" placeholder="" required></textarea>
              </div>

            {/* プライバシーポリシー */}
            <div className={styles.checkbox}>
              <input type="checkbox" name="プライバシーポリシーに同意する" id="agreement" required />
              <label for="agreement" htmlFor="agreement" >
                <Link to="/policy" className="link_deco">プライバシーポリシー</Link>に同意する※必須
              </label>
            </div>

            <div class="">
              <button type="submit" class="button__submit" aria-label="送信する"></button>
            </div>
            </form>
          </div>
        {/* フォームブロック */}

        </Wrap>

      <Wrap>
        <div id="faq" className="LinkMargin">
          <div className="content__inner--xs">
            <h3 className="text-deep-gr text-center mb--md">よくあるお問い合わせ</h3>
            <Faq />
          </div>
        </div>
      </Wrap>

    </div>

  </Layout>
)

export default FormFlex