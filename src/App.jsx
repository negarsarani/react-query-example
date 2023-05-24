import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';

function App() {
  const fetchData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
  };
  const { isLoading, data, error } = useQuery(['posts'], fetchData);

  if (isLoading) {
    return <div>loading ...</div>;
  }
  if (error) {
    return <div>shittt</div>;
  }

  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          {item.id} , {item.username}
        </div>
      ))}
    </>
  );
}

export default App;
