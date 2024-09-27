import { element, by } from "detox";

export class MainView {
    headerIcon;
    headerText;
    openModalButton;
    triggerAlertButton;
    counterPlusOneButton;
    counterReserButton;
    counterValue;
    textIntroducerInput;
    textIntroducerEnterButton;
    textIntroducerClearButton;
    textIntroducerProvided;
    articleContainer;
    footerText;

    constructor() {
        // Header elements
        this.headerIcon = element(by.id('icon'));
        this.headerText = element(by.id('header'));

        // Actions
        this.openModalButton = element(by.id('openModalButton'));
        this.triggerAlertButton = element(by.id('openAlertButton'));

        //Counter
        this.counterPlusOneButton = element(by.id('plusOneButton'));
        this.counterResetButton = element(by.id('resetCounterButton'));
        this.counterDisplayer = element(by.id('counter'));

        // Text Introducer
        this.textIntroducerInput = element(by.id('textInput'));
        this.textIntroducerEnterButton = element(by.id('enterTextButton'));
        this.textIntroducerClearButton = element(by.id('ClearTextButton'));
        this.textIntroducerProvided = element(by.id('providedText'));

        // Content
        this.articleContainer = element(by.id('articleContainer'));

        // Footer elements
        this.footerText = element(by.id('footerText'));
    }
}
