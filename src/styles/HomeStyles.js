
import { Link } from 'react-router-dom'
import styled from 'styled-components'


// Top de la pagina
export const TopPage= styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    & a {
        color: grey;
        margin: 0 5px;
    }
`

export const ImgCard= styled.img`
    width: 100px;
    height: 100px;
` 

export const BtnCar= styled.img`
    width: 24px;
    height: 24px;
`

// Parte del texto y buscador
export const TextContainer= styled.div`
    padding: 20px;
`

export const Title= styled.h1`
    font-style: normal;
    font-size: 2.1rem;
    font-weight: bold; 
    justify-content: left;
    align-items: center;       
`

export const Formulario= styled.form`
    display: flex;
    width: 100%;
    height: 60px;
    padding: 15px;
`

export const LensImg= styled.img`
    position: absolute;
    background: none;
    width: 20px;
    margin: 15px;  
`

export const Buscador= styled.input`   
    text-align: center;
    padding: 5px 20px;
    width: 100%;
    height: 60px;
    border-radius: 30px;
    border: none;
    background-color: #E7E7E7;
    padding-left: 35px;
    &::placeholder {      
        color: #9A9A9D;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5em;
        font-style: normal;
    }

`

// Navegador

export const NavContainer= styled.div`
    display: flex;
    
`

export const ListaC= styled.ul`    
    display: flex;
    width:98% ;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
`

export const Item= styled.li`
    list-style: none;
    align-items: center;
    justify-content: center; 
    
`

export const LinkStyle= styled(Link)`
    text-decoration: none;
    color: #9A9A9D;
    font-size: 20px;
    :hover{
        font-weight: bold;
        color:#FA4A0C;
        border-bottom: 2px solid #FA4A0C;
    }
`

// cards

export const CardsContainer= styled.div`
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
    & a {
        text-decoration: none;
        width: 90%;
    }
`

export const Card= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    background: #fff;
    border: none;
    width: 100%;
    height: 112px;
    padding: 16px;
    border-radius: 20px;
    margin: 5px 0 5px 0;

`

 export const CardImg= styled.img`
    background:#fff;
    width: 100px;
    height: 100px;
 `

 export const TitleCContainer= styled.div`    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background: #fff;
    margin: 0 16px;
 `

 export const Producto=styled.h3`
    line-height: 21px;
    font-size: 0.8rem;
    font-weight: bold;
    background: #fff;
    color: black;
 `

 export const PriceProduct= styled.h4`
    font-size: 0.8rem;
    font-weight: bold;
    color: #FA4A0C;
    background: #fff;
 `