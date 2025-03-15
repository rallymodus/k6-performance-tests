import http from 'k6/http';
import { check } from 'k6';
import { htmlReport } from '../utils/htmlReport.js';

export const options = {
  vus: 1,
  duration: '10s',
};

export default function () {
  const res = http.get('https://test.k6.io');
  check(res, { 'status is 200': (r) => r.status === 200 });
}

export function handleSummary(data) {
  return {
    'results/summary.html': htmlReport(data),
  };
}
