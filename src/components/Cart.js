function Cart() {
  const monstera_price = 8;
  const lierre_price = 10;
  const bouquetFleurs_price = 15;

  return (
    <div>
      <ul>
        <li>Monstera: {monstera_price} €</li>
        <li>Lierre: {lierre_price} €</li>
        <li>Bouquet de fleurs : {bouquetFleurs_price} €</li>
      </ul>
      <p>Total: {monstera_price + lierre_price + bouquetFleurs_price} €</p>
    </div>
  );
}

export default Cart;
