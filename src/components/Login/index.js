import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  onSubmitSuccess = data => {
    Cookies.set('jwt_token_rahul', data.jwt_token, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLogin = async () => {
    const credentials = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data, 'data')
    console.log(response, 'response')
    if (response.ok === true) {
      this.onSubmitSuccess(data)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token_rahul')

    if (jwtToken !== undefined) {
      console.log('ima at alrady in login')

      return <Redirect to="/" />
    }
    return (
      <>
        <h1>Please Login</h1>

        <button type="button" onClick={this.onLogin}>
          Login with Sample Creds
        </button>
      </>
    )
  }
}

export default Login
