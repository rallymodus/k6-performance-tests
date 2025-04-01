import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from '../utils/htmlReport.js';

export let options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '1m', target: 10 },
    { duration: '30s', target: 0 },
  ],
};

export default function () {
  let res = http.get('https://test.k6.io');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}

export function handleSummary(data) {
  return {
    'results/summary.html': htmlReport(data),
  };
}