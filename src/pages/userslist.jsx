import { Link, Navigate } from 'react-router-dom';
import useQueries from '../hooks/QueryHook';
import axios from 'axios';

const Userslist = () => {
  //   const handleDetail = (id) => {
  //     return Navigate;
  //   };
  const fetchData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
  };
  const [isLoading, data, error, refetch] = useQueries(fetchData, ['post']);
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
          <Link to={`/user/${item.id}`}>
            {item.id} , {item.username}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Userslist;
