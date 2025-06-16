import React, {useState} from "react";
import {CartCard} from "../../components/cart-card/cart-card.jsx";
import "./cart.css"
import {Order} from "../../components/order/order.jsx";
import initialCart from "../../data/cart-data.json"
import {Title} from "../../components/ui/title/title.jsx";
import {DescriptionText} from "../../components/ui/description-text/description-text.jsx";

export function CartPage() {
  // состояние для товаров
  const [cartItems, setCartItems] = useState(initialCart);

  // колбек для удаления итемов товара
  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // колбек для изменения количества
  const handleQuantityChange = (id, newQty) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? {...item, quantity: newQty} : item
      )
    );
  };

  // счет суммы без скидок и доставки в чеке, через редюс аккумулирует
  const orderPrice = cartItems.reduce(
    (sum, {price, quantity}) => sum + price * quantity,
    0
  );

  // сделал через let, потому что потом мы будем менять это с учетом промика, например
  let discountValue = 10; // в пропс принимает обычное число, вообще наверно должно рассчитывать через %, ТЗ нет

  // аналогично через let, потом она будет принимать какое число, которое будет рассчитываться из чего-то
  let deliveryCost = 10; // пока поставил 10 для проверки логики расчета и рендера

  return (
    <section className="content-main-cart">
      <div className="cart">
        {/*Условие для пустой корзины*/}
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <CartCard
              key={item.id}

              imgProps={{src: item.image.src, alt: item.title}}
              titleProps={{title: item.title}}
              priceProps={{price: item.price}}
              priceOldProps={{oldPrice: item.priceOld}}

              initialQuantity={item.quantity}  // стартовое кол-во из данных
              onQuantityChange={qty => handleQuantityChange(item.id, qty)}
              onRemove={() => handleRemoveItem(item.id)}
            />
          ))
        ) : (
          <div className="cart-empty">
            <Title content="Your shopping cart is empty" fontSize="40px"/>
            <DescriptionText content="You can return to the list of products and add them to the cart." fontSize="20px"/>
          </div>
        )}
      </div>
      <Order
        orderPrice={orderPrice}
        discountValue={discountValue}
        deliveryCost={deliveryCost}
        onCheckout={() => {
          // По моим догадкам должна быть логика перехода на страницу оплаты,
          // может какой-то сторонний сервис или модалка, ТЗ то нет)))
        }}
      />
    </section>
  )
}
