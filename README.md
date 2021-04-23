## Modelling frontend

The application is currently deployed on [Heroku](https://modellingapp-front.herokuapp.com/)

### Brief Description

#### TLDR

-   React
-   Typescript
-   CSS3 (Css Modules)
-   Atomic Design Pattern
-   Jest
-   React Testing Library

The frontend is written in `React` and `typescript`, It's styled with `CSS3`, adopts [css modules](https://github.com/css-modules/css-modules) for modularization, uses the `Atomic design pattern` and is tested with `Jest` and `React testing library`.
The frontend uses the atomic design pattern owing to the ease of understanding for new members of the application, its well strcutured nature, and minimal duplication of code.

### Suggested Deployment Model

-   The application can be deployed with heroku as it currently is or `GCP's` appEngine

### Local Deployment

-   Clone the repository
-   Ensure that you have nodejs installed on your local machine `preferably v12.x or later`
-   Provide the requsted environment variables as indicated on the `.env.sample` file (you can use `https://modelling-backend.herokuapp.com/` as the `BASE_URL`)
-   `cd` into the repository
-   Run `npm run dev` for local deployment
