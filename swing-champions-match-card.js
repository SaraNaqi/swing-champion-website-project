import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class SwingChampionsMatchCard extends DDDSuper (LitElement) {
    static get tag() {
        return "swing-champions-match-card";
    }

        
        constructor() {
            super();
            this.team1 = "404 Rally Not Found";
            this.team2 = "Next Gen Ten"; // default values if no date passed in
            this.date = "May 1, 2026";
            this.court = "Court 1";
        }
        static get properties() {
            return{
                team1: { type: String },
                team2:{ type: String },
                date: {type: String },
                court: { type: String },
            };
        }

        static get styles() {
            return [
                super.styles,
                css`

                h3 {
                    font-size: var(--ddd-font-size-l);
                    margin: 0 0 var(--ddd-spacing-2) 0; 
                }
                p {
                    margin: var(--ddd-spacing-2) 0;
                }

                .match-card { 
                    border-radius: var(--ddd-radius-lg);
                    border: 2px solid var(--ddd-theme-default-roarGolden);
                    padding:var(--ddd-spacing-4);
                    background-color: light-dark(
                        var(--ddd-theme-default-white), var(--ddd-theme-default-navy80)
                    );
                }
                `
            ]
        }
    render() { // for this card shows a tennis match and date and court are seperated a bit so the card can be reused and not create more than one 
        return html`
        <div class="match-card">
        <h3>${this.team1} vs ${this.team2}</h3>

        <p><strong>Date:</strong> ${this.date}</p>
        <p><strong>Court:</strong> ${this.court}</p>
        </div>
        `;
    }
}
globalThis.customElements.define(SwingChampionsMatchCard.tag, SwingChampionsMatchCard);
