import React from "react";
import {useState, useEffect} from "react"

function UsersInDb() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    console.log('Se montó el componente');
    fetch('/api/usuarios')
    .then(response => response.json())
    .then(data => 
      
      {setUsers(data.users)
      }
    )
    .catch(error => {console.log(error);})
  },[])
  
  console.log(users)
  
  useEffect(() =>{
    console.log('Se actualizó el componente')
  },[users]);

  useEffect(() => {
    return () => console.log('Se desmontó el componente')
  },[])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Usuarios
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

          <ul> { users.map( (producto, i) => <li  key={i + producto} className="li">
           <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                
                <div className="card-body" >{producto.name} {producto.last_name}</div>
              </div>
            </div></li> ) } </ul>
          
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersInDb;
