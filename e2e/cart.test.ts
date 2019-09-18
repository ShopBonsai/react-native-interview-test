import { device, element, expect, by, waitFor } from 'detox';

describe('Cart', () => {
  beforeEach(async () => {
    // Reload app
    await device.reloadReactNative();
  });

  it('should show cart button', async () => {
    // Expect cart button to be visible
    await expect(element(by.id('cart-button'))).toBeVisible();
  });

  it('should open cart details on cart button tap', async () => {
    // Tap cart button
    await element(by.id('cart-button')).tap();

    // Expect (placeholder) details of the cart to be visible
    await expect(element(by.id('cart-details-placeholder'))).toBeVisible();
  });

  it('should add item to cart', async () => {
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

    // Expect there is an item in the cart
    await expect(element(by.id('cart-item-0'))).toBeVisible();
  });

  it('should remove item from cart', async () => {
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

    // Expect there is an item in the cart
    await expect(element(by.id('cart-item-0'))).toBeVisible();

    // Tap delete button from first item in the cart
    await element(by.id('cart-item-0-delete-button')).tap();

    // Tap "Yes" option from delete button confirmation alert
    await element(
      by.label('Yes').and(by.type('_UIAlertControllerActionView')),
    ).tap();

    // Expect cart details placeholder to be visible
    await expect(element(by.id('cart-details-placeholder'))).toBeVisible();
  });
});
