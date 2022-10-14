import React from 'react';
import { Link } from 'gatsby';
// import './Header.css'
import { StaticImage } from 'gatsby-plugin-image';


const Sponsor = (props) => {
  // ナビゲーションバーに表示するリンク
  const NavMenuItem = ["jal", "ana", "jetstar", "peach", "zip", "spring", "jtb", "his", "kinki", "nipon", "hankyu"];

  // 普段のリンクはこのスタイル
  const LinkStyles = {
    background: 'rebeccapurple',
    color: 'white',
    fontWeight: "normal"
  }



  // ナビゲーションリンクの作成
  const NavMenuLiTag = NavMenuItem.map((item) => {
    let page_link = "";
    if (item === "Home") {
      page_link = "/";
    }
    else page_link = "../images/company-logo/" + item + ".jpg";

    return (
      <li key={page_link}>
        <Link to={page_link} style={LinkStyles} className="page-link">

          <StaticImage
            src={page_link}>

          </StaticImage>
        </Link>
      </li>
    )
  });

  return (
      <ul>
        {NavMenuLiTag}
      </ul>
  );
}

export default Sponsor;