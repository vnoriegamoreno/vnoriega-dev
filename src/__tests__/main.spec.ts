import { describe, it, expect, vi } from 'vitest';
import { createApp } from 'vue';
import App from '../App.vue';

// Mock Vue's createApp
vi.mock('vue', () => ({
  createApp: vi.fn(() => ({
    mount: vi.fn(),
  })),
}));

// Mock style import
vi.mock('../styles/main.scss', () => ({}));

// Mock App component
vi.mock('../App.vue', () => ({
  default: {},
}));

describe('main.ts', () => {
  it('creates and mounts the Vue application', async () => {
    // Import main to trigger the app creation
    await import('../main');

    // Verify createApp was called with App component
    expect(createApp).toHaveBeenCalledWith(App);

    // Get the mock app instance
    const mockApp = vi.mocked(createApp).mock.results[0].value;

    // Verify mount was called with #app
    expect(mockApp.mount).toHaveBeenCalledWith('#app');
  });
});
