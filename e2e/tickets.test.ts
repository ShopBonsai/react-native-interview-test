import { device, element, expect, by } from 'detox';

describe('Tickets', () => {
  beforeEach(async () => {
    // Reload app
    await device.reloadReactNative();

    // Switch to tickets screen by tapping on tickets tab bar item
    await element(by.id('tickets-tab-bar-item')).tap();
  });

  it('should show tickets screen', async () => {
    // Expect tickets screen to be visible
    await expect(element(by.id('tickets-screen'))).toBeVisible();
  });

  it('should have a navigation tab bar item', async () => {
    // Expect tickets tab bar item to be visible
    await expect(element(by.id('tickets-tab-bar-item'))).toBeVisible();
  });

  it('should show placeholder when there is no ticket', async () => {
    // Expect tickets placeholder to be visible
    await expect(element(by.id('tickets-placeholder'))).toBeVisible();
  });

  it('should should add item to tickets upon checkout', async () => {
    // Switch to feed screen by tapping on feed tab bar item
    await element(by.id('feed-tab-bar-item')).tap();

    // Tap first movie card of the list
    await element(by.id('movie-card-0')).tap();

    // Tap ticket amount picker
    await element(by.id('ticket-amount-picker')).tap();

    // Tap first option
    await element(by.id('option-0')).tap();

    // Tap add to cart button
    await element(by.id('add-to-cart-button')).tap();

    // Wait for car button to be visible
    await waitFor(element(by.id('cart-button')))
      .toBeVisible()
      .withTimeout(2000);

    // Tap cart button to open cart details
    await element(by.id('cart-button')).tap();

    // Tap buy tickets button to checkout
    await element(by.id('buy-tickets-button')).tap();

    // Switch to tickets screen by tapping on tickets tab bar item
    await element(by.id('tickets-tab-bar-item')).tap();

    // Expect there is a ticket item
    await expect(element(by.id('ticket-item-0'))).toBeVisible();
  });

  it('should should add item to tickets upon checkout', async () => {
    // Switch to feed screen by tapping on feed tab bar item
    await element(by.id('feed-tab-bar-item')).tap();

    // Tap first movie card of the list
    await element(by.id('movie-card-0')).tap();

    // Tap ticket amount picker
    await element(by.id('ticket-amount-picker')).tap();

    // Tap first option
    await element(by.id('option-0')).tap();

    // Tap add to cart button
    await element(by.id('add-to-cart-button')).tap();

    // Wait for car button to be visible
    await waitFor(element(by.id('cart-button')))
      .toBeVisible()
      .withTimeout(2000);

    // Tap cart button to open cart details
    await element(by.id('cart-button')).tap();

    // Tap buy tickets button to checkout
    await element(by.id('buy-tickets-button')).tap();

    // Switch to tickets screen by tapping on tickets tab bar item
    await element(by.id('tickets-tab-bar-item')).tap();

    // Tap first ticket item to open details
    await element(by.id('ticket-item-0')).tap();

    await expect(element(by.id('ticket-details'))).toBeVisible();
  });
});
