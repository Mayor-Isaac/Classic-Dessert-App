import React, { useEffect, useState } from 'react';
import Loader from '../Components/Loader';
import MenuItem from './MenuItem';

export default function Menu() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data.json');
        if (!res.ok) throw new Error('Failed to Fetch');
        const { data } = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // console.log(data);

  if (isLoading) return <Loader />;
  return (
    <ul className="mt-10 grid w-auto gap-4  md:h-[calc(100vh-5rem)] md:overflow-y-scroll lg:grid-cols-3">
      {data.map((item) => (
        <MenuItem item={item} key={item.name} />
      ))}
    </ul>
  );
}
