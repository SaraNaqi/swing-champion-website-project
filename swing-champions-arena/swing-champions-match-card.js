import { LitElement, html } from "lit";

export class SwingChampionsMatchCard extends LitElement {
    static get tag() {
        return "swing-champions-match-card";
    }
    render() {
        return html`
        <p> match 404 rally not found VS next gen TEN </p>
        `;
    }
}
globalThis.customElements.define(SwingChampionsMatchCard.tag, SwingChampionsMatchCard);
