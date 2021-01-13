import axios from "axios";

type Coords = {
  lat: number;
  lng: number;
};

export default class API {
  host: string = "http://localhost:8080";

  getForecast({ lat, lng }: Coords) {
    const endpoint = "/api/forecast";

    return axios
      .get(`${this.host}${endpoint}?lat=${lat}&lng=${lng}`)
      .then(({ data }) => data)
      .catch((err) => console.error(err));
  }
}
