import React from 'react'
import styled, { css } from 'react-emotion'
import { Button } from '.'
import { mediaQueryLT } from './utils/style'

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
  font-size: 15px;
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
  ${props =>
    props.checkbox &&
    `
    flex-wrap: nowrap;
    border-bottom: none;
    align-items: flex-start;
    margin: 0;
    input {
      flex: 0 0 auto;
      margin-right: 15px;
      margin-top: 5px;
    }
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
  starter: {
    value: false,
    valid: true,
  },
  delicatessezaak: {
    value: false,
    valid: true,
  },
  broodjeszaak: {
    value: false,
    valid: true,
  },
  promofolder: {
    value: false,
    valid: true,
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
        starter: this.state.starter.value,
        delicatessezaak: this.state.delicatessezaak.value,
        broodjeszaak: this.state.broodjeszaak.value,
        promofolder: this.state.promofolder.value,
        'form-name': e.target['form-name'].value,
      }

      fetch('/?no-cache=1', {
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

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value
    const newState = {
      ...this.state,
      [target.name]: {
        valid: validate(target.name, value),
        value: value,
      },
    }
    this.setState({
      [target.name]: {
        valid: validate(target.name, value),
        value: value,
      },
      ready:
        newState.name.valid && newState.message.valid && newState.email.valid,
    })
  }

  render() {
    const {
      name,
      email,
      message,
      ready,
      starter,
      delicatessezaak,
      broodjeszaak,
      promofolder,
    } = this.state
    const formName = this.props.name ? this.props.name : 'contact-form'
    return (
      <form
        name={formName}
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        className={css`
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin: 0;
          && button {
            ${mediaQueryLT['tablet']} {
              width: 100%;
              margin: 20px 0 0;
            }
            margin-top: 20px;
            align-self: flex-start;
          }
        `}
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
        <br />
        <FormItem checkbox="true">
          <input
            type="checkbox"
            name="starter"
            checked={starter.value}
            onChange={this.handleChange}
          />
          ik wil starten, stuur mij een gratis starterspakket
        </FormItem>
        <FormItem checkbox="true">
          <input
            type="checkbox"
            name="delicatessezaak"
            checked={delicatessezaak.value}
            onChange={this.handleChange}
          />
          meer info over aanbod voor delicatessezaken
        </FormItem>
        <FormItem checkbox="true">
          <input
            type="checkbox"
            name="broodjeszaak"
            checked={broodjeszaak.value}
            onChange={this.handleChange}
          />
          meer info over aanbod voor broodjeszaken
        </FormItem>
        <FormItem checkbox="true">
          <input
            type="checkbox"
            name="promofolder"
            checked={promofolder.value}
            onChange={this.handleChange}
          />
          hou mij op de hoogte van de promoties, bezorg mij de promotiefolder
        </FormItem>
        <Button type="submit" isDisabled={ready !== true}>
          verstuur bericht
        </Button>
      </form>
    )
  }
}

export default ContactForm
