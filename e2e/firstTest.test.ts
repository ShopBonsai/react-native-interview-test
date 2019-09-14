import { element, expect, by } from 'detox';
/* global device */

describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should start in main screen', async () => {
    await expect(element(by.id('main'))).toBeVisible();
  });
});
