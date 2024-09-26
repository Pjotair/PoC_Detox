import { element, by } from "detox";

export class MainView {
    headerIcon;
    headerText;
    openModalButton;
    counterPlusOneButton;
    counterReserButton;
    counterValue;
    articleContainer;
    footerText;

    constructor() {
        // Header elements
        this.headerIcon = element(by.id('icon'));
        this.headerText = element(by.id('header'));

        // Actions
        this.openModalButton = element(by.id('openModalButton'));

        //Counter
        this.counterPlusOneButton = element(by.id('plusOneButton'))
        this.counterResetButton = element(by.id('resetCounterButton'))
        this.counterDisplayer = element(by.id('counter'))

        // Content
        this.articleContainer = element(by.id('articleContainer'));

        // Footer elements
        this.footerText = element(by.id('footerText'));
    }
}
