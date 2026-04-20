import { LitElement, html } from "lit";
export class SwingChampionsFooter extends LitElement {
    static get tag() {
        return "swing-champions-footer"; 
    }

    render() {
        return html`
        <p> Contacts </p>
        `;
    }
}
globalThis.customElements.define(SwingChampionsFooter.tag, SwingChampionsFooter);

