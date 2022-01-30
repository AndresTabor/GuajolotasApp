import React, { useEffect, useState } from 'react';
import { BtnCar, Buscador, Formulario, ImgCard, TextContainer, Title, TopPage, NavContainer, ListaC, Item, LinkStyle, PriceProduct, Producto, TitleCContainer, CardImg, CardsContainer, Card, LensImg } from '../styles/HomeStyles';
import { url } from '../helpers/Url'
import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';

export const Home = () => {

  const [producto, setProducto] = useState([]);
  const [buscador, setBuscador]= useState('')

  const getData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    setProducto(data);
  }

  useEffect(() => {
    getData()
  }, []);
  

  const filtrar = value => {
  setBuscador(value);
  console.log(buscador)
    if (buscador.length >= 2){
      let productosTemporales = producto.filter(
        item => {
          return item.name.toLowerCase().indexOf(buscador.toLowerCase())  > -1
        }
      )
      setProducto(productosTemporales)
    }else{
       getData()
    }
  }

  return (
    <div>

      <TopPage>
        <ImgCard src='https://i.ibb.co/9sqQqWm/Logotipo.png' alt='Guappjolotas' />

        <BtnCar src='https://res.cloudinary.com/dfp8qduho/image/upload/v1642960766/shopping-cart_z2phxe.png' alt='' />
      </TopPage>

      <TextContainer>
        <Title>Nada como una buena Guajolota para empezar el día</Title>

        <Formulario>
          <LensImg src='https://res.cloudinary.com/dfp8qduho/image/upload/v1642971106/Vector_qdnfnt.png' />
          <Buscador value={buscador} onChange={evento => filtrar(evento.target.value)} type="text" name='busqueda' placeholder='Sabor de guajalota, bebida o tamal' />
          
        </Formulario>
      </TextContainer>

      <NavContainer>
        <ListaC>
          <Item><LinkStyle to="/guajolotes">Guajolotes</LinkStyle></Item>
          <Item><LinkStyle to="/bebidas">Bebidas</LinkStyle></Item>
          <Item><LinkStyle to="/tamales">Tamales</LinkStyle></Item>
        </ListaC>
      </NavContainer>

      <CardsContainer>{
        producto.map(Item => (
          <Card>
            <CardImg src={Item.image} alt='' />
            <TitleCContainer id={Item.id}>
              <Producto>{Item.name}</Producto>
              <PriceProduct>{Item.price} MXN</PriceProduct>
            </TitleCContainer>
          </Card>
        ))

      }


      </CardsContainer>

    </div>

  )
}
