import React from "react";
import {useState, useEffect} from "react"

function ProductsInDb() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    console.log('Se montó el componente');
    fetch('/api/productos')
    .then(response => response.json())
    .then(data => 
      
      {setMovies(data.products)
      }
    )
    .catch(error => {console.log(error);})
  },[])
  
  console.log(movies)
  
  useEffect(() =>{
    console.log('Se actualizó el componente')
  },[movies]);

  useEffect(() => {
    return () => console.log('Se desmontó el componente')
  },[])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Películas
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

          <ul> { movies.map( (producto, i) => <li className='li' key={i + producto}><div > <img className='imagen' src={producto.image}/></div>
           <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                
                <div className="card-body" >{producto.name}</div>
              </div>
            </div></li> ) } </ul>
          
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsInDb;
