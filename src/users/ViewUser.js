import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

  const [user,setUser]=useState({
    name:"",
    username:"",
    email:"",
    cargo:"",
    endereco:"",
    cidade:"",
    horario_de_trabalho:""
  })

  const {id}=useParams();

  useEffect(()=>{
    loadUser();
  }, []);

  const loadUser=async ()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data);
  }

  return (
    <div className='container'>
    <div className='row'>
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
        <h2 className='text-center m-4'>Detalhes usuário</h2>

        <div className='card'>
          <div className='card-header'>
            Detalhes do usuário id : {user.id}
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <b>Nome:</b>
                {user.nome}
              </li>
               <li className='list-group-item'>
                <b>Username:</b>
                {user.username}
              </li>
               <li className='list-group-item'>
                <b>email:</b>
                {user.email}
              </li>
               <li className='list-group-item'>
                <b>cargo:</b>
                {user.cargo}
              </li>
               <li className='list-group-item'>
                <b>Endereço:</b>
                {user.endereco}
              </li>
               <li className='list-group-item'>
                <b>Cidade:</b>
                {user.cidade}
              </li>
               <li className='list-group-item'>
                <b>Horário de Trabalho:</b>
                {user.horario_de_trabalho}
              </li>
            </ul>
          </div>
        </div>
        <Link className='btn btn-primary my-2' to={"/"}>
        Voltar para Início
        </Link>
    </div>
    </div>
    </div>
  )
}
