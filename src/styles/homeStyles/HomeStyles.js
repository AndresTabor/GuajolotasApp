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

`

export const Lista= styled.ul`

`

export const Item= styled.li`
    
`