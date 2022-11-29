import React from "react"
import { animateScroll as scroll } from "react-scroll"

class PageTop extends React.Component {

  scrollToTop = () => {
    scroll.scrollToTop()
  }

  render() {
    return (
      <div className="pagetop">
        <button className="pagetop__btn" onClick={this.scrollToTop}>トップへ戻る</button>
      </div>
    )
  }
}

export default PageTop