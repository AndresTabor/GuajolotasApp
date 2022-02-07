import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements
  
} from "@stripe/react-stripe-js";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { deleteData } from "../helpers/CrudData";
import { endPoint } from "../helpers/Url";

const stripePromise = loadStripe("pk_test_51KPh3SAlV37ExMwEU3zl3SMWsuFiBGiN5g0Vv1ZvDWOVO59AKLX1fF3spVcLrrHqPBzF5T3wW04QqkUYGVFtNFUe00iSF8O6Ri");

const Checkout = ({ totalpayment, closeModal }) => {
  
  const MySwal = withReactContent(Swal)
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("montaje pagos");
    console.log(totalpayment);
  }, [totalpayment]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details:{
        email:"andrestaborda43@gmail.com"
      }
    });
    setLoading(true);

    if (!error) {
      console.log(paymentMethod)
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          "http://localhost:3001/api/checkout",
          {
            id,
            amount: totalpayment, //MXN
          }
        );
        console.log(data);
        if (data === 'Successful Payment') {
          MySwal.fire({
            title: <strong>¡Pago Exitoso!</strong>,
            html: <i>Gracias por su compra</i>,
            icon: 'success',
            width: "80%"
          })
          deleteData( endPoint+"cart/1" )
          navigate("/")          
        } else {
          
          MySwal.fire({
            title: <strong>Datos Incorrectos</strong>,
            html: <i>Intentar de nuevo</i>,
            icon: 'error',
            width: "80%"
          })
        }
        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
        //4000000000000101
      }
      setLoading(false);
    }
  };

  console.log(!stripe || loading);

  return (
    <form className="card card-body my-5 form-payment" onSubmit={handleSubmit}>
      
      <AiOutlineClose className="payment-close" onClick={() => closeModal ( false )}/>
      <Link to="/">
        <img
          src="https://i.ibb.co/9sqQqWm/Logotipo.png"
          alt="Guajolots App logo"
          className="img-fluid"
        />
      </Link>

      <h3 className="text-center my-3 payment-text">Total de su compra: <hr/>
      {totalpayment? totalpayment + "MXN" : "No tiene Items en el carrito"}</h3>
      
      
      <div className="form-group contenedorElemento">
        <CardElement />
      </div>

       <button disabled={!stripe || totalpayment === undefined} className="btn-payment">
        {loading ? (
          <div className="spinner-border text-light" role="status">
            
          </div>
        ) : (
          "Pagar"
        )}
      </button> 
    </form>
    
  );
};

function CheckoutForm({ closeModal, totalpayment }) {
  return (
    <Elements stripe={stripePromise}>
      <div className="container p-4" id="modal-payment">
        <div className="row h-100">
          <div className="col-md-4 offset-md-4 h-100">
            <Checkout closeModal={closeModal} totalpayment={ totalpayment }/>
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default CheckoutForm;