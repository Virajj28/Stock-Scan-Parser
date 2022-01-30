const Data = (getAllData,data,setCondition,criteria) => {
    const handleClick =(id) => {
        const newID = [id]
        getAllData(newID,data)
        setCondition(true)
    }

    return (
        <div className="data">
            {
                criteria.map(res=>(
                    res.map(temp=>(
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
        </div>
    )
}

export default Data;