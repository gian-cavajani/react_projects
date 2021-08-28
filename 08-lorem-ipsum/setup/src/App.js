import React, { useState } from 'react';
import data from './data';
function App() {
  const [valor, setValor] = useState(0)
  const [para, setPara] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let cantidad = parseInt(valor);//convierte la string que se consigue del input a number (la input a pesar de ser del tipo number devuelve una string con un numero dentro, algo asi:("0","1","2"))
    if (valor < 0) {
      cantidad = 0;
    }//sirve para que al poner valores menores al 0 no devuelva todo el array(data) 
    if (valor > 8) {
      cantidad = 8
    }
    setPara(data.slice(0, cantidad));//pasa al object para el numero de strings que se le asignen
    console.log("valor, es una string", valor);
    console.log("cantidad, es un number", cantidad);
  }

  return (
    <main>
      <section className="section-center">
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
        <form className="lorem-form">
          <article>
            <label htmlFor="number">Paragraphs: </label>
            <input type="number" name="number" id="number" value={valor} onChange={(e) => setValor(e.target.value)} /> {/*el onchange este es para poder modificar los valores dentro del input */}
            <button className="btn" type="submit" onClick={handleSubmit}>generate</button>
            {/* <button className="btn" onClick={() => setPara([])}>Borrar</button> */}
          </article>
        </form>
        <article className="lorem-text">
          {para.map((lorem, index) => {
            console.log(index, lorem);
            console.log("ARRAY", para)
            return (
              <p key={index}> {lorem}</p>
            )
          })}
        </article>
      </section>
    </main >
  )
}

export default App;
