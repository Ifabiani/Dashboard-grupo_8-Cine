import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';

import {useState, useEffect} from 'react'

function LastMovieInDb(){
    const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    console.log('Se montó el componente');
    fetch('/api/productos')
    .then(response => response.json())
    .then(data => {
      
      setMovies(data.products)
      
      
    })
    .catch(error => {console.log(error);})
  },[])
  
  /*let lastMovie = movies.count - 1;*/
  
  

  useEffect(() =>{
    console.log('Se actualizó el componente')
  },[movies]);

  useEffect(() => {
    return () => console.log('Se desmontó el componente')
  },[])

  
    console.log('movies', movies)
    let u = movies.length -1
    let movie = movies[u]
    let imagen = movie?.image
    
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Última película en la base de datos</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagen} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>sinopsis</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle de película</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
