import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { endPoint } from "../helpers/Url";
import { ButtonLogin, Div, Form, H2, Img, Input, Linka } from "../styles/LoginStyle";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Login = ({ setLogged, cambioUser }) => {
    const MySwal = withReactContent(Swal)
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
        axios.get(endPoint +'users')
        .then((response) => 
            setValidacion(response.data)
        )
        .catch((error) => console.log(error));
        
    };

    const validar = () => {
        //console.log(user.email);
        const verificar = validacion.find(users => users.email === user.email)

        if(verificar){
            if (verificar.password === user.password) {
                
                MySwal.fire({
                title: <strong>¡Bienvenido!</strong>,
                html: <i>Continuar</i>,
                icon: 'success',
                width: "80%"
                })
                setLogged(true);
                cambioUser(verificar);
                navigate('/', { replace: true });
            }else {
                MySwal.fire({
                    title: <strong>Contraseña Incorrecta</strong>,
                    html: <i>Intentar de nuevo</i>,
                    icon: 'error',
                    width: "80%"
                })
            }
        }else{
            MySwal.fire({
                title: <strong>Usuario no registrado</strong>,
                html: <i>Intentar de nuevo</i>,
                icon: 'error',
                width: "80%"
            })
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
        <Link to="/">
          <Img src="https://i.ibb.co/9sqQqWm/Logotipo.png" alt="login"></Img>
        </Link>
        <H2>Iniciar Sesion</H2>
        
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
            <p>¿Aun no tienes cuenta?</p>
            <Linka to="/register">Inscribirse</Linka>
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

