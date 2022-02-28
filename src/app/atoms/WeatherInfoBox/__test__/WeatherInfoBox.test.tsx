import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherInfoBox from "../index";
import { testWeatherData } from './testData';

describe("Test Cases For WeatherInfoBox", () => {
  test('Location name should be in the document', () => {
    render(<WeatherInfoBox locationName="Washington, Ohio" weatherData={testWeatherData} />);
    const elementLocationName: any = screen.getByText(/Washington, Ohio/i);
    expect(elementLocationName).toBeInTheDocument();
  });
  test('Temperature should be in the document', () => {
    render(<WeatherInfoBox locationName="Washington, Ohio" weatherData={testWeatherData} />);
    const elementTemperature: any = screen.getByText(`Temperature: ${(testWeatherData.temp - 273.15).toFixed(2)} °C`);
    expect(elementTemperature).toBeInTheDocument();
  });
});
