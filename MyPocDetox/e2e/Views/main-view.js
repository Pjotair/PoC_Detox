import { element, by } from "detox";

export class MainView {
    headerIcon;
    headerText;
    openModalButton;
    articleContainer;
    footerText;

    constructor() {
        // Header elements
        this.headerIcon = element(by.id('icon'));
        this.headerText = element(by.id('header'));

        // Actions
        this.openModalButton = element(by.id('openModalButton'));

        // Content
        this.articleContainer = element(by.id('articleContainer'));

        // Footer elements
        this.footerText = element(by.id('footerText'));
    }
}
