/**
 * Copyright 2026 SaraNaqi
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

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

export class SwingChampionsArena extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "swing-champions-arena";
  }

  constructor() {
    super();
    this.title = "Swing Champions Arena"; // setting up the site title 
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
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
    css`
      :host {
        display: block;
        min-height: 100vh;
        color: var(--ddd-theme-primary);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--swing-champions-arena-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  // loading the main section of the home page
  render() {
    return html`
<div class="wrapper">
<swing-champions-header title="${this.title}"></swing-champions-header>
<swing-champions-menu></swing-champions-menu>
<swing-champions-hero></swing-champions-hero>
<swing-champions-schedule></swing-champions-schedule>
<swing-champions-rankings></swing-champions-rankings>
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