import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
        console.log('datas', datas);
        const alldata = []
        for(let id of newID){
           alldata.push(datas.filter((temp)=>(temp.id == id)))
        }
        console.log('alldata', alldata);
        setCriteria(alldata)

    }
    const handleClick =(id) => {
        const newID = [id]
        getAllData(newID,data)
        setCondition(true)
    }

    useEffect(()=>{
        getData()
    }, [])

  return (
    <div className='App'>
        {
            criteria.map((res)=>(
                res.map((temp)=>(
                <div className='card-item' key={temp.id} style={{cursor:'pointer'}} onClick={()=>handleClick(temp.id)}>
                    <div className='card-item-header'>
                        {temp.name}
                    </div>
                    <div className='card-item-body' style={{color:`${temp.color}`}}>
                            {temp.tag}
                    </div>
                </div>
            ))))
        }

        {condition &&
            criteria.map((tempa)=>
                { 
                    return tempa.map((res)=>(
                    res.criteria.map((temp)=>(
                        <div className='card-criteria' key={temp.id}>
                        <tr>
                            <td>
                                {temp.text}
                            </td>
                        </tr>
                      </div>
                    ))
                ))
            })
        }
    </div>
  );
}

export default App;
