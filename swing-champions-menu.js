import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./swing-champions-menu-items.js";

export class SwingChampionsMenu extends DDDSuper(LitElement) {
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
                gap: var(--ddd-spacing-3);
                flex-wrap: wrap;
                display: flex;
            }
            `,
        ];
    }
// this is the page section basically buttons to send the page name to the main arena page or file
    render() {
        return html`
        <div class="menu-wrap">
            <swing-champions-menu-items label="Home" page="home"></swing-champions-menu-items>
            <swing-champions-menu-items label="Players" page="players"></swing-champions-menu-items>
            <swing-champions-menu-items label="Teams" page="teams"></swing-champions-menu-items>
            <swing-champions-menu-items label="Schedule" page="schedule"></swing-champions-menu-items>
            <swing-champions-menu-items label="Rankings" page="rankings"></swing-champions-menu-items>
        </div>
        `;
    }
}
globalThis.customElements.define (SwingChampionsMenu.tag, SwingChampionsMenu);