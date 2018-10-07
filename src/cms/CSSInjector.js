import React from 'react'
import { renderToString } from 'react-dom/server'
import { renderStylesToString } from 'emotion-server'
import { GlobalStyle } from '../../components/Layout'

class CSSInjector extends React.Component {
  render() {
    let style = ''
    let prevRule = ''
    GlobalStyle.globalStyle.rules.map((e, i) => {
      console.log(e)
      if (typeof e == 'string') {
        const rule = e.replace(/(\r\n|\n|\r|\s)/gm, '')
        if (!(prevRule == '}' && rule == ';')) {
          style = style + rule
        }
        prevRule = rule.substr(rule.length - 1)
      }
    })
    return (
      <div
        ref={ref => {
          if (ref && !this.css) {
            this.css = renderStylesToString(renderToString(this.props.children))
            ref.ownerDocument.head.innerHTML += this.css
          }
        }}
      >
        {React.Children.only(this.props.children)}
        <style>{style}</style>
      </div>
    )
  }
}

export default CSSInjector
