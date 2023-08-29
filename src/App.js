import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [calc,setcalc]=useState('');
  const op=['/','*','.','+','-'];
  const onchange=(e)=>{
    if(op.includes(e)&&calc===''|| op.includes(e)&&op.includes(calc.slice(-1))){
      //last char any operater or starting there is op
      return;
    }
    setcalc(calc+e);
  }
  // const [result,setresult]=useState("");
  const evaluate=()=>{
  setcalc(eval(calc).toString());
  
}

  return (
  <>
   <div className="container">
        <input type="text" placeholder="0" value={calc}/>

        <div>
            <button onClick={()=>{
              setcalc("");
            }}>AC</button>
            <button onClick={()=>{
              setcalc(calc.slice(0,-1))
            }}>Del</button>
            
        </div>
        <div>
            <button onClick={()=>{
              onchange('1')
            }}>1</button>
            <button onClick={()=>{
              onchange('2')
            }}>2</button>
            <button onClick={()=>{
              onchange('3')
            }}>3</button>
            <button onClick={()=>{
              onchange('+')
            }}>+</button>
        </div>
        <div>
            <button onClick={()=>{
              onchange('4')
            }}>4</button>
            <button onClick={()=>{
              onchange('5')
            }}>5</button>
            <button onClick={()=>{
              onchange('6')
            }}>6</button>
            <button onClick={()=>{
              onchange('-')
            }}>-</button>
        </div>
        <div>
            <button onClick={()=>{
              onchange('7')
            }}>7</button>
            <button onClick={()=>{
              onchange('8')
            }}>8</button>
            <button onClick={()=>{
              onchange('9')
            }}>9</button>
            <button onClick={()=>{
              onchange('*')
            }}>*</button>
        </div>
        <div>
            <button onClick={
              evaluate
            }>=</button>
            <button onClick={()=>{
              onchange('0')
            }}>0</button>
            <button onClick={()=>{
              onchange('.')
            }}>.</button>
            <button onClick={()=>{
              onchange('/')
            }}>/</button>
        </div>
    </div>
  </>
  );
}

export default App;
