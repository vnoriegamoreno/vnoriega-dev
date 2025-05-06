import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import RightArrowIcon from '../../../../components/shared/icons/RightArrowIcon.vue';

describe('RightArrowIcon.vue', () => {
  it('renders right arrow icon container', () => {
    const { container } = render(RightArrowIcon);

    const svg = container.querySelector('svg.right-arrow-icon');
    expect(svg).toBeTruthy();
  });

  it('has correct svg attributes', () => {
    const { container } = render(RightArrowIcon);

    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('width')).toBe('24');
    expect(svg?.getAttribute('height')).toBe('24');
    expect(svg?.getAttribute('viewBox')).toBe('0 0 24 24');
    expect(svg?.getAttribute('fill')).toBe('none');
    expect(svg?.getAttribute('xmlns')).toBe('http://www.w3.org/2000/svg');
  });

  it('renders path element with correct attributes', () => {
    const { container } = render(RightArrowIcon);

    const path = container.querySelector('path');
    expect(path).toBeTruthy();
    expect(path?.getAttribute('fill-rule')).toBe('evenodd');
    expect(path?.getAttribute('clip-rule')).toBe('evenodd');
    expect(path?.getAttribute('fill')).toBe('currentColor');
  });

  it('renders path element with correct data', () => {
    const { container } = render(RightArrowIcon);

    const path = container.querySelector('path');
    expect(path?.getAttribute('d')).toBe(
      'M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z'
    );
  });

  it('maintains correct SVG structure', () => {
    const { container } = render(RightArrowIcon);

    const svg = container.querySelector('svg');
    expect(svg?.children.length).toBe(1);
    expect(svg?.children[0].tagName.toLowerCase()).toBe('path');
  });
});
