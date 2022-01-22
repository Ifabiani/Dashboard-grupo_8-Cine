import React from "react";
import {useState, useEffect} from "react"
import ChartRow from "./ChartRow.js";

function CountByGenres() {
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

  useEffect(() => {
    console.log('Se montó el componente');
    fetch('/api/productos')
    .then(response => response.json())
    .then(data => 
      
      {setTotalGeneros(data.countByCategory)
      }
    )
    .catch(error => {console.log(error);})
  },[])
  
  console.log(totalGeneros)
  let gen = Object.keys(totalGeneros)
  console.log(gen)
  let values = Object.values(totalGeneros)
  console.log(values)
  

  let tableRowsData = [
    {
        Title: generos[0]?.name,
        Length: values[0],
        
    },
    {
        Title: generos[1]?.name,
        Length: values[1],
        
    },
    {
        Title: generos[2]?.name,
        Length: values[2],
        
    },
    {
        Title: generos[3]?.name,
        Length: values[3],
        
    },
    {
        Title: generos[4]?.name,
        Length: values[4],
        
    },
    {
        Title: generos[5]?.name,
        Length: values[5],
        
    },
    
    
]
  
  
  /*useEffect(() =>{
    console.log('Se actualizó el componente')
  },[generos]);*/

  useEffect(() => {
    return () => console.log('Se desmontó el componente')
  },[])

  return (
    <div className="col-lg-6 mb-4 ">
      <div className="card shadow mb-4 " style={{width: 25 +'rem'}}>
        <div className="card-header py-3" style={{width: 24 +'rem'}}>
          <h5 className="m-0 font-weight-bold text-gray-800">
            Películas por género
          </h5>
        </div>
        <div className="card-body">
          <div className="row ancho " >

          <table className="table table-bordered " id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Géneros</th>
                                <th>Cantidad de películas</th>
                                
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
      
          
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountByGenres;