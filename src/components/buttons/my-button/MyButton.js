import { LitElement, html, css } from 'lit-element';
import { myStyles } from '../../styles/my-styles.js';
import '../../progress/my-progress/my-progress.js';

const styles = css`
  :host {
    display: inline-block;
    text-align: center;
    margin-bottom: 0;
    touch-action: manipulation;
    cursor: pointer;
  }

  button[button-reset] {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: var(--my-button-text-align, center);
    vertical-align: middle;
    contain: layout;
    text-transform: var(--my-button-text-transform, none);
    border: 1px solid transparent;
    white-space: var(--my-button-white-space, nowrap);
    background: var(--my-button-background, var(--my-color-primary, #3aaeda));
    color: var(--my-button-text, var(--my-text-white, #ffffff));
    padding: var(--my-button-padding-vertical, 0px)
      var(--my-button-padding-horizontal, 18px);
    font-size: var(--my-button-text-size, 14px);
    font-weight: var(--my-button-font-weight, 400);
    line-height: var(--my-button-line-height, 34px);
    border-radius: var(--my-button-border-radius, 3px);
    box-sizing: border-box;
    overflow: hidden;
    transition: background-color ease 0.2s;
  }

  button[button-reset]:hover,
  button[button-reset]:focus {
    text-decoration: none;
    background-color: var(
      --my-button-background-hover,
      var(--my-color-primary, #3aaeda)
    );
    border-color: var(--my-button-border-color-hover, transparent);
  }

  button[button-reset]:active {
    background-color: var(
      --my-button-background-active,
      var(--my-color-primary, #3aaeda)
    );
  }

  button[disabled] {
    opacity: var(--my-button-disabled-opacity, 0.3);
    cursor: default;
  }
  button[disabled]:hover,
  button[disabled]:focus {
    background-color: var(
      --my-button-background,
      var(--my-color-primary, #3aaeda)
    );
    border-color: var(--my-button-border-color, transparent);
    box-shadow: none;
  }

  :host ::slotted(.icon) {
    position: relative;
    top: -1px;
  }

  :host([default]) button[button-reset] {
    color: var(--my-button-default-text, var(--my-text-base, #6b757b));
    background-color: transparent;
    border-color: var(
      --my-button-default-border,
      var(--my-border-color, #e4e7ea)
    );
    transition: background-color ease 0.2s;
  }

  :host([default]) button[button-reset]:hover {
    background-color: var(
      --my-button-default-background-hover,
      rgba(153, 153, 153, 0.12)
    );
  }

  :host([default]) button:active {
    background-color: var(
      --my-button-default-background-active,
      rgba(153, 153, 153, 0.4)
    );
  }

  :host([outline]) button {
    color: var(--my-button-outline-text, var(--my-text-light, #8c989f));
    background-color: var(--my-button-outline-background, transparent);
    border-color: var(
      --my-button-outline-border,
      var(--my-border-color, #e4e7ea)
    );
    transition: background-color ease 0.2s;
  }

  :host([outline]) button:hover {
    background-color: var(
      --my-button-outline-background-hover,
      rgba(153, 153, 153, 0.12)
    );
  }

  :host([outline]) button:active {
    background-color: var(
      --my-button-outline-background-active,
      rgba(153, 153, 153, 0.4)
    );
  }

  :host([outline-primary]) button {
    color: var(
      --my-button-primary-background,
      var(--my-color-primary, #3aaeda)
    );
    background-color: transparent;
    border-color: var(
      --my-button-primary-background,
      var(--my-color-primary, #3aaeda)
    );
  }

  :host([outline-primary]) button:hover {
    background-color: var(
      --my-button-outline-primary-background-hover,
      rgba(52, 177, 224, 0.12)
    );
  }

  :host([outline-primary]) button:active {
    color: var(--my-button-text, var(--my-text-white, #ffffff));
    background-color: var(
      --my-button-primary-background,
      var(--my-color-primary, #3aaeda)
    );
  }

  :host([outline-success]) button {
    color: var(
      --my-button-success-background,
      var(--my-color-success, #4caf50)
    );
    background-color: transparent;
    border-color: var(
      --my-button-success-background,
      var(--my-color-success, #4caf50)
    );
  }

  :host([outline-success]) button:hover {
    background-color: var(
      --my-button-outline-success-background-hover,
      rgba(70, 181, 74, 0.12)
    );
  }

  :host([outline-success]) button:active {
    color: var(--my-button-text, var(--my-text-white, #ffffff));
    background-color: var(
      --my-button-success-background,
      var(--my-color-success, #4caf50)
    );
  }

  :host([outline-danger]) button {
    color: var(
      --my-button-danger-background,
      var(--my-color-danger, #f44336)
    );
    background-color: transparent;
    border-color: var(
      --my-button-danger-background,
      var(--my-color-danger, #f44336)
    );
  }

  :host([outline-danger]) button:hover {
    background-color: var(
      --my-button-outline-danger-background-hover,
      rgba(249, 62, 49, 0.12)
    );
  }

  :host([outline-danger]) button:active {
    color: var(--my-button-text, var(--my-text-white, #ffffff));
    background-color: var(
      --my-button-danger-background,
      var(--my-color-danger, #f44336)
    );
  }

  :host([icon]) button {
    background-color: var(--my-button-icon-background, transparent);
    padding: var(--my-button-icon-padding, 0);
    border-radius: var(--my-button-icon-border-radius, 50%);
    line-height: var(--my-button-icon-line-height, 0);
  }

  :host([icon]) button:hover,
  :host([icon]) button:focus {
    background-color: var(--my-button-icon-background-hover, transparent);
    box-shadow: none;
  }

  :host([icon]) button a:hover {
    background-color: transparent;
  }

  :host([link]) button {
    color: var(--my-button-link-text, var(--my-color-primary, #3aaeda));
    font-weight: var(--my-button-link-font-weight, 400);
    background-color: transparent;
    font-size: var(
      --my-button-link-text-size,
      var(--my-text-size-base, 14px)
    );
    padding: 0;
    vertical-align: var(--my-button-link-vertical-align, top);
    border-radius: 0;
  }

  :host([link]) button:hover,
  :host([link]) button:focus {
    box-shadow: none;
    color: var(--my-button-link-text-hover, var(--my-color-primary, #3aaeda));
    font-size: var(
      --my-button-link-text-size,
      var(--my-text-size-base, 14px)
    );
    text-decoration: var(--my-button-link-text-decoration, underline);
    background-color: transparent;
    border-color: transparent;
    padding: 0;
  }

  button[is-loading] {
    overflow: visible;
    opacity: 1;
  }

  button[is-loading] my-progress {
    display: inline-block;
  }

  :host([link]) my-progress {
    border-color: var(
      --my-button-link-text,
      var(--my-color-primary, #3aaeda)
    );
  }

  button[is-loading] .slot-wrapper {
    opacity: 0;
  }

  .my-progress-wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    left: 0;
    right: 0;
  }

  button .slot-wrapper,
  button my-progress {
    transition: opacity 0.2s cubic-bezier(0.1, 0.5, 0.1, 1);
  }

  button .slot-wrapper {
    display: inline-block;
  }

  my-progress {
    pointer-events: none;
    position: relative;
    border-color: var(
      --my-progress-color-button,
      var(--my-text-white, #ffffff)
    );
    display: none;
  }
  /* IE 11 specific style to fix placement of my-progress when button is submitted */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    my-progress.my-button {
      margin-top: -10px;
    }
  }
  :host([outline]) my-progress {
    border-color: var(
      --my-progress-color-button-outline,
      var(--my-color-primary, #3aaeda)
    );
  }

  :host([primary]) button {
    background-color: var(
      --my-button-primary-background,
      var(--my-color-primary, #3aaeda)
    );
  }

  :host([neutral]) button {
    background-color: var(--my-button-neutral-background, #dadcde);
    color: var(--my-button-neutral-text, #6b757b);
  }

  :host([success]) button {
    background-color: var(
      --my-button-success-background,
      var(--my-color-success, #4caf50)
    );
  }

  :host([danger]) button {
    background-color: var(
      --my-button-danger-background,
      var(--my-color-danger, #f44336)
    );
  }

  :host([toggle]) button {
    color: var(--my-button-toggle-text, var(--my-color-neutral, #8d99a0));
    font-size: var(--my-button-toggle-text-size, 13px);
    font-weight: 600;
    background-color: transparent;
    text-transform: uppercase;
  }

  :host([toggle]) button:hover {
    color: var(
      --my-button-primary-background,
      var(--my-color-primary, #3aaeda)
    );
    background-color: transparent;
  }

  :host([x-small]) button {
    font-size: calc(var(--my-button-text-size, 14px) - 2);
    line-height: var(--my-button-line-height-xsmall, 14px);
  }

  :host([small]) button {
    font-size: calc(var(--my-button-text-size, 14px) - 1);
    line-height: var(--my-button-line-height-small, 28px);
  }

  :host([large]) button {
    line-height: var(--my-button-line-height-large, 48px);
    padding-left: calc(var(--my-button-padding-horizontal, 18px) * 1.5);
    padding-right: calc(var(--my-button-padding-horizontal, 18px) * 1.5);
  }

  :host([wide]) button {
    padding-left: calc(var(--my-button-padding-horizontal, 18px) * 1.5);
    padding-right: calc(var(--my-button-padding-horizontal, 18px) * 1.5);
  }

  :host([block]) {
    display: block;
    margin-bottom: 5px;
  }

  :host([block]:last-of-type) {
    margin-bottom: 0;
  }

  :host([block]) button {
    width: 100%;
  }
  :host([flex]) .slot-wrapper {
    display: flex;
    align-items: var(--my-link-button-align-items, center);
    justify-content: var(--my-link-button-justify-content, flex-start);
    text-align: left;
  }
`;

