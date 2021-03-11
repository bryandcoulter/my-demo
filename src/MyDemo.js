import { LitElement, html, css } from 'lit-element';
import MyContainer from './components/my-container/my-container.js';
import MyCard from './components/cards/my-card/my-card.js';
import MyButton from './components/buttons/my-button/my-button.js';

export class MyDemo extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--my-demo-background-color);
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
      <my-container>
        <my-card>
          <header slot="header">Card 1</header>
          <my-button sync>Hello</my-button>
          <my-button sync danger>Danger Button</my-button>
        </my-card>
        <my-card>
          <header slot="header">Card 2</header>
          <my-button sync>Hello</my-button>
          <my-button sync danger>Danger Button</my-button>
        </my-card>
      </my-container>
    `;
  }
}
