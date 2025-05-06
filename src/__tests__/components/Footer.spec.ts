import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import Footer from '../../components/Footer.vue';

describe('Footer.vue', () => {
  it('renders footer section with correct attributes', () => {
    const { container } = render(Footer);

    const footer = container.querySelector('.footer');
    expect(footer).toBeTruthy();
    expect(footer?.getAttribute('role')).toBe('contentinfo');
    expect(footer?.getAttribute('aria-label')).toBe('Site footer');
  });

  it('renders copyright text', () => {
    const { container } = render(Footer);

    const copyright = container.querySelector('.footer-copyright');
    expect(copyright?.textContent).toContain('© 2025');
    expect(copyright?.textContent).toContain('All rights reserved');
  });

  it('renders GitHub link correctly', () => {
    const { container } = render(Footer);

    const link = container.querySelector('a');
    expect(link).toBeTruthy();
    expect(link?.getAttribute('href')).toBe('https://github.com/vnoriegamoreno');
    expect(link?.getAttribute('target')).toBe('_blank');
    expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
    expect(link?.getAttribute('aria-label')).toBe("Visit Vicente Noriega's GitHub profile");
    expect(link?.textContent).toBe('Vicente Noriega');
  });

  it('maintains correct HTML structure', () => {
    const { container } = render(Footer);

    const footerContent = container.querySelector('.footer-content');
    expect(footerContent).toBeTruthy();
    expect(container.querySelector('.footer-copyright')).toBeTruthy();
  });
});
