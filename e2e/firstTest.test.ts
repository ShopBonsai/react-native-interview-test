import { element, expect, by } from 'detox';
/* global device */

describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should start in feed screen', async () => {
    await expect(element(by.id('feed-screen'))).toBeVisible();
  });
});
