/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let paloAleatorio;
  //write your code here
  function generadorCartas() {
    let palos = ["♦", "♥", "♠", "♣"];
    let numeros = [
      "A",
      "J",
      "Q",
      "K",
      "10",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ];
    paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
    let numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];

    document.querySelector(".palo").innerHTML = paloAleatorio;
    document.querySelector(".palo2").innerHTML = paloAleatorio;
    document.querySelector(".numero").innerHTML = numeroAleatorio;
  }
  generadorCartas();

  function colorPalos() {
    if (paloAleatorio === "♥" || paloAleatorio === "♦") {
      document.querySelector(".palo").style.color = "red";
      document.querySelector(".palo2").style.color = "red";
    }
  }
  colorPalos();
};

//PSEUDOCODIGO:
//onload DONE
//crear el html para la carta DONE
//crear los estilos de la carta
//crear los estilos de los palos y los numeros
//crear la función DONE
//crear variable de los palos DONE
//crear variable de los numeros DONE
//crear palo aleatorio DONE
//crear numero aleatorio DONE
//cambiar el HTML
