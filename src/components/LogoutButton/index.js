import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

const LogoutButton = props => {
  console.log('log out button ')

  const onLogOut = () => {
    Cookies.remove('jwt_token_rahul')
    const {history} = props
    history.replace('/login')
  }
  return (
    <>
      <button type="button" onClick={onLogOut}>
        Logout
      </button>
    </>
  )
}

export default withRouter(LogoutButton)
