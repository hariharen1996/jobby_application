import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {BsBriefcaseFill} from 'react-icons/bs'
import './index.css'

class Header extends Component {
  logoutApp = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-large">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="lg-logo"
            alt="website logo"
          />
          <ul className="lg-nav-items">
            <li className="lg-nav-links">Home</li>
            <li className="lg-nav-links">About</li>
          </ul>
          <div className="logout-btn-container">
            <button
              type="button"
              className="logout-btn"
              onClick={this.logoutApp}
            >
              Logout
            </button>
          </div>

          <ul className="sm-nav-items">
            <li className="sm-nav-links">
              <AiFillHome />
            </li>
            <li className="sm-nav-links">
              <BsBriefcaseFill />
            </li>
            <li className="sm-nav-links">
              <FiLogOut />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
