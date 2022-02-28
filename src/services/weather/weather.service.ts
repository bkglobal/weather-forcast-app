import axios from "axios";
import { appId } from "src/config";
import { openWeatherUrl } from "../apiUrls";
import { TWeatherServiceData } from "./type";

export async function fetchOpenWeatherData(
  latitude: number,
  longitude: number,
  timestamp: number
) {
  try {
    const url = openWeatherUrl.replace(
      "{{params}}",
      `lat=${latitude}&lon=${longitude}&dt=${timestamp}&appid=${appId}`
    );
    const result: { data: TWeatherServiceData } = await axios.get(url);
    return result.data;
  } catch (error) {
    throw new Error("Error fetching weather data");
  }
}
