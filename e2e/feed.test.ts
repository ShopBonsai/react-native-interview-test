import { device, element, expect, by } from 'detox';

describe('Feed', () => {
  beforeEach(async () => {
    // Reload app
    await device.reloadReactNative();

    // Switch to feed screen by tapping on feed tab bar item
    await element(by.id('feed-tab-bar-item')).tap();
  });

  it('should show feed screen', async () => {
    // Expect feed screen to be visible
    await expect(element(by.id('feed-screen'))).toBeVisible();
  });

  it('should have a navigation tab bar item', async () => {
    // Expect feed tab bar item to be visible
    await expect(element(by.id('feed-tab-bar-item'))).toBeVisible();
  });

  it('should contain a movie list', async () => {
    // Expect movie list to be visible
    await expect(element(by.id('movie-list'))).toBeVisible();
  });

  it('should load movie cards', async () => {
    // Expect first movie card of the list to be visible
    await expect(element(by.id('movie-card-0'))).toBeVisible();
  });

  it('should open movie details on movie card tap', async () => {
    // Tap first movie card of the list
    await element(by.id('movie-card-0')).tap();

    // Expect details of the movie to be visible
    await expect(element(by.id('movie-details'))).toBeVisible();
  });

  it('should add movie to favorites', async () => {
    // Tap favorite button from first movie card of the list
    await element(
      by.id('favorite-button').withAncestor(by.id('movie-card-0')),
    ).tap();

    // Switch to favorites screen by tapping on favorites tab bar item
    await element(by.id('favorites-tab-bar-item')).tap();

    // Expect favorited movie card to be visible in favorites screen
    await expect(
      element(by.id('movie-card-0').withAncestor(by.id('favorites-screen'))),
    ).toBeVisible();
  });
});
