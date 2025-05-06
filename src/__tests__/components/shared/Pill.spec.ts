import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import Pill from '../../../components/shared/Pill.vue';

describe('Pill.vue', () => {
  const mockTitle = 'Test Pill';

  it('renders pill container', () => {
    const { container } = render(Pill, {
      props: {
        title: mockTitle,
      },
    });

    expect(container.querySelector('.pill')).toBeTruthy();
  });

  it('renders title correctly', () => {
    const { container } = render(Pill, {
      props: {
        title: mockTitle,
      },
    });

    const pillText = container.querySelector('.pill p');
    expect(pillText?.textContent).toBe(mockTitle);
  });

  it('has correct role attribute', () => {
    const { container } = render(Pill, {
      props: {
        title: mockTitle,
      },
    });

    const pill = container.querySelector('.pill');
    expect(pill?.getAttribute('role')).toBe('listitem');
  });

  it('handles empty title', () => {
    const { container } = render(Pill, {
      props: {
        title: '',
      },
    });

    const pillText = container.querySelector('.pill p');
    expect(pillText?.textContent).toBe('');
  });

  it('handles no title', () => {
    const { container } = render(Pill);

    const pillText = container.querySelector('.pill p');
    expect(pillText?.textContent).toBe('');
  });
});
