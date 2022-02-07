import React, { useEffect, useState } from 'react';
import { BtnCar, Buscador, Formulario, ImgCard, TextContainer, Title, TopPage, NavContainer, ListaC,Item, LinkStyle, PriceProduct, Producto, TitleCContainer, CardImg, CardsContainer, Card, LensImg} from '../styles/HomeStyles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import querystring from 'query-string';
import { useForm } from '../hook/useForm';
import { getProductsByName } from '../helpers/getProductsByName';
import { endPoint } from '../helpers/Url';
export const Home= () =>  {
  const [producto, setProducto] = useState([]);
  const location = useLocation();

    const navigate = useNavigate();

    
    const {q = ''} = querystring.parse(location.search);


    const [values, handleInputChange] = useForm({
        
        searchText: q
    })

    const { searchText } = values;

    
    const productsFiltered = getProductsByName(searchText, producto);


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }
    
    const getData = async (category, endPoint) =>{
      if (searchText === '') {
        const res = await fetch(`https://guajolotasapp.herokuapp.com/category/${category}/products/`)
        const data= await res.json()
        setProducto(data);
      }else{
        const res = await fetch(endPoint+'products')
        const data= await res.json()
        setProducto(data);
      }
    }

   
    useEffect(() => {
    getData( 1, endPoint )
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);
     
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
        
        <Formulario onSubmit={handleSearch}>  
          <LensImg src='https://res.cloudinary.com/dfp8qduho/image/upload/v1642971106/Vector_qdnfnt.png' />                  
          <Buscador type="text" 
          name='searchText'  
          value={searchText}
          placeholder= 'Sabor de guajalota, bebida o tamal'
          onChange={handleInputChange}/>          
        </Formulario>
      </TextContainer>

      <NavContainer>
        <ListaC className='lista'>
          <Item><LinkStyle onClick={() => getData (1, endPoint)} to="/">Guajolotes</LinkStyle></Item>
          <Item><LinkStyle onClick={() => getData (3, endPoint)} to="/">Bebidas</LinkStyle></Item>
          <Item><LinkStyle onClick={() => getData (2, endPoint)} to="/">Tamales</LinkStyle></Item>
        </ListaC>
      </NavContainer>    

    <CardsContainer>
      {
      searchText === ''?
      producto.map((Item, index) =>(
        <Link to={"details/"+index+"/"+Item.categoryId} key={Item.id}>
          <Card>
              <CardImg src={Item.image} alt={Item.name} />
              <TitleCContainer id={Item.categoryId}>
                  <Producto>{Item.name}</Producto>
                  <PriceProduct>${Item.price} MXN</PriceProduct>
              </TitleCContainer>
          </Card>
        </Link>
      ))
      :productsFiltered.map((Item, index) =>(
        <Link to={"details/"+index+"/"+Item.categoryId} key={Item.id}>
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
