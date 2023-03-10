import React, { useEffect, useState } from "react";

import ComputerItem from "./ComputerItem";
import { listComputers } from "./ComputerServer";

const ComputerList = () => {
  const [computer, setComputer] = useState([]);
  const [tablaComputer, setTablaComputer] = useState([]);
  const [search, setSearch] = useState([]);
  const ListListComputers = async () => {
    try {
      const res = await listComputers();
      const data = await res.json();
      setComputer(data.Computers);
      setTablaComputer(data.Computers);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    // eslint-disable-next-line
    var resultadosBusqueda = tablaComputer.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) 
          ||elemento.id_computer
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
          ||elemento.id_monitor
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
          ||elemento.ip
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });

    setComputer(resultadosBusqueda);
  };
  useEffect(() => {
    ListListComputers();
  }, []);
  return (
    <div>
      <div className="containerInput">
        <input
          value={search}
          onChange={handleChange}
          className="form-control inputSearch"
          placeholder="..."
        />
        <button className="btn btn-success">Search</button>
      </div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">id_Computer</th>
            <th scope="col">id_Monitor</th>
            <th scope="col">Anydesk</th>
            <th scope="col">Switch</th>
            <th scope="col">Puert</th>
            <th scope="col">IP</th>
            <th scope="col">#</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        {
          computer ? (

            computer.map((element) => {
              return (
                <ComputerItem
                  key={element.id}
                  computer={element}
                  ListListComputers={ListListComputers}
                />
              );
            })

          ) : null

        }
          
      </table>
    </div>
  );
};

export default ComputerList;
