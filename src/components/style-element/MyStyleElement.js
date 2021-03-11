/**
 * base class for style-only wrapper elements
 *
 * @slot unnamed slot for content
 */
import { LitElement, html } from 'lit-element';

export default class MyStyleElement extends LitElement {
  render() {
    return html`<slot></slot>`;
  }
}