/**
 * A My Design button with loading wheel
 *
 * @element my-button
 *
 * @prop {boolean} sync - if present, button is synchronous and doesn't show wheel or change loading state
 * @prop {"button"|"reset"|"menu"|"submit"} type - proxy property for the internal button type
 * @prop {boolean} disabled - disable the button
 * @prop {string} ariaLabel - aria label to use for the button
 *
 * @fires submit - fired when the button is clicked and is used inside a form
 *
 * @slot unnamed slot, typically used for the button label or icon
 *
 * @attr {boolean} disabled - Sets opacity of the entire button to 0.5
 * @attr {boolean} outline- Removes background color and adds border
 * @attr {boolean} outline-primary - Removes background color and sets border and text color to theme's primary color
 * @attr {boolean} outline-success - Removes background color and sets border and text color to theme's success color
 * @attr {boolean} outline-danger - Removes background color and sets border and text color to theme's danger color
 * @attr {boolean} icon - Removes background color and padding, sets border radius to 50%, and sets line height to 0
 * @attr {boolean} isloading - Set via JS, it removes the button text and shows the my-progress component
 * @attr {boolean} primary - Sets background color to theme's primary color
 * @attr {boolean} neutral - Sets background color to theme's neutral color
 * @attr {boolean} success - Sets background color to theme's success color
 * @attr {boolean} danger - Sets background color to theme's danger color
 * @attr {boolean} toggle - Sets styling for toggle button
 * @attr {boolean} x-small - Tweaks styling to decrease the default size of the button
 * @attr {boolean} small - Tweaks styling to decrease the default size of the button
 * @attr {boolean} large - Tweaks styling to increase the default size of the button
 * @attr {boolean} wide - Tweaks styling to increase the default width of the button
 * @attr {boolean} block - Tweaks styling to cause button to go full width of the container
 * @attr {boolean} flex - Adds flex styling to to the 'slot-wrapper' span to allow the slotted contents to have flex layout
 *
 * @cssprop --my-button-background - Background color of the button
 * @cssprop --my-button-background-hover - Background color of the button on hover
 * @cssprop --my-button-background-active - Background color of the button when pressed
 * @cssprop --my-button-icon-background - Background for a my-button[icon] button
 * @cssprop --my-button-icon-padding | Padding for a my-button[icon] button
 * @cssprop --my-button-icon-border-radius : Border radius for a my-button[icon] button
 * @cssprop --my-button-icon-line-height - Line height of a my-button[icon] button
 * @cssprop --my-button-text - Text color of the button
 * @cssprop --my-button-text-size - Default text size of the button
 * @cssprop --my-button-text-transform - Default transform style of the button
 * @cssprop --my-button-line-height - Default line height of the button
 * @cssprop --my-button-line-height-small - Line height of the button with the 'small' attribute
 * @cssprop --my-button-line-height-large - Line height of the button with the 'large' attribute
 * @cssprop --my-button-border-radius - Border radius of the button
 * @cssprop --my-button-border-color-hover - Border color of the button on hover
 * @cssprop --my-button-padding-vertical - Top and bottom default padding for the button
 * @cssprop --my-button-padding-horizontal - Left and right default padding for the button
 * @cssprop --my-button-outline-border - Border color for outline button
 * @cssprop --my-button-outline-text - Text color for outline button
 * @cssprop --my-button-outline-primary-background-hover - Background color for outline-primary button on hover
 * @cssprop --my-button-outline-success-background-hover - Background color for outline-success button on hover
 * @cssprop --my-button-outline-danger-background-hover - Background color for outline-danger button on hover
 * @cssprop --my-button-link-text - Text color for link button
 * @cssprop --my-button-link-text-hover - Text color for link button on hover
 * @cssprop --my-button-link-text-size - Text size for link button
 * @cssprop --my-progress-color-button - Border color for progress spinner
 * @cssprop --my-progress-color-button-outline - Border color for progress spinner used in an outline button
 * @cssprop --my-button-primary-background - Background color for primary button
 * @cssprop --my-button-neutral-background - Background color for neutral button
 * @cssprop --my-button-success-background - Background color for success button
 * @cssprop --my-button-danger-background - Background color for danger button
 * @cssprop --my-button-toggle-text - Text color for toggle button
 * @cssprop --my-button-toggle-text-size - Text size for toggle button
 */

