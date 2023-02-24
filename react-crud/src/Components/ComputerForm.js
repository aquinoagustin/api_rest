import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getComputerServer, registerComputer,updateComputer } from "./ComputerServer";
const ComputerForm = () => {
    const navigate = useNavigate()
    const params = useParams();
    const handleInputChange=(e)=>{
        setComputer({...computer,[e.target.name]:e.target.value})
    }
    const initialState={id:0,name:"",id_computer:"",id_monitor:"",anydesk:"",swi:0,puert:0,ip:""}
    const [computer,setComputer]=useState(initialState);
  
  const handleSubmit= async (e)=>{
    e.preventDefault();
    try{

        let res;
        if(!params.id){
          res = await registerComputer(computer);
          const data = await res.json();
          if(data.message==="Success"){
              setComputer(initialState);
          }
        }else{
          await updateComputer(params.id,computer)
        }
        navigate("/")
    }
    catch(error){
        console.log(error);
    }
  }
  
  const getComputer = async (computerId) => {
    try {
      const res = await getComputerServer(computerId);
      const data = await res.json();
      const { name, id_computer, id_monitor,anydesk,swi,puert,ip } = data.Computers;
      setComputer({ name, id_computer, id_monitor, anydesk,swi,puert,ip});
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getComputer(params.id);
    }
    // eslint-disable-next-line
  }, []);


    return (
    <div className="container">

      <div className="row">
        <div className="col">
          {
            params ? <h1>aa</h1>  : <h1>dd</h1>
          }
          <h1>Create Product</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input required type="text" onChange={handleInputChange} className="form-control" value={computer.name} name="name" maxLength="20"/>
            </div>
            <div className="mb-3">
              <label className="form-label">id_Computer</label>
              <input required type="text" onChange={handleInputChange} className="form-control" value={computer.id_computer} name="id_computer" maxLength="20"/>
            </div>
            <div className="mb-3">
              <label className="form-label">id_Monitor</label>
              <input required type="text" onChange={handleInputChange} className="form-control" value={computer.id_monitor} name="id_monitor" maxLength="20"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Anydesk</label>
              <input required type="text" onChange={handleInputChange} className="form-control" value={computer.anydesk} name="anydesk" maxLength="20"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Switch</label>
              <input required type="text" onChange={handleInputChange} className="form-control" value={computer.swi} name="swi"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Puert</label>
              <input required type="text" onChange={handleInputChange} className="form-control" value={computer.puert} name="puert"/>
            </div>
            <div className="mb-3">
              <label className="form-label">IP</label>
              <input required type="text" onChange={handleInputChange} className="form-control" value={computer.ip} name="ip" maxLength="20"/>
            </div>
            
              {
                params.id ? (
                  <button type="submit" className="btn btn-success">Update</button>
                ) : (
                  <button type="submit" className="btn btn-primary">Register</button>
                )
              }
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComputerForm;
