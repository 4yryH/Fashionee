import React, { useState } from 'react';
import { CartItem } from '../../components/cart-item/CartItem.jsx';
import { Order } from '../../components/order/Order.jsx';
import { PromoCode } from '../../components/promo-code/PromoCode.jsx';
import {
  ContentMain,
  Cart,
  CartEmpty,
  ContentFooterCart,
  TitleCartEmpty,
  DescriptionCartEmpty,
} from './Cart.styles.js';

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
      <ContentMain>
        {/*Корзина*/}
        <Cart>
          {/*Условие для пустой корзины*/}
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                imgProps={{ src: item.image, alt: item.name }}
                titleProps={{ title: item.name }}
                priceProps={{ price: item.price }}
                priceOldProps={{ oldPrice: item.oldPrice }}
                initialQuantity={item.quantity} // стартовое кол-во из данных
                onQuantityChange={onQuantityChange}
                onRemove={onRemoveItem}
              />
            ))
          ) : (
            <CartEmpty>
              <TitleCartEmpty>Your shopping cart is empty</TitleCartEmpty>
              <DescriptionCartEmpty>
                You can return to the list of products and add them to the cart.
              </DescriptionCartEmpty>
            </CartEmpty>
          )}
        </Cart>
        {/*Чек*/}
        <Order
          orderPrice={orderPrice}
          discountPercent={discountPercent}
          deliveryCost={deliveryCost}
          cartItems={cartItems}
          promoCode={promoCode}
        />
      </ContentMain>
      <ContentFooterCart>
        <PromoCode
          onApply={(DiscountPercent, code) => {
            setDiscountPercent(DiscountPercent);
            setPromoCode(code);
          }}
        />
      </ContentFooterCart>
    </>
  );
}
