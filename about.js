```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // Simulate a slow network request
  const data = fetch('/api/data').then(res => res.json());

  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      {/* This will cause a hydration mismatch if data is not ready by the time the page renders.  */}
      <p>Data from API: {JSON.stringify(data)}</p>
    </div>
  );
}
```
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  res.status(200).json({ message: 'Data from API' });
}
```