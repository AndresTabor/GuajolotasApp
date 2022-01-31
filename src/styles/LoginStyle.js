import { Link } from "react-router-dom"
import styled from "styled-components"

export const Form = styled.form`
  text-align: center;
`
export const H2 = styled.h2`
  color: white;
  font-weight: 600;
  color: black;
  padding: 20px;
  font-size: 30px;
`

export const Div = styled.div`
  color: white;
  padding: 10px;
`
export const Input = styled.input`
  padding: 10px 50px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.03);
`

export const ButtonLogin = styled.button`    
    color: #ffff;
    border: none;
    background-color: var(--primary);
    width: 312px;
    height: 69px;
    padding: 24px 28px;
    border-radius: 40px;    
`

 export const Img = styled.img `
    width:200px;
    padding-top: 40px;
 `

 export const Linka = styled(Link)`
    color: var(--primary);
    font-family:Inter;
 `