export default class MyButton extends LitElement {
  static get properties() {
    return {
      isLoading: {
        type: Boolean,
        reflect: true,
      },
      disabled: {
        type: Boolean,
        reflect: true,
      },
      sync: {
        type: Boolean,
      },
      focused: {
        type: Boolean,
        reflect: true,
      },
      type: {
        type: String,
      },
      ariaLabel: {
        type: String,
      },
    };
  }

  static get styles() {
    return [myStyles, styles];
  }

  constructor() {
    super();
    /** @type {?Element} */
    this.form_ = null;
    /** @type {"button"|"reset"|"menu"|"submit"} */
    this.type = 'button';
    this.disabled = false;
    this.isLoading = false;
    this.sync = false;
    this.focused = false;
    this.ariaLabel = '';
    this.boundFormSubmit_ = this.onFormSubmit_.bind(this);
    this.boundOnFocus_ = this.onFocus_.bind(this);
    this.boundOnBlur_ = this.onBlur_.bind(this);
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

  connectedCallback() {
    super.connectedCallback();
  }

  firstUpdated() {
    this.form_ = this.closest('form');

    if (this.form_ && this.type === 'submit') {
      this.form_.addEventListener('submit', this.boundFormSubmit_, false);
    }
    const button = this.shadowRoot.querySelector('button');
    button.addEventListener('focus', this.boundOnFocus_);
    button.addEventListener('blur', this.boundOnBlur_);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.form_ && this.type === 'submit') {
      this.form_.removeEventListener('submit', this.boundFormSubmit_, false);
    }
  }

