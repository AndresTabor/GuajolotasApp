/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useCallback, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { deleteData, getData, putData } from '../helpers/CrudData';
import { endPoint } from '../helpers/Url';
import { BackArrow, Btn, BtnClose, BtnConfirm, BtnUpdate, CartIconContainer, CartTitle, Container, DescriptionCard, DescriptionItem, ImageModal, Modal, Overley, PopupModal, PriceCard, SubtotalContainer } from '../styles/CartStyle';
import { BsCartXFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate()
  

  const [cartItems, setCartItems] = useState([]);
  const [itemUpdate, setItemUpdate] = useState({});
  const [newTotal, setNewTotal] = useState( 0 );

  const { itemsCart } = cartItems;

  useEffect(() => {
    console.log("montaje carrito");
    getData( endPoint+"cart/1" ).then( items => setCartItems( items ));
    setNewTotal( cartItems.totalPagar );

  }, [cartItems.totalPagar]);

  const updateModal = ( id ) => {
    const itemFocus = itemsCart?.find( item => item.id === id) ;
    setItemUpdate(itemFocus)
    document.getElementById("cartModal").style.display="flex";

  }

  const closeModal = () => {
    document.getElementById("cartModal").style.display="none";
    document.getElementById("spinerContainer").style.display="flex";
  }

  const setQuantity = ( operation ) => {
    //modifico opacidad del boton remover item
    if (operation === "add" & itemUpdate.quantity === 1) {
      document.getElementById("remove").style.opacity="1";
    }else if(operation === "remove" & itemUpdate.quantity === 2){
      document.getElementById("remove").style.opacity="0.5";
    }

    if(operation === "add"){
      setItemUpdate({
          ...itemUpdate,
          quantity : itemUpdate.quantity + 1
        })        
        //actualizo el nuevo total
        setNewTotal(
          newTotal + Number(itemUpdate.price)
        )
    }else if (itemUpdate.quantity > 1) {
        setItemUpdate({
          ...itemUpdate,
          quantity : itemUpdate.quantity - 1
        })        
        //actualizo el nuevo total
        setNewTotal(
          newTotal - Number(itemUpdate.price)
        )
    }else{
        MySwal.fire({
        title: <strong>Cantidad no valida</strong>,
        html: <i>Intentar de nuevo</i>,
        icon: 'error',
        width: "80%"
        })
    }
  }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const putCart = useCallback(( id ) => {
    document.getElementById("spinerContainer").style.display="flex"; 
    const unchanged  = itemsCart?.filter( item => item.id !== id);    
    const newItems = [ itemUpdate, ...unchanged ]
    const cartUpdate = {
      ...cartItems,
      totalPagar: newTotal,
      itemsCart: newItems
    }
    putData( endPoint+"cart/1/", cartUpdate )
     localStorage.setItem("cantidad", JSON.stringify({
      ...cartItems,
      totalPagar: newTotal,
      itemsCart: newItems
    }))
    setNewTotal( cartItems.totalPagar );

    setTimeout(() => {
      closeModal();
      // eslint-disable-next-line no-restricted-globals
      location.reload(); 
          
    }, 100);
  })

  const deleteCart = () => {
    //console.log("delete");
    if (Object.entries(cartItems).length !== 0) {      
      document.getElementById("spinerContainer").style.display="flex";
      deleteData( endPoint+"cart/1" )
      setTimeout(() => {
        closeModal();
        // eslint-disable-next-line no-restricted-globals
        location.reload(); 
        document.getElementById("spinerContainer").style.display="none";  
      }, 100);
      localStorage.removeItem("cartState");
    }
  }
  const backPage = () => {
    navigate(-1);
  };
  return <>
          <Container>
            <CartTitle>Carrito</CartTitle>
              <BackArrow onClick={backPage} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </BackArrow>
            <BsCartXFill className='vaciarCarro' onClick={() => deleteCart()}/>
            { //verifico si el objeto cart en la data esta vacio
              Object.entries(cartItems).length === 0 ?
              <CartIconContainer>
                <svg xmlns="http://www.w3.org/2000/svg" width="113" height="113" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <p>No hay productos</p>
                <Btn disabled>Pagar</Btn>
              </CartIconContainer>
              :
              <div className="container w-100">
                {
                  itemsCart?.map( item => (
                    <div class="row px-1 align-items-center" id={"element"+ item.id} key={item.id} onClick={() => updateModal( item.id )}>
                      <div class="col-3">
                        <img src={item.image} alt={item.name} className="w-100"/>
                      </div>
                      <div class="col-5">
                        <DescriptionCard>
                        {item.name} <br/> <span>x {item.quantity}</span>
                        </DescriptionCard>
                      </div>
                      <div class="col-4">
                        <PriceCard>${item.price * item.quantity} MXN</PriceCard>
                      </div>
                    </div>
                  ))
                }
                <SubtotalContainer>
                  <p>Total</p>
                  <p>${cartItems.totalPagar} MXN</p>
                </SubtotalContainer>
                <Btn className='opacity-100' onClick={() => putCart()}>Pagar</Btn>
              </div>
            }
            <Modal id='cartModal'>
              <PopupModal>

                <ImageModal src={itemUpdate.image} alt="cart product"/>
                <DescriptionItem>
                <h1>{itemUpdate.name}</h1>
                <p>${Number(itemUpdate.price) * itemUpdate.quantity} MXN</p>
                </DescriptionItem>
                <BtnUpdate>
                    <button id='remove' onClick={() => setQuantity("remove")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                    </button>
                    <span>{itemUpdate.quantity}</span>
                    <button id='add' onClick={() => setQuantity("add")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    </button>
                </BtnUpdate>
                <BtnConfirm onClick={() => putCart( itemUpdate.id )}>Actualizar</BtnConfirm>
                <BtnClose onClick={closeModal}>Cerrar</BtnClose>
              </PopupModal>
            </Modal>
          </Container>
          <Overley id='spinerContainer'>
                <Spinner animation="border" variant="warning"  />
            </Overley>
        </>;
};

export default Cart;
