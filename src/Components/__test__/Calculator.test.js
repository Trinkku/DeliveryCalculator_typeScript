import { calculateDeliveryFee } from '../Calculator';

describe('calculateDeliveryFee', () => {
  it('calculates delivery fee correctly for a small order', () => {
    const cartValue = 9;
    const deliveryDistance = 500;
    const itemCount = 2;
    const orderTime = new Date('2023-02-01T14:17:00.000Z');
    const deliveryFee = calculateDeliveryFee(cartValue, deliveryDistance, itemCount, orderTime);
    expect(deliveryFee).toBe(3);
  });


  it('calculates delivery fee correctly for a large item count', () => {
    const cartValue = 20;
    const deliveryDistance = 900;
    const itemCount = 1;
    const orderTime = new Date('2023-02-01T12:00:00.000Z');
    const deliveryFee = calculateDeliveryFee(cartValue, deliveryDistance, itemCount, orderTime);
    expect(deliveryFee).toBe(2);
  });

  it('calculates delivery fee correctly for free delivery', () => {
    const cartValue = 200;
    const deliveryDistance = 1500;
    const itemCount = 5;
    const orderTime = new Date('2023-02-01T16:00:00.000Z');
    const deliveryFee = calculateDeliveryFee(cartValue, deliveryDistance, itemCount, orderTime);
    expect(deliveryFee).toBe(0);
  });

  it('calculates delivery fee correctly for a rush hour order', () => {
    const cartValue = 50;
    const deliveryDistance = 500;
    const itemCount = 5;
    const orderTime = new Date('2023-02-01T17:00:00.000Z');
    const deliveryFee = calculateDeliveryFee(cartValue, deliveryDistance, itemCount, orderTime);
    expect(deliveryFee).toBe(3);
  });
});

