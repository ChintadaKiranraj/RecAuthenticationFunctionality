import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  console.log('thi is an head component')

  return (
    <ul className="list-container">
      <Link to="/">
        <li>Home</li>
      </Link>

      <Link to="/about">
        <li>About</li>
      </Link>
    </ul>
  )
}

export default Header
