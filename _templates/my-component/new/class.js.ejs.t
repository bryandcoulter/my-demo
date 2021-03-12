---
to: <%= path %>/<%= name %>/<%= h.classifyDashed(name) %>.js
---
import { LitElement, html, css } from 'lit-element';
import { myStyles } from '../styles/my-styles.js';

const styles = css``;

export default class <%= h.classifyDashed(name) %> extends LitElement {

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
    return html``;
  }
}

export {styles as <%= h.classifyDashed(name) %>Styles}
