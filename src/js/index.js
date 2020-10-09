console.log("connected");
import { DOMSelectors } from "./dom";
import { qna } from "./qna";

const init = function () {
  qna.forEach((item) =>
    DOMSelectors.quizContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="question">
          <h4 id="${item.name}">${item.question}</h4>
          <label for="${item.choices.a}"
            ><input type="radio" id="${item.choices.a}" name="${item.name}" value="${item.choices.a}" />
            ${item.choices.a}</label
          ><br />
          <label for="${item.choices.b}"
            ><input type="radio" id="${item.choices.b}" name="${item.name}" value="${item.choices.b}"/>
            ${item.choices.b}</label
          ><br />
          <label for="${item.choices.c}"
            ><input type="radio" id="${item.choices.c}" name="${item.name}" value="${item.choices.c}"/>
            ${item.choices.c}</label
          ><br />
          <label for="${item.choices.d}"
            ><input type="radio" id="${item.choices.a}" name="${item.name}" value="${item.choices.d}"/>
            ${item.choices.d}</label
          ><br /><br />
        </div>`
    )
  );
  //make the score add 1 everytime something is correct, but dont reset it D:
  const showResults = function () {
    var score = 0;
    qna.forEach((ques) => {
      if (document.querySelector(`input[name="${ques.name}"]:checked`)) {
        var radioValue = document.querySelector(
          `input[name="${ques.name}"]:checked`
        ).value;
        if (radioValue == `${ques.correct}`) {
          score++;
          document.getElementById(`${ques.name}`).style.color = "green";
        } else if (radioValue != "Shawarma") {
          document.getElementById(`${ques.name}`).style.color = "red";
        }
        DOMSelectors.resultContainer.innerHTML = `<h1>Your Score is ${score}/${qna.length}</h1>`;
      }
    });
  };
  DOMSelectors.submitButton.addEventListener("click", showResults);
};

init();

//find which radio button for each set of questions is checked
//find the value of checked radio button
//find if the value is = to the correct value
//+1 if the value is equal, nothing if its not
//add text-color to that value in red if wrong, green if correct
//when it loops through all the questions, return the score
//make it loop through for all the questions
