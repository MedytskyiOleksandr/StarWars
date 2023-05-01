import axios, {AxiosResponse} from 'axios';
import {SWApiResponse} from '../types/sw-api-reponse';
import {SWPerson} from '../types/sw-person';

// axios.defaults.baseURL = 'https://swapi.dev/api';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Persons = {
  list: (page: number) =>
    requests.get<SWApiResponse>(`https://swapi.dev/api/people/?page=${page}`),
  details: (url: string) => requests.get<SWPerson>(url),
};

const agent = {
  Persons,
};

export default agent;
