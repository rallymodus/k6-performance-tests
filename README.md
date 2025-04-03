## k6 Performance Tests

This repo contains an example of performance testing scripts written in JavaScript using [k6](https://k6.io/).

## 📦 Prerequisites
- Install [k6](https://k6.io/docs/getting-started/installation/)

## 🚀 Run Tests

To run test (e.g. stress test):
```bash
k6 run scripts/stress.js
```

## 📊 Save Test Output

To save the test output in JSON format:
```bash
k6 run --out json=results/output.json scripts/load.js
```

## 🌐 Test Website

The tests in this repository are performed on [https://test.k6.io](https://test.k6.io).
```
