import { fireEvent, render, screen } from '@testing-library/react';
import { getUTCTimestamp } from 'src/utils';
import Sidebar from '../index';

describe("Test Cases For Sidebar", () => {
  test('Changing Datetime Value', async () => {
    const onTimeChange = jest.fn();
    render(<Sidebar onTimeChange={onTimeChange} />);
    const datetime = await screen.findByTestId("datepicker");
    fireEvent.change(datetime, { target: { value: "2022-02-26" } });
    expect(onTimeChange).toHaveBeenCalled();
    expect(onTimeChange).toHaveBeenCalledTimes(1);
    expect(onTimeChange).toHaveBeenCalledWith(getUTCTimestamp(new Date("2022-02-26")));
  });
  test('Weather Forcast Heading', () => {
    const onTimeChange = jest.fn();
    render(<Sidebar onTimeChange={onTimeChange} />);
    const elementHeading: any = screen.getByText("Weather Forcast");
    expect(elementHeading).toBeInTheDocument();
  });
});
