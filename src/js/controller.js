import * as model from "./model.js";
import flashcardView from "./views/flashcardView.js";

import icons from "url:../img/icons.svg";
import "core-js/stable";
import "regenerator-runtime/runtime";

const flashcardContainer = document.querySelector(".flashcard");



//////////////////////

const controlFlashcard = async function () {
  const id = window.location.hash.slice(1);
  if (!id) return;
  flashcardView.renderSpinner();

  try {
    //1) loading flashcard

    await model.loadFlashcard(id);

    //2) rendering flashcard
    flashcardView.render(model.state.flashcard);
  } catch (err) {
    flashcardView.renderError()
  }
};

const init = function () {
  flashcardView.addHandlerRender(controlFlashcard)
}

init()
