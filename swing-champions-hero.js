import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d";

export class SwingChampionsHero extends DDDSuper(LitElement) {
    static get tag() {
        return "swing-champions-hero";
    }

    static get styles() {
        return [
            super.styles,
            css`
            :host { 
                display: block;
                padding: var(--ddd-spacing-4);
            }

            .hero-box {
                padding: var(--ddd-spacing-4);
                border-radius: 16px;
                background-color: light-dark(#76125f, #2c1c66);
                border: 1px solid light-dark(#c053b3, #46082b);
            }

            p {
                margin: 6px 0;
                line-height: 1.5;
            }

            h2 {
                    margin: 0 0 10px 0;
                    font-size: var(--ddd-font-size-l);
            }
            `,
        ];
    }
    render() {
        return html`
        <div class="hero-box">
        <h2> Hey Welcome to the Swing champions arena website!!!</h2>
        <p> this is a tennis website that shows matches, teams and rankings. </p>
        </div>
        `;
    }
}
globalThis.customElements.define(SwingChampionsHero.tag, SwingChampionsHero);