import styled from 'styled-components'


// Top de la pagina
export const TopPage= styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

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
    font-size:3.2rem ;
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

export const Buscador= styled.input`   
    text-align: center;
    padding: 5px 20px;
    width: 100%;
    height: 60px;
    border-radius: 30px;
    border: none;
    background-color: #E7E7E7;
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
    border: 1px solid blue;
    display: flex;
    width:98% ;
    align-items: center;
    justify-content: space-between;
`

export const Item= styled.li`
    list-style: none;
    align-items: center;
    justify-content: center; 
    
`

// cards

export const CardsContainer= styled.div`
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
`

export const Card= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    background: #fff;
    border: none;
    width: 90%;
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
    align-items: flex-end;
    justify-content: center;
    background: #fff;
    padding: 20px;
 `

 export const Producto=styled.h3`
    line-height: 21px;
    font-size: 20px;
    font-weight: bold;
    background: #fff;
 `