import React from 'react'
import styled from 'react-emotion'
import { Button } from '.'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0;
`
const FormItem = styled.label`
  width: 100%;
  position: relative;
  display: block;
  border-bottom: 1px solid white;
  margin: 10px 0;
  padding-bottom: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  span {
    margin-right: 5px;
    width: 55px;
  }
  input,
  textarea {
    padding: 5px;
    background: transparent;
    border: none;
    color: white;
    background: rgba(0, 0, 0, 0.25);
    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }
    &:invalid {
      border: none;
      box-shadow: none;
    }
    flex: 1 0 auto;
  }
  textarea {
    height: 100px;
    width: 100%;
  }
  ${props =>
    !props.invalid &&
    `
    border-bottom: 1px solid green;
  `};
`

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const validateEmail = email => {
  return re.test(String(email).toLowerCase())
}
const validate = (type, value) => {
  return value && (type != 'email' || validateEmail(value)) ? true : false
}
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
const baseState = {
  name: {
    value: '',
    valid: false,
  },
  email: {
    value: '',
    valid: false,
  },
  message: {
    value: '',
    valid: false,
  },
  ready: false,
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = baseState
  }

  handleSubmit = e => {
    e.preventDefault()

    if (
      this.state.name.valid &&
      this.state.message.valid &&
      this.state.email.valid
    ) {
      const data = {
        name: this.state.name.value,
        email: this.state.email.value,
        message: this.state.message.value,
        'form-name': e.target['form-name'].value,
      }
      console.log(
        JSON.stringify({
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode(data),
        })
      )
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data),
      })
        .then(() => {
          alert('Bericht verzonden')
          this.setState(baseState)
        })
        .catch(error => {
          alert(error)
        })
    }
  }

  handleChange = e => {
    const newState = {
      ...this.state,
      [e.target.name]: {
        valid: validate(e.target.name, e.target.value),
        value: e.target.value,
      },
    }
    this.setState({
      [e.target.name]: {
        valid: validate(e.target.name, e.target.value),
        value: e.target.value,
      },
      ready:
        newState.name.valid && newState.message.valid && newState.email.valid,
    })
  }

  render() {
    const { name, email, message, ready } = this.state
    const formName = this.props.name ? this.props.name : 'contact-form'
    return (
      <StyledForm
        name={formName}
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        // onSubmit={this.handleSubmit}
      >
        <noscript>activate javascript to use this form</noscript>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value={formName} />
        <FormItem invalid={!name.valid}>
          <span>Naam:</span>
          <input
            type="text"
            name="name"
            value={name.value}
            onChange={this.handleChange}
            required
          />
        </FormItem>
        <FormItem invalid={!email.valid}>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={email.value}
            onChange={this.handleChange}
            required
          />
        </FormItem>
        <FormItem invalid={!message.valid}>
          <span>Bericht:</span>
          <textarea
            name="message"
            value={message.value}
            onChange={this.handleChange}
          />
        </FormItem>

        <Button type="submit" isDisabled={ready !== true}>
          Verzend
        </Button>
      </StyledForm>
    )
  }
}

export default ContactForm
