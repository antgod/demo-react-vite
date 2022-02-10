import { WeElement, render, h, tag } from 'omi'

import './index.css'
import * as css from './_index.less'
import logo from './logo.svg'

@tag('my-app')
export default class extends WeElement {

  static css = css.default

  abc

  onCountChanged = (evt) => {
    console.log(evt.detail)
  }

  render(props) {
    return (
      <div class="app">
        <header class="app-header">
          <img
            src={logo}
            class="app-logo"
            alt="logo"
          />
          <h1 class="app-title">Welcome to {props.name}</h1>
        </header>
        {this.abc}
        <o-counter onCountChanged={this.onCountChanged}></o-counter>
      </div>
    )
  }
}

render(<my-app name="webcomponent"></my-app>, '#webcomponent', {
  ignoreAttrs: true
})
