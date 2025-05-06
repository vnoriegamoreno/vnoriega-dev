import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import CoverLetter from '../../components/CoverLetter.vue';

describe('CoverLetter.vue', () => {
  it('renders cover letter section', () => {
    const { container } = render(CoverLetter);
    
    const section = container.querySelector('.cover-letter-section');
    expect(section).toBeTruthy();
  });

  it('renders profile image correctly', () => {
    const { container } = render(CoverLetter);
    
    const img = container.querySelector('.avatar img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('/assets/profile-x4.png');
    expect(img?.getAttribute('alt')).toBe("Vicente Noriega's profile photo");
  });

  it('renders name and title correctly', () => {
    const { container } = render(CoverLetter);
    
    const name = container.querySelector('.title');
    const role = container.querySelector('.heading');
    const tagline = container.querySelector('.body');

    expect(name?.textContent).toBe('VICENTE NORIEGA');
    expect(role?.textContent).toBe('Software Engineer');
    expect(tagline?.textContent).toBe('I design and build digital experiences');
  });

  it('renders social media component', () => {
    const { container } = render(CoverLetter);
    
    const socialMedia = container.querySelector('.social-media');
    expect(socialMedia).toBeTruthy();
  });

  it('maintains correct HTML structure', () => {
    const { container } = render(CoverLetter);
    
    const article = container.querySelector('.cover-letter');
    expect(article?.tagName.toLowerCase()).toBe('article');
    expect(container.querySelector('h1')).toBeTruthy();
    expect(container.querySelector('h2')).toBeTruthy();
  });
});