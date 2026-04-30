/**
 * Copyright 2026 SaraNaqi
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "./node_modules/lit/index.js";
import { DDDSuper } from "./node_modules/@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "./node_modules/@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `swing-champions-arena`
 * 
 * @demo index.html
 * @element swing-champions-arena
 */
// so this is the main file for the tennis website which it basically puts the main section in a page
import "./swing-champions-header.js";
import "./swing-champions-menu.js";
import "./swing-champions-schedule.js";
import "./swing-champions-rankings.js";
import "./swing-champions-hero.js";
import "./swing-champions-footer.js";
import "./swing-champions-player-card.js";

export class SwingChampionsArena extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "swing-champions-arena";
  }

  constructor() {
    super();
    this.title = "Swing Champions Arena"; // setting up the site title 
    this.page = "home"; // this is saying that what page is it showing 
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };

    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/swing-champions-arena.ar.json", import.meta.url).href +
        "/../",
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      page: { type: String },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("swing-champions-navigate", this.handleNavigate);// this is just a listener for the menu button 
  }

  disconnectedCallback() {
    this.removeEventListener("swing-champions-navigate", this.handleNavigate);
    super.disconnectedCallback();
  }

  handleNavigate(e) {
    this.page = e.detail.page;
  };

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
    css`
      :host {
        display: block;
        min-height: 100vh;
        color: light-dark( var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-white)
        );
        background: light-dark(
          var(--ddd-theme-default-skyMaxLight), var(--ddd-theme-default-potentialMidnight)
        );
        font-family: var(--ddd-font-navigation);

      }
      .wrapper {
        margin: 0 auto;
        padding: var(--ddd-spacing-5);
        max-width: 1100px;
      }

      h3 span {
        font-size: var(--swing-champions-arena-label-font-size, var(--ddd-font-size-s));
      }

      main {
        display: grid;
        gap:var(--ddd-spacing-5);
        margin-top: var(--ddd-spacing-5);
      }
    `];
  }

  // Lit render the HTML
  // loading the main section of the home page
// i added the if condition since if i want to press a page i want specific things to show up not everything
  renderPage() {
    if (this.page === "home") {
      return html`
      <swing-champions-hero></swing-champions-hero>
     <!-- <swing-champions-hero></swing-champions-hero> i can add this if i want the home page to have more than a thing -->
      `;
    }
    if (this.page === "players"){
      return html`
      <swing-champions-player-card></swing-champions-player-card>
      `;
    }

    if(this.page === "teams"){
      return html`
      <swing-champions-ranking></swing-champions-ranking>
      `;
    }
    if(this.page === "rankings") {
      return html`
      <swing-champions-rankings></swing-champions-rankings>
      `;
    }

    if (this.page === "schedule") {
      return html`
      <swing-champions-schedule></swing-champions-schedule>
      `;
    }

    return html`
    <swing-champions-hero></swing-champions-hero>
    `;


  }
  render() {
    return html`
<div class="wrapper">
<swing-champions-header title="${this.title}"></swing-champions-header>
<swing-champions-menu></swing-champions-menu>
<main>
${this.renderPage()}
</main>
<swing-champions-footer></swing-champions-footer>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
    .href;
  }
}

globalThis.customElements.define(SwingChampionsArena.tag, SwingChampionsArena);
