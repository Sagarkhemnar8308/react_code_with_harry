import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">{props.home} <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
        </ul>
        <div className={`"custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.tooglMode} />
          <label className="custom-control-label" for="customSwitch1">{props.mode}</label>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
}

// Navbar.defaultProps={
//     title:"Set title here",
// }

export default Navbar;
