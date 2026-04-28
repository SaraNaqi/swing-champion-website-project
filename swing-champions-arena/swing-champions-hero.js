import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

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
                border-radius: var(--ddd-radius-lg);
                background-color: light-dark(
                    var(--ddd-theme-default-skyLight),
                    var(--ddd-theme-default-navy80)
                );
                border: 2px solid var(--ddd-theme-default-skyBlue);
            }

            p {
                font-size: var(--ddd-font-size-m);
                margin: 0;
                line-height: 1.5;
                
            }

            h2 {
                    margin: 0 0 var(--ddd-spacing-3) 0;
                    font-size: var(--ddd-font-size-l);
                }
            `,
        ];
    }
    render() {
        return html`
        <div class="hero-box">
        <h2> Hey Welcome to the Swing champions arena website!!!</h2>
        <p> this is a tennis website that shows matches, teams, match players and rankings. you can look around and click on each section</p>
        </div>
        `;
    }
}
globalThis.customElements.define(SwingChampionsHero.tag, SwingChampionsHero);