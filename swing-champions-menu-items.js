import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class SwingChampionsMenuItems extends DDDSuper(LitElement) {

    static get tag() {
        return "swing-champions-menu-items";
    }
    static get properties() {
        return {
            label: { type: String },
            page: { type: String },
        };
    }
    constructor() {
        super();
        this.label = "Menu";
        this. page = "home";
    }

    static get styles() {
        return [
            super.styles,
            css`
            button {
                padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
                border-radius: 999px;
                border: 2px solid var(--ddd-theme-default-athertonViolet);
                background: light-dark( var(--ddd-theme-default-white), var(--ddd-theme-default-navy80));
                font-weight: bold;
                cursor: pointer;
                
            }
            button:hover {
                background: var(--ddd-theme-default-athertonViolet);
                color: white;
            }
            `,
        ];
    }
handleClick() {
    this.dispatchEvent(
        new CustomEvent("swing-champions-navigate", {
            bubbles: true,
            composed: true,
            detail: {
            page: this.page,
            },
        })
    );
}
    render() {
        return html `
            <button @click="${this.handleClick}"> ${this.label} </button>
         `;
    }
}
globalThis.customElements.define(SwingChampionsMenuItems.tag, SwingChampionsMenuItems);