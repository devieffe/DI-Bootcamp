import React, { useState, useEffect } from 'react';

interface Data {
  id: number;
  name: string;
}

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<Data[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Example API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: Data[] = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <ul>
          {data.map(item => (
            <li key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
