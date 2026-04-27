import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { LitElement, html, css } from "lit";
export class SwingChampionsRankings extends DDDSuper(LitElement) {
    static get tag() {
        return "swing-champions-rankings";
    }

    constructor() {
        super();
        this.teams = [
            {rank: 1, name: "Golden Swing Tennis", wins: 5 },
            {rank: 2, name: "404 Rally Not Found", wins: 4 },
            {rank: 3, name: "Next Gen Ten", wins: 3 },
        ];
    }
    static get properties() {
        return {
            teams: { type: Array },
        };
    }
    static get styles() {
        return [
            super.styles,
            css`

            .ranking-box {
            border: 2px solid var(--ddd-theme-default-roarGolden);
            border-radius: var(--ddd-radius-lg);
            padding: var(--ddd-spacing-5);
            background: light-dark(var(--ddd-theme-default-roarMaxlight), var(--ddd-theme-default-navy80));
        }
            `
        ]
    }
    render() {
        return html`
        <div class="ranking-box">
            <h2>Team Rankings</h2>
            ${this.teams.map (
                (team) => html`
                <div class="team">
                    <span>#${team.rank} ${team.name}</span>
                    <span>${team.wins} wins</span>
                </div>
                `
            )}
         </div>
        `;
    }
}
globalThis.customElements.define(SwingChampionsRankings.tag, SwingChampionsRankings);