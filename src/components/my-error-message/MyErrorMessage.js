import { LitElement, html, css } from 'lit-element';
import { myStyles } from '../styles/my-styles.js';

const styles = css`
  :host {
    display: flex;
    color: #ffffff;
    background-color: var(--my-color-warning);
    border-radius: 3px;
    padding: 16px 20px;
    text-align: left;
  }
  div {
    flex-grow: 1;
  }
  @media (max-width: 480px) {
    :host {
      padding: 10px;
    }
  }
`;

/**
 * A My Design component for a general error message.
 *
 * @slot unnamed slot used for content.
 *
 * @cssprop --my-color-warning - Sets the background color to the theme's warning color.
 */

export default class MyErrorMessage extends LitElement {
  static get styles() {
    return [myStyles, styles];
  }

  render() {
    return html`<div><slot></slot></div>`;
  }
}

export { styles as MyErrorMessageStyles };
