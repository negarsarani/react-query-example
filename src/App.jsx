import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';
import useQueries from './hooks/QueryHook';

function App() {
  const fetchData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
  };
  const [isLoading, data, error, refetch] = useQueries(fetchData , ['post']);
  if (isLoading) {
    return <div>loading ...</div>;
  }
  if (error) {
    return <div>shittt</div>;
  }

  return (
    <>
      <button onClick={refetch}>fetch the data</button>
      {data?.map((item) => (
        <div key={item.id}>
          {item.id} , {item.username}
        </div>
      ))}
    </>
  );
}

export default App;
//cacheTime =
//توی این کویری کش میتونیم اطلاعات کش شده رو بعد 5 ثانیه پاک کنیم
/// با پاک شدن کش ، کاربر دوباره لودینگ را مشاهده میکند

//staleTime  =  یعنی اولین فتچ که میخوره به مدت هر زمانی که بهش گفته باشیم صفحه رو ریفرش نگه میداره و بعدش مستقر میشه
//وقتی میره رو حالت ریفرش  تا همون مدت زمان دیگه هیچ فتچی نمیزنه تا تایمش تموم شه  وقتی تایمش شد اگر خواستی دوباره فتچ میزنه

//حالت دیفالتشم 0 میلی ثانیه است که هر بار فتچ بزنه

//refetchInterval => polling
// هر چند ثانیه یکبار فتچ میزنه
// در زمانی که روی این ویندو  فوکوس نباشیم این اتفاق متوفق میشه

// refetchIntervalInBackground =>polling
// همون اتفاق هر چند بار یکبار قتچ شدن هستش که حتی وقتی روی این ویندو فوکوس نباشیم توی بکگراند داره فتچ میزنه
