import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(0);
  // UNA FORMA DE VOLVER AL 0 CUANDO SE LLEGA AL ULTIMO OBJ EN LA LISTA Y DE IR AL ULTIMO OBJ CUANDO SE BAJA DEL 0
  // const checkNum = (num) => {
  //   if (num < 0) {
  //     return data.length - 1;
  //   }
  //   if (num > data.length - 1) {
  //     return 0;
  //   }
  //   return num;
  // };
  //LO MISMO CON USEEFFECT
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (value < 0) {
      setValue(lastIndex);
    }
    if (value > lastIndex) {
      setValue(0);
    }
  }, [value, people]);
  useEffect(() => {
    // Slider automatico
    let slider = setInterval(() => {
      setValue(value + 1);
    }, 3000);
    return () => clearInterval(slider); //previene que se bugee IMPORTANTE
  }, [value]);
  return (
    <>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>reviews
          </h2>
        </div>
        <div className="section-center">
          {/*esto es para cambiar las classes de css dependiendo de que value sea el activo */}
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            let position = "nextSlide";
            if (personIndex === value) {
              position = "activeSlide";
            }
            if (
              personIndex === value - 1 ||
              (value === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }
            if (personIndex === value + 1) {
              position = "nextSlide";
            }
            return (
              <article className={position} key={id}>
                <img className="person-img" src={image} alt="" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
          <button
            className="prev"
            onClick={() => {
              // setValue(checkNum(value - 1)); ESTO ES PARA LA FUNCTION CHECKNUM
              setValue(value - 1);
            }}
          >
            <FiChevronLeft />
          </button>
          <button
            className="next"
            onClick={() => {
              // setValue(checkNum(value + 1)); ESTO ES PARA LA FUNCTION CHECKNUM
              setValue(value + 1);
            }}
          >
            <FiChevronRight />
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
