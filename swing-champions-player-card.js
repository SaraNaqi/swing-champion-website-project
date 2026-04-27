import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
export class SwingChampionsPlayerCard extends DDDSuper(LitElement) {
    static get tag() {
        return "swing-champions-player-card";
    }

    constructor() {
        super();

        //players data i need to add which are these 
        this.players = [
            { name : "Sara" , team: "404 Rally Not Found", role: "Baseline player" },
            { name : "Maya", team: "Golden Swing Tennis", role: "Power server" },
            { name : "Jena", team: "Next Gen Ten", role: "Net player" },
        ];
    }
    static get styles() {
        return [
            super.styles,
            css`

            .card {
                border-radius: var(--ddd-radius-md);
                padding: var(--ddd-spacing-3);
                background: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-navy70));
            }
            .player-box {
                border-radius: var(--ddd-radius-lg);
                border: 2px solid var(--ddd-theme-default-skyBlue);
                padding: var(--ddd-spacing-5);
                background: light-dark(var(--ddd-theme-default-skyMaxLight), var(--ddd-theme-default-navy80));
            }

            `,
        ];
    }
    static get properties() {
        return {
            players: { type: Array },
        };
    }
    render() {
        return html`
        <div class="Player-box">
        <h2>Players card</h2>
        ${this.players.map(
            (player) => html`
            <div class="card">
                <p><strong>${player.name}</strong></p>
                <p>Team: ${player.team}</p>
                <p>Role: ${player.role}</p>
            </div>
            `
        )}
        </div>
        `;
    }
}
globalThis.customElements.define(SwingChampionsPlayerCard.tag, SwingChampionsPlayerCard);