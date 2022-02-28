import React from "react";
import { WeatherInfoBoxProp } from "./type";

function WeatherInfoBox({ weatherData, locationName }: WeatherInfoBoxProp) {
  return (
    <div className="bg-gray-200 opacity-75 p-3 rounded-md">
      <div className=" font-bold text-base text-cyan-800">
        {locationName}
      </div>
      <div className="text-md">
        Temperature: {(weatherData.temp - 273.15).toFixed(2)} °C
      </div>
    </div>
  )
}
export default React.memo(WeatherInfoBox);
