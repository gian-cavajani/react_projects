import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((a) => {
        const { id, img, title, category, price, desc } = a;
        return (
          <article className="menu-item">
            <img className="photo" src={img} alt="" />

            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <h5>{category}</h5>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
