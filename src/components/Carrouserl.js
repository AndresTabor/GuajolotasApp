/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import Carousel from 'react-elastic-carousel'
import '../styles/carrousel.css';
import { DescriptionContainer } from '../styles/DetailStyle';

const Carrouserl = ({products, focus}) => {

    let item = 0;
    useEffect(() => {
        document.getElementById("flavor"+item).style.opacity="1";  
              
    }, []);
    const prueba = (position) => {
        
        const { index } = position
        document.getElementById("flavor"+item).style.opacity="0.5"; 
        item = index;
        const sabor = document.getElementById("flavor"+index)
        sabor.style.opacity="1";
        console.log("#Flavor"+index);
        console.log(sabor);
    }
    return <>
            <div className='styling-example w-100 h-100'>
                <Carousel itemsToShow={1.5}
                itemsToScroll={1.5} 
                initialActiveIndex={Number(focus)}
                focusOnSelect={true}
                outerSpacing={25}
                onChange={index => (
                    prueba(index)
                )}> 
                    {
                        products.map((element, index) => (
                            <div className='text-end' key={index}> <img src={element.image} alt={element.name} className='w-75'/></div>
                        ))
                    }
                    
                </Carousel>
                <DescriptionContainer>
                <h1>Guajolota de Tamal Verde</h1>
                <p>$25 MXN</p>
                </DescriptionContainer>
            </div>        
            </>;
};

export default Carrouserl;
