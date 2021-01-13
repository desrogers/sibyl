# 🌞 sibyl

**sibyl** is a full stack weather app built with Typescript. It provides current weather conditions and forecast details based on location, and offers a feature for users to view and save their recent searches.
![Forecast page view screenshot](https://gdurl.com/Qshz)

## Table of Contents

- [Built With](#built-with)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Documentation](#api-documentation)

## Built With

- TypeScript
- Create React App
- Material UI
- Node.js + Express
- Open Weather API
- Google Maps Places API
- [MDI Material UI](https://github.com/TeamWertarbyte/mdi-material-ui#readme) - Material-UI SvgIcon components for Material Design Icons.
- [Weather React Icons](https://github.com/taichi-t/weather-react-icons#readme) - Weather icons corresponding to Open Weather API icon ID
- [Use Places Autocomplete](https://github.com/wellyshen/use-places-autocomplete) - React hook for Google Maps Places Autocomplete.

## Architecture

![sibyl architecture](https://gdurl.com/JdaT)

#### Frontend

The client app uses a domain-driven structure, keeping related components as close as possible, and the heirarchy relatively flat. Shared components and util files live in separate directories.

#### Backend

The server uses the MVC pattern, and moves the logic for manipulating request and response data to a service layer between the controller and the model.

## Getting Started

### Prerequisites

To properly run the app in a local development environment, environment variables are required.

- The `client` app requires a Google Places API Key that can be obtained here. See the `.env.example` file included in `/client` for reference to the required environment variable name
- The `server` app requires an API Key from the Open Weather API. See the `.env.example` file included in `/server` for reference to the required environment variable name

In both the `/server` and `/client` directories:

1. Duplicate the `.env.example` file and rename to `.env.development` or `.env` depending on your needs
2. Add your API Key for the respective service

### Installation

1. Install client packages
   - From the project root directory run `cd client && npm install`
2. Install server packages
   - From the project root directory run `cd server && npm install`

To start the client and server apps, navigate to the respective folders and run `npm start`

## API Documentation

Example Request

```
GET /api/forecast?lat=40.7127&lng=-74.0059

```

Example Response

```
{
  "lat": 33.44,
  "lon": -94.04,
  "current": {
    "dt": 1595243443,
    "sunrise": 1608124431,
    "sunset": 1608160224,
    "temp": 274.75,
    "feels_like": 270.4,
    "pressure": 1017,
    "humidity": 96,
    "dew_point": 274.18,
    "uvi": 0,
    "clouds": 90,
    "visibility": 6437,
    "wind_speed": 3.6,
    "wind_deg": 320,
    "weather": [
      {
        "id": 701,
        "main": "Mist",
        "description": "mist",
        "icon": "50n"
      }
    ]
  },
  "daily": [
    {
      "dt": 1595268000,
      "sunrise": 1608124431,
      "sunset": 1608160224,
      "temp": {
        "day": 278.14,
        "min": 273.15,
        "max": 279.4,
        ...
      },
      "feels_like": {
        "day": 273.53,
        ...
      },
      "pressure": 1021,
      "humidity": 70,
      "dew_point": 273.27,
      "wind_speed": 3.74,
      "wind_deg": 323,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": 60,
      "pop": 0.84,
      "uvi": 2.41
    }
    ...
  ],
  "alerts": [
    ...
  ]
}

```
