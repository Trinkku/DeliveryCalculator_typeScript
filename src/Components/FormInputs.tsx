import React from 'react';
import './Styles/FormInputs.css'
import { Delivery } from './Types';



interface InputProps {
    setCartValue: (value:number) => void;  
    setItemCount:(value:number) => void;
    setDeliveryDistance: (value:number) => void;
    setOrderTime: (value:Date) => void;
    delivery: Delivery;


}

const FormInputs: React.FC<InputProps> = (props:InputProps) => {
  const {cartValue, deliveryDistance, itemCount, orderTime } = props.delivery


  
  return (
    <div className='wrapper' >

    <form className='form' >
    
      <div className="form-wrapper">
      <label className="labeli" > Cart Value</label>
        <input className='input'
         type="text"
         value={cartValue}
          onChange={(e) => props.setCartValue(Number(e.target.value))} 
         />
        <label className='unit'>€</label>
      </div>
      <div className="form-wrapper">
        <label className="labeli"> Delivery Distance</label>
        <input className='input'
         type="text"
         value={deliveryDistance}
        onChange={(e) => props.setDeliveryDistance(Number(e.target.value))}
         />
        <label className='unit'>m</label>
      </div>
      <div className="form-wrapper">
        <label className="labeli" > Amount of items</label>
        <input className='input'
        type="text"
        value={itemCount}
        onChange={(e) => props.setItemCount(Number(e.target.value))}/>
    
      </div>

      <div className="form-wrapper">
        <label className="labeli" > Time</label>
        <input className='input'
        type="datetime-local"
        value={orderTime.toISOString().slice(0,-1)}
        onChange={(e) => props.setOrderTime(new Date(e.target.value))}/>
   
      </div>
       
    </form>
    </div>
  );
};

export default FormInputs;


