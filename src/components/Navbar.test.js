import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { axe, toHaveNoViolations  } from 'jest-axe';
import Navbar from './Navbar';
expect.extend(toHaveNoViolations);

const setup = (propOverrides) => {
  const props = {
    logo: { src: '/test', alt: 'alternative test text' },
    links: [{ title: 'About', destination: '/about' }, { title: 'FAQs', destination: '/faq' }],
    ...propOverrides
  };

  return render(<MemoryRouter><Navbar {...props} /></MemoryRouter>);
};

describe('Navbar', () => {
  test('Navbar with logo and links should be accessible', async () => {
    const { container } = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('shows 3 links with expected href', () => {
    const { getAllByRole } = setup();
    const links = getAllByRole('link');
    const expectedHrefs = ['/', '/about', '/faq'];

    expect(links.length).toEqual(3);

    links.forEach((link, index) => {
      expect(link).toHaveAttribute('href', expectedHrefs[index]);
    });
  });
});
