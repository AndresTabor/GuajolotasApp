/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { AmountContainer, BtnAddCart, DescriptionContainer, DetailsContainer, IconContainer, ImgContainer, FlavorImage, H2Title, ComboDescription, ComboCard, InputContainer, ComboItemDescription } from '../styles/DetailStyle';

const Details = () => {
  return <DetailsContainer>
            <IconContainer>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
            </IconContainer>
            <ImgContainer>
                <img src="https://i.ibb.co/gJjXNWf/T-verde.png" alt="product image" className="w-100"/>
            </ImgContainer>
            <DescriptionContainer>
                <h1>Guajolota de Tamal Verde</h1>
                <p>$25 MXN</p>
            </DescriptionContainer>
            <AmountContainer>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg>
                </button>
                <span>1</span>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                </button>
            </AmountContainer>
            <div className='mt-5'>
                <H2Title>Sabor</H2Title>
                <div className='row'>
                    <div className='col-4 text-center mb-5'>
                        <FlavorImage src="https://i.ibb.co/7JJ9JnJ/Verde.png" alt="Flavor logo"/>
                    </div>
                    <div className='col-4 text-center mb-5'>
                        <FlavorImage src="https://i.ibb.co/7JJ9JnJ/Verde.png" alt="Flavor logo"/>
                    </div>
                    <div className='col-4 text-center mb-5'>
                        <FlavorImage src="https://i.ibb.co/7JJ9JnJ/Verde.png" alt="Flavor logo"/>
                    </div>
                    <div className='col-4 text-center mb-5'>
                        <FlavorImage src="https://i.ibb.co/7JJ9JnJ/Verde.png" alt="Flavor logo"/>
                    </div>
                    <div className='col-4 text-center mb-5'>
                        <FlavorImage src="https://i.ibb.co/7JJ9JnJ/Verde.png" alt="Flavor logo"/>
                    </div>
                    <div className='col-4 text-center mb-5'>
                        <FlavorImage src="https://i.ibb.co/7JJ9JnJ/Verde.png" alt="Flavor logo"/>
                    </div>
                </div>
            </div>
            <div>
                <H2Title>Guajolocombo</H2Title>
                <ComboDescription>Selecciona la bebida que más te guste y disfruta de tu desayuno.</ComboDescription>
                <div className='row'>
                    <div className='col-6 text-center mb-5'>
                        <ComboCard>
                            <InputContainer>
                                <FlavorImage src="https://i.ibb.co/7JJ9JnJ/Verde.png" alt="Flavor logo"/>
                                <input type="checkbox"/>
                            </InputContainer>
                            <ComboItemDescription>
                                <p>Champurrado</p>
                                <span>+ $12MXN</span>
                            </ComboItemDescription>
                        </ComboCard>
                    </div>
                    <div className='col-6 text-center mb-5'>
                        <ComboCard>
                            <InputContainer>
                                <FlavorImage src="https://i.ibb.co/7JJ9JnJ/Verde.png" alt="Flavor logo"/>
                                <input type="checkbox"/>
                            </InputContainer>
                            <ComboItemDescription>
                                <p>Champurrado</p>
                                <span>+ $12MXN</span>
                            </ComboItemDescription>
                        </ComboCard>
                    </div>
                    <div className='col-6 text-center mb-5'>
                        <ComboCard>
                            <InputContainer>
                                <FlavorImage src="https://i.ibb.co/7JJ9JnJ/Verde.png" alt="Flavor logo"/>
                                <input type="checkbox"/>
                            </InputContainer>
                            <ComboItemDescription>
                                <p>Champurrado</p>
                                <span>+ $12MXN</span>
                            </ComboItemDescription>
                        </ComboCard>
                    </div>
                    <div className='col-6 text-center mb-5'>
                        <ComboCard>
                            <InputContainer>
                                <FlavorImage src="https://i.ibb.co/7JJ9JnJ/Verde.png" alt="Flavor logo"/>
                                <input type="checkbox"/>
                            </InputContainer>
                            <ComboItemDescription>
                                <p>Champurrado</p>
                                <span>+ $12MXN</span>
                            </ComboItemDescription>
                        </ComboCard>
                    </div>
                
                </div>
            </div>
            <BtnAddCart>Agregar 2 al carrito <span>$25.00</span></BtnAddCart>
        </DetailsContainer>;
};

export default Details;
