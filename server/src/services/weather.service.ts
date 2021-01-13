import * as got from "got";

interface Forecast {
  latitude: number;
  longitude: number;
  timezone?: string;
  currently: Record<string, number>;
  minutely?: Record<string, number>;
  hourly: Record<string, number>;
  daily: Record<string, number>;
  flags?: Record<string, number>;
  offset?: number;
}

interface Coordinates {
  lat: string;
  lng: string;
}

export default class WeatherService {
  private _credentials = {
    key: process.env.WEATHER_API_KEY,
  };

  async getForecast({ lat, lng }: Coordinates): Promise<Pick<any, string>> {
    const { key } = this._credentials;
    if (key === undefined) {
      throw new Error("Weather API key is undefined. Add your key to .env");
    }

    const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly&appid=${key}`;
    const { body } = await got.get(URL);
    const forecast: Forecast = JSON.parse(body);
    return forecast;
  }
}
