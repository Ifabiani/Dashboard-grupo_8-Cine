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
        Title: gen[0],
        Length: values[0],
        
    },
    {
        Title: gen[1],
        Length: values[1],
        
    },
    {
        Title: gen[2],
        Length: values[2],
        
    },
    {
        Title: gen[3],
        Length: values[3],
        
    },
    {
        Title: gen[4],
        Length: values[4],
        
    },
    {
        Title: gen[5],
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
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Generos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Géneros</th>
                                <th>Cantidad de películas</th>
                                
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Géneros</th>
                                <th>Cantidad de películas</th>
                                
                            </tr>
                        </tfoot>
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