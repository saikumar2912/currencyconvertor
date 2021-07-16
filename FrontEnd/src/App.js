import React,{useState,useEffect} from 'react';
import axios from 'axios';

import './App.css';
function App() {

  const[currency,setCurrency]=useState([])
  const[from,setFrom]=useState()
  const[to,setTo]=useState()
  const[value,setValue]=useState()
  const[amount,setAmount]=useState()
  useEffect(() => {
    axios.get('http://data.fixer.io/api/latest?access_key=147af11bb3bba437fc11563eb065b0aa&format=1')
    .then((res)=>{
      const set=Object.keys(res.data.rates)
    setCurrency(Object.keys(res.data.rates))
    setFrom(res.data.base)
    setTo(set)
    })

  }, [])

const handleChange=(e)=>{
setFrom(e.target.value)
}
const Change=(e)=>{
  setTo(e.target.value)
}

const submit=()=>{

  axios.get(`http://localhost:8000/currency/c/${from}/${to}/${value}`)
  .then((res)=>setAmount(res.data))

}
  return (
    <div className="App">
      <h1>CURRENCY CONVERTOR</h1>
   <div className='header'>
        <input type="number" className="input" onChange={(e)=>setValue(e.target.value)} />
        <select className='select' value={from} onChange={(e)=>handleChange(e)}>
            {currency.map(option=>(
            <option key={option} value={option}>
{option}
            </option>))}
         
        </select>
      </div>
      <div className='header'>
        <input type="number" className="input" onChange={(e)=>setValue(e.target.value)}  />
        <select className="select" value={to} onChange={Change}>
            {currency.map(option=>(
            <option key={option} value={option}>
{option}
            </option>))}
         
        </select>
      </div>
      <button className='button' onClick={()=>submit(from,to,value)}> covert</button>
      {amount}

    </div>
  );
}

export default App;
