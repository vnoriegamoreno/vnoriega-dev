import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import SocialMedia from '../../../components/shared/SocialMedia.vue';

describe('SocialMedia.vue', () => {
  it('renders social media navigation', () => {
    const { container } = render(SocialMedia);
    const nav = container.querySelector('nav.social-media');
    
    expect(nav).toBeTruthy();
    expect(nav?.getAttribute('aria-label')).toBe('Social media links');
  });

  it('renders all social media links', () => {
    const { container } = render(SocialMedia);
    const links = container.querySelectorAll('a');
    
    expect(links.length).toBe(3);
  });

  it('renders CV download link correctly', () => {
    const { container } = render(SocialMedia);
    const cvLink = container.querySelector('a[download="resume.pdf"]');
    
    expect(cvLink).toBeTruthy();
    expect(cvLink?.getAttribute('href')).toBe('/assets/resume.pdf');
    expect(cvLink?.getAttribute('aria-label')).toBe('Download CV');
    expect(cvLink?.getAttribute('target')).toBe('_blank');
    expect(cvLink?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('renders LinkedIn link correctly', () => {
    const { container } = render(SocialMedia);
    const linkedinLink = container.querySelector('a[aria-label="LinkedIn Profile"]');
    
    expect(linkedinLink).toBeTruthy();
    expect(linkedinLink?.getAttribute('href')).toBe('https://linkedin.com/in/vnoriegadev');
    expect(linkedinLink?.getAttribute('target')).toBe('_blank');
    expect(linkedinLink?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('renders GitHub link correctly', () => {
    const { container } = render(SocialMedia);
    const githubLink = container.querySelector('a[aria-label="GitHub Profile"]');
    
    expect(githubLink).toBeTruthy();
    expect(githubLink?.getAttribute('href')).toBe('https://github.com/vnoriegamoreno');
    expect(githubLink?.getAttribute('target')).toBe('_blank');
    expect(githubLink?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('renders all social media icons', () => {
    const { container } = render(SocialMedia);
    
    const svgIcons = container.querySelectorAll('svg');
    const cvIcon = container.querySelector('.cv-icon');
    
    expect(svgIcons.length).toBe(2);
    expect(cvIcon).toBeTruthy();
  });
});