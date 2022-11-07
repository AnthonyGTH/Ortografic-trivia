import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class QuizProvider {
  url: string;
  quizzes = {
    response_code: 0,
    results: [
      {
        category: "Ortografía",
        type: "multiple",
        difficulty: "",
        question: "No fui a la fiesta _____ no tenía ganas",
        correct_answer: "porque",
        incorrect_answers: ["por que", "por qué", "porqué"],
      },
      {
        category: "Ortografía",
        type: "multiple",
        difficulty: "",
        question: "Ella le _____ la comida a los cerdos.",
        correct_answer: "Echó",
        incorrect_answers: ["Hecho", "Echo", "Hechó"],
      },
      {
        category: "Ortografía",
        type: "multiple",
        difficulty: "",
        question: "¿Cuál de estas cuatro frases es correcta?",
        correct_answer: "Hubo problemas para entrar al concierto.",
        incorrect_answers: [
          "Habían muchas personas en la sala",
          "Han habido algunas quejas",
          "Ambeses la vida no es como queremos",
        ],
      },
      {
        category: "Ortografía",
        type: "multiple",
        difficulty: "",
        question: "Estoy seguro _____ me va a salir bien este ejercicio.",
        correct_answer: "de que",
        incorrect_answers: ["que", "de qué", "qué"],
      },
      {
        category: "Ortografía",
        type: "multiple",
        difficulty: "",
        question: "Había engordado hasta el punto _____ no le reconocíamos.",
        correct_answer: "de que",
        incorrect_answers: ["que", "de qué", "qué"],
      },
      {
        category: "Ortografía",
        type: "multiple",
        difficulty: "",
        question:
          "A Obdulia ____ gustan los ejercicios de leísmo, laísmo y loísmo.",
        correct_answer: "le",
        incorrect_answers: ["la", "lo", "el"],
      },
      {
        category: "Ortografía",
        type: "multiple",
        difficulty: "",
        question:
          "—¿Qué fue de los directivos de aquel banco? <br/> —____ detuvieron cuando intentaban cruzar la frontera.",
        correct_answer: "los",
        incorrect_answers: ["les", "Es", "las"],
      },
      {
        category: "Ortografía",
        type: "multiple",
        difficulty: "",
        question:
          "Dila a tu hermana que deje de imitar a la niña de El exorcista.",
        correct_answer: "La oración esta incorrecta.",
        incorrect_answers: ["La oración esta correcta.", "No se :c"],
      },
      {
        category: "Ortografía",
        type: "multiple",
        difficulty: "",
        question:
          "¿Qué tilde está mal en esta frase de abajo? <br/>- No enviéis ultimátums alegremente a Herráiz",
        correct_answer: "Herráiz",
        incorrect_answers: ["enviéis", "ultimátums", "alegremente"],
      },
      {
        category: "Ortografía",
        type: "multiple",
        difficulty: "",
        question: "¿Cuál es la forma correcta de escribir esta palabra?",
        correct_answer: "Oasis",
        incorrect_answers: ["Oasiz", "Oasís", "Oazis"],
      },
    ],
  };

  mezclarArreglo = (arreglo) => {
    for (let i = arreglo.length - 1; i > 0; i--) {
      let indiceAleatorio = Math.floor(Math.random() * (i + 1));
      let temporal = arreglo[i];
      arreglo[i] = arreglo[indiceAleatorio];
      arreglo[indiceAleatorio] = temporal;
    }
  };

  constructor(public http: Http) {
    console.log("Hello QuizProvider Provider");
    this.url = "https://opentdb.com/api.php?amount=";
  }

  shuffle2(array) {
    var i = array.length;
    array = this.mezclarArreglo(array);
    console.log("questions: ", array);
    return array;
  }

  knuthShuffle(arr) {
    var rand, temp, i;

    for (i = arr.length - 1; i > 0; i -= 1) {
      rand = Math.floor((i + 1) * Math.random()); //get random between zero and i (inclusive)
      temp = arr[rand]; //swap i and the zero-indexed number
      arr[rand] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

  getQuiz() {
    this.quizzes.results = this.knuthShuffle(this.quizzes.results);
    return this.quizzes;
  }
}
