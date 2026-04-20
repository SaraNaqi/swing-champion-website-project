import { LitElement, html } from "lit";
export class SwingChampionsPlayerCard extends LitElement {
    static get tag() {
        return "swing-champions-player-card";
    }
    render() {
        return html`
        <p> player cards info </p>
        `;
    }
}
globalThis.customElements.define(SwingChampionsPlayerCard.tag, SwingChampionsPlayerCard);