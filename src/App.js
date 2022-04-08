import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';

let ReducerFunction = (x,action)=>{
  if(action.type==='Increment'){
    return x = [x+1,"kkk"]
  }else if(action.type==='decrement'){
    return (x-1);
  }else if(action.type==='changedata'){
    return x = "Anjali"
  }else{
    return x;
  }
}

function App() {
  const [x,y] = useState(["200","kiran"])
  
  const [newdata,dispatch] = useReducer(ReducerFunction,x)

  let clickHere = ()=>{
    //alert('Click here');
    dispatch({
      type:"Increment"
    })
  }
  let clickHere2 = ()=>{ 
    dispatch({
      type:"decrement"
    })
  }
  let clickHere3 = ()=>{
    dispatch({
      type:"changedata"
    })
  }
  return (
    <div className="App">
      <h1>Hello</h1>

      {newdata}<br />
      <button className="btn btn-success" onClick={()=>{clickHere()}}>click Here</button><br />
      <button className="btn btn-success" onClick={()=>{clickHere2()}}>click Here</button><br />
      <button className="btn btn-success" onClick={()=>{clickHere3()}}>click Here</button>
    </div>
  );
}

export default App;
