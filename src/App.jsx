
import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './componets/Navbar'
import axios from 'axios';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './componets/Home'
import Saved from './componets/Saved';
function App() {
  const [images,setImage] = useState([]);
  const [search,setSearch] = useState("nature");
  const [loader,setLoader] = useState(true);
  const [saved,setSaved] = useState([]);

  const API_KEY = "KfC86VeLo9kpgOPEzzzdTfKc6r0tXktfhBZmqWai5qO5vVgZ5nkXrr6N";
  useEffect( ()=> {
  const fetchimage = async () => {
  const res = await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=80`,
    {
      headers:{
        Authorization:API_KEY
      }
    }
  );
  setImage(res.data.photos)
  setLoader(false)
  };
  const data = JSON.parse(localStorage.getItem("images"))
  if(data){
    setSaved(data)
  }
  fetchimage()
  },[search]) 
  
  useEffect(() => {
    if(saved.length != 0){
      const json = JSON.stringify(saved)
      localStorage.setItem("images",json)
    }
  },[saved])
  return (
    <>
    <Router>
    <Navbar setsearch={setSearch}/>
    <Routes>
      <Route path='/' element={<Home images={images} loader={loader} setSaved={setSaved} saved={saved}/>}></Route>
      <Route path='/saved' element={<Saved saved={saved} loader={loader}/>}></Route>
    </Routes>
    </Router>
    </>
  )
}

export default App
