import axios, { AxiosInstance } from 'axios';

enum Environment {
  DEMO = 'demo',
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  STAGING = 'staging',
}

const environment: Environment = process.env.NODE_ENV as Environment;

const { NODE_ENV } = process.env;

const apiHosts: Record<Environment, string> = {
  [Environment.DEMO]:
    'https://us-central1-bonsai-interview-endpoints.cloudfunctions.net',
  [Environment.DEVELOPMENT]:
    'https://us-central1-bonsai-interview-endpoints.cloudfunctions.net',
  [Environment.PRODUCTION]:
    'https://us-central1-bonsai-interview-endpoints.cloudfunctions.net',
  [Environment.STAGING]:
    'https://us-central1-bonsai-interview-endpoints.cloudfunctions.net',
};

const apiHost: string = NODE_ENV
  ? apiHosts[environment]
  : apiHosts[Environment.DEVELOPMENT];

const instance: AxiosInstance = axios.create({
  baseURL: apiHost,
});

export default instance;
