/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';

const Carrouserl = () => {

    useEffect(() => {
        
    }, []);
    
    
    return <div>
      <div class="glider-contain">
        <div class="glider">
            <div> <img src="https://i.ibb.co/gJjXNWf/T-verde.png" alt="product image"/></div>
            <div> <img src="https://i.ibb.co/gJjXNWf/T-verde.png" alt="product image"/></div>
            <div> <img src="https://i.ibb.co/gJjXNWf/T-verde.png" alt="product image"/></div>
            <div> <img src="https://i.ibb.co/gJjXNWf/T-verde.png" alt="product image"/></div>
        </div>

        <button aria-label="Previous" class="glider-prev">«</button>
        <button aria-label="Next" class="glider-next">»</button>
        <div role="tablist" class="dots"></div>
        </div>
    </div>;
};

export default Carrouserl;
