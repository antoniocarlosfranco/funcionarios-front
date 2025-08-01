import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

  let navigate=useNavigate();

  const{id} = useParams()

  const [user, setUser]=useState({
    nome:"",
    username:"",
    email:"",
    cargo:"",
    endereco:"",
    cidade:"",
    horario_de_trabalho:""
  })

  const{nome,username,email,cargo,endereco,cidade,horario_de_trabalho}=user

  const onInputChange=(e)=>{

    setUser({...user,[e.target.name]:e.target.value});

  };

  useEffect(()=>{
    loadUser();
  }, []);

  const onSubmit=async (e) =>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`,user)
    navigate("/")
  };

  const loadUser = async()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data)
  }

  return <div className='container'>
  <div className='row'>
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
        <h2 className='text-center m-4'>Editar funcionário</h2>

        <form onSubmit={(e)=>onSubmit(e)}>
        <div className='mb-3>'>
            <label htmlFor='Nome' className='form-label'>
               Nome 
            </label>
            <input 
            type={"text"} 
            className='form-control' 
            placeholder='Digite seu nome' 
            name='nome'
            value={nome}
            onChange={(e)=>onInputChange(e)}
            />
        </div>
        <div className='mb-3>'>
            <label htmlFor='Username' className='form-label'>
               Username 
            </label>
            <input 
            type={"text"} 
            className='form-control' 
            placeholder='Digite seu username' 
            name='username'
            value={username}
            onChange={(e)=>onInputChange(e)}
            />
        </div>
        <div className='mb-3>'>
            <label htmlFor='Email' className='form-label'>
               Email 
            </label>
            <input 
            type={"text"} 
            className='form-control' 
            placeholder='Digite seu e-mail' 
            name='email'
            value={email}
            onChange={(e)=>onInputChange(e)}
            />
        </div>
        <div className='mb=3>'>
            <label htmlFor='Cargo' className='form-label'>
               Cargo/profissão
            </label>
            <input 
            type={"text"} 
            className='form-control' 
            placeholder='Digite seu cargo/profissão' 
            name='cargo'
            value={cargo}
            onChange={(e)=>onInputChange(e)}
            />
        </div>
        <div className='mb-3>'>
            <label htmlFor='Endereco' className='form-label'>
               Endereço 
            </label>
            <input 
            type={"text"} 
            className='form-control' 
            placeholder='Digite seu endereço' 
            name='endereco'
            value={endereco}
            onChange={(e)=>onInputChange(e)}
            />
        </div>
        <div className='mb-3>'>
            <label htmlFor='Cidade' className='form-label'>
               Cidade 
            </label>
            <input 
            type={"text"} 
            className='form-control' 
            placeholder='Digite sua cidade' 
            name='cidade'
            value={cidade}
            onChange={(e)=>onInputChange(e)}
            />
        </div>
        <div className='mb-3'>
  <label htmlFor='Horario_de_trabalho' className='form-label'>
    Horário de trabalho
  </label>
  <input 
    type='text' 
    className='form-control' 
    placeholder='Digite seu horário de trabalho' 
    name='horario_de_trabalho'
    value={horario_de_trabalho}
    onChange={(e)=>onInputChange(e)}
  />
</div>

<button type='submit' className='btn btn-outline-primary'>
  Enviar
</button>

<Link type='button' className='btn btn-outline-danger mx-2' to="/">
  Cancelar
</Link>
</form>
   
    </div>
   </div>

</div>;

}
