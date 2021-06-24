import { LitElement, html, css } from 'lit-element';
import routeMixin from '@jack-henry/web-component-router/routing-mixin.js';

const styles = css`
  :host {
    display: block;
  }
  jha-card {
    padding: 8px;
  }
`;

export default class MainLayout extends routeMixin(LitElement) {

  static get styles() {
    return [styles];
  }

  constructor() {
    super();
  }

  async routeEnter(currentNode, nextNodeIfExists, routeId, context) {
    return super.routeEnter(currentNode, nextNodeIfExists, routeId, context);
  }


  render() {
    return html`
      <jha-container>
        Welcome to JHA tooling
      </jha-container>
    `;
  }
}

export {styles as MainLayoutStyles}
