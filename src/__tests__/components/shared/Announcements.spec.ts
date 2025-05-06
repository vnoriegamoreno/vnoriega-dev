import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import Announcements from '../../../components/shared/Announcements.vue';

describe('Announcements.vue', () => {
  const mockAnnouncements = ['Test Announcement 1', 'Test Announcement 2'];

  it('renders announcements container', () => {
    const { container } = render(Announcements, {
      props: {
        announcements: mockAnnouncements
      }
    });
    
    expect(container.querySelector('.announcements')).toBeTruthy();
  });

  it('renders all provided announcements', () => {
    const { container } = render(Announcements, {
      props: {
        announcements: mockAnnouncements
      }
    });

    const listItems = container.querySelectorAll('.announcements li');
    expect(listItems.length).toBe(mockAnnouncements.length);
    
    mockAnnouncements.forEach(announcement => {
      expect(container.textContent).toContain(announcement);
    });
  });

  it('renders empty list when no announcements provided', () => {
    const { container } = render(Announcements, {
      props: {
        announcements: []
      }
    });

    const listItems = container.querySelectorAll('.announcements li');
    expect(listItems.length).toBe(0);
  });

  it('generates unique keys for announcements', () => {
    const duplicateAnnouncements = ['Same Message', 'Same Message'];
    const { container } = render(Announcements, {
      props: {
        announcements: duplicateAnnouncements
      }
    });

    const listItems = container.querySelectorAll('.announcements li');
    expect(listItems.length).toBe(duplicateAnnouncements.length);
  });
});