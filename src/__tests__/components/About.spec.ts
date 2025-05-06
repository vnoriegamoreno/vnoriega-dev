import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import About from '../../components/About.vue';

describe('About.vue', () => {
  it('renders about section with correct structure', () => {
    const { container } = render(About);
    
    const section = container.querySelector('.about');
    expect(section).toBeTruthy();
    expect(section?.getAttribute('aria-labelledby')).toBe('about-heading');
  });

  it('renders title correctly', () => {
    const { container } = render(About);
    
    const title = container.querySelector('#about-heading');
    expect(title).toBeTruthy();
    expect(title?.textContent).toBe('ABOUT');
    expect(title?.className).toBe('about-title');
  });

  it('renders about content article', () => {
    const { container } = render(About);
    
    const article = container.querySelector('.about-content');
    expect(article).toBeTruthy();
    expect(article?.tagName.toLowerCase()).toBe('article');
  });

  it('renders all paragraphs', () => {
    const { container } = render(About);
    
    const paragraphs = container.querySelectorAll('.about-content p');
    expect(paragraphs.length).toBe(3);
    
    // Check first paragraph content
    expect(paragraphs[0].textContent).toContain('software engineer passionate about developing');
    
    // Check second paragraph content
    expect(paragraphs[1].textContent).toContain('front-end and back-end development');
    
    // Check third paragraph content
    expect(paragraphs[2].textContent).toContain('experience in startups');
  });

  it('maintains correct accessibility structure', () => {
    const { container } = render(About);
    
    const section = container.querySelector('section');
    expect(section?.getAttribute('aria-labelledby')).toBe('about-heading');
    expect(container.querySelector('#about-heading')).toBeTruthy();
  });
});