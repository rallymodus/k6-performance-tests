// Minimal k6 HTML report generator
export function htmlReport(data) {
    let summary = `
      <html>
        <head><title>K6 Test Summary</title></head>
        <body>
          <h1>K6 Test Summary</h1>
          <p><strong>Duration:</strong> ${(data.state.testRunDurationMs / 1000).toFixed(2)}s</p>
          <p><strong>Total Requests:</strong> ${data.metrics.http_reqs.values.count}</p>
          <p><strong>Checks Passed:</strong> ${data.metrics.checks.passes}/${data.metrics.checks.passes + data.metrics.checks.fails}</p>
          <h2>Thresholds:</h2>
          <pre>${JSON.stringify(data.thresholds, null, 2)}</pre>
        </body>
      </html>
    `;
    return summary;
  }
  