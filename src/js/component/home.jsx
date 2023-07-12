import React, { useState } from "react";

//create your first component
/**
 *
 * @useState es el hook de reactividad
 * contenido dinamico dentro de react.js
 *
 * Necesita:
 * 1 llevar registro del numero 1 [ ]
 * 	- Registrar el evento [ ]
 *  - LLevar el registro del numero
 * 2 llevar registro del numero 2 [ ]
 * 3 tener un evento click que sume los numeros [X]
 *
 */

const Home = () => {
  // [variable, funcionDeActualizacion] = useState(valorInicial)
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operacion, setOperacion] = useState("suma");

  const handleOperacion = (tipoOperacion) => {
    setOperacion(tipoOperacion); // Cambiando el valor a la variable operacion
  };

  const handleNum1 = (event) => {
    const numericValue = parseInt(event.target.value); // inputs reciben strings
    setNum1(numericValue);
  };

  const handleNum2 = (event) => {
    const numericaValue = parseInt(event.target.value);
    setNum2(numericaValue);
  };

  // addEventListener("change", (e) => console.log(e.target.value))
  // addEventListener("click", suma)
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="card w-75">
        <div className="card-header">
          <h1>Mi super cool calculadora</h1>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <label>Numero 1: {num1} </label>
              <input
                type="number"
                className="form-control"
                placeholder="Num 1"
                onChange={handleNum1}
              />
            </div>
            <div className="col-6">
              <label>Numero 2: {num2} </label>

              <input
                type="number"
                className="form-control"
                placeholder="Num 2"
                onChange={handleNum2}
              />
            </div>
          </div>
          <div className="d-flex flex-wrap gap-2 justify-content-between mt-2">
            <button
              className="btn btn-primary"
              onClick={() => handleOperacion("suma")}
            >
              Suma
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleOperacion("resta")}
            >
              Resta
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleOperacion("multiplicacion")}
            >
              Multiplicacion
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleOperacion("division")}
            >
              Division
            </button>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div>
            <p className="m-0 text-danger">{operacion.toUpperCase()}</p>
          </div>
          <div>
            <p className="m-0">
              Resultado:
              {
                operacion === "suma" // if
                  ? num1 + num2
                  : operacion === "resta" // else if
                  ? num1 - num2
                  : operacion === "multiplicacion" // else if
                  ? num1 * num2
                  : operacion === "division" // else if
                  ? num1 / num2
                  : "Operacion invalida" // else
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
