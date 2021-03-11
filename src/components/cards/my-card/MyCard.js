import { LitElement, html, css } from 'lit-element';
import '../../progress/my-progress/my-progress.js';
import '../../my-error-message/my-error-message.js';

const styles = css`
  :host {
    display: block;
    background-color: #ffffff;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 1px 4px rgba(0, 0, 0, 0.12);
    border-radius: 2px;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
  }
  :host ::slotted(header) {
    font-size: var(--my-card-header-font-size, 20px);
    color: var(--my-card-header-color, var(--my-text-dark, #455564));
    padding-top: var(--my-card-header-padding-top, 18px);
    padding-right: var(--my-card-header-padding-right, 24px);
    padding-bottom: var(--my-card-header-padding-bottom, 18px);
    padding-left: var(--my-card-header-padding-left, 0);
    margin-left: var(--my-card-header-margin-left, 24px);
    line-height: 21px;
    border-bottom: 1px solid var(--my-border-color, #e4e7ea);
  }
  :host article,
  :host ::slotted(article) {
    margin-left: var(--my-card-article-margin-left, 24px);
    padding-top: var(--my-card-article-padding-top, 18px);
    padding-right: var(--my-card-article-padding-right, 24px);
    margin-bottom: var(--my-card-article-margin-bottom, 18px);
    padding-bottom: var(--my-card-article-padding-bottom, 18px);
  }
  :host .no-content-text {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--my-text-neutral, #8d99a0);
    height: 220px;
  }
  :host ::slotted(footer) {
    margin-left: var(--my-card-footer-margin-left, 24px);
    padding-top: var(--my-card-footer-padding-top, 18px);
    padding-right: var(--my-card-footer-padding-right, 24px);
    padding-bottom: var(--my-card-footer-padding-bottom, 18px);
    font-size: var(--my-card-footer-size, 14px);
    text-align: var(--my-card-footer-text-align, right);
  }
  my-error-message {
    padding: 20px;
    margin-top: 20px;
  }
  .progress {
    padding: 50px 0;
  }
  @media (min-width: 736px) and (max-width: 991px) {
    :host([single-column]) ::slotted(article),
    :host([single-column]) ::slotted(footer),
    :host([single-column]) ::slotted(my-list-item) {
      margin-left: 24px;
      padding-right: 24px;
    }
  }
  @media (max-width: 739px) {
    :host([reset]) {
      max-width: none;
      border-radius: 0;
      margin-left: -16px;
      margin-right: -16px;
      box-shadow: none;
      position: relative;
    }
  }
  @media (max-width: 735px) {
    :host {
      max-width: 550px;
    }
    :host([wide]) {
      max-width: none;
    }
  }
  @media print {
    :host {
      padding: 0;
      margin: 0;
      box-shadow: none;
      background-color: transparent;
    }
    :host article,
    :host ::slotted(article) {
      margin: 0;
    }
  }
`;

/**
 * A My Design card component
 *
 * @prop {boolean} loading - Adds my-progress spinner to the body of the card.
 * @prop {boolean} hasData - Determines display of content or no-content slots.
 * @prop {string} errorMessage - Message to display when there is an error.
 * @prop {string} noDataMessage - Message to display when there is no data.
 *
 * @slot header - Used for header content.
 * @slot unnamed Used for the card content.
 * @slot no-content - Used for 'empty card' content.
 *
 * @attr {boolean} singleColumn - Maintains left margin and right padding at 24px at the middle viewport when card is the only one on the page.
 *
 * @cssprop --my-border-color - Border color for header section
 * @cssprop --my-card-article-margin-left - Left margin on the article element
 * @cssprop --my-card-article-padding-right - Right padding on the article element
 * @cssprop --my-card-article-margin-bottom - Bottom margin on the article element
 * @cssprop --my-card-article-padding-bottom - Bottom padding on the article element
 * @cssprop --my-card-footer-margin-left - Left margin on the footer element
 * @cssprop --my-card-footer-padding-top - Top padding on the footer element
 * @cssprop --my-card-footer-padding-right - Right padding on the footer element
 * @cssprop --my-card-footer-padding-bottom - Bottom padding on the footer element
 * @cssprop --my-card-footer-size - Font size on the footer element
 */

export default class MyCard extends LitElement {
  static get properties() {
    return {
      loading: {
        type: Boolean,
      },
      hasData: {
        type: Boolean,
        reflect: true,
      },
      errorMessage: {
        type: String,
      },
      noDataMessage: {
        type: String,
      },
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.loading = false;
    this.hasData = true;
    this.noDataMessage = 'No data';
    this.errorMessage = '';
  }

  render() {
    return html`
      <slot name="header"></slot>
      ${this.errorMessage
        ? html` <article>
            <my-error-message>
              ${this.errorMessage}
            </my-error-message>
          </article>`
        : ''}
      ${this.hasData ? html`<slot></slot>` : ''}
      ${this.loading && !this.hasData
        ? html` <div class="progress">
            <my-progress card></my-progress>
          </div>`
        : ''}
      ${!this.loading && !this.hasData
        ? html` <div class="no-content-text">
            <slot name="no-content">
              <p>${this.noDataMessage}</p>
            </slot>
          </div>`
        : ''}
    `;
  }
}

export { styles as MyCardStyles };
