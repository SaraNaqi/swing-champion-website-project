import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class SwingChampionsFooter extends DDDSuper(LitElement) {
    static get tag() {
        return "swing-champions-footer"; 
    }

static get styles() {
return [
   super.styles,
   css`
   h3 {
    margin: 0 0 var(--ddd-spacing-2) 0;
   }
   a{
   
    font-weight:bold; 
    text-decoration: none;
    padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
    border: 1px solid var(--ddd-theme-default-athertonViolet);
    border-radius: var(--ddd-radius-md);
    color: var(--ddd-theme-default-athertonViolet);
    background: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-navy70));
   }

   a:hover {
    background: var(--ddd-theme-default-athertonViolet);
    color: white;
   }
   footer {
    margin-top: var(--ddd-spacing-6);
    text-align: center;
    padding: var(--ddd-spacing-4);
    background: light-dark(var(--ddd-theme-default-slateMaxLight), var(--ddd-theme-default-navy80));
    border-top: 2px solid var(--ddd-theme-default-athertonViolet);
   }
   .links {
    gap: var(--ddd-spacing-3);
    justify-content: center;
    flex-wrap: wrap;
    margin: var(--ddd-spacing-3) 0;
    display: flex;
   }
   p {
    margin: var(--ddd-spacing-2) 0 0 0;
    font-size: var(--ddd-font-size-s);
   }
 `,
];
}
    render() {
        return html` <!-- foooter information -->
        <footer>
        <h3>Contact Us & Check Our Socials!!!!</h3>

        <div class="links">
            <a href="https://hax.psu.edu" target="_blank"> Instagram</a>
            <a href="https://hax.psu.edu" target="_blank">Twitter</a>
            <a href="https://hax.psu.edu" target="_blank">Facebook</a>
            <a href="https://hax.psu.edu" target="_blank"> TikTok</a>
        </div>
        <p> 2026 Swing Champions Arena</p>
        <p>Phone: +1 (843) 485-7690</p>
        </footer>
        `;
    }
}
globalThis.customElements.define(SwingChampionsFooter.tag, SwingChampionsFooter);

