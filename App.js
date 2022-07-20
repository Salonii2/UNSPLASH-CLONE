import { useState } from 'react';
import './App.css';

//zA3ZMF_xgGIw3PwaRdhDkucvu-1a42jjvb3uVVMGIEk

function App() {
  const [value,setValue] = useState("")
  const [results,setResults]= useState([])
  const fetchImages = ()=>{
    fetch(`https://api.unsplash.com/search/photos?client_id=zA3ZMF_xgGIw3PwaRdhDkucvu-1a42jjvb3uVVMGIEk&query=${value}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{
     console.log(data)
     setResults(data.results)
    })
  }
  return (
    <div className="App">
   <div className="mydiv">
   <div className="gallery">
    {
      results.map((item)=>{
        return <img className="item" key={item.id} src={item.urls.regular} />

      })
    }
   </div>
    <span>Search</span>
    <input 
    style={{width:"60%"}}
    type="text" 
    value={value} 
    onChange={(e)=>setValue(e.target.value)} />
   
   <button onClick={()=>fetchImages()}>send</button>
   </div>
    </div>
  );
}

export default App;
