import { LitElement, html } from "lit";
export class SwingChampionsRankings extends LitElement {
    static get tag() {
        return "swing-champions-rankings";
    }
    render() {
        return html`
        <h3>Rankings</h3>
        <p>the process of the ranking would be here </p>
        `;
    }
}
globalThis.customElements.define(SwingChampionsRankings.tag, SwingChampionsRankings);