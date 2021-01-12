# Submission Requirements

## Project Description

- A high level architectural overview of your web application. e.g. names, relationships and purposes of all components and relevant data models

  ![sibyl architecture](https://gdurl.com/JdaT)

  ### Components

  The two main structural components of this single page application are the client component built with React, and the server component built with NodeJS + Express. Through the UI a user trigger events that either perform actions on local storage or AJAX calls to REST APIs. One call is server side API relays requests and transforms weather data from the Open Weather API, and the other requests and recieves location data from the Google Places API.

  ### Data Models

  ```
  LOCATIONS
  id: int
  locality: string
  lat: string
  lng: string
  ```

- Brief description of the architectural design pattern that you leveraged (MVC, MVP, MVVM)

  The project as a whole mainly uses the MVC pattern - employing React as the View, NodeJS web server as the Controller, and interacts with a public API for weather data (the Model). It also MVC on the client side application to persist and interact with data.

- Screenshots of each View and descriptions of the overall user flow as well as any place that you made distinct design decisions. (Screenshots can be taken via any screenshot capture application or native methods).

  ### [Mockups](https://balsamiq.cloud/s2zagq3/pbit2b1)

  ![Forecast page view screenshot]()
  This is the landing page for the app, but a user can also navigate to it by either adding coordinates to the url without a date, e.g. `/forecast/40.7127,-74.0059`, or removing a date from the details url, e.g. `/details/40.7127,-74.0059`.

  ![Details page view screenshot]()

  On this page the user can go forward and back in time to get the forecast details for the chosen date. The typical user flow to here can start from the Current Weather Card or via the "More Details" button available in the collapsible table rows on the Forecast page view. This page can also be accessed directly through inputing the coordinates for a location and a date in the browser url.

  ![Locations page view screenshot]()

  After weighing the overhead for implementing a DBMS like MySQL or Postgres on the backend to save user preferences, and the simplicity of the Location data model, I decided to persist data to local storage instead. Also from a user experience standpoint, if I were to deploy the app in its current form, users would be able to keep their preferences without the need for authentication to ensure that their data is their data. But under different circumstances I think it would be a better user experience to use a DBMS and authentication so that the app is device or browser agnostic

## Project Requirements

Please list examples of how your project meets the following requirements below:

- [x] Use a modern JS Library/Framework like React, Angular, etc. We suggest using React.js.
      The project uses the provided CRA boilerplate with TypeScript
- [x] Create an application that can be interacted with in a minimum of three different ways by the user.

  1. The landing page search form allows a user to search for location by city or postcode
  2. The landing page features a current location button to allow a user to instantly request the current forecast for the coordinates provided by the browser
  3. The landing page features a card and a table that links a user to the forecast details page view for a date
  4. The Locations page view allows a user to view, add, and delete saved locations
  5. The Locations page view also allows a user to view, and delete recent searches, with the option to add them to saved locations

- [x] The usage of a specified architectural pattern (MVC, MVP, MVVM, etc.)

  The project uses an MVC pattern at a high level employing React for the View, NodeJS for the Controller, and interacts with an external API for the Model data. There's also a separate MVC implemented on the front end utilizing the browser local storage as the Model in the architecture to allow users to interact with recent searches and stored locations without the need for a full blown DBMS on the backend

- [x] Use of a [REST API](https://medium.com/@arteko/the-best-way-to-use-rest-apis-in-swift-95e10696c980).

  The project uses NodeJS + Express to verify requests before forwarding location payload to the Open Weather API. When the external API responds, the service layer transforms the response before sending it to the front end

- [x] Usage of at least 5 UI components from the [material-ui/@core](https://material-ui.com/) library (if you are not using React, a comparable UI library is acceptable)

  The project uses Material UI components throughout the frontend for layout and consistent styles.

  - `Grid`
  - `Table`
  - `Container`
  - `Box`
  - `Card`
  - `IconButton`

- [x] An example of a reusable UI component that you have created and used in the app. This should be different than the 5 UI components from the vendor library.
  - `Header` - Wraps text and allows customization of styles separate from markup, i.e. renders as a `h1` but has `h2` styles set by Material UI
  - `PageTemplate` - Establishes a base for new page views, including a top grid and navbar.
  - `LocationsDataTable` - A styled table that accepts a table for the creation of location tables that serve different functions - used to create the Saved Locations and Recent Searches components.
