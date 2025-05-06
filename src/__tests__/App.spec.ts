import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import App from '../App.vue';

describe('App.vue', () => {
  it('renders the main layout structure', () => {
    render(App);
    
    expect(screen.getByRole('main')).toBeTruthy();
    expect(screen.getByRole('banner')).toBeTruthy();

    const contentInfoElements = screen.getAllByRole('contentinfo');
    expect(contentInfoElements.length).toBeGreaterThan(0);
  });

  it('renders all main sections', () => {
    const { container } = render(App);

    expect(container.querySelector('#about')).toBeTruthy();
    expect(container.querySelector('#projects')).toBeTruthy();
    expect(container.querySelector('#articles')).toBeTruthy();
  });

  it('displays the announcement banner', () => {
    render(App);

    const announcements = screen.getAllByText('🚀 More Projects Coming Up ✨');
    expect(announcements.length).toBeGreaterThan(0);
    expect(announcements[0].closest('.announcements')).toBeTruthy();
  });

  it('renders all child components', () => {
    const { container } = render(App);

    expect(container.querySelector('.site-header')).toBeTruthy();
    expect(container.querySelector('.content-wrapper')).toBeTruthy();
    expect(container.querySelector('.site-footer')).toBeTruthy();
  });
});