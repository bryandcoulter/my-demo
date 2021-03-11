import { css } from 'lit-element';
import MyStyleElement from '../../style-element/MyStyleElement.js';
import { myStyles } from '../../styles/my-styles.js';

const styles = css`
  :host {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 16px;
  }
  :host ::slotted(button) {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: var(--my-text-base, #8c989f);
    font-size: var(--my-button-group-text-size, 13px);
    border: 1px solid var(--my-border-color, #e4e7ea);
    line-height: var(--my-button-line-height, 34px);
    background-color: var(--my-component-background-color, #ffffff);
    padding: 0;
    box-shadow: none;
    cursor: pointer;
    flex-grow: 1;
    position: relative;
    margin-left: -1px;
    z-index: 1;
    border-radius: 0;
  }
  :host ::slotted(button:hover) {
    background-color: #fff;
    border-color: var(--my-border-color-hover, #d3d8dd);
    z-index: 2;
  }
  :host ::slotted(button:first-of-type) {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  :host ::slotted(button:last-of-type) {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  :host ::slotted(button[active]) {
    z-index: 2;
    border-color: var(--my-border-color-hover, #d3d8dd);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.08);
  }
  :host([primary]) ::slotted(button) {
    color: var(--my-color-primary, #3aaeda);
    border-color: var(--my-color-primary, #3aaeda);
  }
  :host([primary]) ::slotted(button:hover) {
    background-color: rgba(52, 177, 224, 0.12);
    color: #259ac6;
    border-color: #259ac6;
    z-index: 2;
  }
  :host([primary]) ::slotted(button[active]) {
    background-color: var(--my-color-primary, #3aaeda);
    color: var(--my-text-white, #ffffff);
    border-color: var(--my-color-primary, #3aaeda);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.08);
  }
`;

export default class MyButtonGroupElement extends MyStyleElement {
  static get styles() {
    return [myStyles, styles];
  }
}
export { styles as MyButtonGroupStyles };
