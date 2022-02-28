export type TWeatherServiceData = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: TLocationDTO;
  hourly: TLocationDTO[];
};

export type TLocationDTO = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
};
