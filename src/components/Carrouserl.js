/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel'
import '../styles/carrousel.css';
import { DescriptionContainer } from '../styles/DetailStyle';

const Carrouserl = ({ products, focus, category }) => {
    //let beforeFlavor = focus;
    const [items, setItems] = useState([]);
    const [focusFlavor, setfocusFlavor] = useState(focus);
    
    useEffect(() => {
        console.log("carrousel montado");
        document.getElementById("flavor"+focus).style.opacity="1";  
        getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);

    const getItems = () => {
        setItems(products.filter(categoria => categoria.categoryId === Number(category))) 
    }
    
         
    const changeFlavor = (position) => {
        const { index } = position
        document.getElementById("flavor"+focusFlavor).style.opacity="0.5"; 
        setfocusFlavor(index)
        document.getElementById("flavor"+index).style.opacity="1"
              
    }
    return <>
            <div className='styling-example w-100 h-100'>
                <Carousel itemsToShow={1.5}
                itemsToScroll={1.5} 
                initialActiveIndex={Number(focus)}
                focusOnSelect={true}
                outerSpacing={25}
                onChange={index => (
                    changeFlavor(index)
                    
                )}> 
                    {
                        items.map(item => (
                        <div className='text-end' key={item.id}> <img src={item.image} alt={item.name} className='w-75'/></div>                                                    
                    ))
                    }
                </Carousel>
                <DescriptionContainer>
                <h1>{items[focusFlavor]?.name}</h1>
                <p>${items[focusFlavor]?.price} MXN</p>
                </DescriptionContainer>
            </div>        
            </>;
};

export default Carrouserl;
