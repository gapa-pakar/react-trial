import { useState, useEffect } from 'react'
import Pages from './Pages'
import './App.css'


function App() {
   
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/data.json')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Error while fatching data', error));
  }, []);

  if(!data) {
    return <div>Loading...</div>
  }

  function handleClick(event) {
    if(event.target.id === "next" && count < 2){
      setCount(c => c + 1);
    }
    else if (event.target.id === "prev" && count > 0) {
      setCount(c => c - 1);
    }
    else {
      console.log("no pages found");
    }
  }

  return (
    <>
      <div className='buttons'>
        <button id='prev' onClick={handleClick}>prev page</button>
        <button id='next' onClick={handleClick}>next page</button>
      </div>
      <Pages page={count} data={data}></Pages>
    </>
  )
}

export default App
