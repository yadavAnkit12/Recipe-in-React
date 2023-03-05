
import './App.css';
import { useEffect, useState } from 'react';
import Recipe from './components/Recipe';


function App() {
  const APP_ID = 'dc34792b';
const APP_KEY = '3eab1a651f78f58e8b394f905f3efa21'

const [search,setSearch]=useState("")
const [query,setQuery]=useState("sandwich")
const [dishes,setDishes]=useState([])

useEffect(()=>{
  async function getData(){
  const res=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const result=await res.json()
  setDishes(result.hits)
  
  }
  getData()
},[query])

const searchHandler=(e)=>{
  e.preventDefault()
  console.log(search)
setQuery(search)
setSearch("")
}

return <div>
 
<form onSubmit={searchHandler} className="search-form">
      <input className='search-bar' type='text' onChange={e=>{setSearch(e.target.value)}}/>
     <button className='search-button' onClick={searchHandler}>search</button> 

     </form>
   <div>
    {
      dishes.map((dish,idx)=> <Recipe recipelist={dish} key={idx}/>)
    }
   </div>
</div>
}
export default App;
