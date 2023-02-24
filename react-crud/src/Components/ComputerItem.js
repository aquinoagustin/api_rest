import React from 'react'
import { useNavigate } from 'react-router-dom'

import { deleteComputer } from './ComputerServer'
const ComputerItem = ({computer,ListListComputers}) => {
    const navigate = useNavigate();
    const handleDelete = async (computerId) => {
        await deleteComputer(computerId);
        ListListComputers();
    }
    return(
    <tbody>
        <tr>
            <th scope="row">{computer.id}</th>
            <td>{computer.name}</td>
            <td>{computer.id_computer}</td>
            <td>{computer.id_monitor}</td>
            <td>{computer.anydesk}</td>
            <td>{computer.swi}</td>
            <td>{computer.puert}</td>
            <td>{computer.ip}</td>
            <td><button onClick={()=> navigate(`/updateComputer/${computer.id}`)} className='btn btn-success'>Update</button></td>
            <td><button onClick={()=> computer.id && handleDelete(computer.id)} className='btn btn-danger'>Delete</button></td>
        </tr>  
    </tbody>
      
        
  
    )
}

export default ComputerItem;