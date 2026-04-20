import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d";

// this is a header that shows. the site title and short description 
export class SwingChampionsHeader extends LitElement {
    static get tag() {
        return "swing-champions-header";
    }
    static get properties() {
        return {
            title:{ type: String},
        };
    }

    constructor() {
        super(); //just incase nothing passes in theres a default title
        this.title = "Swing Champions Arena";
    }

    static get styles() {
        return [
            super.styles,
            css`
            :host {
                display: block;
            }

            .header-wrap {
                padding: var(--ddd-spacing-5) var(--ddd-spacing-6);
                border-radius: 18px;
                background-color: light-dark(#4d1d78, #24103d);
                border: 1px solid light-dark(#8e44c7, #51307a);
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
                color: white;
            }

            p {
                margin: var(--ddd-spacing-3) 0 0 0;
                font-size: var(--ddd-font-size-l);
            }
            `
        ];
    }

    //title and subtitle i guess 
    render () {
        return html`
        <h1>Swing Champions Arena </h1>
        <p>Tennis matches, rankings, and teams</p>
        `;
    }
}
globalThis.customElements.define(SwingChampionsHeader.tag, SwingChampionsHeader);