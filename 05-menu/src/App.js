import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

/* MANUAL APPROACH
const allCategories = items.map((item) => item.category); 
crea un ARRAY con las categories de la lista de objetos (items)
van a ser 9 strings en un array(una category por cada objeto en la list(items))
['breakfast','breakfast','lunch','shakes','lunch','shakes','breakfast','lunch','shakes']*/

/*-----------------------------------------------------------------------------------------------------------------------*/

/* AUTOMATIC APPROACH
 const allCategories = new Set(items.map((item) => item.category)); 
 //crea un OBJECT solo con las categories de la lista de objetos (items)
  van a ser 3 strings en un objeto {'breakfast','lunch','shakes'}
*/

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
/*crea un ARRAY solo con las categories de la lista de objetos (items)
 van a ser 4 strings en un array ['all','breakfast','lunch','shakes']
*/

function App() {
  const [dishes, setDishes] = useState(items);
  const [categories, setCategories] = useState([allCategories]);
  const filterItems = (category) => {
    if (category === "all") {
      setDishes(items); //vuelve a mostrar todos los objetos cuando se le da al btn ("All")
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setDishes(newItems);
  }; //filtra los objetos por categorias, cuando se activa cualquiera de los btns ("Breakfast","Lunch","Shakes")

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={allCategories} filterItems={filterItems} />
        <Menu items={dishes} />
      </section>
    </main>
  );
}

export default App;
