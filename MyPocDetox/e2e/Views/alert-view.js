import { element, by } from "detox";

export class AlertView {
    alertContent;
    closeAlert;

    constructor() {
        this.alertContent = element(by.text('Trigger Alert'));
        this.closeAlert = element(by.text('OK'));
    }
}
