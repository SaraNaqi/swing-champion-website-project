import { LitElement, html,css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";


export class SwingChampionsCalendar extends DDDSuper(LitElement) {
    static get tag() {
        return "swing-champions-calendar";
    }

    constructor() {
        super();
        this.days = [
            {label: "May 1", timestamp: 1777651200 },
            {label: "May 2", timestamp:1777737600 },
            {label: "May 5", timestamp: 1777996800 },
        ];
    }

    static get styles() {
        return [
            super.styles,
            css`
            .calendar-box {
                border-radius: var(--ddd-radius-lg);
                padding: var(--ddd-spacing-5);
                border: 2px solid var(-ddd-theme-default-creekTeal);
                background: light-dark( var(--ddd-theme-default-creekMaxLight), var(--ddd-theme-default-navy80));
            }

            .day {
                padding: var(--ddd-spacing-3);
                border: 1px solid var(--ddd-theme-default-creekTeal);
                border-radius: var(--ddd-radius-md);
                background: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-navy70));
            }
            `,
        ];
    }
    static get properties() {
        return {
            days: {type: Array },
        };
    }


    render() {
        return html`
        <div class="calendar-box">
            <h2>Calendar 2026</h2>
        
            <div class="days">
             ${this.days.map (
            (day) => html`
            <div class="day">
            <p><strong>${day.label}</strong></p> 
            <p>${day.timestamp}</p>
            </div>
             
            `)} 
            </div>
        </div>
        `;
    }
}
globalThis.customElements.define(SwingChampionsCalendar.tag, SwingChampionsCalendar);
