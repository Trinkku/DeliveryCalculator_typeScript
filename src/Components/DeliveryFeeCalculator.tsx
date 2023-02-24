import React, { useState } from 'react';
import FormInputs from './FormInputs';
import './Styles/DeliveryFeeCalculator.css'
import { calculateDeliveryFee } from './Calculator';

const DeliveryFeeCalculator: React.FC = () => {
    const [cartValue, setCartValue] = useState(1);
    const [itemCount, setItemCount] = useState(1);
    const [deliveryDistance, setDeliveryDistance] = useState(100);
    const [orderTime, setOrderTime] = useState(new Date());
    const [deliveryFee, setDeliveryFee] = useState(0);
      
const calculate = () =>
{
  setDeliveryFee(calculateDeliveryFee(cartValue,deliveryDistance, itemCount,orderTime ))
}

  return (
    <> 
<div className="container">
    <FormInputs 
    delivery={{cartValue, itemCount, deliveryDistance, orderTime}}
    setCartValue={setCartValue}
    setItemCount= {setItemCount}
    setDeliveryDistance={setDeliveryDistance}
    setOrderTime={setOrderTime} 
     />

     <div className="button">
      <button className='button-click' onClick={ calculate }> Calculate delivery price</button>
      <p>Delivery price: {deliveryFee} € </p>
    </div>
    </div>
    </>
  );
};

export default DeliveryFeeCalculator;


