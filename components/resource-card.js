import { LitElement, css, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class ResourceCard extends LitElement {
    static properties = {
        id: {type: Number},
        category: {type: String},
        description: {type: String},
        imageUrl: {type: String},
        isBookmarked: {type: Boolean}
    };

    constructor() {
        super();
        this.id = 0;
        this.category = 'ALL';
        this.description = 'Default description.';
        this.imageUrl = 'https://images.unsplash.com/photo-1511989130945-c2b632959395?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        this.isBookmarked = false;
    };

    static styles = css`
        .card-icons {
            background-color: rgb(0,38,58);
            padding: 2px 6px;
            font-size: 14px;
        }
        .card-icons:hover {
            color: rgb(103,219,177);
            cursor: pointer;
        }
        .card-bg-overlay {
            background-color: rgba(0, 38, 58, 0.4);
        }
        .card-category {
            font-size: 10px;
        }
        .card-category-icon {
            font-size: 13px;
        }
        .card-description {
            font-size: 12px;
            margin: 0;
        }
        .active-bookmark {
            color: rgb(103,219,177);
        }
        .card-img {
            object-fit: cover;
        }
    `;

    render() {
        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
            <div class=col>
                <div id=${this.id} class="card bg-dark text-white">
                    <img src="${this.imageUrl}" height="150px" width="100px" class="card-img" alt="${this.description}">
                    <div class="card-img-overlay card-bg-overlay d-flex flex-column justify-content-between">
                        <div class="d-flex justify-content-end">
                            <span @click="${this._bookmarkIconClicked}" class="card-icons me-2 rounded-circle">
                                <i class=${this.isBookmarked ? "card-icon bi bi-bookmark-fill active-bookmark" : "card-icon bi bi-bookmark-fill"}></i>
                            </span>
                            <span class="card-icons rounded-circle">
                                <i class="card-icon bi bi-three-dots-vertical"></i>
                            </span>

                        </div> 
                        <div>
                            <div>
                                <span class="card-category-icon me-1">
                                    <i class="bi bi-lightbulb"></i>
                                </span>
                                <span class="card-category">
                                    ${this.category}
                                    <i class="bi bi-dot"></i>
                                    Resources
                                </span>
                            </div>
                            <p class="card-description">
                                ${this.description}
                            </p>
                        </div>
                    </div>
                </div> 
            </div>
        `
    };

    _bookmarkIconClicked() {
        const cardId = this.id;
        const event = new CustomEvent('bookmark-icon-clicked', {
            detail: {cardId: cardId},
            bubbles: true,
            composed: true
        })
        this.dispatchEvent(event);
    };
};
customElements.define('resource-card', ResourceCard);