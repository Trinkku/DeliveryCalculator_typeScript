   
   
   export const calculateDeliveryFee = (cartValue: number, deliveryDistance:number, itemCount:number, orderTime:Date): number => {
    let deliveryFee = 0;

    // Small order surcharge
    if (cartValue < 10) {
      deliveryFee += 10 - cartValue;
    }

    // Delivery distance fee
    deliveryFee += 2;
    if (deliveryDistance > 1000) {
      const additionalDistance = deliveryDistance - 1000;
      deliveryFee += Math.ceil(additionalDistance / 500) * 1; 
    }
    // Item count surcharge
     if (itemCount >= 5) {
    deliveryFee += (itemCount - 4) * 0.5;
     }
     
     if (itemCount > 12){
        deliveryFee += 1.2;
     }

     //MAX fee limit
     if(deliveryFee > 15){
        deliveryFee = 15;
     }

     //Friday rushhour 
     const rushHour = orderTime.getUTCHours();
     if (rushHour >= 15 && rushHour <= 19){
        deliveryFee *= 1.2;

     }
     //Free delivery
     if (cartValue >= 100){
        deliveryFee = 0;
     }

     return Math.floor(deliveryFee);

  };
