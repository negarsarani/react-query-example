import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';
const Posts = [
  { id: 1, title: 'negar' },
  { id: 1, title: 'niloo' },
];
function App() {
  const { isLoading, data } = useQuery(['posts'],  async () => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then((response) => response.data)
  });

  if (isLoading) {
    return <div>loading ...</div>;
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

// function wait(duration) {
//   return new Promise((resolve) => setTimeout(resolve, duration));
// }
