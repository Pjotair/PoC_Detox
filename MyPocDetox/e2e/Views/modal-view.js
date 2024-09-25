import { element, by } from "detox";

export class ModalView {
    modalContent;
    closeButton;

    constructor() {
        this.modalContent = element(by.id('modalContent'));
        this.closeButton = element(by.id('closeModalButton'));
    }
}
