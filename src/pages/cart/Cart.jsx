import React, { useState } from 'react';
import { CartCard } from '../../components/cart-card/CartCard.jsx';
import { Order } from '../../components/order/Order.jsx';
import { Title } from '../../components/ui/title/Title.jsx';
import { DescriptionText } from '../../components/ui/description-text/DescriptionText.jsx';
import { PromoCode } from '../../components/promo-code/PromoCode.jsx';
import './Cart.css';

export function CartPage({
  cartItems, // из App
  onRemoveItem, // из App
  onQuantityChange, // из App
}) {
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoCode, setPromoCode] = useState('');

  // счет суммы без скидок и доставки в чеке, через редюс аккумулирует
  const orderPrice = cartItems.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0
  );

  // стоимость доставки
  const deliveryCost = 15;

  return (
    <>
      <section className="content-main-cart">
        {/*Корзина*/}
        <div className="cart">
          {/*Условие для пустой корзины*/}
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartCard
                key={item.id}
                imgProps={{ src: item.image, alt: item.name }}
                titleProps={{ title: item.name }}
                priceProps={{ price: item.price }}
                priceOldProps={{ oldPrice: item.oldPrice }}
                initialQuantity={item.quantity} // стартовое кол-во из данных
                onQuantityChange={(qty) => onQuantityChange(item.id, qty)}
                onRemove={() => onRemoveItem(item.id)}
              />
            ))
          ) : (
            <div className="cart-empty">
              <Title content="Your shopping cart is empty" fontSize="40px" />
              <DescriptionText
                content="You can return to the list of products and add them to the cart."
                fontSize="20px"
              />
            </div>
          )}
        </div>
        {/*Чек*/}
        <Order
          orderPrice={orderPrice}
          discountPercent={discountPercent}
          deliveryCost={deliveryCost}
          cartItems={cartItems}
          promoCode={promoCode}
        />
      </section>
      <section className="content-footer-cart">
        <PromoCode
          onApply={(DiscountPercent, code) => {
            setDiscountPercent(DiscountPercent);
            setPromoCode(code);
          }}
        />
      </section>
    </>
  );
}
