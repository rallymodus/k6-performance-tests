import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
// Ramp up to 50 users over 1 minute
        { duration: '1m', target: 50 },
        // Ramp up to 100 users over 1 minute
        { duration: '1m', target: 100 },
        // Ramp up to 200 users over 1 minute
        { duration: '1m', target: 200 },
        // Ramp up to 300 users over 1 minute
        { duration: '1m', target: 300 },
        // Ramp up to 400 users over 1 minute
        { duration: '1m', target: 400 },
        // Ramp down to 0 users over 30 seconds
        { duration: '30s', target: 0 },
    ],
};

export default function () {
    let res = http.get('https://test.k6.io');
    check(res, { 'status is 200': (r) => r.status === 200 });
    sleep(1);
}
