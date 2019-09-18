import { device, element, expect, by } from 'detox';

describe('Favorites', () => {
  beforeEach(async () => {
    // Reload app
    await device.reloadReactNative();

    // Switch to favorites screen by tapping on favorites tab bar item
    await element(by.id('favorites-tab-bar-item')).tap();
  });

  it('should show favorites screen', async () => {
    // Expect favorites screen to be visible
    await expect(element(by.id('favorites-screen'))).toBeVisible();
  });

  it('should have a navigation tab bar item', async () => {
    // Expect favorites tab bar item to be visible
    await expect(element(by.id('favorites-tab-bar-item'))).toBeVisible();
  });

  it('should not show favorites movie list without favorites', async () => {
    // Expect movie list to be visible
    await expect(
      element(by.id('movie-list').withAncestor(by.id('favorites-screen'))),
    ).toBeNotVisible();
  });

  it('should add movie to favorites', async () => {
    // Switch to feed screen by tapping on feed tab bar item
    await element(by.id('feed-tab-bar-item')).tap();

    // Tap favorite button from first movie card of the list
    await element(
      by
        .id('favorite-button')
        .withAncestor(by.id('movie-card-0'))
        .withAncestor(by.id('feed-screen')),
    ).tap();

    // Switch to favorites screen by tapping on favorites tab bar item
    await element(by.id('favorites-tab-bar-item')).tap();

    // Expect favorited movie card to be visible in favorites screen
    await expect(
      element(by.id('movie-card-0').withAncestor(by.id('favorites-screen'))),
    ).toBeVisible();
  });

  it('should open movie details on movie card tap', async () => {
    // Tap first favorite movie card of the list
    await element(
      by.id('movie-card-0').withAncestor(by.id('favorites-screen')),
    ).tap();

    // Expect details of the movie to be visible
    await expect(element(by.id('movie-details'))).toBeVisible();
  });
});
