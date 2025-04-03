// brings in react useState code
import { useState } from 'react';

// sets up useState, what variable, what function chamges it, and what start value
const Home = () => {
  const [name, setName] = useState("Mary");

// function actually making dynamic chnage
  let handleClick = () => {
    setName("John");
  }

  
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;



let [to_do_list, handleAdd] = useState(to_do_list); const to_do_list = [ { item: 'Complete Lab 11', status: 'incomplete' }, { item: 'Review JSX Events and State', status: 'incomplete' }, ]; const handleX = (event) => { const listItem = event.target.parentElement; listItem.style.textDecoration = 'line-through'; }; const handleAdd = (event) => { console.log(event); console.log(event.target.value); }; return ( <div> <h1>To-Do List</h1> <label htmlFor="search"></label> <input id="search" type="text" onChange={handleChange} /> <button onClick= {handleAdd}>Add</button> <ul> {to_do_list.map(function (item) { return ( <li key={item.item}> {item.item}<button onClick={handleX}>X</button> </li> ); })} </ul> </div> ); } export default App;
