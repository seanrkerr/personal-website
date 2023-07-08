import { render, screen } from '@testing-library/react';
// import { test, describe, expect } from '@jest/globals';
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import PortfolioTile from './PortfolioTile';

test(`loads and displays the portfolio tile`, async () => {
  render(
    <PortfolioTile
      rowId="test"
      link=""
      name="testName"
      image="test-image"
      story="test-story"
    />,
  );

  await screen.getByTestId(`tile-heading`);

  await screen.getByTestId(`tile-img`);

  const link = await screen.queryByTestId(`tile-link`);

  expect(link).not.toBeInTheDocument();

  expect(await screen.getByTestId(`tile-story`)).toHaveTextContent(
    `test-story`,
  );
});
