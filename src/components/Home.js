import React, { Component } from 'react';
import { BtnCar, Buscador, Formulario, ImgCard, TextContainer, Title, TopPage, NavContainer, ListaC,Item, LinkStyle, PriceProduct, Producto, TitleCContainer, CardImg, CardsContainer, Card, LensImg} from '../styles/HomeStyles';




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
          <LensImg src='https://res.cloudinary.com/dfp8qduho/image/upload/v1642971106/Vector_qdnfnt.png' />                  
          <Buscador type="text" name='busqueda'  placeholder= 'Sabor de guajalota, bebida o tamal' />          
        </Formulario>
      </TextContainer>

      <NavContainer>
        <ListaC>
          <Item><LinkStyle to="/guajolotes">Guajolotes</LinkStyle></Item>
          <Item><LinkStyle to="/bebidas">Bebidas</LinkStyle></Item>
          <Item><LinkStyle to="/tamales">Tamales</LinkStyle></Item>
        </ListaC>
      </NavContainer>    

      <CardsContainer>
    <Card>
      <CardImg src='https://i.ibb.co/ft24pXS/G-verde.png' alt='Guajolota-T-verde' />
      <TitleCContainer>
          <Producto>Té Verde</Producto>
          <PriceProduct>24.5 MXN</PriceProduct>
      </TitleCContainer>
    </Card>

    <Card>
    <CardImg src='https://i.ibb.co/ft24pXS/G-verde.png' alt='Guajolota-T-verde' />
    <TitleCContainer>
          <Producto>Té Verde</Producto>
          <PriceProduct>24.5 MXN</PriceProduct>
      </TitleCContainer>
    </Card>

    <Card>
    <CardImg src='https://i.ibb.co/ft24pXS/G-verde.png' alt='Guajolota-T-verde' />
    <TitleCContainer>
          <Producto>Té Verde</Producto>
          <PriceProduct>24.5 MXN</PriceProduct>
      </TitleCContainer>
    </Card>

    <Card>
    <CardImg src='https://i.ibb.co/ft24pXS/G-verde.png' alt='Guajolota-T-verde' />
    <TitleCContainer>
          <Producto>Té Verde</Producto>
          <PriceProduct>24.5 MXN</PriceProduct>
      </TitleCContainer>
    </Card>

    <Card>
    <CardImg src='https://i.ibb.co/ft24pXS/G-verde.png' alt='Guajolota-T-verde' />
    <TitleCContainer>
          <Producto>Té Verde</Producto>
          <PriceProduct>24.5 MXN</PriceProduct>
      </TitleCContainer>
    </Card>

  </CardsContainer>

      </div>
        
    )
  }
}
