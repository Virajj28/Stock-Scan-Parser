const Criteria = (condition,criteria) => {
    return (
        <>
            {
                condition &&
                criteria.map((sub,i) =>
                    { 
                        return sub.map(res=>(
                        res.criteria.map(temp=>(
                            <div className='card-criteria' key={sub[i].id}>
                                {
                                    sub[i].id === 1? temp.text:
                                    sub[i].id === 2? temp.text:
                                    sub[i].id === 3? temp.text.replace('$1',temp.variable['$1'].values[0]):
                                    sub[i].id === 4? temp.text.replace('$1',temp.variable['$1'].default_value)
                                        .replace('$2',temp.variable['$2'].values[0]):
                                    sub[i].id === 5? temp.text:
                                    "no data"
                                }
                            </div>
                        ))))
                    }
                )
            }
        </>
    )
}

export default Criteria;