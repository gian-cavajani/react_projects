import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={() => setOpen(!open)}>
            {!open ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </button>
        </header>
        {open && <p>{info}</p>}
      </section>
    </>
  );
};

export default Question;
