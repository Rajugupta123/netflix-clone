import React from 'react'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import logo from "../../logo.png"

const Header = () => {
  return (
    <nav className="header">
        <img src={logo} alt='netflix logo' />
        <div>
            <Link to="#">TvShows</Link>
            <Link to="#">Movies</Link>
            <Link to="#">RecentlyAdded</Link>
            <Link to="#">MyList</Link>
        </div>
        <FaSearch/>
        

    </nav>
  )
}

export default Header