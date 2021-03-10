import React from 'react'
import './Header.css'

export default ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="logo">
      <a href=""><img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt=""/></a>
      </div>
      <div className="profile">
      <a href=""><img src="/assets/profile.png" alt=""/></a>
      </div>
    </header>
  )
}