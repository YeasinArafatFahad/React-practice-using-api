import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  //const player=[{name:'Pele', age:56},{name:'Ronaldo',age:36},{name:'Messi',age:33},{name:'Neymar',age:26},{name:'Salah',age:30}]
  const[player, setPlayer]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setPlayer(data))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MovieCounter></MovieCounter>
        {
          player.map(players=> <New name={players.name} key={players.id} ></New>)
        }
      </header>
    </div>
  );
}



function MovieCounter(){
  const [count,setCount]= useState(0)
  const handleClick = () => setCount(count + 1);
  return(
    <div>
      <h5>Number Of Movies:{count}</h5>
      <MovieDisplay movies = {count}></MovieDisplay>
      <MovieDisplay movies = {count + 10}></MovieDisplay>
      <button onClick={handleClick}>Add Movies</button>
    </div>
  )
}

function MovieDisplay(prop){
  return(
    <h4>Movies Acted:{prop.movies}</h4>
  )
}

function New(prop){
  const pl={
    color:'black',
    border:'5px solid green',
    margin:'10px',
    width:'1000px',
    borderRadius:'10px',
    backgroundColor:'cyan'
  }
  return(
    <div style={pl}>
      <h1>Superstar Footballer-Name:{prop.name}</h1>
    </div>
  )
}

export default App;
