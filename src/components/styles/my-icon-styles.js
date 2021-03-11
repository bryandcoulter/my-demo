import { css } from 'lit-element';

const styles = css`
  :host {
    display: inline-block;
    width: 24px;
    height: 24px;
    fill: var(--my-text-base);
  }
  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
  :host([x-small]) {
    width: 16px;
    height: 16px;
  }
  :host([small]) {
    width: 18px;
    height: 18px;
  }
  :host([large]) {
    width: 36px;
    height: 36px;
  }
  :host([x-large]) {
    width: 60px;
    height: 60px;
  }
  :host([primary]) {
    fill: var(--my-color-primary, #3aaeda);
  }
  :host([success]) {
    fill: var(--my-color-success, #4caf50);
  }
  :host([danger]) {
    fill: var(--my-color-danger, #f44336);
  }
  :host([base]) {
    fill: var(--my-text-base, #6b757b);
  }
  :host([light]) {
    fill: var(--my-color-light, #8c989f);
  }
  :host([muted]) {
    fill: var(--my-color-muted, #b3bfc9);
  }
  :host([neutral]) {
    fill: var(--my-color-neutral, #8d99a0);
  }
`;

export { styles as myIconStyles };
