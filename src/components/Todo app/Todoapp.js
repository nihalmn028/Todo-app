import React from 'react'
import './Todoapp.css'
import { useState } from 'react'
function Todoapp() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [save,setSave]= useState("");
  const [value,setValue]= useState("");
  const [display,setDisplay]= useState({});
  // const [display1,setDisplay1]= useState("");


function btnclk(){

setData([...data,input])
setInput("")


}
function inpchg(e){
setInput(e.target.value)
}

  function deleteData(index) {
    let newTodos = [...data];
    newTodos.splice(index,1);
    setData(newTodos);
}
function editData(index){
  setValue("Enter the value")
  setDisplay({
    display:"block"
      })
setSave(index)
  // let newTodos = [...data];
  // let savedata=save
  //   newTodos.splice(index,10,savedata);
  //   setDisplay1(newTodos);
}
function edtclk(){
  let saved=save
  let newTodos = [...data];
  newTodos.splice(saved,1,input);
  setData(newTodos);
  setDisplay({
    display:"none"
      })
      setValue("")
      setInput("")

}
  return (
    <div>
      <div className='main'>
      <div className='cont1'>
      <h1>TODO LIST</h1>
      <p>{value}</p>
      <input type="text" value={input} placeholder='ENTER THE LIST' onChange={inpchg}/>
      <br />
      <button onClick={btnclk}>ADD TO LIST</button>
      <button className='upbtn' style={display}  onClick={edtclk}>UPDATE LIST</button>
      </div>
      <h1 className='headig'>LIST</h1>

     
      <div>
        <ul>
         {data.map((value,index)=>{
          return <li className='cont2' key={index}>{value} <i class="fa-solid fa-trash flex" onClick={() => deleteData(index)}></i><i class="fa-solid fa-pen-to-square flex" onClick={() => editData(index)}></i></li>})

         }
         
  
          
        
        </ul>
      </div>
     
      </div>
     
     
    </div>
  )
}

export default Todoapp