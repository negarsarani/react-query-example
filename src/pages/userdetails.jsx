import { useParams } from 'react-router';
import detailUserHook from '../hooks/detailUserHook';

const Userdetails = () => {
  const { id } = useParams();
  const [isLoading, data, error, refetch] = detailUserHook(id);
  if (isLoading) {
    return <div>loading ...</div>;
  }
  if (error) {
    return <div>shittt</div>;
  }

  return (
    <div>
      {data.id} ,{data.username}
    </div>
  );
};

export default Userdetails;
