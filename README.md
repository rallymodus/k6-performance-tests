# k6 Performance Tests

This repo contains performance testing scripts written in JavaScript using [k6](https://k6.io/).

## 📦 Prerequisites
- Install [k6](https://k6.io/docs/getting-started/installation/)
- VS Code (optional but recommended)

## 🚀 Run Tests

\`\`\`bash
k6 run scripts/smoke.js
k6 run scripts/load.js
\`\`\`

## 📊 Save Test Output

\`\`\`bash
k6 run --out json=results/output.json scripts/load.js
\`\`\`
