import React, { Component } from 'react';
import { BtnCar, Buscador, Formulario, ImgCard, TextContainer, Title, TopPage,} from '../styles/HomeStyles';



export default class Navbar extends Component {
  render() {
    return(
        <div>

        <TopPage>
        <ImgCard src='https://i.ibb.co/9sqQqWm/Logotipo.png' alt='Guappjolotas' />

        <BtnCar src='https://res.cloudinary.com/dfp8qduho/image/upload/v1642960766/shopping-cart_z2phxe.png' alt='' />        
      </TopPage>

      <TextContainer>
        <Title>Nada como una buena Guajolota para empezar el día</Title>
        
        <Formulario>                    
          <Buscador type="text" name='busqueda'  placeholder= 'Sabor de guajalota, bebida o tamal' />
          {/* buscar la forma de añadir icono de busqueda */}
        </Formulario>
      </TextContainer>

      <div>
        <ul>
          <li>Guajolotes</li>
          <li>Bebidas</li>
          <li>Tamales</li>
        </ul>
      </div>

      
      </div>
        
    )
  }
}
