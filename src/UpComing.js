import React,{useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Popular.css'


const UpComing = () => {
 const navigate=useNavigate();
    const [pop,setPop]=useState([])

    useEffect(() => {
        fetch(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
        )
          .then((res) => res.json())
          .then((data) => setPop(data.results));
      }, []);

  //console.log(  "pop",pop)

  return (

    <div className="popular-container">
 <div className="pop-header">
    <button onClick={()=>navigate(-1)} > Back to Page</button>
    <h1>UpComing Movies</h1>
 </div>

    <div className='pop_movie'>
      
{
    pop.map((item,i)=>
    <Link  to={`/details/${item.id}`} >
   <div className="pop_container" key={i}>
 <img 
    src={`https://image.tmdb.org/t/p/original${
       item.backdrop_path
    }`} alt="pic"
  />

   </div>
   </Link>
    )
}
</div>
    </div>
  )
}

export default UpComing
