import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import ProjectCard from '../../../components/shared/ProjectCard.vue';

describe('ProjectCard.vue', () => {
  const mockProps = {
    title: 'Test Project',
    description: 'Test Description',
    src: 'https://example.com/image.jpg',
    techStack: ['Vue', 'TypeScript', 'Sass'],
  };

  it('renders project card container', () => {
    const { container } = render(ProjectCard, {
      props: mockProps,
    });

    expect(container.querySelector('.project-card')).toBeTruthy();
  });

  it('renders title correctly', () => {
    const { container } = render(ProjectCard, {
      props: mockProps,
    });

    const title = container.querySelector('.project-card-title');
    expect(title?.textContent).toBe(mockProps.title);
  });

  it('renders image with correct src and alt text', () => {
    const { container } = render(ProjectCard, {
      props: mockProps,
    });

    const image = container.querySelector('.project-card-image img');
    expect(image).toBeTruthy();
    expect(image?.getAttribute('src')).toBe(mockProps.src);
    expect(image?.getAttribute('alt')).toBe(`${mockProps.title} project preview`);
  });

  it('displays description correctly', () => {
    const { container } = render(ProjectCard, {
      props: mockProps,
    });

    const description = container.querySelector('[itemprop="description"]');
    expect(description?.textContent).toBe(mockProps.description);
  });

  it('renders tech stack pills', () => {
    const { container } = render(ProjectCard, {
      props: mockProps,
    });

    const techStackContainer = container.querySelector('.project-card-tech-stack');
    const pills = techStackContainer?.querySelectorAll('.pill');
    expect(pills?.length).toBe(mockProps.techStack.length);

    mockProps.techStack.forEach((tech, index) => {
      expect(pills?.[index].textContent).toContain(tech);
    });
  });

  it('has correct schema.org attributes', () => {
    const { container } = render(ProjectCard, {
      props: mockProps,
    });

    const article = container.querySelector('[itemtype="http://schema.org/Article"]');
    const techList = container.querySelector('[itemtype="http://schema.org/ItemList"]');

    expect(article).toBeTruthy();
    expect(techList).toBeTruthy();
  });

  it('has correct accessibility attributes', () => {
    const { container } = render(ProjectCard, {
      props: mockProps,
    });

    const card = container.querySelector('.project-card');
    const description = container.querySelector('.project-card-content');
    const techStack = container.querySelector('.project-card-tech-stack');

    expect(card?.getAttribute('role')).toBe('listitem');
    expect(description?.getAttribute('aria-label')).toBe('Project description');
    expect(techStack?.getAttribute('aria-label')).toBe('Technologies used');
  });
});
