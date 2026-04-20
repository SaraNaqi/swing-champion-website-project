import { LitElement, html } from "lit";
export class SwingChampionsMenuItems {
    static get tag() {
        return "swing-champions-menu-items";
    }

    render() {
        return html `
            <button> Menu items </button>
            `;
    }
}
globalThis.customElements.define(SwingChampionsMenuItems.tag, SwingChampionsMenuItems);