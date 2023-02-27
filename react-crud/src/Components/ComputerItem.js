import React from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteComputer } from './ComputerServer'
const ComputerItem = ({computer,ListListComputers}) => {



    const Swal = require('sweetalert2')
    const navigate = useNavigate();
    const handleDelete = async (computerId) => {
        await deleteComputer(computerId);
        ListListComputers();
        
    }
    const confirmDelete = (computer) =>{
        Swal.fire({
            title: "id: " + computer.id + " Name: " + computer.name ,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
          .then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success',
                handleDelete(computer.id)
              )  
            }
          })
    }
    return(
    <tbody>
        <tr className='tr'>
            <th scope="row">{computer.id}</th>
            <td>{computer.name}</td>
            <td>{computer.id_computer}</td>
            <td>{computer.id_monitor}</td>
            <td>{computer.anydesk}</td>
            <td>{computer.swi}</td>
            <td>{computer.puert}</td>
            <td>{computer.ip}</td>
            <td><button onClick={()=> navigate(`/updateComputer/${computer.id}`)} className='btn btn-success'>Update</button></td>
            <td><button onClick={()=> computer.id && confirmDelete(computer)} className='btn btn-danger'>Delete</button></td>
        </tr>  
    </tbody>
      
        
  
    )
}

export default ComputerItem;