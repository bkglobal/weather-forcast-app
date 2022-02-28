import { TLocationDTO } from "src/services/weather/type";

export type WeatherInfoBoxProp = {
  weatherData: TLocationDTO;
  locationName: string;
};
