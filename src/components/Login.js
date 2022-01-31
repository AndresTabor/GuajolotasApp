import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { endPoint } from "../helpers/Url";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [ validacion, setValidacion] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    postData()
  }, []);
  

  const postData = () => {
    axios.get(endPoint +'user')
      .then((response) => 
        setValidacion(response.data)
      )
      .catch((error) => console.log(error));
    
  };

  const validar = () => {
    //console.log(user.email);
    const verificar = validacion.find(users => users.email === user.email)

    if(verificar){
      verificar.password === user.password ?  navigate('/home', { replace: true }): alert("Contraseña Incorrecta")
    }else{
      alert("Usuario no registrado");
    }
  }

  const handleChanged = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Form id="login" onSubmit={handleSubmit}>
        <Link to="/Login">
          <Img
            src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1643397049/Color_Purple_Container_Yes_kbvlu6.png"
          alt="login"></Img>
        </Link>
        <H2>Iniciar de Sesion</H2>

        <ButtonGoogle>Continuar con Google</ButtonGoogle>
        <Hr></Hr>
        <Div>
          <Input
            id="inputEmail"
            placeholder="Ingrese su correo electronico"
            name="email"
            type="email"
            onChange={handleChanged}
          />
        </Div>
        <Div>
          <Input
            id="inputPassword"
            placeholder="Ingrese su contraseña"
            type="password"
            name="password"
            onChange={handleChanged}
          />
        </Div>
        <div>
            <Linka>¿Se te olvido tu contraseña?</Linka>
            <p>¿Aun no tienes cuenta?</p>
            <Linka>Inscribirse</Linka>
        </div>
        <Div>
          <ButtonLogin onClick={() => validar()} id="entryLogin">
            Login
          </ButtonLogin>
        </Div>
      </Form>
    </div>
  );
};

const Form = styled.form`
  background-color: black;
  text-align: center;
`;
const H2 = styled.h2`
  color: white;
  font-family: arial;
  padding: 20px;
  font-size: 30px;
`;
const ButtonGoogle = styled.button`
  background: #ef4565;
  border-radius: 5px;
  color: white;
  font-family: arial;
  padding: 15px 50px 15px 50px;
  margin-bottom: 20px;
  cursor: pointer;
`;
const Div = styled.div`
  color: white;
  padding: 10px;
`;
const Input = styled.input`
  padding: 10px 50px;
`;

const ButtonLogin = styled.button`
  background: #6b47dc;
  color: white;
  padding: 5px 20px 5px 20px;
  margin-top: 20px;
  border-radius: 10px;
  cursor: pointer;
`;
const Hr = styled.hr
`
 
  margin-bottom: 10px;
`;
 const Img = styled.img
 `
 width:100px;
 padding-top: 150px;
 `

 const Linka = styled.a

 `
 color:#2CB67D;
 font-family:Inter;
 `