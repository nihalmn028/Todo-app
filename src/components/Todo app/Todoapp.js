import React from 'react'
import './Todoapp.css'
import { useState } from 'react'
function Todoapp() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

function btnclk(){

setData([...data,input])
setInput("")


}
function inpchg(e){
setInput(e.target.value)
}

  function deleteData(index) {
    const newTodos = [...data];
    newTodos.splice(index,1);
    setData(newTodos);
}
  return (
    <div>
      <div className='main'>
      <div className='cont1'>
      <h1>TODO LIST</h1>
      <input type="text" value={input} placeholder='ENTER THE LIST' onChange={inpchg}/>
      <br />
      <button onClick={btnclk}>ADD TO LIST</button>
      </div>
      <h1 className='headig'>LIST</h1>

     
      <div>
        <ul>
         {data.map((value,index)=>{
          return <li className='cont2' key={index}>{value} <i class="fa-solid fa-trash flex" onClick={() => deleteData(index)}></i></li>})

         }
         
  
          
        
        </ul>
      </div>
     
      </div>
     
     
    </div>
  )
}

export default Todoapp