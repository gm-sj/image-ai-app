import { HttpResponse, http } from 'msw';
//import dummy from './dummy.json';

const dummyData = {
  id: '1',
  url: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
  description: 'A breathtaking view of the sunset casting warm hues over the mountains.',
};

export const handlers = [
  http.get('/dummy', () => {
    return HttpResponse.json(dummyData);
  }),
];
