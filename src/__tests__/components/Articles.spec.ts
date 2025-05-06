import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/vue';
import Articles from '../../components/Articles.vue';

describe('Articles.vue', () => {
  const mockArticles = [
    {
      title: 'Test Article 1',
      src: 'https://example.com/image1.jpg',
      yearPublished: '2024',
    },
    {
      title: 'Test Article 2',
      src: 'https://example.com/image2.jpg',
      yearPublished: '2023',
    },
  ];

  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockArticles),
        })
      )
    );
  });

  it('fetches articles on mount', async () => {
    render(Articles);
    expect(vi.mocked(fetch)).toHaveBeenCalledWith(`${import.meta.env.VITE_API_URL}/api/articles`);
  });

  it('renders articles section when articles exist', async () => {
    const { container } = render(Articles);
    await vi.dynamicImportSettled();

    const section = container.querySelector('.articles');
    expect(section).toBeTruthy();
    expect(section?.getAttribute('aria-labelledby')).toBe('articles-heading');
  });

  it('renders correct title', async () => {
    const { container } = render(Articles);
    await vi.dynamicImportSettled();

    const title = container.querySelector('#articles-heading');
    expect(title?.textContent).toBe('Articles');
  });

  it('renders PostCard components for each article', async () => {
    const { container } = render(Articles);
    await vi.dynamicImportSettled();

    const articles = container.querySelectorAll('.articles-grid > *');
    expect(articles.length).toBe(mockArticles.length);
  });

  it('shows "View All" link when more than 3 articles', async () => {
    const manyArticles = [...mockArticles, ...mockArticles];
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(manyArticles),
        })
      )
    );

    const { container } = render(Articles);
    await vi.dynamicImportSettled();

    const viewAllLink = container.querySelector('.articles-link');
    expect(viewAllLink).toBeTruthy();
  });

  it('handles fetch error gracefully', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => Promise.reject('API Error'))
    );
    const consoleSpy = vi.spyOn(console, 'debug').mockImplementation(() => {});

    render(Articles);
    await vi.dynamicImportSettled();

    expect(consoleSpy).toHaveBeenCalledWith('Error fetching articles: ', 'API Error');
  });

  it('does not render section when no articles', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve([]),
        })
      )
    );

    const { container } = render(Articles);
    await vi.dynamicImportSettled();

    const section = container.querySelector('.articles');
    expect(section).toBeFalsy();
  });
});
