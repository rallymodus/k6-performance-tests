import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '10s', target: 50 }, // Ramp up to 50 user over 10 seconds
        { duration: '10s', target: 1 }, // Stay at 1 user for 10 seconds
    ],
};

export default function () {
    let res = http.get('https://test.k6.io');
    check(res, { 'status is 200': (r) => r.status === 200 });
    sleep(1);
}