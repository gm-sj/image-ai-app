import { HttpResponse, http } from 'msw';
import dummy from './dummy.json';

export const handlers = [
  http.get('/dummy', () => {
    return HttpResponse.json(dummy);
  }),
];
