import React, { useEffect, useState } from 'react';
import { BtnCar, Buscador, Formulario, ImgCard, TextContainer, Title, TopPage, NavContainer, ListaC,Item, LinkStyle, PriceProduct, Producto, TitleCContainer, CardImg, CardsContainer, Card, LensImg} from '../styles/HomeStyles';
import {url} from '../helpers/Url'

export const Home= () =>  {

  
  const [producto, setProducto] = useState([]);


    const getData = async (category) =>{
      const res = await fetch(`https://guajolotasapp.herokuapp.com/category/${category}/products/`)
      const data= await res.json()
      setProducto(data);
    }

   
    useEffect(() => {
    getData(1)
    
  }, []);
 

     
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
          <Item><LinkStyle onClick={() => getData (1)} to="/">Guajolotes</LinkStyle></Item>
          <Item><LinkStyle onClick={() => getData (3)} to='/'>Bebidas</LinkStyle></Item>
          <Item><LinkStyle onClick={() => getData (2)} to="/" >Tamales</LinkStyle></Item>
        </ListaC>
      </NavContainer>    

    <CardsContainer>{
      producto.map(Item =>(
        <Card key={Item.id}>
          <CardImg src={Item.image} alt='' />
          <TitleCContainer id={Item.categoryId}>
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
