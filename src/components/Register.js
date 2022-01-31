import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { endPoint } from '../helpers/Url';
import { ButtonLogin, Div, Form, H2, Img, Input, Linka } from '../styles/LoginStyle';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Register = () => {
    const MySwal = withReactContent(Swal)
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleChanged = (e) => {
        setUser({
        ...user,
        [e.target.name]: e.target.value,
        });
        console.log(user);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
    };

    const postData = () => {
        axios.post(endPoint+"users",user)
        .then(response => 
            MySwal.fire({
                title: <strong>Registro Exitoso</strong>,
                html: <i>Continuar</i>,
                icon: 'success',
                width: "80%"
                })
            )
            .then(response =>  
                navigate('/login',{
                    replace: true
                }))     
        .catch(error => console.log(error))
        
    }
  return <div>
      <Form id="login" onSubmit={handleSubmit}>
        <Link to="/">
          <Img src="https://i.ibb.co/9sqQqWm/Logotipo.png" alt="login"></Img>
        </Link>
        <H2>Registrate</H2>
        <Div>
          <Input
            id="inputEmail"
            placeholder="Ingrese su nombre completo"
            name="name"
            type="text"
            onChange={handleChanged} required
          />
        </Div>
        
        <Div>
          <Input
            id="inputEmail"
            placeholder="Ingrese su correo electronico"
            name="email"
            type="email"
            onChange={handleChanged} required
          />
        </Div>
        <Div>
          <Input
            id="inputPassword"
            placeholder="Ingrese su contraseña"
            type="password"
            name="password"
            onChange={handleChanged} required
          />
        </Div>
        <div>            
            <p>¿Ya tienes cuenta?</p>
            <Linka to="login">Inicia Sesion</Linka>
        </div>
        <Div>
          <ButtonLogin>
            Registrarse
          </ButtonLogin>
        </Div>
      </Form>
  </div>;
};

export default Register;
