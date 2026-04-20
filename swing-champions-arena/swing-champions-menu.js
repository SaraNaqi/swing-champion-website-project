import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d";
import "./swing-champions-menu-items.js";

export class SwingChampionsMenu extends LitElement {
    static get tag() {
        return "swing-champions-menu";
    }

    
    static get styles() {// navigation layout styling 
        return[
            super.styles,
            css`
            :host {
                display: block;
                margin-top: var(--ddd-spacing-4);
            }

            .menu-wrap {
                gap: 12px;
                flex-wrap: wrap;
                display: flex;
            }
            `,
        ];
    }
// this is the page section buttons 
    render() {
        return html`
        <div class="menu-wrap">
            <swing-champions-menu-items label="Home"></swing-champions-menu-items>
            <swing-champions-menu-items label="Players"></swing-champions-menu-items>
            <swing-champions-menu-items label="Teams"></swing-champions-menu-items>
            <swing-champions-menu-items label="Schedule"></swing-champions-menu-items>
            <swing-champions-menu-items label="Rankings"></swing-champions-menu-items>
        </div>
        `;
    }
}
globalThis.customElements.define (SwingChampionsMenu.tag, SwingChampionsMenu);