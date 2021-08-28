import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];
  const checkNum = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }; //previene que tire error al darle al prev btn cuando esta en 0 y al next btn cuando esta en number == people.length.

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNum(newIndex);
    });
  }; //next btn
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNum(newIndex);
    });
  }; //prev btn
  const randomPerson = () => {
    setIndex((index) => {
      let randomNum = Math.floor(Math.random() * people.length);
      if (randomNum === index) {
        randomNum = index + 1;
      } //para no repetir mismo num(si le doy al btn y sale el mismo se agrega +1)
      return checkNum(randomNum);
    }); //random btn
  };
  // console.log(people.length);
  return (
    <article className="review">
      <h1>{index}</h1>
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me madafaka{" "}
      </button>
    </article>
  );
};

export default Review;
