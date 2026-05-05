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
            { name : "scary ghost", team: "Golden Swing Tennis", role: "Net player", img: "./public/pics/scaryghost.png"},
            { name : "Maya", team: "Golden Swing Tennis", role: "Power server", img: "./public/pics/maya.png" },
            { name : "Sara" , team: "404 Rally Not Found", role: "Baseline player", img: "./public/pics/sara.png" },
            { name : "scary ghost's cousin", team: "404 Rally Not Found", role: "Baseline player just wants to annoy scary ghost", img: "./public/pics/scaryghostcousin.png"},
            { name : "Jena", team: "Next Gen Ten", role: "Net player", img: "./public/pics/jena.png"},
            { name : "emma", team: "Next Gen Ten", role: "Power server", img: "./public/pics/emma.png"},
        ];
    }
    static get styles() {
        return [
            super.styles,
            css`

            .card {
                border-radius: var(--ddd-radius-md);
                padding: var(--ddd-spacing-3);
                border: 2px solid var(--ddd-theme-default-purple);
                text-align: center;
                background: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-navy70));
            }
            .player-box {
                border-radius: var(--ddd-radius-lg);
                border: 2px solid var(--ddd-theme-default-skyBlue);
                padding: var(--ddd-spacing-5);
                background: light-dark(var(--ddd-theme-default-skyMaxLight), var(--ddd-theme-default-navy80));
            }
            .player-grid {
                display: grid;
                gap: var(--ddd-spacing-4);
                grid-template-columns: repeat(auto-fit, minmac(220px, 1fr)); // this is basically to adjust screen and i guess responsive
            }
            .player-img {
                width: 140px;
                height: 140px;
                object-fit: cover;
                border-radius: var(--ddd-radius-md);
                background: var(--ddd-theme-default-potentialMidnight);
                border: 3px solid var(--ddd-theme-default-skyBlue);
                image-rendering: pixelated;
                margin-bottom: var(--ddd-spacing-2);
            }

            .name {
                font-weight: bold;
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
        <section class="player-box">
            <h2>The Players</h2>
            <div class="player-grid">
                ${this.players.map(
                    (player) => html`
                    <div class="card">
                     <img class="player-img" src="${player.img}" alt="${player.name} Player"/>
                     <p class="name"><strong>${player.name}</strong></p>
                    <p>Team: ${player.team}</p>
                    <p>Role: ${player.role}</p>
                    </div>
                    `)}
            </div>
            </section>
        `;
    }
}
globalThis.customElements.define(SwingChampionsPlayerCard.tag, SwingChampionsPlayerCard);