/* eslint-disable no-cond-assign */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { postData } from '../helpers/CrudData';
import { FlavorImages } from '../helpers/FlavorIcons';
import { endPoint } from '../helpers/Url';
import { Overley } from '../styles/CartStyle';
import { AmountContainer, BtnAddCart, DetailsContainer, IconContainer, FlavorImage, H2Title, ComboDescription, ComboCard, InputContainer, ComboItemDescription, FlavorBtn, Btncontainer, BtnCombo } from '../styles/DetailStyle';
import Carrouserl from './Carrouserl';

const Details = ({ products }) => {
    const MySwal = withReactContent(Swal)
    const params = useParams();
    const { index, category } = params;
    const navigate = useNavigate();

    const [firstItem, setFirstItem] = useState({}) //estado que almacena el elemento focus carrousel
    const [combos, setCombos] = useState([]);      //estado que almacena los items seleccionados en combos
    const [resetCombo, setResetCombo] = useState(false); //estado que resetea los combos y el total al cambiar el focus corrousel
    const [total, setTotal] = useState( 0 );       //estado que almacena el valor total a pagar

    useEffect(() => {
        console.log("montaje detalle");
        document.getElementById("remove").style.opacity="0.5";
        currentProduct( index );        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);

    //actualizo la info del elemento focus en el carrousel
    const currentProduct = ( i ) => {
        const product = products.filter(item => item.categoryId === Number( category ))[ i ]
        setTotal( Number(product.price) )
        setFirstItem({
            ...product,
            quantity: 1,
        })   
    }

    // Cambia la cantidad de items a agregar
    const setQuantity = ( operation ) => {
        if (operation === "add" & firstItem.quantity === 1) {
            document.getElementById("remove").style.opacity="1";
        }else if(operation === "remove" & firstItem.quantity === 2){
            document.getElementById("remove").style.opacity="0.5";
        }

        if(operation === "add"){
            setFirstItem({
                ...firstItem, 
                quantity : firstItem.quantity + 1
            })
            setTotal(total + Number(firstItem.price))
        }else if (firstItem.quantity > 1) {
            setFirstItem({
                ...firstItem, 
                quantity : firstItem.quantity - 1
            })
            setTotal(total - Number(firstItem.price))
        }else{
            MySwal.fire({
            title: <strong>Cantidad no valida</strong>,
            html: <i>Intentar de nuevo</i>,
            icon: 'error',
            width: "80%"
            })
        }
    }

    //añade un elemento de la seccion de combo
    const addCombo = ( id ) => {
        const input= document.getElementById( "check"+id );
        const checkBoxes = document.querySelectorAll("input[type=checkbox]:checked");
        const newCombo = products.find( product => product.id === id)

        checkBoxes.length < 1? setResetCombo(false): console.log(resetCombo)
        
        if( input.checked){            
            setCombos([...combos, {...newCombo, quantity:1}])
            setTotal(total + Number(newCombo.price));
            console.log("si");
            
        }else if ( !input.checked & resetCombo ){
            setCombos(combos.filter(item => item.id !== id))
            setTotal(Number(firstItem.price));           
            //console.log( resetCombo );
        }else if ( !input.checked ){
            setCombos(combos.filter(item => item.id !== id))
            setTotal(total - Number(newCombo.price));
            //console.log( resetCombo );
        }  
         
        
    }
    
    
    const addToCart = () =>{
        const newCart = { 
            totalPagar: total, 
            itemsCart: [firstItem]
        }   
        if (combos.length !== 0) {
            combos.map( combo => newCart.itemsCart.push( combo ))  
        }
        localStorage.setItem("carro", JSON.stringify(newCart));
        postData( endPoint+"cart/", newCart );
        document.getElementById("spinerContainer").style.display="flex";
        setTimeout(() => {
            navigate("/cart");            
        }, 700);
    }
    

  return <DetailsContainer>
            <IconContainer>
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </Link>
                <Link to="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                </Link>
            </IconContainer>
            <>
                <Carrouserl focus={index} 
                products={products} 
                category={category} 
                currentProduct={currentProduct} 
                setTotal={setTotal} 
                setResetCombo={setResetCombo}/>
            </>
            
            <AmountContainer>
                <button onClick={() =>setQuantity("remove")} id='remove'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg>
                </button>
                <span>{firstItem.quantity}</span>
                <button onClick={() =>setQuantity("add")} id='add'>
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
            <div className='mb-5'>
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
                    category === "1" || category ==="2"?                    
                    products.filter(categoria => categoria.categoryId === 3).map(item => (
                            <div className='col-6 text-center mb-5 'key={item.id}>
                                <BtnCombo id={"btnCheck"+ item.id}>
                                    <ComboCard>
                                        <InputContainer>
                                            <img src={item.image} alt={item.name} className='h-auto'/>
                                            <input type="checkbox" 
                                            className='cbox' 
                                            value={item.price} 
                                            id={"check"+item.id} 
                                            onClick={() => 
                                            addCombo( item.id )}/>
                                        </InputContainer>
                                        <ComboItemDescription>
                                            <p>{item.name}</p>
                                            <span>+ ${item.price}MXN</span>
                                        </ComboItemDescription>
                                    </ComboCard>
                                </BtnCombo>
                            </div>
                        
                    ))
                    : products.filter(categoria => categoria.categoryId === 1).map(item => (
                        <div className='col-6 text-center mb-5 'key={item.id}>
                            <button id={item.id}>
                                <BtnCombo>
                                    <ComboCard>
                                        <InputContainer>
                                            <img src={item.image} alt={item.name} className='h-auto'/>
                                            <input type="checkbox" 
                                            className='cbox' 
                                            value={item.price} 
                                            id={"check"+item.id} 
                                            onClick={() => 
                                            addCombo( item.id )}/>
                                        </InputContainer>
                                        <ComboItemDescription>
                                            <p>{item.name}</p>
                                            <span>+ ${item.price}MXN</span>
                                        </ComboItemDescription>
                                    </ComboCard>
                                </BtnCombo>
                            </button>
                        </div>
                    ))
                }
                </div>
            </div>
            <Btncontainer >
                <BtnAddCart onClick={() => addToCart()}>Agregar {firstItem.quantity + combos.length} al carrito <span>$ { total } MXN</span></BtnAddCart>
            </Btncontainer>
            <Overley id='spinerContainer'>
                <Spinner animation="border" variant="warning"  />
            </Overley>
        </DetailsContainer>;
};

export default Details;
