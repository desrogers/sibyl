import { Request, Response, RequestHandler } from 'express';
import WeatherService from '../services/weather.service';
import createError = require('http-errors');

interface ForecastRequestHandler {
  get: RequestHandler
}

type JSONorErrorResponse = Response<createError.HttpError | JSON>;

export default class WeatherController {
    weatherService: WeatherService;

    constructor() {
        this.weatherService = new WeatherService();
    }

    makeForecastHandler(): ForecastRequestHandler {
        return {
            get: async (req: Request, res: Response): Promise<JSONorErrorResponse> => {
                const { lng, lat } = req.query;
                if (typeof lat != 'string' || typeof lng != 'string') {
                    return res.send(new createError[400]('Invalid query params for lat or lng'));
                }

                try {
                    const response: Pick<any, string> = await this.weatherService.getForecast({lat, lng})
                    return res.json(response);
                } catch (e) {
                    return res.send(new createError[400](e))
                }
            }
        }
    }
}