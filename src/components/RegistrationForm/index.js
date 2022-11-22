import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    isSubmitted: false,
  }

  onChangeFirstName = event => {
    const fName = event.target.value
    this.setState({firstName: fName})
    if (fName === '') {
      this.setState({firstNameError: true})
    } else {
      this.setState({firstNameError: false})
    }
  }

  onChangeLastName = event => {
    const lName = event.target.value
    this.setState({lastName: lName})
    if (lName === '') {
      this.setState({lastNameError: true})
    } else {
      this.setState({lastNameError: false})
    }
  }

  submitForm = event => {
    const {firstName, lastName} = this.state
    event.preventDefault()

    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmitted: true, firstName: '', lastName: ''})
    }
    if (firstName === '') {
      this.setState({firstNameError: true})
    }
    if (lastName === '') {
      this.setState({lastNameError: true})
    }
  }

  submitAnother = () => {
    this.setState({isSubmitted: false})
  }

  render() {
    const {firstNameError, lastNameError, isSubmitted} = this.state
    return (
      <div className="registration-page">
        <div className="page-container">
          <h1>Registration</h1>
          {!isSubmitted && (
            <div>
              <label htmlFor="firstName">FIRST NAME</label>
              <br />
              <input
                type="text"
                placeholder="First name"
                id="fistName"
                onBlur={this.onChangeFirstName}
              />
              {firstNameError && <p>required</p>}
              <br />
              <br />

              <label htmlFor="lastName">LAST NAME</label>
              <br />
              <input
                type="text"
                placeholder="Last name"
                id="lastName"
                onBlur={this.onChangeLastName}
              />
              {lastNameError && <p>required</p>}
              <br />
              <br />
              <div className="submit-button">
                <button type="button" onClick={this.submitForm}>
                  Submit
                </button>
              </div>
            </div>
          )}
          {isSubmitted && (
            <div className="submitted-successfully-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="submit-image"
              />
              <p className="submitted-para">Submitted Successfully</p>
              <button type="button" onClick={this.submitAnother}>
                Submit Another Response
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
