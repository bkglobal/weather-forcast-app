import { TLocationDTO } from "src/services/weather/type";

export type TLocation = {
  latitude: number;
  longitude: number;
};

export type MapProps = {
  location: TLocation;
  locationName: string;
  weatherData: TLocationDTO;
};
