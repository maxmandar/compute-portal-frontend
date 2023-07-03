import {config} from "../../config/config"

export const environment = {
    production: false,
    BASE_URL: 'http://localhost:4200',
    CLIENT_ID: config.clientId,
    CLIENT_SECRET: config.clientSecrete
  };