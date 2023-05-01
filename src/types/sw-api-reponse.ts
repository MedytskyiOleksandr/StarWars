import {SWPerson} from './sw-person';

export interface SWApiResponse {
  count: number;
  next: string;
  previous: string;
  results: SWPerson[];
}
