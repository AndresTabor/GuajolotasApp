import React, { useEffect, useState } from 'react';
import { BtnCar, Buscador, Formulario, ImgCard, TextContainer, Title, TopPage, NavContainer, ListaC,Item, LinkStyle, PriceProduct, Producto, TitleCContainer, CardImg, CardsContainer, Card, LensImg} from '../styles/HomeStyles';
import { Link } from 'react-router-dom';

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
        <div>
          <Link to="/login">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
          </Link>
          <Link to="cart">
            <BtnCar src='https://res.cloudinary.com/dfp8qduho/image/upload/v1642960766/shopping-cart_z2phxe.png' alt='carrito' />          
          </Link>
        </div>
      </TopPage>

      <TextContainer>
        <Title>Nada como una Guajolota para empezar el día</Title>
        
        <Formulario>  
          <LensImg src='https://res.cloudinary.com/dfp8qduho/image/upload/v1642971106/Vector_qdnfnt.png' />                  
          <Buscador type="text" name='busqueda'  placeholder= 'Sabor de guajalota, bebida o tamal' />          
        </Formulario>
      </TextContainer>

      <NavContainer>
        <ListaC>
          <Item><LinkStyle onClick={() => getData (1)} to="/">Guajolotes</LinkStyle></Item>
          <Item><LinkStyle onClick={() => getData (3)} to="/">Bebidas</LinkStyle></Item>
          <Item><LinkStyle onClick={() => getData (2)} to="/">Tamales</LinkStyle></Item>
        </ListaC>
      </NavContainer>    

    <CardsContainer>
      {
      producto.map(Item =>(
        <Link to={"details/"+Item.id+"/"+Item.categoryId} key={Item.id}>
          <Card>
              <CardImg src={Item.image} alt={Item.name} />
              <TitleCContainer id={Item.categoryId}>
                  <Producto>{Item.name}</Producto>
                  <PriceProduct>${Item.price} MXN</PriceProduct>
              </TitleCContainer>
          </Card>
        </Link>
      ))

      } 
           
    </CardsContainer>

  </div>
        
    )
 }
