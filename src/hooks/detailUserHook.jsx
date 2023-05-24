import axios from 'axios';
import useQueries from './QueryHook';

const detailUserHook = (id) => {
  const fetchData = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, data, error, refetch] = useQueries(fetchData, ['post', id]);
  return [isLoading, data, error, refetch];
};

export default detailUserHook;
