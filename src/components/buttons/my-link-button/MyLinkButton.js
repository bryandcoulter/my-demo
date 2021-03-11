import { LitElement, html, css } from 'lit-element';
import { myStyles } from '../../styles/my-styles.js';

const styles = css`
  :host {
    position: relative;
    display: inline-block;
    margin-bottom: 0;
    text-align: center;
    contain: layout;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: var(--my-link-button-white-space, nowrap);
    background-color: var(--my-button-background, var(--my-color-primary));
    text-transform: none;
    font-size: var(--my-button-text-size, 14px);
    line-height: var(--my-button-line-height, 34px);
    border-radius: var(--my-button-border-radius, 4px);
    transition: background-color ease 0.2s;
    color: var(--my-button-text, var(--my-text-white));
    font-weight: var(--my-button-font-weight, 400);
  }

  a:hover,
  a:focus {
    text-decoration: none;
  }

  :host(:active) {
    background-color: var(
      --my-button-background-active,
      var(--my-color-primary)
    );
  }

  a {
    display: block;
    text-decoration: none;
    padding: var(--my-button-padding-vertical, 0px)
      var(--my-button-padding-horizontal, 18px);
    color: inherit;
  }

  a:hover {
    text-decoration: none;
  }

  :host([disabled]),
  :host([disabled]) a {
    cursor: default;
  }

  :host([disabled]) a {
    opacity: var(--my-button-disabled-opacity, 0.3);
  }

  :host ::slotted(.icon) {
    position: relative;
    top: -2px;
  }

  :host([flex]) a {
    display: flex;
    align-items: var(--my-link-button-align-items, center);
    justify-content: var(--my-link-button-justify-content, flex-start);
    text-align: left;
  }

  :host([outline]) {
    background-color: transparent;
    border-color: var(--my-button-outline-border, var(--my-color-primary));
    transition: background-color ease 0.2s;
  }

  :host([outline]) a {
    color: var(--my-button-outline-text, var(--my-color-primary));
  }

  :host([outline]:hover) {
    background-color: rgba(153, 153, 153, 0.12);
  }

  :host([outline]:active) {
    background-color: rgba(153, 153, 153, 0.4);
  }

  :host([outline]) a:hover {
    color: var(--my-button-outline-text, var(--my-color-primary));
    background-color: transparent;
  }

  :host([outline-primary]) {
    background-color: transparent;
    border-color: var(
      --my-button-primary-background,
      var(--my-color-primary)
    );
  }

  :host([outline-primary]) a {
    color: var(--my-button-primary-background, var(--my-color-primary));
    background-color: transparent;
  }

  :host([outline-primary]:hover) {
    background-color: var(
      --my-button-outline-primary-background-hover,
      rgba(153, 153, 153, 0.12)
    );
  }

  :host([outline-primary]:hover) a {
    background-color: transparent;
  }

  :host([outline-primary]:active) {
    background-color: var(
      --my-button-primary-background,
      var(--my-color-primary)
    );
  }

  :host([outline-primary]:active) a {
    color: var(--my-button-text, var(--my-text-white));
    background-color: transparent;
  }

  :host([outline-success]) {
    background-color: transparent;
    border-color: var(
      --my-button-success-background,
      var(--my-color-success)
    );
  }

  :host([outline-success]) a {
    color: var(--my-button-success-background, var(--my-color-success));
    background-color: transparent;
  }

  :host([outline-success]:hover) {
    background-color: var(
      --my-button-outline-success-background-hover,
      rgba(153, 153, 153, 0.12)
    );
  }

  :host([outline-success]:hover) a {
    background-color: transparent;
  }

  :host([outline-success]:active) {
    background-color: var(
      --my-button-success-background,
      var(--my-color-success)
    );
  }

  :host([outline-success]:active) a {
    color: var(--my-button-text, var(--my-text-white));
    background-color: transparent;
  }

  :host([outline-danger]) {
    background-color: transparent;
    border-color: var(--my-button-danger-background, var(--my-color-danger));
  }

  :host([outline-danger]) a {
    color: var(--my-button-danger-background, var(--my-color-danger));
    background-color: transparent;
  }

  :host([outline-danger]:hover) {
    background-color: var(
      --my-button-outline-danger-background-hover,
      rgba(153, 153, 153, 0.12)
    );
  }

  :host([outline-danger]:hover) a {
    background-color: transparent;
  }

  :host([outline-danger]:active) {
    background-color: var(
      --my-button-danger-background,
      var(--my-color-danger)
    );
  }

  :host([outline-danger]:active) a {
    color: var(--my-button-text, var(--my-text-white));
    background-color: transparent;
  }

  :host([icon]) {
    background-color: transparent;
  }

  :host([icon]):hover,
  :host([icon]):focus {
    background-color: transparent;
    box-shadow: none;
  }

  :host([icon]) a:hover {
    background-color: transparent;
  }

  :host([primary]) {
    background-color: var(
      --my-button-primary-background,
      var(--my-color-primary)
    );
  }

  :host([primary]) a:hover {
    background-color: transparent;
  }

  :host([neutral]) {
    background-color: var(--my-button-neutral-background, transparent);
  }

  :host([neutral]) a:hover {
    background-color: transparent;
  }

  :host([success]) {
    background-color: var(
      --my-button-success-background,
      var(--my-color-success)
    );
  }

  :host([success]) a:hover {
    background-color: transparent;
  }

  :host([danger]) {
    background-color: var(
      --my-button-danger-background,
      var(--my-color-danger)
    );
  }

  :host([danger]) a:hover {
    background-color: transparent;
  }

  :host([toggle]) {
    background-color: transparent;
  }

  :host([toggle]) a {
    color: var(--my-button-toggle-text, var(--my-color-neutral));
    font-size: var(--my-button-toggle-text-size, 13px);
    font-weight: 600;
    text-transform: uppercase;
  }

  :host([toggle]) a:hover {
    color: var(--my-button-primary-background, var(--my-color-primary));
    background-color: transparent;
  }
  :host([small]) a {
    font-size: calc(var(--my-button-text-size, 14px) - 1);
    line-height: var(--my-button-line-height-small, 28px);
  }

  :host([large]) a {
    line-height: var(--my-button-line-height-large, 48px);
    padding-left: calc(var(--my-button-padding-horizontal, 18px) * 2);
    padding-right: calc(var(--my-button-padding-horizontal, 18px) * 2);
  }

  :host([wide]) a {
    padding-left: calc(var(--my-button-padding-horizontal, 18px) * 2);
    padding-right: calc(var(--my-button-padding-horizontal, 18px) * 2);
  }

  :host([block]) {
    display: block;
    width: 100%;
    margin-bottom: 5px;
  }

  :host([block]:last-of-type) {
    margin-bottom: 0;
  }

  :host([default]) {
    color: var(--my-button-default-text, var(--my-text-base, #6b757b));
    background-color: var(--my-button-default-background, transparent);
    border-color: var(
      --my-button-default-border,
      var(--my-border-color, #e4e7ea)
    );
    font-weight: var(--my-button-default-font-weight, 400);
    font-size: var(--my-button-default-font-size, 14px);
    transition: background-color ease 0.2s;
  }

  :host([default]):hover {
    background-color: var(
      --my-button-default-background-hover,
      rgba(153, 153, 153, 0.12)
    );
  }

  :host([default]):active {
    background-color: var(
      --my-button-default-background-active,
      rgba(153, 153, 153, 0.4)
    );
  }
`;

export default class MyLinkButton extends LitElement {
  static get styles() {
    return [myStyles, styles];
  }

  static get properties() {
    return {
      href: { type: String },
      rel: { type: String },
      target: { type: String },
      disabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.href = '';
    this.rel = '';
    this.target = '';
    this.disabled = false;
    // trap clicks on the element itself. this prevents the element from stll
    // registing clicks on it's content (usually a label) while the internal
    // button is disabled.
    this.addEventListener('click', event => {
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
      }
    });
  }

  render() {
    return html`<a
      href=${this.href}
      rel=${this.rel}
      target=${this.target}
      ?disabled=${this.disabled}
    >
      <slot></slot>
    </a>`;
  }
}

export { styles as MyLinkButtonStyles };
