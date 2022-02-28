import { render, screen } from '@testing-library/react';
import Button from '../index';

describe("Test Cases For Button", () => {
  test('Button name should be in the document', () => {
    render(<Button>Submit Button</Button>);
    const elementButtonName: any = screen.getByText("Submit Button");
    expect(elementButtonName).toBeInTheDocument();
  });
});
