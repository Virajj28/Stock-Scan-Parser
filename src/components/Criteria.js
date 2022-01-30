const Criteria = (condition,criteria) => {
    return (
        <>
            {
                condition &&
                criteria.map(sub=>
                    { 
                        return sub.map(res=>(
                        res.criteria.map(temp=>(
                            <div className='card-criteria' key={temp.id}>
                            {temp.text} 
                            </div>
                        ))))
                    }
                )
            }
        </>
    )
}

export default Criteria;