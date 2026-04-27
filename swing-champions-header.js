import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d";

// this is a header that shows. the site title and short description 
export class SwingChampionsHeader extends LitElement {
    static get tag() {
        return "swing-champions-header";
    }
    static get properties() {
        return {
            title:{ type: String},
        };
    }

    constructor() {
        super(); //just incase nothing passes in theres a default title
        this.title = "Swing Champions Arena";
    }

    static get styles() {
        return [
            super.styles,
            css`
            :host {
                display: block;
            }

            .header-wrap {
                padding: var(--ddd-spacing-5) var(--ddd-spacing-6);
                border-radius: var(--ddd-raduis-lg);

                background: linear-gradient( 
                    135deg, light-dark(
                        var(--ddd-theme-default-athertonViolet),
                        var(--ddd-theme-default-nittanyNavy)
                        ),
                light-dark(
                    var(--ddd-theme-default-wonderPurple),
                    var(--ddd-theme-default-navy80)
                )
                );
                border: 2px solid light-dark(var(--ddd-theme-default-wonderPurple));
                box-shadow: var(--ddd-boxShadow-sm);
                color: var(--ddd-theme-default-white);
            }

            p {
                margin: var(--ddd-spacing-3) 0 0 0;
                font-size: var(--ddd-font-size-l);
            }

            h1 {
                font-size: var(--ddd-font-size-xxxl);
            }
            `,
        ];
    }

    //title and subtitle i guess 
    render () {
        return html`
        <header class="header-wrap">
        <h1>${this.title}</h1>
        <p>Tennis matches, rankings, teams, and player information</p>
        </header>
        `;
    }
}
globalThis.customElements.define(SwingChampionsHeader.tag, SwingChampionsHeader);