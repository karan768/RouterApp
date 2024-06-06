import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className='navigation'>
      <Link to="/profile">Profile</Link>
      <Link to="/history">History</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/review">Review</Link>
      <Link to="/game">Tik Tak Toe</Link>
      <Link to="/carousel">Carousel</Link>
      <Link to="/pagination">Pagination</Link>
      <Link to="/playground">Playground</Link>
      <Link to="/accordian">Accordian</Link>
    </div>
  )
}

export default Navigation