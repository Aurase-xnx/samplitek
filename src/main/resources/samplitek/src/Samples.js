import React,{useState,useEffect} from 'react';
import './/css/Samples.css'

function Samples() {
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
        <div>
          <p>Add a sample here :</p>
          <input type="text" placeholder="Sample name"></input>
          <input type="text" placeholder="Genre"></input>
          <input type="text" placeholder="Base BPM"></input>
          <button>Add your sample !</button>
        </div>
        <div className="SampleDisplay">
            <div>
            <p>Search for a sample : </p>
            <input type="text" placeholder="Sample name"></input>
            <input type="text" placeholder="Genre"></input>
            <input type="text" placeholder="Base BPM"></input>
            <button>Search for the sample !</button>
            </div>            
          {
            data && data.length>0   && data.map((item)=><p>||{item.name} | {item.genre} | {item.BPM} | {item.Creator}||</p>)
          }
        </div>
    </div>
  )
}
export default Samples;
