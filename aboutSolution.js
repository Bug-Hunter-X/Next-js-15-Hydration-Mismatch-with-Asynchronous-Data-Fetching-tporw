```javascript
// pages/aboutSolution.js
import { Suspense } from 'react';

const MyComponent = () => {
  const data = fetch('/api/data').then(res => res.json());
  const [data1, setData] = React.useState(null);
  React.useEffect(() => {
    data.then(setData);
  }, []);
  if (data1 === null) return <p>Loading...</p>;

  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      <p>Data from API: {JSON.stringify(data1)}</p>
    </div>
  );
};

export default function About() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MyComponent/>
    </Suspense>
  );
}
```