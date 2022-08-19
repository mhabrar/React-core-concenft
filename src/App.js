import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayok = ['amir','josim','salamn','shakib']
  const Product=[
    {Name:'windows', price:'$500'},
    {Name:'mac', price:'$600'},
    {Name:'Linux', price:'$100'},
    {Name:'ubuntu', price:'$500'},
  ]
   
  return (
    <div className="App">
      <header className="App-header">
   <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <User></User>
        <ul>
          {
            nayok.map(nayok=><li>{nayok}</li>)
          }
          {
            Product.map(product=><li>{product.Name}</li>)
          }
        </ul>
           <Person Name="Messi"></Person>
           <Person Name="ronaldo"></Person>
           <Person></Person>
           <Person></Person>


      </header>
    </div>
  );

  }
  function User (){
    const [user , setUser] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data =>setUser(data));
    })
    return(
      <div>
        <h3>Dynamic User:{user.length}</h3>
        <ul>
          {
            user.map(up => <li>{up.name}</li>)
          }


        </ul>

      </div>
    )
  }
  function Counter(){
    const [count,setCount] = useState(10);
    const handleClick = () => setCount(count+1);
        return(
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={()=> setCount(count -1)}>Discrice</button>
        <button onClick={() => setCount(count+1)} >incrice</button>
      </div>
    )
  }

function Person(props){
  return (
        <div style={{border:'3px solid red', margin:'10px'}}>         
          <h1>Name:{props.Name}</h1>
          <h2>title:Best football player in the world</h2>
          <h2></h2>
       </div>
    
  
  )
}

export default App;
