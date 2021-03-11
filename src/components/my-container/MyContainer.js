import { css } from 'lit-element';
import MyStyleElement from '../style-element/MyStyleElement.js';
import { myStyles } from '../styles/my-styles.js';

const styles = css`
  :host {
    display: block;
    padding: 0 40px;
    margin: 0 auto;
    max-width: 1170px;
  }
  @media (max-width: 1024px) {
    :host {
      padding: 0 30px;
    }
  }
  @media (max-width: 600px) {
    :host {
      padding: 0 8px;
    }
  }
  @media print {
    :host {
      max-width: none;
      padding: 0;
    }
  }
`;

/**
 * A My Design container component used as a page-wide container to set spacing at the top level of a view.
 *
 * @slot unnamed slot for content
 */

export default class MyContainer extends MyStyleElement {
  static get styles() {
    return [myStyles, styles];
  }
}
export { styles as MyContainerStyles };
