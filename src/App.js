import './App.css';
import { useEffect, useState } from 'react';
import Data from './components/Data';
import Criteria from './components/Criteria';

function App() {

  const [data, setData] = useState([]);
  const [criteria, setCriteria] = useState(null);

  useEffect(() => {
    fetch('https://mobile-app-challenge.herokuapp.com/data')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setData(data);
      // setCriteria(data[0].criteria[0].text);
    })
  }, []);

  return (
    <div className="App">
      {criteria == null ? <Data data={data} setCriteria={setCriteria}/> : <Criteria criteria={criteria}/> }
    </div>
  );
}

export default App;
