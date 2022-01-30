/* eslint-disable no-cond-assign */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { FlavorImages } from '../helpers/FlavorIcons';
import { endPoint } from '../helpers/Url';
import { AmountContainer, BtnAddCart, DetailsContainer, IconContainer, FlavorImage, H2Title, ComboDescription, ComboCard, InputContainer, ComboItemDescription, FlavorBtn } from '../styles/DetailStyle';
import Carrouserl from './Carrouserl';

const Details = ({products}) => {
    const [category, setCategory] = useState("1");
    const [subtotal, setSubtotal] = useState(0);
    const [cantidad, setCantidad] = useState(1);
    const [currentCantidad, setCurrentCantidad] = useState(1);
    const [inicial, setInicial] = useState(1);
    const [firstItem, setFirstItem] = useState(
        {
            id:    "obj.id",
            image: "obj.image",
            name:  "obj.name",
            price:  "obj.price",
            quantity: 1,
        }
    )
    let cart =[];
    

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const valorInicial = () =>{
        if (products.length > 0) {
            const itemsito = products.find(item => item.id === inicial)
            setSubtotal(itemsito.price)
        }else{
            console.log("vacio");
        }
       
    }

    useEffect(() => {
        console.log("montaje");
        valorInicial();
    }, [valorInicial]);

    useEffect(() => {
        addCartList(firstItem, "add")
    }, [setFirstItem]);
    

    
    const addCartList = (obj, operation) => {
        console.log(cart);
        const newItem = {
            id:    obj.id,
            image: obj.image,
            name:  obj.name,
            price:  obj.price,
            quantity: 1,
        }
        const validacion = cart.find(item => item.id === newItem.id)
        console.log(validacion); 
        if (validacion === undefined & operation ==="add") {
            cart.push(newItem) 
        }else if (validacion !== undefined & operation ==="add") {
            validacion.quantity = validacion.quantity + 1
            setCurrentCantidad(currentCantidad+1)
            console.log(cantidad);
        }else{
            validacion.quantity = validacion.quantity -1
        }    
            
        
        console.log(cart);
    }

  return <DetailsContainer>
            <IconContainer>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
            </IconContainer>
            <>
                <Carrouserl />
            </>
            
            <AmountContainer>
                <button onClick={()=> addCartList(firstItem, "remove")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg>
                </button>
                <span>{currentCantidad}</span>
                <button onClick={()=> addCartList(firstItem, "add")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                </button>
            </AmountContainer>
            <div className='mt-5 w-100'>
                <H2Title>Sabor</H2Title>
                <div className='row'>
                {
                    category === "1" || category === "2"? FlavorImages.alimentos.map((url, index) => (     
                        <div className='col-4 text-center mb-5' key={index}>
                            <FlavorBtn id={'flavor'+ index}>
                                <FlavorImage src={url}  alt="Flavor logo"/>  
                            </FlavorBtn>
                        </div>               
                    ))
                    :FlavorImages.bebidas.map((url,index) => (
                        <div className='col-4 text-center mb-5' key={index}>
                            <FlavorBtn id={'flavor'+ index}>
                                <FlavorImage src={url}  alt="Flavor logo"/>  
                            </FlavorBtn>
                        </div> 
                    ))
                }
                </div>
            </div>
            <div>
                { 
                    category === "1" || category === "3"? <H2Title>Guajalocombo</H2Title>: <H2Title>Bebidas</H2Title>
                }
                {
                    category === "3" ?
                        <ComboDescription>Selecciona la torta que más te guste y disfruta de tu desayuno.</ComboDescription>
                    :   <ComboDescription>Selecciona la bebida que más te guste y disfruta de tu desayuno.</ComboDescription>
                }
                
                <div className='row'>
                {
                    category === "1"?                    
                    products.filter(categoria => categoria.categoryId === 3).map(item => (
                            <div className='col-6 text-center mb-5 'key={item.id}>
                                <ComboCard>
                                    <InputContainer>
                                        <img src={item.image} alt={item.name} className='h-auto'/>
                                        <input type="checkbox"  value={item.price}/>
                                    </InputContainer>
                                    <ComboItemDescription>
                                        <p>{item.name}</p>
                                        <span>+ ${item.price}MXN</span>
                                    </ComboItemDescription>
                                </ComboCard>
                            </div>
                        
                    ))
                    : <H2Title>Tamales</H2Title>
                }
                </div>
            </div>
            <BtnAddCart>Agregar {cantidad} al carrito <span>${subtotal}</span></BtnAddCart>
        </DetailsContainer>;
};

export default Details;
