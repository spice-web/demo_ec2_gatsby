import {
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"

import React from "react"

const Wrapper = {
  display: "flex",
  paddingTop: "24px",
}
const ButtonWrapper = {
  paddingRight: "12px",
}

const ShareButtonList = ({ title, url }) => {
  return (
    <div style={Wrapper}>
      <div style={ButtonWrapper}>
        <FacebookShareButton url={url}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>
      </div>
      <div style={ButtonWrapper}>
        <LineShareButton url={url}>
          <LineIcon size={40} round />
        </LineShareButton>
      </div>
      <div style={ButtonWrapper}>
        <TwitterShareButton title={title} url={url}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>
      </div>
      <div style={ButtonWrapper}>
        <HatenaShareButton url={url}>
          <HatenaIcon size={40} round />
        </HatenaShareButton>
      </div>
    </div>
  )
}

export default ShareButtonList
