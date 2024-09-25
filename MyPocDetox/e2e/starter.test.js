import { expect, element, by } from "detox";
import { MainView } from "./Views/main-view";
import { ModalView } from "./Views/modal-view";
import testData from "./testData";


describe('Example', () => {
  let mainView;
  let modalView;
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    mainView = new MainView();
    modalView = new ModalView();
    await device.reloadReactNative();
  });

  it('Application has a header', async () => {
    await expect(mainView.headerIcon).toBeVisible();
    await expect(mainView.headerText).toHaveText(testData.headerText);
  });

  it('Application footer has correct app version', async () => {
    const footerTextElement = mainView.footerText;
    await waitFor(footerTextElement).toBeVisible().withTimeout(2000);
    await expect(footerTextElement).toHaveText(testData.footerText);
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

  it('User can scroll through the content', async () => {
    const articleContainer = mainView.articleContainer;
    await articleContainer.scrollTo('bottom');
    await articleContainer.scrollTo('top');
  });
});
