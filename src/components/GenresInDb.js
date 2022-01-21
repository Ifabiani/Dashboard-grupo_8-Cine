import React from "react";
import {useState, useEffect} from "react"

function GenresInDb() {
  const [generos, setGeneros] = useState([]);
  const [totalGeneros, setTotalGeneros] = useState([]);
  
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

  
  
  
  
  /*useEffect(() =>{
    console.log('Se actualizó el componente')
  },[generos]);*/

  useEffect(() => {
    return () => console.log('Se desmontó el componente')
  },[])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Generos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

          <ul> { generos.map( (producto,i) => <li className=" li" key={i + producto}> <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body" >{producto.name}</div>
              </div>
            </div></li> )}</ul>

            
          
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
