import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Data from './components/Data';
import Criteria from './components/Criteria';

function App() {
    const [data, setData] = useState([]);
    const [criteria, setCriteria] = useState([]);
    const [condition, setCondition] = useState(false);

    const getData =async() => {
        const response = await axios.get('https://mobile-app-challenge.herokuapp.com/data')
        const id = []
        response.data.map((res)=>{
            id.push(res.id)
        })
        getAllData(id,response.data)
        setData(response.data)
        }

    const getAllData =(newID,datas) => {
        const alldata = []
        for(let id of newID){
           alldata.push(datas.filter((temp)=>(temp.id == id)))
        }
        setCriteria(alldata)
    }

    useEffect(()=>{
        getData()
    }, [])

  return (
    <div className='App'>
        { criteria ? Data(getAllData,data,setCondition,criteria) : null }
        { condition ? Criteria(condition,criteria) : null }
    </div>
  );
}

export default App;
