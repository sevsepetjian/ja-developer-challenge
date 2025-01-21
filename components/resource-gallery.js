import { LitElement, css, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import './category-chip.js';
import './resource-card.js';

export class ResourceGallery extends LitElement {
    static properties = {
        categories: {state: true},
        activeCategory: {state: true},
        cardContent: {state: true},
        extraCardContent: {state: true}
    };
    
    static styles = css`
        .show-more {
            font-size: 13px;
            color: rgb(15, 77, 136)
        } 

        .show-more:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    `;

    constructor() {
        super();
        this.categories = ['ALL', 'Acquisition', 'Communication', 'Engineering', 'Education', 'Productivity', 'Training', 'Workplace'];
        this.activeCategory = 'ALL';
        this.cardContent = [
            { 
                id: 1, 
                category: 'Workplace', 
                description: 'Ignition Podcast: Innovation, Agility, Talent, Workplace, Culture, and more', 
                isBookmarked: false, 
                imageUrl: 'https://plus.unsplash.com/premium_photo-1682097238346-3f2a677ccfe6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            { 
                id: 2, 
                category: 'Training', 
                description: 'Threat Briefing', 
                isBookmarked: false, 
                imageUrl: 'https://images.unsplash.com/photo-1621522635552-ef52856bd555?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            { 
                id: 3, 
                category: 'Productivity', 
                description: 'SSC Telework Portal', 
                isBookmarked: false, 
                imageUrl: 'https://plus.unsplash.com/premium_photo-1663126655768-85ec528ba4fe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            { 
                id: 4, 
                category: 'Education', 
                description: 'AIR FORCE Virtual Education', 
                isBookmarked: false, 
                imageUrl: 'https://images.unsplash.com/photo-1621522626370-ec009a90fbf1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            { 
                id: 5, 
                category: 'Engineering', 
                description: 'Guide to DigitalU', 
                isBookmarked: false, 
                imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            { 
                id: 6, 
                category: 'Communication', 
                description: 'How To Build A Collaborative Team Environment', 
                isBookmarked: false, 
                imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            
        ];
        this.extraCardContent = [
            { 
                id: 7, 
                category: 'Engineering', 
                description: 'Space Tech: How to Build Great Software', 
                isBookmarked: false, 
                imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            { 
                id: 8, 
                category: 'Acquisition',
                description: 'Acquisition Strategies 101', 
                isBookmarked: false, 
                imageUrl: 'https://plus.unsplash.com/premium_photo-1661497669258-74c0c0efa70e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            { 
                id: 9, 
                category: 'Communication',
                description: 'Communication Across the Command', 
                isBookmarked: false, 
                imageUrl: 'https://plus.unsplash.com/premium_photo-1674595876793-3d81c1debada?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            { 
                id: 10, 
                category: 'Engineering',
                description: 'DoD Network Architecture', 
                isBookmarked: false, 
                imageUrl: 'https://plus.unsplash.com/premium_photo-1682145181120-73cfdfc8a36d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            { 
                id: 11, 
                category: 'Training',
                description: 'Navy IT Specialist Guidebook', 
                isBookmarked: false, 
                imageUrl: 'https://plus.unsplash.com/premium_photo-1687119905581-b12b953d37b9?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            { 
                id: 12, 
                category: 'Acquisition',
                description: 'Procuring Software', 
                isBookmarked: false, 
                imageUrl: 'https://plus.unsplash.com/premium_photo-1661284828052-ea25d6ea94cd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
        ];
    };

    //Lifecycle hook that triggers after the first update.
    firstUpdated() {
        // Captures the bookmark icon clicked event inside the category-chip component.
        this.addEventListener('bookmark-icon-clicked', this.updateCardBookmarkStatus);
    };

    updateCardBookmarkStatus(event) {
        const cardId = event.detail.cardId;
        const updatedCardContent = this.cardContent.map(card => {
            if (card.id === cardId) {
                return {...card, isBookmarked: !card.isBookmarked};
            } else {
                return card;
            };
        });
        this.cardContent = updatedCardContent;
    };

    render() {
        const categoryChips = this._generateCategoryChips();
        const resourceCards = this._generateResourceCards(); 

        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
            <div class="row mt-3 mb-4">
                <div class="col d-flex flex-wrap gap-3">
                    ${categoryChips}
                </div>
            </div>
            <div id="resource-cards" class="row row-cols-1 row-cols-md-3 g-4">
                ${this._resourcesExist(resourceCards)}
            </div>
            <div 
                id="show-more"
                ?hidden=${this._isShowMoreHidden()} 
                @click="${this._getMoreResources}" 
                class="text-center show-more mt-4">
                    <i class="bi bi-arrow-down-circle"></i>
                    <span>Show More</span>
            </div>
        `;
    };

    _resourcesExist(resourceCards) {
        const result = 
            resourceCards.length > 0 ? 
                    resourceCards : 
                    html`
                        <p style="font-size: 13px;">
                            No "${this.activeCategory}" resources.
                        </p>
                    ` 
        return result;
    };

    _isShowMoreHidden() {
        const isNotAllResources = this.cardContent.length + this.extraCardContent.length !== 12;
        return this.activeCategory !== 'ALL' || isNotAllResources 
    };

    _selectCategory(e) {
        const selectedCategory = e.target.getAttribute('category');

        // Defaults back to 'ALL' should user click again on the active category chip.
        this.activeCategory === selectedCategory ? 
            this.activeCategory = 'ALL' : 
            this.activeCategory = selectedCategory;
    }

    _getMoreResources() {
        // Deep copies are important in oder to avoid shallow copy object reference issues.
        const deepCopyCardContent = structuredClone(this.cardContent);
        const deepCopyExtraCardContent = structuredClone(this.extraCardContent);
        const updatedCardContent = [...deepCopyCardContent, ...deepCopyExtraCardContent];

        this.cardContent = updatedCardContent;
    };

    _generateCategoryChips() {
        const categoryChips = 
            this.categories.map(
                category => 
                    html`
                        <category-chip 
                            class="category-chips"
                            @click="${this._selectCategory}" 
                            .isActive="${category === this.activeCategory}" 
                            category="${category}">
                        </category-chip>
                    `
            );

        return categoryChips;
    };

    _generateResourceCards() {
        let resourceCards;
        if(this.activeCategory !== 'ALL') {
            resourceCards = 
                this.cardContent
                    .filter(card => card.category === this.activeCategory)
                    .map(
                        content =>
                        html`
                        <resource-card
                            id="${content.id}"
                            description="${content.description}"
                            category="${content.category}"
                            imageUrl="${content.imageUrl}"
                            .isBookmarked="${content.isBookmarked}"
                            class="resource-card"
                        >
                        </resource-card 
                    `
                );

        } else {
            resourceCards = 
                this.cardContent.map(
                    content =>
                        html`
                        <resource-card
                            id="${content.id}"
                            description="${content.description}"
                            category="${content.category}"
                            imageUrl="${content.imageUrl}"
                            .isBookmarked="${content.isBookmarked}"
                            class="resource-card"
                        >
                        </resource-card 
                    `
                );
        };

        return resourceCards;
    };
};
customElements.define('resource-gallery', ResourceGallery);