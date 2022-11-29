// components/scroll.js
import React, { useState, useEffect } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';

const Scroll = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    // <div>
    //   {show && (
    //     <button onClick={handleClick} id="scrollBtn" aria-label="to top" className='text-center'>PAGE<br />Top
    //     </button>
    //   )}
    // </div>
    <div>
      <button onClick={() => scrollTo('#header')} id="scrollBtn" aria-label="to top" className='text-center'>PAGE<br />Top
      </button>
    </div>
  )
}
export default Scroll