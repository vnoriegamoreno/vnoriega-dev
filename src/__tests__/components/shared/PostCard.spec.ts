import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import PostCard from '../../../components/shared/PostCard.vue';

describe('PostCard.vue', () => {
  const mockProps = {
    title: 'Test Post',
    date: '2024',
    src: 'https://example.com/image.jpg',
  };

  it('renders post card container', () => {
    const { container } = render(PostCard, {
      props: mockProps,
    });

    expect(container.querySelector('.post-card')).toBeTruthy();
  });

  it('renders image with correct src and alt text', () => {
    const { container } = render(PostCard, {
      props: mockProps,
    });

    const image = container.querySelector('.post-card-image img');
    expect(image).toBeTruthy();
    expect(image?.getAttribute('src')).toBe(mockProps.src);
    expect(image?.getAttribute('alt')).toBe(`${mockProps.title} post`);
  });

  it('displays title and date correctly', () => {
    const { container } = render(PostCard, {
      props: mockProps,
    });

    const content = container.querySelector('.post-card-content');
    expect(content?.querySelector('h3')?.textContent).toBe(mockProps.date);
    expect(content?.querySelector('p')?.textContent).toBe(mockProps.title);
  });

  it('has correct role attribute', () => {
    const { container } = render(PostCard, {
      props: mockProps,
    });

    const card = container.querySelector('.post-card');
    expect(card?.getAttribute('role')).toBe('listitem');
  });

  it('handles empty props', () => {
    const emptyProps = {
      title: '',
      date: '',
      src: '',
    };

    const { container } = render(PostCard, {
      props: emptyProps,
    });

    const image = container.querySelector('img');
    const content = container.querySelector('.post-card-content');

    expect(image?.getAttribute('src')).toBe('');
    expect(image?.getAttribute('alt')).toBe(' post');
    expect(content?.querySelector('h3')?.textContent).toBe('');
    expect(content?.querySelector('p')?.textContent).toBe('');
  });
});
