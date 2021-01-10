import * as got from "got";
import pick from "lodash/pick";

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
    host: "dark-sky.p.rapidapi.com",
    key: process.env.DARKSKY_KEY,
  };

  async getForecast({ lat, lng }: Coordinates): Promise<Pick<any, string>> {
    const { host, key } = this._credentials;
    if (key === undefined) {
      throw new Error("Weather API key is undefined. Add your key to .env");
    }
    const options = {
      headers: {
        "x-rapidapi-key": key,
        "x-rapidapi-host": host,
      },
      responseType: "json",
    };
    const fields: string[] = [
      "latitude",
      "longitude",
      "currently",
      "hourly",
      "daily",
    ];
    const { body } = await got.get(`https://${host}/${lat},${lng}`, options);
    const forecast: Forecast = JSON.parse(body);
    return pick(forecast, fields);
  }
}
