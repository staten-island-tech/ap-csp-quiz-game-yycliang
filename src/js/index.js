console.log("connected");
import { DOMSelectors } from "./dom";
import { qna } from "./qna";

const init = function () {
  qna.forEach((item) =>
    DOMSelectors.quizContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="question">
          <h4>${item.question}</h4>
          <label for="${item.choices.a}"
            ><input type="radio" id="${item.choices.a}" name="${item.name}" />
            ${item.choices.a}</label
          ><br />
          <label for="${item.choices.b}"
            ><input type="radio" id="${item.choices.b}" name="${item.name}" />
            ${item.choices.b}</label
          ><br />
          <label for="${item.choices.c}"
            ><input type="radio" id="${item.choices.c}" name="${item.name}" />
            ${item.choices.c}</label
          ><br />
          <label for="${item.choices.d}"
            ><input type="radio" id="${item.choices.a}" name="${item.name}" />
            ${item.choices.d}</label
          ><br /><br />
        </div>       `
    )
  );
  //result function to do math stuffies

  DOMSelectors.submitButton.addEventListener("click", function (e) {
    DOMSelectors.quizContainer.innerHTML = "";
    //display results
  });
};

init();
