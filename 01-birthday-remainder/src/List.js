import React, { useState } from "react";
import data from "./data";
const List = () => {
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(data.length);
  const handleClick = () => {
    setPeople([]);
    setValue(0);
  };
  const handleDel = (id) => {
    let newPeople = people.filter((newPerson) => newPerson.id !== id);
    setValue(value - 1);
    setPeople(newPeople);
  };
  return (
    <>
      <article className="container">
        <h3>Today's Birthdays: {value}</h3>
        {people.map((person) => {
          const { name, age, image, id } = person;
          return (
            <section key={id} className="person">
              <img src={image} alt="" />
              <div>
                <h4>{name}</h4>
                <p>{age} years old</p>
                <button onClick={() => handleDel(id)} className="butt">
                  delete
                </button>
              </div>
            </section>
          );
        })}
        <button onClick={handleClick} className="butt1">
          clear all
        </button>
      </article>
    </>
  );
};

export default List;
