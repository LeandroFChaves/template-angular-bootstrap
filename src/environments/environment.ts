export const environment = {
  production: false,

  allowedDomains: [
    new RegExp('localhost:4200'),
    new RegExp('jsonplaceholder.typicode.com'),
  ],
  disallowedRoutes: [new RegExp('/oauth/token')],

  urlApi: 'https://jsonplaceholder.typicode.com',
};
