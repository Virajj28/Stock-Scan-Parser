import { useState } from 'react';

const Data = ({data, setCriteria}) => {

    const [show ,setShow]= useState(false);

    const [hide, setHide] = useState(true);

    const handleClick = () => {
        setShow(!show);
        setHide(!hide);
    }

    // const getID = (id) => {
    //     const id = []
    //     data.map(item => {
    //         id.push(item.id)
    //     })
    // }

    return (
        <div className="data">
            {hide && data.map(item => (
                <div key={item.id} className='card' onClick={() => handleClick()}>
                <div className='card-item'>
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
            
            {show && data.filter(item => (
                item.id=== 2 
            )).map(item => 
                {return (
                    <>
                    {/* {items.text} */}
                    {item.criteria.map(item => (
                        <div
                          style={{color: '#fff'}}
                        >{item.text}</div>
                    )
                    )}
                    </>
                )}
                )
            }
        </div>
    )
}

export default Data;