import React from 'react'
import './Header.css'

const Header = ({loading}) => {
  return (
    <div>
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Basket App</span>
        </div>
      </header>
    </div>
  )
}

export default Header
