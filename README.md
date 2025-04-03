Here is the updated content for your `README.md` file:

```markdown
# k6 Performance Tests

This repo contains an example of performance testing scripts written in JavaScript using [k6](https://k6.io/).

## 📦 Prerequisites
- Install [k6](https://k6.io/docs/getting-started/installation/)

## 🚀 Run Tests

To run the smoke test:
```bash
k6 run scripts/smoke.js
```

To run the stress test:
```bash
k6 run scripts/stress.js
```

To run the spike test:
```bash
k6 run scripts/spike.js
```

## 📊 Save Test Output

To save the test output in JSON format:
```bash
k6 run --out json=results/output.json scripts/load.js
```

## 🌐 Test Website

The tests in this repository are performed on [https://test.k6.io](https://test.k6.io).
```

To apply these changes to your `README.md` file, follow these steps:

1. Navigate to the `README.md` file in your repository: [README.md](https://github.com/rallymodus/k6-performance-tests/edit/main/README.md).
2. Replace the existing content with the updated content provided above.
3. Commit the changes by adding a commit message (e.g., "Updated README.md structure") and clicking on the "Commit changes" button.
