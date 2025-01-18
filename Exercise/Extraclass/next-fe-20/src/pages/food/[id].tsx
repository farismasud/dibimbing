import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Food } from './Food.interface';

const FoodDetail = () => {
  const [data, setData] = useState<Food | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const getData = () => {
    const apiUrl: string = process.env.NEXT_PUBLIC_API_URL ?? '';
    setIsLoading(true);
    axios
      .get(`${apiUrl}/foods`, {
        headers: {
          'Content-Type': 'application/json',
          apiKey: process.env.NEXT_PUBLIC_API_KEY ?? '',
        },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (router.query.id) getData();
  }, [router.query.id]);

  if (isLoading) return <p>loading</p>;
  if (!data) return <p>data not found</p>;

  return (
    <div>
      <p onClick={() => router.push('/food')}>back to list</p>
      Food Detail:
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default FoodDetail;

