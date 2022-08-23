
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [celsius, valorCelsius] = useState()
  const [farenheit, valorFar] = useState()
  const [kelvin, valorKelvin] = useState()
  const [entrada, obtener] = useState()
  const [grados, desde] = useState()
  const elem = document.getElementsByClassName('Grados');
  /**/
  useEffect(() => {
    if(grados == 0){
      valorCelsius(entrada)
        valorFar(celsius * 9/5 +32)
        valorKelvin((celsius * 1) + 273.15)
    }
    else if(grados == 1){
      valorFar(entrada)
      valorCelsius((farenheit -32) * 5/9)
      valorKelvin((farenheit - 32) * 5/9 + 273.15)
    }
    else if(grados == 2){
      valorKelvin(entrada)
      valorCelsius(kelvin - 273.15)
      valorFar((kelvin - 273.15) * 9/5 + 32)
  }
  })
  /**/
  function cambioNumero(event){
    for(let i = 0; i < elem.length; i++){
      if(elem[i] == event.target && elem[i].focus){
        obtener(event.target.value);
        desde(i);
      }
    }
  }
  /**/
  return (
    <div className="App">
      <header id='Conversor'>
        <div id='Name'>Convertidor de grados celsisus</div>
        <section id='Menu'>
          <span className="Diseño"></span>
          <span className="Diseño"></span>
          <span className="Diseño"></span>
          <span className="Diseño"></span>
          <div className="Datos"></div>
          <div className="Datos">
            <div id='Respuesta'>
              <label>Celsius</label>
              <input type="number" value={celsius} onChange={cambioNumero} className="Grados"/>
              <br></br><br></br>
              <label>Farenheit </label>
              <input type="number" value={farenheit} onChange={cambioNumero} className="Grados"/>
              <br></br><br></br>
              <label>Kelvin </label>
              <input type="number" value={kelvin} onChange={cambioNumero} className="Grados"/>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
