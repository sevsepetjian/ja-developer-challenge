import { LitElement, css, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class CategoryChip extends LitElement {
    static properties = {
        category: {type: String},
        isActive: {type: Boolean}
    };

    constructor() {
        super();
        this.category = '';
        this.isActive = false;
    }

    static styles = css`
        .chips {
            border: 1px black solid;
            border-radius: 50rem;
            padding: 0 11px;
            font-size: 13px;
        }
        .chips:hover {
            cursor: pointer;
            background-color: rgb(201,230,255);
            border: 1px rgb(201,230,255) solid;
        }
        .chips-is-active {
            background-color: rgb(201,230,255);
            border: 1px rgb(201,230,255) solid;
        }
    `;
    render() {
        return html`
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
            <div class="${this.isActive ? "chips chips-is-active" : "chips"}">
                <i ?hidden=${!this.isActive} class="bi bi-check-lg"></i>
                <span>${this.category}</span>
            </div> 
        `;
    }
};
customElements.define('category-chip', CategoryChip);