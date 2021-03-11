import { LitElement, html, css } from 'lit-element';
import { myStyles } from '../../styles/My-styles.js';

const styles = css`
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
  :host {
    display: inline-block;
    animation: spin 0.75s linear infinite;
    transform-origin: center;
    width: 16px;
    height: 16px;
    border-width: 2px;
    border-style: solid;
    border-color: var(--My-progress-color, var(--My-border-color));
    border-right-color: transparent !important;
    border-radius: 50%;
  }
  :host([inline]) {
    width: 12px;
    height: 12px;
  }
  :host([card]) {
    display: block;
    width: 28px;
    height: 28px;
    border-width: var(--My-progress-card-border-width, 4px);
    margin: 80px auto;
  }
`;

/**
 * A My Design progress indicator
 *
 * @attr {boolean} card - used when inside a card element
 *
 * @cssprop --My-progress-color - color for the progress wheel
 * @cssprop --My-progress-card-border-width - border width when placed inside a card
 */
export default class MyProgress extends LitElement {
  static get is() {
    return 'my-progress';
  }

  static get styles() {
    return [myStyles, styles];
  }

  render() {
    return html``;
  }
}

export { styles as MyProgressStyles };