  render() {
    return html` <button
      button-reset
      type=${this.type}
      ?disabled=${this.disabled}
      ?is-loading=${this.isLoading}
      aria-label="${this.ariaLabel}"
      tabindex="0"
      @click=${event => this.onClick_(event)}
    >
      <span class="my-progress-wrapper">
        <my-progress></my-progress>
      </span>
      <span class="slot-wrapper">
        <slot></slot>
      </span>
    </button>`;
  }

  reset() {
    this.disabled = false;
    this.isLoading = false;
  }

  /**
   * @private
   */
  onFocus_() {
    this.focused = true;
  }

  /**
   * @private
   */
  onBlur_() {
    this.focused = false;
  }

  /**
   * @private
   * @param {!Event} event
   */
  onClick_(event) {
    if (this.disabled || this.isLoading) {
      event.stopPropagation();
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    if (this.form_ && this.type === 'submit') {
      /*
      Perhaps because Chrome supports Shadow DOM, and Firefox uses Shady DOM, Chrome does not
      automatically fire a `submit` event when a <my-button type="submit"> is clicked, but Firefox
      does. The following is to normalize the behavior by canceling any default behavior and dispatching
      our own event so the desired behavior works in all supported browsers.
      */
      event.preventDefault(); // prevent default submit action (Gecko)
      this.form_.dispatchEvent(
        new CustomEvent('submit', {
          composed: true,
          bubbles: true,
          cancelable: true,
        })
      );
    } else if (!this.sync) {
      this.isLoading = true;
    }
  }

  /**
   * @private
   * @param {!Event} evt
   */
  onFormSubmit_(evt) {
    evt.preventDefault();
    if (!this.disabled && !this.sync) {
      this.isLoading = true;
    }
  }
}

export { styles as MyButtonStyles };
