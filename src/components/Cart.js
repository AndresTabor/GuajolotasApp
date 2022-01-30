/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { BackArrow, Btn, CartIconContainer, CartTitle, Container, DescriptionCard, PriceCard, SubtotalContainer } from '../styles/CartStyle';

const Cart = () => {

  const [state, setState] = useState([0]);
  console.log(state.length);
  return <>
          <Container>
            <CartTitle>Carrito</CartTitle>
            <a href='/' style={{color: "var(--secondary)"}}>
              <BackArrow xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </BackArrow>
            </a>
            {
              state.length === 0 ?
              <CartIconContainer>
                <svg xmlns="http://www.w3.org/2000/svg" width="113" height="113" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <p>No hay productos</p>
              </CartIconContainer>
              : 
              <div className="container w-100">
                <div class="row px-1 align-items-center">
                  <div class="col-3">
                    <img src="https://i.ibb.co/gJjXNWf/T-verde.png" alt="product image" className="w-100"/>
                  </div>
                  <div class="col-5">
                    <DescriptionCard>
                      Guajolota de Tamal Verde <br/> <span>x2</span>
                    </DescriptionCard>                    
                  </div>
                  <div class="col-4">
                    <PriceCard>$50 MXN</PriceCard>
                  </div>
                </div>
                <SubtotalContainer>
                  <p>Total</p>
                  <p>$62 MXN</p>
                </SubtotalContainer>
              </div>
            }
            <Btn>Pagar</Btn>
          </Container>
        </>;
};

export default Cart;
