import { useState } from 'react';
import './App.css';
import Left from './components/Left';
import Right from './components/Right';

function App() {

  let [title, setTitle] = useState('')
  let [desc, setDesc] = useState('')
  let [click_one, setClick_one]=useState('')
  let [click_two,setClick_two]=useState('')
  let [click_three,setClick_three]=useState('')
  let [range,setRange]=useState('')
  return (
    <div className="App">
      <div className='components'>
        <Left
          title={(data) => setTitle(data)}
          desc={(data) => setDesc(data)}
          click_one={(data)=>setClick_one(data)}
          click_two={(data)=>setClick_two(data)}
          click_three={(data)=>setClick_three(data)}
          range={(data)=>setRange(data)}
        />
        <Right onTitle={title} onDesc={desc} one={click_one} two={click_two} three={click_three} on_range={range}/>

      </div>
    </div>
  );
}

export default App;
