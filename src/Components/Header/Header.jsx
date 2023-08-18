import React from 'react'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import logo from "../../logo.png"

const Header = () => {
  return (
    <nav className="header">
        <img src={logo} alt='netflix logo' />
        <div>
            <Link to="/tvshows">TvShows</Link>
            <Link to="/tvshows">Movies</Link>
            <Link to="/tvshows">RecentlyAdded</Link>
            <Link to="/tvshows">MyList</Link>
        </div>
        <FaSearch/>
        

    </nav>
  )
}

export default Header