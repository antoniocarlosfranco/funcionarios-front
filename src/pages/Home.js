import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [users, setUsers] = useState([]);

    const {id}=useParams()

    useEffect(()=>{
        //console.log("Codigo com Carlos Franco");
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users");
        setUsers(result.data);
        //console.log(result.data);
    }

    //delete excluir
    const deleteUser=async (id)=>{
       await axios.delete(`http://localhost:8080/user/${id}`)
       loadUsers()
    }

  return (
    <div>
        <div className='py-4'>
            <table className="table table-success table-striped border shadow">
  <thead>
    <tr className='table-active table-dark'>
      <th>#</th>
      <th>Nome</th>
      <th>Username</th>
      <th>Email</th>
      <th>Cargo</th>
      {/* <th>Endereço</th> */}
      {/* <th>Cidade</th> */}
      {/* <th>Horário</th> */}
      <th>Ação</th>
    </tr>
  </thead>
  <tbody>

    {
      users.map((user,index)=>(
        <tr>
          <th scope="row" key={index}>{index+1}</th>
          <td>{user.nome}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.cargo}</td>
          {/* <td>{user.endereco}</td> */}
          {/* <td>{user.cidade}</td> */}
          {/* <td>{user.horario_de_trabalho}</td> */}
          <td>
            <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>Ver</Link>  
            <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>Editar</Link>
            <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)}>Excluir</button>
          </td>
        </tr> 
      ))
    }
    
  </tbody>
</table> 
        </div>
    </div>
  )
}
