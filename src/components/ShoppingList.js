import { plantList } from "../datas/plantList";

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}> {cat}</li>
        ))}
      </ul>
      <ul>
        {plantList.map((plant) => (
          <li key={plant.id}>
            {plant.name}
            {/*  Afficahge de emoji pour indiquer les meilleurs ventes */}
            {/* {plant.isBestSale ? <span>🔥</span> : null} */}

            {/* function ternaire avec &&: affiche unique le span si la condition est verifirer */}
            {/* {plant.isBestSale && <span>🔥</span>} */}

            {/* afficher le 🔥 pour les plantes qui sont des  isBestSale   ET dans la category classique */}
            {plant.isBestSale && plant.category === "classique" && (
              <span>🔥</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
