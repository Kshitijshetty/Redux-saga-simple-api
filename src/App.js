
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getUser } from './redux/users';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const user = useSelector((state) => state.user.user);
  console.log(user);
  return (
    <div className="App">
      <h1>Data pulled from 'https://my-json-server.typicode.com/Kshitijshetty/demo/user':<br /> id:{user.id} <br /> name:{user.name}<br />lastname:{user.lastname}</h1>
    </div>
  );
}

export default App;
