describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show hello screen after tap', async () => {
    await expect(element(by.text('Open up App.js to start working on your app!'))).toBeVisible();
  });

});
