import React from 'react';
import { render } from 'react-testing-library';
import GeneOntology from './components/GeneOntology';

it('renders terms tab', () => {
  const { getByText } = render(<GeneOntology />);
  expect(getByText('Terms')).toBeInTheDocument();
});

it('renders search tab', () => {
	  const { getByText } = render(<GeneOntology />);
	  expect(getByText('Search')).toBeInTheDocument();
});

it('renders about tab', () => {
	  const { getByText } = render(<GeneOntology />);
	  expect(getByText('About')).toBeInTheDocument();
});