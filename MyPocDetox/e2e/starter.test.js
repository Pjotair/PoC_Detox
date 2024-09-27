import { expect } from "detox";
import { MainView } from "./Views/main-view";
import { ModalView } from "./Views/modal-view";
import { AlertView } from "./Views/alert-view";
import testData from "./testData";


describe('Example', () => {
  let mainView;
  let modalView;
  let alertView;
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    mainView = new MainView();
    modalView = new ModalView();
    alertView = new AlertView();
    await device.reloadReactNative();
  });

  it('Application has a header', async () => {
    await expect(mainView.headerIcon).toBeVisible();
    await expect(mainView.headerText).toHaveText(testData.headerText);
  });

  it('Open close Modal', async () => {
    const openModalButton = mainView.openModalButton;
    await openModalButton.tap();

    const modalContent = modalView.modalContent;
    waitFor(modalContent);
    await expect(modalContent).toHaveText(testData.modal.content);

    const closeModalButton = modalView.closeButton;
    waitFor(closeModalButton);
    await closeModalButton.tap();

    await expect(modalContent).not.toBeVisible();
  });

  it('Open close Alert', async () => {
    const openAlertButton = mainView.triggerAlertButton;
    await openAlertButton.tap();

    const alertContent = alertView.alertContent;
    waitFor(alertContent);
    await expect(alertContent).toHaveText(testData.alert.content);

    const closeAlertButton = alertView.closeAlert;
    waitFor(closeAlertButton);
    await closeAlertButton.tap();
    
    await expect(closeAlertButton).not.toBeVisible();
  });

  it('User can use counter', async () => {
    const counterIncrementButton = mainView.counterPlusOneButton;
    const counterResetButton = mainView.counterResetButton;
    let counterDisplayer = mainView.counterDisplayer;
    
    await waitFor(counterDisplayer).toBeVisible().withTimeout(2000);
    await expect(counterDisplayer).toHaveText(testData.counter.baseValue);

    await counterIncrementButton.multiTap(3);
    await expect(counterDisplayer).toBeVisible();
    await expect(counterDisplayer).toHaveText('Counter: 3');
    waitFor(counterDisplayer);
    await counterResetButton.tap();
    await expect(counterDisplayer).toHaveText(testData.counter.baseValue);
  });

  it('The User can enter and erases text', async () => {
    const textInput = mainView.textIntroducerInput;
    await expect(textInput).toBeVisible();
    await textInput.typeText(testData.textIntroducer.exampleText);

    const enterTextButton = mainView.textIntroducerEnterButton;
    waitFor(enterTextButton);
    await enterTextButton.tap();

    const providedText = mainView.textIntroducerProvided;
    waitFor(providedText);
    await expect(providedText).toBeVisible();
    await expect(providedText).toHaveText(testData.textIntroducer.exampleText);

    const clearTextButton = mainView.textIntroducerClearButton;
    waitFor(clearTextButton);
    await expect(clearTextButton).toBeVisible();
    await clearTextButton.tap();
    waitFor(providedText);
    await expect(providedText).toHaveText(testData.textIntroducer.baseText);
  });

  it('User can scroll through the content', async () => {
    const articleContainer = mainView.articleContainer;
    await articleContainer.scrollTo('bottom');
    await articleContainer.scrollTo('top');
  });

  it('Application footer has correct app version', async () => {
    const footerTextElement = mainView.footerText;
    await waitFor(footerTextElement).toBeVisible().withTimeout(2000);
    await expect(footerTextElement).toHaveText(testData.footerText);
  });
});
