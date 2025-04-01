import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from '../utils/htmlReport.js';

export let options = {
    stages: [
        { duration: '1m', target: 50 }, // ramp up to 50 users
        { duration: '2m', target: 100 }, // ramp up to 100 users for 2 minutes
        { duration: '1m', target: 0 }, // ramp down to 0 users 
    ],
};

export default function () {
    let res = http.get('https://test.k6.io');
    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time is acceptable': (r) => r.timings.duration < 500,
    });
    sleep(1);
}

export function handleSummary(data) {
    return {
        'results/summary.html': htmlReport(data),
    };
}
