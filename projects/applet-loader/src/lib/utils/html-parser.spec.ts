import { parse } from './html-parser';

describe('HTML Parser', () => {
  it('should load dom', () => {
    const doc = parse(html);
    expect(doc.querySelectorAll('script').length).toBe(3);
  });
});

const html = `<!doctype html>
<html lang="zh-Hans">
<head>
  <meta charset="utf-8">
  <title>BeeArt</title>
  <base href="/bee-art">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="manifest" href="manifest.webmanifest">
  <meta name="theme-color" content="#1976d2">
  <link rel="stylesheet" href="styles.37a30281a8bd5d13ca03.css">
</head>
<body>
<app-root></app-root>
<noscript>Please enable JavaScript to continue using this application.</noscript>
<script src="runtime.ebbf1c9e7c3039a883e3.js" defer></script>
<script src="polyfills.f59f1e27b134ea3b3d6c.js" defer></script>
<script src="main.17bf9f1d52057d8f0abf.js" defer></script>
</body>
</html>
`;
