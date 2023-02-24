const API_URL ="http://localhost:8000/api/computers/"

export const listComputers= async()=>{
    return await fetch(API_URL);
};

export const getComputerServer = async(computerId) =>{
    return await fetch(`${API_URL}${computerId}`)
}


export const registerComputer = async (newComputer)=>{
    return await fetch(API_URL,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "name":String(newComputer.name).trim(),
            "id_computer":String(newComputer.id_computer).trim(),
            "id_monitor":String(newComputer.id_monitor).trim(),
            "anydesk":String(newComputer.anydesk).trim(),
            "swi":parseInt(newComputer.swi),
            "puert":parseInt(newComputer.puert),
            "ip":String(newComputer.ip).trim()
        })
    });
}

export const updateComputer = async (computerId,updateComputer)=>{
    return await fetch(`${API_URL}${computerId}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "name":String(updateComputer.name).trim(),
            "id_computer":String(updateComputer.id_computer).trim(),
            "id_monitor":String(updateComputer.id_monitor).trim(),
            "anydesk":String(updateComputer.anydesk).trim(),
            "swi":parseInt(updateComputer.swi),
            "puert":parseInt(updateComputer.puert),
            "ip":String(updateComputer.ip).trim()
        })
    });
}


export const deleteComputer = async (computerId) =>{
    return await fetch(`${API_URL}${computerId}`,{
        method:'DELETE'
    })
}