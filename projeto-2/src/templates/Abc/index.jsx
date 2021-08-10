import { useParams } from 'react-router-dom';

export const Abc = () => {
  const { slug } = useParams();
  return (
    <div>
      <h1>ABC {slug}</h1>
    </div>
  );
};
