import { LitElement, html, css } from 'lit-element';
import { myStyles } from '../styles/my-styles.js';

const styles = css``;

export default class MyNewElement extends LitElement {

  static get styles() {
    return [myStyles, styles];
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`<div>I am from hygen</div>`;
  }
}

export {styles as MyNewElementStyles}
