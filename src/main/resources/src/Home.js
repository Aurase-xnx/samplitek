import React,{useState, useEffect} from 'react'
import './/css/Home.css';


export default function Home() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('news.json'
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
    <div className="HomeVue">
      <div className="HomeWelcomeText">
        <h1>WELCOME TO SAMPLITEK</h1>
        <h2>Probably the best sample library</h2>
      </div>
      
      
      <div className="news">
        <h3 className="newsHead">News</h3>
        {
          data && data.length>0 && data.map((item)=><div><h3 className="newsTitle">{item.title}</h3><p className="newsTitle">{item.content}</p><p className="newsDate">{item.date}</p></div>)
        }
      </div>
      

    </div>
  )
}
