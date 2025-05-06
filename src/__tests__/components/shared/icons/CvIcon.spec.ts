import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import CvIcon from '../../../../components/shared/icons/CvIcon.vue';

describe('CvIcon.vue', () => {
  it('renders cv icon container', () => {
    const { container } = render(CvIcon);

    const iconContainer = container.querySelector('.cv-icon');
    expect(iconContainer).toBeTruthy();
  });

  it('renders CV text correctly', () => {
    const { container } = render(CvIcon);

    const text = container.querySelector('span');
    expect(text).toBeTruthy();
    expect(text?.textContent).toBe('CV');
  });

  it('maintains correct HTML structure', () => {
    const { container } = render(CvIcon);

    const iconContainer = container.querySelector('.cv-icon');
    expect(iconContainer?.tagName.toLowerCase()).toBe('div');
    expect(iconContainer?.children[0].tagName.toLowerCase()).toBe('span');
  });

  it('has correct accessibility attributes', () => {
    const { container } = render(CvIcon);

    const iconContainer = container.querySelector('.cv-icon');
    expect(iconContainer?.getAttribute('role')).toBe('button');
    expect(iconContainer?.getAttribute('aria-label')).toBe('Download CV');
  });

  it('has correct schema.org metadata', () => {
    const { container } = render(CvIcon);

    const iconContainer = container.querySelector('.cv-icon');
    const nameSpan = container.querySelector('span');
    const metaDescription = container.querySelector('meta');

    expect(iconContainer?.getAttribute('itemscope')).toBe('');
    expect(iconContainer?.getAttribute('itemtype')).toBe('http://schema.org/Action');
    expect(nameSpan?.getAttribute('itemprop')).toBe('name');
    expect(metaDescription?.getAttribute('itemprop')).toBe('description');
    expect(metaDescription?.getAttribute('content')).toBe('Download Curriculum Vitae');
  });
});
