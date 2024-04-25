import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setdata] = useState([])
useEffect( ()=>{
    
        fetch('https://api.github.com/users/ravvviii')
        .then(responce => responce.json())
        .then(data=>{
            console.log(data);
            setdata(data)
        })
        
        



 
    

},[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    Github Details
    <div>
        <img src={data.avatar_url} alt="" style={{ borderRadius: '50%', width: '100px', height: '100px', marginBottom: '20px' }} />
    </div>
    <div className='text-center bg-gray-600 text-white p-4 text-3xl'>
        <span style={{ marginRight: '5px' }}>Name:</span> {data.name}
    </div>
    <div className='text-center bg-gray-600 text-white p-4 text-3xl'>
        <span style={{ marginRight: '5px' }}>Location:</span> {data.location}
    </div>
</div>




  )
}

export default Github