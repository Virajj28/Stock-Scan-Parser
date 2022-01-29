import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://mobile-app-challenge.herokuapp.com/data')
    .then(res => res.json())
    .then(data => {
      setData(data);
    })
  }, []);

  return (
    <div className="App">
        {data.map(item => (
          <div key={item.id} className='card'>
            <div className='card-item' >
              <div className='card-item-header'>
                {item.name}
              </div>
              <div
                style={{color: item.color}}
                className='card-item-body'
              >
                {item.tag}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;
