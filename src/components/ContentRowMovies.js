import React from 'react';
import SmallCard from './SmallCard';
import {useState, useEffect} from 'react'



function ContentRowMovies(){
/*  Cada set de datos es un objeto literal */
const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    console.log('Se montó el componente');
    fetch('/api/productos')
    .then(response => response.json())
    .then(data => 
      
      {setMovies(data.count)
      }
    )
    .catch(error => {console.log(error);})
  },[])

  const [generos, setGeneros] = useState([]);
  
  
  useEffect(() => {
    console.log('Se montó el componente');
    fetch('/api/productos/generos')
    .then(response => response.json())
    .then(data => 
      
      {setGeneros(data)
      }
    )
    .catch(error => {console.log(error);})
  },[])

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    
    fetch('/api/usuarios')
    .then(response => response.json())
    .then(data => 
      
      {setUsers(data.count)
      }
    )
    .catch(error => {console.log(error);})
  },[])



/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Películas en la Base de Datos',
    color: 'primary', 
    cuantity: movies,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:'Total de géneros', 
    color:'success', 
    cuantity: generos.length,
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Usuarios en la Base de Datos' ,
    color:'warning',
    cuantity:users,
    icon:'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

    return (
    
        <div className=" row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;