import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./swing-champions-match-card.js"
export class SwingChampionsSchedule extends DDDSuper(LitElement) {
    static get tag() {
        return "swing-champions-schedule";
    }
    constructor() {
        super();
        // i used unix timestamp so i chose the may 2026 so it wouldnt be far
        this.matches = [
            {
                id: 1,
                timestamp: 1777651200, // may 1 !!!
                team1: "404 Rally Not Found",
                team2: "Next Gen Ten",
            },
            {
                id: 2,
                timestamp: 1777737600, // may 2
                team1: "Golden Swing Tennis",
                team2: "Next Gen Ten",
            },
            {
                id: 3,
                timestamp: 1777996800, 
                team1: "404 Rally Not Found",
                team2: "Golden swing Tennis",
            },

        ];
    } 
     static get styles() {
        return [
            super.styles,
            css`
            :host {
                display: block;
            }

            .match {
                margin-bottom: var(--ddd-spacing-3);
            }
            .schedule-box {
                border-radius: var(--ddd-radius-lg);
                border: 2px solid var(--ddd-theme-default-roarGolden);
                padding: var(--ddd-spacing-5);
                background: light-dark(var(--ddd-theme-default-roarMaxlight), var(--ddd-theme-default-navy80));

            }
            `,
        ];
     }
    static get properties() {
        return {
            matches: { type: Array },
        };
    }

    formatDate(time) {//unix timestamp converting it to readable dates 
        return new Date(time * 1000).toLocaleDateString();
    }
    //map functionloop for unix timestamp conversion i showed the teams which one will play then converting unix to readable dates and the last code was just showing raw unix for data structure i guess 
    render() {
        return html`
        <div class="schedule-box">
            <h3>Match Schedule Section</h3>  
            ${this.matches.map(
                (match) => html`
                
                <swing-champions-match-card
                team1="${match.team1}"
                team2="${match.team2}"
                date="${this.formatDate(match.timestamp)}"
                court="Court ${match.id}"></swing-champions-match-card>
                `
            )}
        </div>
        `;
    }
}
globalThis.customElements.define(SwingChampionsSchedule.tag, SwingChampionsSchedule);