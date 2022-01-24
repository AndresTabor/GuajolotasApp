import React, { Component } from 'react';
import { Card, BtnCar, Buscador, Formulario, ImgCard, TextContainer, Title, TopPage, NavContainer, ListaC,Item, CardsContainer, CardImg, TitleCContainer, Producto} from '../styles/HomeStyles';
import {Link} from 'react-router-dom'



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

      <NavContainer>
        <ListaC>
          <Item><Link to="/guajolotes">Guajolotes</Link></Item>
          <Item><Link to="/guajolotes">Bebidas</Link></Item>
          <Item><Link to="/guajolotes">Tamales</Link></Item>
        </ListaC>
      </NavContainer>

      <CardsContainer>
        <Card>
          <CardImg src='https://i.ibb.co/ft24pXS/G-verde.png' alt='Guajolota-T-verde' />
          <TitleCContainer>
              <Producto>Té Verde</Producto>
              <h4>$24.5</h4>
          </TitleCContainer>
        </Card>

        <Card>
        <CardImg src='https://i.ibb.co/ft24pXS/G-verde.png' alt='Guajolota-T-verde' />
        <TitleCContainer>
              <Producto>Té Verde</Producto>
              <h4>$24.5</h4>
          </TitleCContainer>
        </Card>

        <Card>
        <CardImg src='https://i.ibb.co/ft24pXS/G-verde.png' alt='Guajolota-T-verde' />
        <TitleCContainer>
              <Producto>Té Verde</Producto>
              <h4>$24.5</h4>
          </TitleCContainer>
        </Card>

        <Card>
        <CardImg src='https://i.ibb.co/ft24pXS/G-verde.png' alt='Guajolota-T-verde' />
        <TitleCContainer>
              <Producto>Té Verde</Producto>
              <h4>$24.5</h4>
          </TitleCContainer>
        </Card>

        <Card>
        <CardImg src='https://i.ibb.co/ft24pXS/G-verde.png' alt='Guajolota-T-verde' />
        <TitleCContainer>
              <Producto>Té Verde</Producto>
              <h4>$24.5</h4>
          </TitleCContainer>
        </Card>

      </CardsContainer>

      
      </div>
        
    )
  }
}
