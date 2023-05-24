import { useQuery } from '@tanstack/react-query';

const useQueries = (fetchData, key) => {
  const { isLoading, data, error, refetch } = useQuery(key, fetchData, {
    // cacheTime: 5000,
    // staleTime: 5000,
    // refetchOnMount:true,
    // refetchOnWindowFocus: false,
    // refetchInterval:2000,
    // refetchIntervalInBackground:true,
    // enabled: false,
  });
  return [isLoading, data, error, refetch];
};
export default useQueries;
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
