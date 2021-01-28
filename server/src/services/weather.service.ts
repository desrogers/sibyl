import * as got from "got";
import queryString from "query-string";

interface Forecast {
  lat: number;
  lon: number;
  current: Record<string, number>;
  daily: Record<string, number>;
  alerts?: Record<string, number>;
}

interface Coordinates {
  lat: string;
  lng: string;
}

type Config = {
  appid: string;
  units: string;
  exclude: string[];
};

export default class WeatherService {
  private _config: Config;

  constructor() {
    this._config = {
      appid: process.env.WEATHER_API_KEY || "",
      units: "imperial",
      exclude: ["minutely", "hourly", "timezone", "timezone_offset"],
    };
  }

  async getForecast({ lat, lng: lon }: Coordinates): Promise<Forecast> {
    if (this._config.appid === undefined) {
      throw new Error("Weather API key is undefined. Add your key to .env");
    }
    const fields = { ...this._config, lat, lon };
    const params = queryString.stringify(fields, { arrayFormat: "comma" });
    const URL = `https://api.openweathermap.org/data/2.5/onecall?${params}`;
    const { body } = await got.get(URL);
    const forecast: Forecast = JSON.parse(body);
    return forecast;
  }
}
