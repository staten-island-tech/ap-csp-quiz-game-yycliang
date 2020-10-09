console.log("connected");
import { DOMSelectors } from "./dom";
import { qna } from "./qna";

const init = function () {
  qna.forEach(
    (item) =>
      DOMSelectors.quizContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="question">
          <h4>${item.question}</h4>
          <label for="${item.choices.a}"
            ><input type="radio" id="${item.choices.a}" name="${item.name} value="${item.choices.a}" />
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
        </div>       `
      )
    // function showResults() {
    //   // qna.forEach((item) =>
    //   //     var radioValue = document.querySelector("input[name="${ item.name }"]:checked").value;
    //   //     console.log(radioValue);
    //   // );
    //   var score = 0;
    //   DOMSelectors.resultContainer.innerHTML = `<h1>Your Score is ${score}/${qna.length}</h1>`;
    // },
    // DOMSelectors.submitButton.addEventListener("click", showResults)
  );
};
init();

//result function to do math stuffies
//if statements to get what is right and wrong
//add +1 to score variable if correct
//for each question
