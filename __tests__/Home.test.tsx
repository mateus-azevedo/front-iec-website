import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "@/app/page";

it('should have "About" text', () => {
  render(<Home />); // ARRANGE

  const myElem = screen.getByText("About"); // ACT

  expect(myElem).toBeInTheDocument(); // ASSERT
});
