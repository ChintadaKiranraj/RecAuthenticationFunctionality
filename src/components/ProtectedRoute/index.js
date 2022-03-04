import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  console.log('protected route ')

  const jwtToken = Cookies.get('jwt_token_rahul')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}
export default ProtectedRoute
