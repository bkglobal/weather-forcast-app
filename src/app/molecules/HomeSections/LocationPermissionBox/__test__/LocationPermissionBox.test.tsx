import { render, screen } from '@testing-library/react';
import LocationPermissionBox from '../index';

describe("Test Cases For LocationPermissionBox", () => {
  test('Location Permission Text should be in the document', () => {
    render(<LocationPermissionBox />);
    const elementHeading: any = screen.getByText("Location is Disabled");
    expect(elementHeading).toBeInTheDocument();
    const description: any = screen.getByText("Kindly Enable the location and refresh again.");
    expect(description).toBeInTheDocument();
  });
});
