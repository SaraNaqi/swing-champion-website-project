import { LitElement, html } from "lit";
export class SwingChampionsSchedule extends LitElement {
    static get tag() {
        return "swing-champions-schedule";
    }

    render() {
        return html`
        <h3>Schedule Section</h3>
        <p>Matches are going to be in the schedule it would be api data/unix timestamp</p>
        `;
    }
}
globalThis.customElements.define(SwingChampionsSchedule.tag, SwingChampionsSchedule);