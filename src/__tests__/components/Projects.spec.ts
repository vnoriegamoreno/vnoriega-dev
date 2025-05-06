import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/vue';
import Projects from '../../components/Projects.vue';

describe('Projects.vue', () => {
  const mockProjects = [
    {
      title: 'Test Project 1',
      description: 'Test Description 1',
      src: 'https://example.com/image1.jpg',
      techStack: ['Vue', 'TypeScript']
    },
    {
      title: 'Test Project 2',
      description: 'Test Description 2',
      src: 'https://example.com/image2.jpg',
      techStack: ['React', 'JavaScript']
    }
  ];

  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProjects)
      })
    ));
  });

  it('fetches projects on mount', async () => {
    render(Projects);
    expect(vi.mocked(fetch)).toHaveBeenCalledWith(`${import.meta.env.VITE_API_URL}/api/projects`);
  });

  it('renders projects section when projects exist', async () => {
    const { container } = render(Projects);
    await vi.dynamicImportSettled();

    const section = container.querySelector('.projects');
    expect(section).toBeTruthy();
    expect(section?.getAttribute('aria-labelledby')).toBe('projects-heading');
  });

  it('renders correct title', async () => {
    const { container } = render(Projects);
    await vi.dynamicImportSettled();

    const title = container.querySelector('#projects-heading');
    expect(title?.textContent).toBe('PROJECTS');
  });

  it('renders ProjectCard components for each project', async () => {
    const { container } = render(Projects);
    await vi.dynamicImportSettled();

    const projects = container.querySelectorAll('.projects-grid > *');
    expect(projects.length).toBe(mockProjects.length);
  });

  it('shows "View All" link when more than 3 projects', async () => {
    const manyProjects = [...mockProjects, ...mockProjects];
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(manyProjects)
      })
    ));

    const { container } = render(Projects);
    await vi.dynamicImportSettled();

    const viewAllLink = container.querySelector('.projects-link');
    expect(viewAllLink).toBeTruthy();
  });

  it('handles fetch error gracefully', async () => {
    vi.stubGlobal('fetch', vi.fn(() => Promise.reject('API Error')));
    const consoleSpy = vi.spyOn(console, 'debug').mockImplementation(() => {});

    render(Projects);
    await vi.dynamicImportSettled();

    expect(consoleSpy).toHaveBeenCalledWith('Error fetching projects: ', 'API Error');
  });

  it('does not render section when no projects', async () => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([])
      })
    ));

    const { container } = render(Projects);
    await vi.dynamicImportSettled();

    const section = container.querySelector('.projects');
    expect(section).toBeFalsy();
  });
});