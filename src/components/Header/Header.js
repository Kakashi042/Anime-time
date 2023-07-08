import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='header-name'>ANIME TIME</div>
      </Link>
      <form className='form'>
        <input type='text'></input>
        <button type='submit'>
          <img></img>
        </button>
      </form>
    </div>
  )
}

export default Header