/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel'
import '../styles/carrousel.css';
import { DescriptionContainer } from '../styles/DetailStyle';

const Carrouserl = ({ products, focus, category }) => {

    const [datos, setDatos] = useState({});
    
    
    useEffect(() => {
        document.getElementById("flavor"+focus).style.opacity="1";  
        //description(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const description = () => {        
        const current = products.filter(categoria => categoria.categoryId === Number(category))
        return current[Number(focus)]
        
    }
    
    let beforeFlavor = focus;
        
    const prueba = (position) => {
        const { index } = position
        document.getElementById("flavor"+beforeFlavor).style.opacity="0.5"; 
        beforeFlavor = index;
        const sabor = document.getElementById("flavor"+index)
        sabor.style.opacity="1";        
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
                        products.filter(categoria => categoria.categoryId === Number(category)).map(item => (
                        <div className='text-end' key={item.id}> <img src={item.image} alt={item.name} className='w-75'/></div>
                                                    
                    ))
                    }
                </Carousel>
                <DescriptionContainer>
                <h1>a</h1>
                <p>$MXN</p>
                </DescriptionContainer>
            </div>        
            </>;
};

export default Carrouserl;
