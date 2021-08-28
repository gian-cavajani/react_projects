import React from "react";

const Categories = ({ filterItems, categories }) => {
  console.log(categories);
  return (
    // AUTOMATIC APPROACH
    <section className="btn-container">
      {categories.map((cat) => {
        return (
          <button className="filter-btn" onClick={() => filterItems(cat)}>
            {cat}
          </button>
        );
      })}
    </section>

    // MANUAL APPROACH
    //mismo resultado pero el problema del manual es que si se modifica
    //o se agrega una categoria hay que agregarla manualmente
    //con el automatic approach, las categorias se auto-actualizan
    /*<section className="btn-container">
      <button className="filter-btn" onClick={() => filterItems("all")}>
        All
      </button>
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        Breakfast
      </button>
      <button className="filter-btn" onClick={() => filterItems("lunch")}>
        Lunch
      </button>
      <button className="filter-btn" onClick={() => filterItems("shakes")}>
        Shakes
      </button>
    </section>
    */
  );
};

export default Categories;
