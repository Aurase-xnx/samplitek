import React,{useState,useEffect} from 'react';
import './/css/SampleDataHandler.css'

function SampleDataHandler() {
    const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="Samples">
      <h1>Samples</h1>
        <div className="SampleDisplay">
          {
            data && data.length>0   && data.map((item)=><p>||{item.name} | {item.genre} | {item.BPM} | {item.Creator}||</p>)
          }
        </div>

    </div>
    
  );
}

export default SampleDataHandler;
