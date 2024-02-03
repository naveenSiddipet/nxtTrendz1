// Write your JS code here

import './index.css'

const Header = () => (
    <nav>
      <div className="header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="homeimg"
        />
        <div className="header-2">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
          </ul>
          <button type="submit" className="btn1">
            Logout
          </button>
        </div>
      </div>
    </nav>
  
  )

export default Header
