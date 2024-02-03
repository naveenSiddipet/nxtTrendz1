// Write your JS code here

import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: '', invalid: '', showError: false}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showError: true, invalid: errorMsg})
  }

  submitData = async event => {
    event.preventDefault()

    const {userName, password} = this.state
    const userDetails = {userName, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  submitUser = event => {
    this.setState({userName: event.target.value})
  }

  submitPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {userName, password, invalid, showError} = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="img1"
        />
        <form onSubmit={this.submitData}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="img2"
          />
          <div className="l1">
            <label htmlFor="userid">USERNAME</label>
            <input
              type="text"
              value={userName}
              id="userid"
              className="box"
              onChange={this.submitUser}
              placeholder="Username"
            />
          </div>
          <div className="l1">
            <label htmlFor="userpwd">PASSWORD</label>
            <input
              type="password"
              value={password}
              id="userpwd"
              className="box"
              onChange={this.submitPassword}
              placeholder="Password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {showError && <p className="error">{`*${invalid}`}</p>}
      </div>
    )
  }
}

export default LoginForm
